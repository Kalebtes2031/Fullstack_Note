from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics,status
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny

# Create your views here.
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class PasswordResetRequestView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get('email')
        if not email:
            return Response({"error": "Email is required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.get(email=email)
            token = get_random_string(length=32)
            user_profile, created = UserProfile.objects.get_or_create(user=user)
            user_profile.password_reset_token = token
            user_profile.save()

            reset_url = f"http://localhost:5173/reset-password/{token}"
            send_mail(
                'Password Reset Request',
                f'Please click the link below to reset your password:\n\n{reset_url}',
                'kalebtesfaye2031@gmail.com',
                [email],
                fail_silently=False,
            )
            return Response({"message": "Password reset email sent"}, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({"error": "User with this email does not exist"}, status=status.HTTP_400_BAD_REQUEST)
        
        
class PasswordResetConfirmView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        token = request.data.get('token')
        password = request.data.get('password')

        if not token or not password:
            return Response({"error": "Token and password are required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user_profile = UserProfile.objects.get(password_reset_token=token)
            user = user_profile.user
            user.set_password(password)
            user_profile.password_reset_token = None  # Clear the reset token
            user_profile.save()
            user.save()  # Save the user object after changing the password
            return Response({"message": "Password has been reset successfully"}, status=status.HTTP_200_OK)
        except UserProfile.DoesNotExist:
            return Response({"error": "Invalid token"}, status=status.HTTP_400_BAD_REQUEST)
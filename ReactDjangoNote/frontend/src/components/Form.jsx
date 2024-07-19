// import React, { useState } from "react";
// import api from "../api";
// import { useNavigate } from "react-router-dom";
// import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
// import bcimage from "../assets/bcimage.jpg";

// function Form({ route, method }) {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [loading, setLoading] = useState(false)
//     const navigate = useNavigate();

//     const names = method === "login" ? "Login" : "Register"

//     const handleSubmit =async (e) => {
//         setLoading(true);
//         e.preventDefault();

//         try { 
//             const res = await api.post(route, { username, password });
//             if (method === "login") {
//                 localStorage.setItem(ACCESS_TOKEN, res.data.access);
//                 localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
//                 navigate("/");
//             } else {
//                 navigate("/login");
//             }
//         }
//         catch (error) {
//             alert (error)
//         } finally{
//             setLoading(false)
//         }
//     };
    
//     return (
//         // <form onSubmit={handleSubmit} className="">
//         //     <h1>{names}</h1>
//         //     <input 
//         //         className=""
//         //         type="text"
//         //         value={username}
//         //         onChange={(e) => setUsername(e.target.value)}
//         //         placeholder="Username"
//         //     />
//         //     <input 
//         //         className=""
//         //         type="password"
//         //         value={password}
//         //         onChange={(e) => setPassword(e.target.value)}
//         //         placeholder="password"
//         //     />
//         //     <button className="" type="submit">
//         //         {names}
//         //     </button>
//         // </form>
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
//     style={{
//         backgroundImage: `url(${bcimage})`,
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//     }}
//         >
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <h2 className="text-center text-3xl font-extrabold text-gray-900">{names}</h2>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//                  Username
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="username"
//                   name="username"
//                   type="text"
//                   autoComplete="username"
//                   required
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   required
//                   value={password}
//                   onChange={(e)=> setPassword(e.target.value)}
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-emerald-400 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               >
//                 {names}
//               </button>
//             </div>
//             <div>
//               <p className="block text-sm font-medium text-blue-600">
//                 <a href=''>Forgot your password?</a>
//               </p>
//             </div>
//             <div>
//               <p className="block text-sm text-center font-medium text-gray-700 mb-2">
//                 Don't have an account?
//               </p>
//               <a 
//                 className="w-full flex justify-center py-2 px-4 border-2 border-slate-400 rounded-md shadow-sm text-md font-medium text-black bg-slate-100 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                 href='/register'
//               >
//                 Sign up
//               </a>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//     );
    
// }
// export default Form
import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import bcimage from "../assets/bcimage.jpg";

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const names = method === "login" ? "Login" : "Register"

    const handleSubmit =async (e) => {
        setLoading(true);
        e.preventDefault();

        try { 
            const data = { username, password };
            if (method === "register") {
                // Add email field if needed
                data.email = email; // Ensure you have `email` state and field in the form
            }
            const res = await api.post(route, data);            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                localStorage.setItem("username", username);
                navigate("/");
            } else {
                navigate("/login");
            }
        }
        catch (error) {
            alert (error)
        } finally{
            setLoading(false)
        }
    };
    
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
        style={{
                    backgroundImage: `url(${bcimage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="text-center text-3xl font-extrabold font-mono text-gray-900 animate-jump-in">{names}</h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>

                {names === "Register" && (
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                        )}

                <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Username
                </label>
                <div className="mt-1">
                    <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                </div>
                <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                </label>
                <div className="mt-1">
                    <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                </div>

                <div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-emerald-400 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    {names}
                </button>
                </div>
                {names === "Login" && (
                    <>
                        <div>
                            <p className="block text-sm font-medium text-blue-600">
                                <a href='/password-reset'>Forgot your password?</a>
                            </p>
                        </div>
                        <div>
                            <p className="block text-sm text-center font-medium text-gray-700 mb-2">
                                Don't have an account?
                            </p>
                            <a 
                                className="w-full flex justify-center py-2 px-4 border-2 border-slate-400 rounded-md shadow-sm text-md font-medium text-black bg-slate-100 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                href='/register'
                            >
                                Sign up
                            </a>
                        </div>
                    </>
                )}
                {names === "Register" && (
                    <div className='col-span-2'>
                        <p>
                            <span className="text-sm font-medium text-gray-700">Already have an account? </span>
                            <a className='text-md font-medium text-blue-600 hover:text-gray-700' href='/login'>Log in</a>
                        </p>
                    </div>
                )}
            </form>
            </div>
        </div>
        </div>
    );
    
}
export default Form

import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CiLogout } from "react-icons/ci";

const Navbar = () => {
    const storedUsername = localStorage.getItem("username");
    // Extract first letter of the username
    const firstLetter = storedUsername ? storedUsername.charAt(0).toUpperCase() : '';

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Function to close dropdown when clicking outside
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    // Effect to add click event listener on mount and remove on unmount
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div>
            <nav className="fixed top-0 w-full bg-gray-800 flex justify-between items-center p-4 shadow-lg z-50">
                <NavLink to="/" className="text-white text-3xl font-semibold m-0">Notes</NavLink>
                <div className="flex items-center space-x-4">
                    <NavLink
                        to="/addnote"
                        className="bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    >
                        Write Note
                    </NavLink>
                    {/* Dropdown Container */}
                    <div className="relative">
                        <div
                            className="h-10 w-10 mr-1 rounded-full bg-gray-100 text-lg text-gray-700 hover:bg-gray-300 flex items-center justify-center font-bold cursor-pointer"
                            onClick={toggleDropdown} // Toggle dropdown on click
                            ref={dropdownRef} // Ref for detecting click outside
                        >
                            <span>{firstLetter}</span>
                        </div>
                        {/* Dropdown Menu */}
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200">
                                <NavLink
                                    to="/logout"
                                    className="block px-4 py-2 text-lg font-medium text-gray-800 hover:bg-gray-100 rounded-lg" // Explicitly apply rounded-lg
                                >
                                    <CiLogout className="inline-block mr-6" />
                                    Log Out
                                </NavLink>
                            </div>
                        )}

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

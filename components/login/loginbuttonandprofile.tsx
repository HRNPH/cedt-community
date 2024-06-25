'use client';

import { Button, Dropdown } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { Profile, Logout, Line } from "@/components/icons";
import Avvvatars from 'avvvatars-react'
import { useState, useRef, useEffect } from 'react'
import { useTheme } from 'next-themes';

export function LoginButton() {
    const router = useRouter();
    
    const handleLoginClick = () => {
        router.push('/login');
    };

    return (
        <Button onClick={handleLoginClick} size="sm" className="mt-1 bg-primary text-white font-medium rounded-3xl">
            Login
        </Button>
    );
}

export function ProfileAndLogout() {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const { theme } = useTheme(); 
    const handleLogoutClick = () => {
        signOut();
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
      };
    
    return (
        <div className="relative">
            <Button className={`cursor-pointer ${theme === 'light' ? 'bg-white' : 'bg-dark'}`} onClick={toggleDropdown}>
            <Profile />
            </Button>
            

          {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg z-10 border-3">
                <div className="p-4">
                    <div className="flex items-center">
                    <Avvvatars value="na@gmail.com" size={36}/>
                        <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">name</p>
                        <p className="text-sm text-gray-500">student number</p>
                        </div>
                    </div>
                    <div role="separator" aria-orientation="horizontal" className="my-1.5 h-[1px] bg-token-border-light juice:mx-5 juice:my-1"></div>
                    <Line />
                    <div onClick={handleLogoutClick} className="flex justify-center items-center mt-2 cursor-pointer">
                    <Logout /> 
                    <span className="ml-2 text-sm text-gray-600">Log out</span>
                    </div>
                </div>
              </div>
            )}
        </div>
    )
}
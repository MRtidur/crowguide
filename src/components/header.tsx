"use client"

import { Button } from "./ui/button"



export function Header(){
    return (
    <header>
        <div className="lg:h-23">
            <div className="absolute inset-0 bg-gradient-to-br from-[#DDDDDD] via-white to-[#977AC2]">
                {/* Content */}
                <div className="relative flex items-center px-6 py-4">
                {/* Left Icon */}
                <img src="/icon.webp" alt="Logo" className="h-12 w-12" />
                {/* Optional text beside it */}
                <span className="ml-3 text-xl font-bold text-gray-800">CrowGuide</span>
                </div>
            </div>
        </div>
    </header>
  )
}
"use client"

import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import { getAssetPath } from "../lib/utils";

export function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 lg:w-150">
      <div className="flex flex-cols-2 items-center backdrop-blur-sm bg-[#6B6E74]/80 rounded-full shadow-lg border border-gray-500">
        <div className="flex items-center text-white px-8 py-3 gap-8">
          <a href="#home" className="font-semibold hover:text-gray-200">
            Home
          </a>
          <a href="#Features" className="font-semibold hover:text-gray-200">
            Features
          </a>
          <a href="#Testimonials" className="font-semibold hover:text-gray-200">
            Testimonials
          </a>
          <a href="#Pricing" className="font-semibold hover:text-gray-200">
            Pricing
          </a>
        </div>

        <div className="flex items-center justify-end ml-10 px-4">
          <Link to="/login">
            <Button className="bg-white text-gray-800 rounded-full font-semibold px-4 py-2 hover:bg-gray-100 shadow-md">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

// src/pages/Signup.tsx
"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Link } from "react-router-dom"
import { Github, Mail } from "lucide-react"
import { getAssetPath } from "../lib/utils";

export function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Signup Data:", formData)
    // 🔥 here you’ll send to backend or auth service
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#DDDDDD] via-white to-[#977AC2]">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md">
        
        {/* OAuth Buttons */}
        <div className="space-y-3">
          <Button
            variant="outline"
            className="w-full bg-gray-800 text-white hover:bg-gray-700 flex items-center gap-2"
          >
            <Github size={18} />
            Sign Up with Github
          </Button>
          <Button
            variant="outline"
            className="w-full bg-gray-800 text-white hover:bg-gray-700 flex items-center gap-2"
          >
            <Mail size={18} className="text-red-500" />
            Sign Up with Google
          </Button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-700"></div>
          <span className="mx-4 text-gray-400 text-sm">Or</span>
          <div className="flex-grow border-t border-gray-700"></div>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-1">Full Name</label>
            <Input
              type="text"
              name="fullName"
              placeholder="Enter Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-1">Email</label>
            <Input
              type="email"
              name="email"
              placeholder="mail@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-1">Password</label>
            <Input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
            />
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg">
            Sign Up
          </Button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}

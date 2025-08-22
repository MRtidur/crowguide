import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

export function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#DDDDDD] via-white to-[#977AC2]">
      <div className="w-full max-w-md bg-neutral-900 p-8 rounded-2xl shadow-lg">
        {/* Social Login */}
        <div className="flex flex-col gap-4">
          <button className="flex items-center justify-center gap-2 bg-neutral-800 text-white py-2 rounded-md hover:bg-neutral-700">
            <FaGithub /> Sign In with Github
          </button>
          <button className="flex items-center justify-center gap-2 bg-neutral-800 text-white py-2 rounded-md hover:bg-neutral-700">
            <FaGoogle className="text-red-500" /> Sign In with Google
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-700" />
          <span className="px-3 text-gray-400 text-sm">Or</span>
          <hr className="flex-grow border-gray-700" />
        </div>

        {/* Email + Password Form */}
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="email"
              placeholder="mail@gmail.com"
              className="w-full px-3 py-2 bg-neutral-800 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <div className="flex justify-between items-center">
              <label className="block text-sm text-gray-400 mb-1">
                Password
              </label>
              <a href="#" className="text-xs text-blue-400 hover:underline">
                Forgot Password?
              </a>
            </div>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-3 py-2 bg-neutral-800 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-md font-medium"
          >
            Sign in
          </button>
        </form>

        {/* Sign up Link */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

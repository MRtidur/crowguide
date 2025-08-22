import React from "react";
import { getAssetPath } from "../lib/utils";
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Logo + Menu */}
        <div>
          <div className="flex items-center gap-2">
            {/* Logo placeholder */}
            <div className="w-6 h-6 bg-white rounded-sm" />
            <span className="text-xl font-bold text-white">CrowGuide</span>
          </div>
          <nav className="flex gap-6 mt-4">
            <a href="#home" className="hover:text-white">
              Home
            </a>
            <a href="#Features" className="hover:text-white">
              Features
            </a>
            <a href="#Testimonials" className="hover:text-white">
              Testimonials
            </a>
            <a href="#Pricing" className="hover:text-white">
              Pricing
            </a>
          </nav>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-white text-xl mt-6 md:mt-0">
          <a href="#"><FaXTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 my-6" />

      {/* Bottom Row */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="mb-4 md:mb-0">Published By Zulfikar</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">
            Privacy
          </a>
          <a href="#" className="hover:text-white">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}

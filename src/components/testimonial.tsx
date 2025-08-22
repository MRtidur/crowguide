
import React, { StrictMode } from "react"
import { getAssetPath } from "../lib/utils";
export function Testimonials(){

    return(
<section className="relative w-full bg-gradient-to-tr from-[#AEAFFB] via-white to-[#B2BFD5]">
  {/* Title */}
<div className="w-full h-95 mb-40 border-3">
  <div className="flex flex-col justify-center items-center text-center max-w-5xl h-95 mx-auto border-l-3 border-r-3">
    
    <h1 className="text-5xl font-bold text-gray-900 ">
      What Our <span className="text-[#5473FF]">Learners</span> Say
    </h1>

    <p className="mt-4 text-lg text-gray-600 lg:max-w-200 ">
      Join thousands of successful professionals who have accelerated their careers 
      with CrowGuide’s AI-powered learning
    </p>

  </div>
</div>


  {/* Testimonials Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
    {/* Card */}
    <div className="bg-white shadow-lg rounded-xl p-6">
      <span className="text-4xl">❝</span>
      <p className="mt-4 text-gray-700">
        Join thousands of successful professionals who have accelerated their careers 
        with CrowGuide’s AI-powered learning
      </p>
      <div className="flex items-center mt-6">
        <img src={getAssetPath("/avatar1.jpg")} alt="avatar" className="w-10 h-10 rounded-full mr-4"/>
        <div>
          <h4 className="font-semibold text-gray-900">Zulfikar Hadi</h4>
          <p className="text-sm text-gray-600">AI Engineer</p>
        </div>
      </div>
    </div>

    {/* Card */}
    <div className="bg-white shadow-lg rounded-xl p-6">
      <span className="text-4xl">❝</span>
      <p className="mt-4 text-gray-700">
        Join thousands of successful professionals who have accelerated their careers 
        with CrowGuide’s AI-powered learning
      </p>
      <div className="flex items-center mt-6">
        <img src={getAssetPath("/avatar1.jpg")} alt="avatar" className="w-10 h-10 rounded-full mr-4"/>
        <div>
          <h4 className="font-semibold text-gray-900">Luna</h4>
          <p className="text-sm text-gray-600">ML Engineer</p>
        </div>
      </div>
    </div>

    {/* Card */}
    <div className="bg-white shadow-lg rounded-xl p-6">
      <span className="text-4xl">❝</span>
      <p className="mt-4 text-gray-700">
        Join thousands of successful professionals who have accelerated their careers 
        with CrowGuide’s AI-powered learning
      </p>
      <div className="flex items-center mt-6">
        <img src={getAssetPath("/avatar1.jpg")}alt="avatar" className="w-10 h-10 rounded-full mr-4"/>
        <div>
          <h4 className="font-semibold text-gray-900">Osama</h4>
          <p className="text-sm text-gray-600">Pilot</p>
        </div>
      </div>
    </div>

    {/* Card */}
    <div className="bg-white shadow-lg rounded-xl p-6">
      <span className="text-4xl">❝</span>
      <p className="mt-4 text-gray-700">
        Join thousands of successful professionals who have accelerated their careers 
        with CrowGuide’s AI-powered learning
      </p>
      <div className="flex items-center mt-6">
        <img src={getAssetPath("/avatar1.jpg")} alt="avatar" className="w-10 h-10 rounded-full mr-4"/>
        <div>
          <h4 className="font-semibold text-gray-900">Tasya</h4>
          <p className="text-sm text-gray-600">Arms Dealer</p>
        </div>
      </div>
    </div>
  </div>

  {/* Stats */}
  <div className="grid grid-cols-1 md:grid-cols-2 text-center gap-8 max-w-3xl mx-auto mb-30">
    <div>
      <h3 className="text-3xl font-bold text-gray-900">50K+</h3>
      <p className="text-gray-600">Active Learners</p>
    </div>
    <div>
      <h3 className="text-3xl font-bold text-gray-900">1M+</h3>
      <p className="text-gray-600">Roadmaps Created</p>
    </div>
  </div>
</section>

    )
}



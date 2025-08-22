"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { ArrowRight, Play, BookOpen, Target, Zap } from "lucide-react"
import { Link } from "react-router-dom"

export function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ["Smarter", "Faster", "Better", "Easier"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-10 lg:py-3 overflow-hidden lg:h-[100vh]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#DDDDDD] via-white to-[#977AC2]"></div>
      {/* <div className="absolute top-20 left-10 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div> */}
      {/* <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div> */}

      <div className="container max-w-450 mx-auto px-3 relative z-10">
        {/* <div className="container mx-auto px-3 sm:px-6 lg:px-12 relative z-10"></div> */}
        <div className="max-w-8xl mx-auto p-3 lg:p-20 border-2 h-[100vh] lg:h-[65vh] flex items-center justify-center">

            
          <div className="grid lg:grid-cols-2  place-items-center gap-10">
            {/* Left Content */}
            <div className="space-y-9">


              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Learn <span className="text-[#5473FF] inline-block min-w-[200px] text-left">{words[currentWord]}</span>
                <br />
                with CrowGuide
              </h1>

              <p className="text-l text-gray-600 leading-relaxed max-w-lg">
                Transform your learning journey with AI-generated roadmaps, personalized study paths, and gamified
                experiences that make education engaging and effective.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login">
                        <Button size="lg" className="bg-[#5473FF]/80 hover:bg-[#1D37AE]/80 text-white px-8 py-4 text-lg group">
                        Start Learning Free
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                </Link>
              </div>


            </div>

            {/* Ilustrations for later */}
            <div className="relative items-center flex items-center justify-center">
                <img src="/hero-section-ils.webp" alt="" width={500} height={500}/>
            </div>



          </div>

          </div>
          <div className="grid lg:grid-cols-3 items-center border-1 border-t-0">
            <div className="space-y-5 lg:h-[20vh] border-1 p-10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50K+</div>
                  <div className="text-sm text-gray-600">Active Learners</div>
                </div>
            </div>
            <div className="space-y-5 lg:h-[20vh] border-1 p-10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">1M+</div>
                  <div className="text-sm text-gray-600">Roadmaps Created</div>
                </div>
            </div>
            <div className="space-y-5 lg:h-[20vh] border-1 p-10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">AI Companion</div>
                  <div className="text-sm text-gray-600">Assisting Learners to growth</div>
                </div></div>
        </div>
      </div>
    </section>
  )
}

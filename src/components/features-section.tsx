"use client"
import { useState } from "react"
import { Button } from "./ui/button"

const tabs = [
  { id: "easyfun", label: "Easy & Fun" },
  { id: "directed", label: "Directed Learning" },
  { id: "hfeatures", label: "Helpful Features" },
]

const features = [
  {
    id: "feature1",
    label: "Feature 1",
    img: "/feature1.webp",
    desc: "Ini deskripsi untuk Feature 1. Lorem ipsum dolor sit amet consectetur adipiscing elit."
  },
  {
    id: "feature2",
    label: "Feature 2",
    img: "/feature1.webp",
    desc: "Deskripsi singkat tentang Feature 2. Praesent vestibulum porttitor porttitor."
  },
  {
    id: "feature3",
    label: "Feature 3",
    img: "/feature1.webp",
    desc: "Deskripsi tentang Feature 3. Vivamus faucibus rhoncus purus."
  },
  {
    id: "feature4",
    label: "Feature 4",
    img: "/feature1.webp",
    desc: "Feature 4 memberikan pengalaman lebih baik dengan UI yang rapi."
  },
  {
    id: "feature5",
    label: "Feature 5",
    img: "/feature1.webp",
    desc: "Feature 5 adalah fitur tambahan untuk mempermudah pekerjaan Anda."
  },
]


export function Features() {

  const [activeTab, setActiveTab] = useState("easyfun")
  const [active, setActive] = useState("feature1")

  const activeFeature = features.find((f) => f.id === active)
  const handleClick = (id: string) => {
    setActiveTab(id)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
     <div className="flex flex-col inset-0 w-screen">
    <section className="relative w-full bg-[#0D1014] place-items-center items-center">
            {/* Content */}
      <div className="mx-10 relative z-10 flex flex-col items-center gap-12 pt-20 ">
        {/* Tabs */}
        <nav className="flex items-center text-sm md:text-2xl lg:text-3xl sm:gap-0 md:gap-4 bg-[#C6CDD8]/50 px-4 py-2 rounded-full shadow-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleClick(tab.id)}
              className={`px-4 py-4 rounded-full font-semibold transition-all duration-300
                ${
                  activeTab === tab.id
                    ? "bg-gray-300/80 text-1xl md:text-3xl lg:text-4xl font-bold text-purple-600 shadow-md"
                    : "text-purple-300 hover:text-purple-100"
                }`}
            >
              {tab.label}
            </button>
          ))}

        </nav>
        </div>
        <div className="space-y-5 relative z-10 flex flex-col lg:w-210  mt-30  mx-10">
            <h1 className="text-5xl  lg:text-5xl font-bold text-gray-100 leading-tight sm:max-w-100 md:max-w-120 lg:max-w-150">
                Learn <span className="text-[#A9B5E9]">Anything</span>, Anywhere, Anytime
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed leading-tight max-w-lg">
                Learn anything, anywhere, on any device. Our AI-powered gamified learning platform helps you develop skills faster with personalized paths and seamless progress tracking.
              </p>
        </div>
        <div className="relative z-10 flex flex-col lg:w-210  mt-10 mb-30 mx-10">
          <img src="/device.webp" alt="device" />
        </div>  
                    
    </section>

    {/* Second Section */}
      <section id="directed" className="relative w-full min-h-screen flex flex-col items-center">
        <div className="absolute inset-0 bg-[#0D1014]"></div>

        <div className="space-y-5 mx-10 relative z-10 flex flex-col  pt-12 lg:ml-40">
          <h1 className="text-5xl font-bold text-gray-100 leading-tight m:max-w-100 md:max-w-120 lg:max-w-170 ">
            <span className="text-[#A9B5E9]">Interactive</span> Tools to Direct Your Learning Path
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
            Discover AI-powered directed learning tools designed to guide your learning journey. Enjoy personalized paths, gamified challenges, and progress tracking — learn smarter, anywhere, on any device.
          </p>
        </div>

        <div className="relative z-10 flex flex-col lg:w-210 mt-10 mb-30 mx-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full px-6">
        
        {/* Card 1 */}
        <div className="bg-[#1A1D21] rounded-xl p-6 flex flex-col gap-4">
          <h2 className="text-white font-bold text-lg">TOOL1</h2>
          <p className="text-gray-300 text-sm">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
          </p>
          <div className="bg-white rounded-lg h-48 flex items-center justify-center">
            {/* Image goes here */}
            <img src="/device.webp" alt="Dashboard" className="rounded-lg object-cover h-full w-full" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#1A1D21] rounded-xl p-6 flex flex-col gap-4">
          <h2 className="text-white font-bold text-lg">TOOL2</h2>
          <p className="text-gray-300 text-sm">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
          </p>
          <div className="bg-white rounded-lg h-48 flex items-center justify-center">
            <img src="/placeholder.webp" alt="Tool2" className="rounded-lg object-cover h-full w-full" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#1A1D21] rounded-xl p-6 flex flex-col gap-4">
          <h2 className="text-white font-bold text-lg">TOOL3</h2>
          <p className="text-gray-300 text-sm">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
          </p>
          <div className="bg-white rounded-lg h-48 flex items-center justify-center">
            <img src="/placeholder.webp" alt="Tool3" className="rounded-lg object-cover h-full w-full" />
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-[#1A1D21] rounded-xl p-6 flex flex-col gap-4">
          <h2 className="text-white font-bold text-lg">TOOL4</h2>
          <p className="text-gray-300 text-sm">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
          </p>
          <div className="bg-white rounded-lg h-48 flex items-center justify-center">
            <img src="/placeholder.webp" alt="Tool4" className="rounded-lg object-cover h-full w-full" />
          </div>
        </div>

      </div>
        </div>
      </section>

          <section id="hfeatures" className="relative w-full place-items-center items-center bg-gradient-to-br from-[#8799EA] via-white to-[#B2BFD5]">
            {/* Content */}

        <div className="space-y-5 relative z-10 flex flex-col lg:w-screen items-center mt-30  mx-10">
            <h1 className="text-5xl  lg:text-5xl font-bold text-black leading-tight sm:max-w-100 md:max-w-120 lg:max-w-500">
                Features Designed to Guide Your Journey
              </h1>
        </div>
        <div className="relative z-10 flex flex-col lg:w-210  mt-10 mb-30 mx-10">
          {/* Buttons */}
      <div className="flex gap-4 mb-8 items-center justify-center">
        {features.map((f) => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            className={`px-4 py-2 rounded-full transition ${
              active === f.id
                ? "bg-gray-600 text-white"
                : "bg-gray-300 text-gray-700 hover:bg-gray-400"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Image */}
      <div className="w-full max-w-5xl rounded-lg shadow-lg overflow-hidden">
        <img
          src={activeFeature?.img}
          alt={activeFeature?.label}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Description */}
      <p className="mt-6 text-center text-lg text-gray-700 max-w-3xl">
        {activeFeature?.desc}
      </p>
        </div>  
                    
    </section>


        </div>
    
    
  )
}

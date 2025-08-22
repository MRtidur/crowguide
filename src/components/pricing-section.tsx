import React from "react";

import { getAssetPath } from "../lib/utils";


const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/Forever",
    features: [
      "Lorem ipsum dolor.",
      "Lorem dolor. quisquam",
      "Lorem ipsum dolor.",
      "Lorem ipsum.",
    ],
    buttonText: "Get Started Free",
    buttonStyle: "bg-gray-600 hover:bg-gray-700 text-white",
    popular: false,
  },
  {
    name: "Pro",
    price: "$10",
    period: "/Month",
    features: [
      "Lorem ipsum dolor.",
      "Lorem dolor. quisquam",
      "Lorem ipsum dolor.",
      "Lorem ipsum.",
    ],
    buttonText: "Start Pro Trial",
    buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
    popular: true,
  },
  {
    name: "Elite",
    price: "$15",
    period: "/Month",
    features: [
      "Lorem ipsum dolor.",
      "Lorem dolor. quisquam",
      "Lorem ipsum dolor.",
      "Lorem ipsum.",
    ],
    buttonText: "Choose Plan",
    buttonStyle: "bg-gray-600 hover:bg-gray-700 text-white",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section className="bg-[#0D1014] w-full text-white py-16 pb-50">
      <div className="text-center mb-30 mt-10">
        <h1 className="text-5xl font-bold">Choose Your <span className="text-[#A9B5E9]">Subscription</span> Plan</h1>
        <p className="text-gray-300 mt-2">
          Start free and upgrade as you grow. All plans include our AI-powered
          features.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative bg-gray-100 text-gray-900 rounded-2xl shadow-md p-6 flex flex-col justify-between ${
              plan.popular ? "border-2 border-blue-500" : ""
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2F4BCB] text-white text-sm px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}

            <div>
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-gray-500 mt-1">
                Neque porro quisquam est qui dolorem ipsum quia
              </p>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="ml-2 text-gray-600">{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-2">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>

            <button
              className={`mt-6 w-full py-3 rounded-xl font-medium ${plan.buttonStyle}`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

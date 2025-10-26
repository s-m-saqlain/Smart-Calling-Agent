import { useState } from "react";
import Features from "../assets/images/bg-features.png";

function CreationFeatures() {
  const [activeFeature, setActiveFeature] = useState(
    "Auto-Sync Knowledge Base"
  );

  const features = [
    { title: "Auto-Sync Knowledge Base" },
    { title: "Powerful Call Transfer Feature" },
    { title: "Easy Appointment Booking" },
    { title: "Navigate VR" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center sm:p-6">
      <div className="sm:mx-4 mx-3 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-[#101828] rounded-3xl p-8 md:p-12 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-16 leading-tight">
              Powerful AI Agent Creation Features
            </h1>

            <div className="space-y-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  onClick={() => setActiveFeature(feature.title)}
                  className={`cursor-pointer px-4 py-3 font-medium rounded-lg transition-all duration-300 sm:w-64 ${
                    activeFeature === feature.title
                      ? "bg-white text-black"
                      : "bg-transparent text-gray-200 hover:bg-gray-800"
                  }`}
                >
                  {feature.title}
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src={Features}
              className="rounded-3xl w-full h-full object-cover"
              alt="Features"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreationFeatures;

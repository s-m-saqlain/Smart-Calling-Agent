import { useState } from "react";

const services = [
  {
    id: 1,
    name: "Receptionist",
    highlighted: false,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-briefcase w-7 h-7 sm:w-8 sm:h-8 mb-2 text-[#7B4EFC]"
      >
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        <rect width="20" height="14" x="2" y="6" rx="2"></rect>
      </svg>
    ),
  },
  {
    id: 2,
    name: "Appointment Setter",
    highlighted: true,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-plus w-7 h-7 sm:w-8 sm:h-8 mb-2 text-white"
      >
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>
    ),
  },
  {
    id: 3,
    name: "Customer Service",
    highlighted: false,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-smile w-7 h-7 sm:w-8 sm:h-8 mb-2 text-[#7B4EFC]"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
        <line x1="9" x2="9.01" y1="9" y2="9"></line>
        <line x1="15" x2="15.01" y1="9" y2="9"></line>
      </svg>
    ),
  },
  {
    id: 4,
    name: "Lead Qualification",
    highlighted: false,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-chart-no-axes-column-increasing w-7 h-7 sm:w-8 sm:h-8 mb-2 text-[#7B4EFC]"
      >
        <path d="M5 21v-6"></path>
        <path d="M12 21V9"></path>
        <path d="M19 21V3"></path>
      </svg>
    ),
  },
  {
    id: 5,
    name: "Survey",
    highlighted: false,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-file-text w-7 h-7 sm:w-8 sm:h-8 mb-2 text-[#7B4EFC]"
      >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
        <path d="M10 9H8"></path>
        <path d="M16 13H8"></path>
        <path d="M16 17H8"></path>
      </svg>
    ),
  },
  {
    id: 6,
    name: "Debt Collection",
    highlighted: false,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-piggy-bank w-7 h-7 sm:w-8 sm:h-8 mb-2 text-[#7B4EFC]"
      >
        <path d="M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z"></path>
        <path d="M16 10h.01"></path>
        <path d="M2 8v1a2 2 0 0 0 2 2h1"></path>
      </svg>
    ),
  },
];

function LiveDemo() {
  const [formData] = useState({
    phone: "",
    name: "",
    email: "",
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:px-0 sm:px-4">
          <div className="space-y-8">
            <div className="space-y-3">
              <h1 className="sm:text-5xl text-3xl font-bold tracking-tight">
                Try Our Live Demo
              </h1>
              <p className="sm:text-lg">
                Discover how our AI caller transforms customer conversations.
              </p>
            </div>

            <form className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
                />
              </div>

              <button
                type="submit"
                class="w-full sm:w-auto bg-[#6600FF] text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-[#7A4EF8] transition-transform duration-150 hover:scale-[1.03]"
              >
                GET A CALL
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="sm:text-4xl text-2xl sm:font-bold font-extrabold tracking-tight sm:text-start text-center">
                RECEIVE A LIVE CALL FROM
                <br />
                OUR AGENT
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`p-6 rounded-2xl flex flex-col items-center justify-center text-center transition duration-300 ${
                    service.highlighted
                      ? "bg-[#6600FF] text-white shadow-lg"
                      : "bg-[#CCCCCC] text-gray-900 hover:shadow-lg"
                  }`}
                >
                  {service.icon}
                  <p className="font-semibold text-sm">{service.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveDemo;

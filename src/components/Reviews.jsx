function Reviews() {
  const reviews = [
    {
      name: "James Land",
      text: `I'm very grateful to have learned so much about design and its
      impact on businesses. I'm looking forward to building the
      Hunebee Project brand with your expertise by my side.`,
      rating: 5,
    },
    {
      name: "Jane Doe",
      text: `The AI integration provided by the team is seamless and has
      revolutionized our workflow. Their support and expertise are
      truly invaluable for any modern business.`,
      rating: 5,
    },
    {
      name: "Alex Smith",
      text: `From concept to execution, the process was smooth and the
      results exceeded expectations. Highly recommend this platform
      for anyone looking for cutting-edge AI solutions.`,
      rating: 5,
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle at 100% 0%, #E0F7FA, transparent 40%), radial-gradient(circle at 90% 100%, #E8E5FF, transparent 50%)",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 sm:mb-16 gap-6 sm:gap-0 text-center sm:text-left">
          <div className="max-w-3xl mx-auto sm:mx-0">
            <span className="inline-block px-3 py-1 text-xs sm:text-sm font-bold text-gray-700 bg-white rounded-lg shadow-md mb-3">
              User Experiences
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Reviews that speak volumes.
            </h2>
          </div>

          <div class="flex justify-center sm:justify-end space-x-4 hidden sm:flex">
            <button class="p-3 border border-gray-300 rounded-full text-gray-600 hover:text-gray-900 hover:border-gray-500 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-left w-5 h-5"
                aria-hidden="true"
              >
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
            </button>
            <button class="p-3 border border-gray-300 rounded-full text-gray-600 hover:text-gray-900 hover:border-gray-500 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right w-5 h-5"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full"
            >
              <div className="flex space-x-1 text-yellow-500 mb-3 sm:mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                  </svg>
                ))}
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {review.name}
              </h4>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        <div class="flex justify-center sm:justify-end space-x-4 sm:hidden sm:flex mt-12">
          <button class="p-3 border border-gray-300 rounded-full text-gray-600 hover:text-gray-900 hover:border-gray-500 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-left w-5 h-5"
              aria-hidden="true"
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
          </button>
          <button class="p-3 border border-gray-300 rounded-full text-gray-600 hover:text-gray-900 hover:border-gray-500 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-right w-5 h-5"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Reviews;

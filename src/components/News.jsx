function News() {
  return (
    <>
      <section class="relative py-16 sm:py-20 bg-white overflow-hidden">
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-40"
          style={{
            background: `
      radial-gradient(circle at 10% 50%, #E0F7FA, transparent 30%),
      radial-gradient(circle at 0% 100%, #E8E5FF, transparent 40%),
      radial-gradient(circle at 90% 50%, #E0F7FA, transparent 30%),
      radial-gradient(circle at 100% 100%, #E8E5FF, transparent 40%)
    `,
          }}
        ></div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div class="lg:col-span-5 border-gray-100/50 lg:pr-12">
              <p class="text-[12px] sm:text-sm font-semibold text-gray-500 uppercase mb-4 bg-white shadow-md w-fit px-3 py-1 rounded">
                Daily Blogs
              </p>
              <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                What's News?
              </h2>
              <p class="text-sm sm:text-base text-gray-600 mb-8 max-w-md">
                Stay updated with the latest trends and insights in AI
                innovation, automation, and the tech landscape shaping our
                digital future.
              </p>
              <button class="bg-[#7B4EFC] text-white font-semibold py-3 px-6 sm:px-8 rounded-lg shadow-lg hover:bg-[#6a3ae0] transition duration-150 transform hover:scale-[1.03]">
                View More
              </button>
            </div>
            <div class="lg:col-span-7 space-y-2">
              <div class="py-6 border-b border-gray-100 last:border-b-0 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6">
                <div class="flex flex-row sm:flex-col justify-between sm:justify-start sm:text-right text-xs sm:text-sm font-medium text-gray-500 flex-shrink-0 w-full sm:w-24">
                  <span>9 Mins Read</span>
                  <span class="text-[11px] sm:text-xs">23 Nov 2025</span>
                </div>
                <div class="flex-grow">
                  <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-1 leading-snug hover:text-[#7B4EFC] transition duration-150 cursor-pointer">
                    The Evolution of AI: Features Shaping Tomorrow's Technology
                    Landscape
                  </h3>
                  <p class="text-sm text-gray-500/80">
                    This comprehensive exploration unveils cutting-edge AI
                    features, from enhanced learning sophisticated
                    problem-solving.
                  </p>
                </div>
                <a
                  href="#"
                  class="flex items-center text-xs sm:text-sm font-semibold text-gray-700 hover:text-gray-900 transition duration-150"
                >
                  Read More
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
                    class="lucide lucide-arrow-right w-4 h-4 ml-1"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div class="py-6 border-b border-gray-100 last:border-b-0 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6">
                <div class="flex flex-row sm:flex-col justify-between sm:justify-start sm:text-right text-xs sm:text-sm font-medium text-gray-500 flex-shrink-0 w-full sm:w-24">
                  <span>10 Mins Read</span>
                  <span class="text-[11px] sm:text-xs">25 Nov 2025</span>
                </div>
                <div class="flex-grow">
                  <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-1 leading-snug hover:text-[#7B4EFC] transition duration-150 cursor-pointer">
                    Future Forward AI — A Spotlight on Game Changing Features
                  </h3>
                  <p class="text-sm text-gray-500/80">
                    Explore the latest innovations redefining the boundaries of
                    AI and automation across industries.
                  </p>
                </div>
                <a
                  href="#"
                  class="flex items-center text-xs sm:text-sm font-semibold text-gray-700 hover:text-gray-900 transition duration-150"
                >
                  Read More
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
                    class="lucide lucide-arrow-right w-4 h-4 ml-1"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div class="py-6 border-b border-gray-100 last:border-b-0 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6">
                <div class="flex flex-row sm:flex-col justify-between sm:justify-start sm:text-right text-xs sm:text-sm font-medium text-gray-500 flex-shrink-0 w-full sm:w-24">
                  <span>6 Mins Read</span>
                  <span class="text-[11px] sm:text-xs">29 Nov 2025</span>
                </div>
                <div class="flex-grow">
                  <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-1 leading-snug hover:text-[#7B4EFC] transition duration-150 cursor-pointer">
                    Empowering Tomorrow — AI Features Redefining the Digital
                    Frontier
                  </h3>
                  <p class="text-sm text-gray-500/80">
                    Discover how AI technologies are shaping digital
                    transformation and smarter business decisions.
                  </p>
                </div>
                <a
                  href="#"
                  class="flex items-center text-xs sm:text-sm font-semibold text-gray-700 hover:text-gray-900 transition duration-150"
                >
                  Read More
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
                    class="lucide lucide-arrow-right w-4 h-4 ml-1"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default News;

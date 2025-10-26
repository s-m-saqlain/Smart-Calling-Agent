function Footer() {
  return (
    <>
      <footer class="bg-[#05051E] text-white pt-16 sm:pt-20">
        <div class="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 pb-10 sm:pb-16">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
            <div class="lg:col-span-2">
              <h3 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 sm:mb-4 leading-tight">
                Subscribe To Ai!
              </h3>
              <p class="text-gray-400 text-sm sm:text-base mb-5 sm:mb-6 max-w-md">
                Artificial intelligence is a transformative field of computer
                science that empowers machines to perform tasks that typically
                require human intelligence.
              </p>
              <form class="flex flex-col sm:flex-row w-full max-w-md rounded-lg overflow-hidden border border-gray-700 focus-within:border-blue-600 transition duration-200">
                <input
                  type="email"
                  placeholder="Your email address @"
                  class="flex-grow py-3 px-4 text-gray-800 focus:outline-none placeholder-gray-500"
                  required=""
                />
                <button
                  type="submit"
                  class="bg-[#3B82F6] text-white font-semibold py-3 px-6 hover:bg-blue-700 transition duration-150 sm:w-auto w-full"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div>
              <h4 class="text-lg font-bold mb-4 text-white">Quick Links</h4>
              <ul class="space-y-2 sm:space-y-3 text-sm sm:text-base">
                <li>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-blue-500 transition duration-150"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-blue-500 transition duration-150"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-blue-500 transition duration-150"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-blue-500 transition duration-150"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-blue-500 transition duration-150"
                  >
                    Developers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-blue-500 transition duration-150"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-bold mb-4 text-white">Resource</h4>
              <ul class="space-y-2 sm:space-y-3 text-sm sm:text-base">
                <li>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-blue-500 transition duration-150"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-blue-500 transition duration-150"
                  >
                    Term of Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-blue-500 transition duration-150"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-blue-500 transition duration-150"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-bold mb-4 text-white">Office</h4>
              <div class="space-y-2 sm:space-y-3 text-sm sm:text-base">
                <p class="text-gray-400">
                  175 5th Ave, New York, NY 10010, USA
                </p>
                <p class="text-gray-400">example@example.com</p>
                <p class="text-gray-400 font-semibold text-lg pt-2">
                  +1 840 841 25 69
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="border-t border-blue-600/50 py-6">
          <div class="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-400 space-y-3 sm:space-y-0">
            <p class="text-center sm:text-left">
              © 2025 Aithm. All rights reserved.
            </p>
            <div class="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-5">
              <a href="#" class="hover:text-blue-500 transition-colors">
                Term of Services
              </a>
              <a href="#" class="hover:text-blue-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" class="hover:text-blue-500 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

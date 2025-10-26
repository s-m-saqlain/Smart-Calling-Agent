import heroBg from "../assets/images/background.png";

function CallOperation() {
  return (
    <div className="h-screen" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="flex flex-col items-center justify-center px-4 py-20 sm:py-24">
        <div className="max-w-4xl text-center">
          <h1
            className="font-extrabold sm:text-[75.6px] text-[35px] sm:leading-[90.72px] leading-[50px] tracking-[0px] text-center"
            style={{
              verticalAlign: "middle",
            }}
          >
            <span className="text-foreground">Supercharge your</span>
            <br />
            <span className="text-[#6600FF] bg-clip-text ">
              Call Operations
            </span>
            <span className="text-foreground"> with Voice AI</span>
          </h1>

          <p
            className="mt-6 font-manrope font-normal sm:text-[21.6px] text-[15px] leading-[27px] tracking-[0px] text-center align-middle text-[#525866] max-w-2xl mx-auto"
            style={{
              verticalAlign: "middle",
            }}
          >
            Discover the new way to build, test, deploy, and monitor
            production-ready AI voice agents at scale.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button class="bg-[#6600FF] text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-[#4e00cc] transition duration-150 transform hover:scale-105 w-full sm:w-auto">
              GET IN TOUCH
            </button>

            <button class="bg-white text-gray-800 font-semibold py-3 px-8 rounded-lg border border-gray-300 shadow-md hover:bg-gray-50 transition duration-150 transform hover:scale-105 w-full sm:w-auto">
              CONTACT SALES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallOperation;

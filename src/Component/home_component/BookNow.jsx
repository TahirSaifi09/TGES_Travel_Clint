export default function BookNow() {
  return (
    <div>
      <div className=" h-screen  bgImg">
        <div className="cloudImg h-[200px]">
          <div className="w-full top-24 relative px-20 text-5xl max-md:text-3xl font-bold max-sm:px-2 max-sm:top-2 max-lg:top-4 max-md:top-0 max-md:px-6 max-lg:px-4">
            <div className="flex justify-between max-md:flex-wrap ">
              <div className="w-2/6 max-md:w-full max-md:px-2">
                <img
                  src="tges-logo.png"
                  alt="logo"
                  className="py-10 max-md:py-4 max-sm:py-4 max-md:mx-auto w-1/3 max-md:w-1/4"
                />
                <div className="max-md:px-10 max-md:pb-2">
                  <div className="gap-4 flex flex-wrap max-md:justify-center">
                    <div className="inline bg-gray-200 p-2">TRAVEL</div>
                    <div className="inline bg-gray-200 p-2">All</div>
                    <div className="inline bg-gray-200 p-2">Over</div>
                    <div className="inline bg-gray-200 p-2 text-blue-600">
                      The
                    </div>
                    <div className="inline bg-gray-200 p-2 text-blue-600">
                      WORLD
                    </div>
                  </div>
                </div>
                <div className="max-md:text-center">
                  <button className=" px-6 py-3 text-sm text-white rounded-lg bg-blue-600 hover:bg-white hover:text-black duration-700 ">
                    Booking Now
                  </button>
                </div>
              </div>
              <div className="absolute -top-12 max-2xl:hidden">
              <img src="vector-line.png" alt="Vector Line" className="w-3/5 h-[550px] ml-40 mb-20 pb-12"/>
              </div>
              <div className="w-11/12 flex items-center max-md:w-full max-lg:w-9/12">
                <div className="mt-4 " id="hero-section">
                  <div className="flex relative items-center justify-center gap-2 z-40">
                    <img
                      src="paris.png"
                      alt="paris"
                      className="w-1/5 h-1/5 rounded-3xl border-4 border-white"
                    />
                    <img
                      src="dubai.png"
                      alt="dubai"
                      className="w-2/6 rounded-3xl border-4 border-white"
                    />
                    <img
                      src="italy.png"
                      alt="italy"
                      className="w-1/5 h-1/5 rounded-3xl border-4 border-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

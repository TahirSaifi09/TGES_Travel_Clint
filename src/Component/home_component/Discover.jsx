import { CiLocationOn } from "react-icons/ci";
import { RiHotelFill } from "react-icons/ri";

export default function Descover() {
  return (
    <div>
      <div className="w-full p-20 max-lg:p-20 bg-gray-200 max-md:px-2 max-lg:px-10 max-xl:px-12">
        <div className="flex justify-between max-xl:flex-wrap ">
          <h1 className="text-3xl max-sm:text-2xl font-bold">
            Popular Global Travel Destinations
          </h1>
          <button className="bg-blue-600 px-6 py-3 shadow-2xl rounded-lg text-white hover:bg-white hover:text-black duration-700">
            Show More
          </button>
        </div>
        <div className="flex flex-between items-center gap-20 py-10 max-lg:flex-wrap">
          <div className="max-xl:w-1/2 max-md:px-10 max-lg:w-full">
            <img src="map.png" alt="map" />
          </div>
          <div className="w-8/12 flex flex-wrap max-lg:w-full max-md:w-full ">
            <div className="w-1/2 pt-8 pr-4 max-md:w-full max-md:pr-0 sm:w-1/2 sm:pr-2">
              <div className="p-4 shadow-lg rounded-lg bg-white md:p-2">
                <img src="image-1.png" alt="image-1" className=" rounded-lg" />
                <p className="font-bold pt-4">Rome</p>
                <div className="flex gap-2 py-2 text-gray-500 items-center md:text-sm">
                  <CiLocationOn className="text-2xl" />
                  <p className="py-2">Italy</p>
                  <RiHotelFill className="text-2xl" />
                  <p>Hotel</p>
                </div>
                <button className="w-full py-2 bg-blue-600 shadow-lg rounded-lg text-white hover:bg-white hover:text-black duration-700">
                  Discover
                </button>
              </div>
            </div>
            <div className="w-1/2 pt-8 pl-4 max-md:w-full max-md:pl-0 sm:w-1/2 sm:pl-2">
              <div className="p-4 shadow-lg rounded-lg bg-white md:p-2">
                <img src="image-2.png" alt="image-2" className="rounded-lg" />
                <p className="font-bold pt-4">Tokyo</p>
                <div className="flex gap-2 py-2 text-gray-500 items-center md:text-sm">
                  <CiLocationOn className="text-2xl" />
                  <p>Japan -</p>
                  <RiHotelFill className="text-2xl" />
                  <p className="py-2">Hotel</p>
                </div>
                <button className="w-full py-2 bg-blue-600 shadow-lg rounded-lg text-white hover:bg-white hover:text-black duration-700">
                  Discover
                </button>
              </div>
            </div>
            <div className="w-1/2 pt-8 pr-4 max-sm:w-full max-md:pr-0 sm:w-1/2 sm:pr-2">
              <div className="p-4 shadow-lg rounded-lg bg-white text-sm md:p-2">
                <img src="image-3.png" alt="image-3" className="rounded-lg" />
                <p className="font-bold pt-4">Sydney</p>
                <div className="flex gap-2 py-2 text-gray-500 items-center md:text-sm">
                  <CiLocationOn className="text-2xl" />
                  <p>Australia -</p>
                  <RiHotelFill className="text-2xl" />
                  <p className="py-2">Hotel</p>
                </div>
                <button className="w-full py-2 bg-blue-600 shadow-lg rounded-lg text-white hover:bg-white hover:text-black duration-700">
                  Discover
                </button>
              </div>
            </div>
            <div className="w-1/2 pt-8 pl-4 max-sm:w-full max-md:pl-0 sm:w-1/2 sm:pl-2">
              <div className="p-4 shadow-lg rounded-lg bg-white md:p-2">
                <img src="image-4.png" alt="image-4" className="rounded-lg" />
                <p className="font-bold pt-4">London</p>
                <div className="flex gap-2 py-2 text-gray-500 items-center md:text-sm md:gap-0">
                  <CiLocationOn className="text-2xl" />
                  <p>United Kingdom(UK)</p>
                  <RiHotelFill className="text-2xl" />
                  <p className="py-2">Hotel</p>
                </div>
                <button className="w-full py-2 bg-blue-600 shadow-lg rounded-lg text-white hover:bg-white hover:text-black duration-700">
                  Discover
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

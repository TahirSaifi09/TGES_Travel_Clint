import { RiHotelFill } from "react-icons/ri";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { PiCarProfileBold } from "react-icons/pi";
import { GoArrowSwitch } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { AiOutlineComment } from "react-icons/ai";
import { LuPlane } from "react-icons/lu";
import { ImPriceTags } from "react-icons/im";

export default function ShowFlight() {
  return (
    <div className="h-full w-full bg-[#dedee0] shadow-2xl">
      <div className="flex justify-center px-16 max-xl:px-6 max-sm:px-4 z-50 -translate-y-48 ">
        <div className="w-full h-full px-20 max-xl:px-10 py-10 shadow-xl rounded-3xl bg-gray-100 max-sm:px-2 max-md:p-8">
          <div className="flex gap-1 max-sm:flex-wrap">
            <button className="text-2xl flex items-center bg-blue-600 text-white rounded text- gap-2 px-6 py-2">
              <BiSolidPlaneAlt />
              <p>Flight</p>
            </button>
            <button className="text-2xl flex items-center bg-gray-200 rounded text- gap-2 px-6 py-2 hover:bg-blue-600 hover:text-white duration-500">
              <RiHotelFill />
              <p>Hotel</p>
            </button>
            <button className="text-2xl flex items-center bg-gray-200 rounded text- gap-2 px-6 py-2 hover:bg-blue-600 hover:text-white duration-500">
              <PiCarProfileBold />
              <p>Car Rentals</p>
            </button>
          </div>
          <div className="flex justify-between mt-8 gap-1 max-sm:flex-wrap max-sm:justify-start">
            <button className="bg-orange-400 h-12 rounded w-2/6 py-3 max-sm:w-full">
              Stopover
            </button>
            <button className="bg-gray-200 rounded h-12 hover:bg-orange-400 duration-500 w-2/6 max-sm:w-full max-sm:h-12">
              Manage Booking / Check in
            </button>
            <button className="bg-gray-200 rounded h-12 hover:bg-orange-400 duration-500 w-2/6 max-sm:w-full">
              Flight Status
            </button>
          </div>
          <div className="space-x-5 flex text-2xl py-8 max-md:flex-wrap">
            <div className="flex flex-row items-center gap-2">
              <input
                type="radio"
                id="one-way"
                name="trip"
                value="One way"
                className="size-6"
              />
              <label for="one-way"> One way</label>
            </div>
            <div className="flex flex-row items-center gap-2">
              <input
                type="radio"
                id="Rounded-trip"
                name="trip"
                value="Rounded-trip"
                className="size-6"
              />
              <label for="Rounded-trip"> Rounded-trip</label>
            </div>
            <div className="flex flex-row items-center gap-2 ">
              <input
                type="radio"
                id="multi-city"
                name="trip"
                value="Multi-city"
                className="size-6"
              />
              <label for="multi-city">Multi-city </label>
            </div>
          </div>
          <div className="w-full flex h-42 px-5 py-8 rounded bg-slate-200 max-md:h-full max-xl:flex-wrap max-xl:gap-6">
            <div className="flex border-r h-full items-center border-black gap-6 w-2/4 max-xl:w-full max-sm:flex-wrap max-md:gap-3 max-xl:border-none">
              <div className="max-md:w-full max-xl:w-5/12">
                <label className="text-gray-500 max-sm:text-xl max-sm:font-bold">
                  From
                </label>
                <div className="max-md:w-11/12 max-sm:w-1/2 ">
                  <input
                    type="text"
                    placeholder="From"
                    className="outline-none bg-slate-200 text-gray-500 text-xl max-md:w-5/12 max-sm:w-full"
                  ></input>
                </div>
              </div>
              <GoArrowSwitch className="text-3xl max-md:text-5xl text-blue-600 " />
              <div className="max-sm:w-full">
                <label className="text-gray-500 max-sm:text-xl max-sm:font-bold">
                  To
                </label>
                <div className="max-md:w-5/12 max-sm:w-1/2">
                  <input
                    type="text"
                    placeholder="To"
                    className="outline-none bg-slate-200 text-gray-500 text-xl max-sm:w-full "
                  ></input>
                </div>
              </div>
            </div>
            <div className="flex px-5 w-2/4 gap-6 max-md:flex-wrap max-xl:px-0 max-xl:w-full max-md:pt-4">
              <div>
                <label for="departing" className="text-gray-500">
                  Departing
                </label>
                <div>
                  <input
                    type="date"
                    id="departing"
                    name="departing"
                    className="bg-slate-200 text-black text-xl"
                  ></input>
                </div>
              </div>
              <div>
                <label for="returning" className="text-gray-500">
                  Returning
                </label>
                <div>
                  <input
                    type="date"
                    id="returning"
                    name="returning"
                    className="bg-slate-200 text-black text-xl"
                  ></input>
                </div>
              </div>
              <div>
                <label for="passenger" className="text-gray-500">
                  Passengers and Class
                </label>
                <div>
                  <h1 className="text-xl">2 Passengers / Business</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-3 mt-6 max-xl:flex-wrap">
            <div className="text-lg text-gray-400 font-medium">
              <p>When would you like stop in dubai during your journey?</p>
              <input
                type="radio"
                name="trip"
                id="departure"
                value="Departure"
              ></input>
              <label for="departure" className="text-gray-500 pr-4 text-2xl">
                Departure
              </label>
              <input
                type="radio"
                name="trip"
                id="return"
                value="Departure"
              ></input>
              <label for="return" className="text-gray-500 text-2xl">
                Return
              </label>
            </div>
            <div className="text-lg text-gray-400 font-medium ">
              <p>How many days would you like to stay in Dubai?</p>
              <div className="flex items-center text-4xl p-2">
                <div className="border border-black bg-slate-200">
                  <FiMinus className="p-2 text-black" />
                </div>
                <input
                  type="text"
                  value="0"
                  className="w-8 outline-none bg-gray-100 text-3xl text-center"
                ></input>
                <div>
                  <FiPlus className="border p-2 text-black border-black bg-slate-200" />
                </div>
              </div>
            </div>
            <div>
              <div className="h-12 border rounded-lg py-2 px-6 bg-slate-200">
                <input
                  type="text"
                  placeholder="Enter Promo Code"
                  className="h-full outline-none  bg-slate-200 "
                ></input>
              </div>
            </div>
            <button className="h-12 w-48 justify-center rounded-lg text-white shadow-2xl flex items-center px-2 py-2 bg-blue-500 hover:bg-white hover:text-black duration-500">
              Show Flight
              <BiSolidPlaneAlt className="text-4xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="px-16  flex justify-between -translate-y-28 max-lg:flex-wrap max-sm:px-2 max-md:gap-3 max-2xl:gap-8 max-xl:px-14 max-md:px-6">
          <div className="flex px-14 gap-2 py-5 shadow-lg rounded-lg bg-gray-100 max-xl:px-2 max-2xl:px-5 max-xl:w-full items-center max-xl:justify-center ">
            <AiOutlineComment className="text-5xl text-blue-600" />
            <div className="">
              <h1 className="text-2xl max-sm:text-xl max-2xl:text-xl font-medium">
                We are Now Available
              </h1>
              <p className="text-gray-500">
                Call +91 9720169030 contact with us
              </p>
            </div>
          </div>
          <div className="flex px-14 gap-2 py-5 shadow-lg rounded-lg items-center bg-gray-100 max-xl:w-full max-2xl:px-5 max-xl:px-2 max-xl:justify-center">
            <LuPlane className="text-5xl text-blue-600" />
            <div>
              <h1 className="text-2xl max-sm:text-xl max-2xl:text-xl font-medium">
                International Flight
              </h1>
              <p className="text-gray-500 ">
                Call +91 9720169030 contact with us
              </p>
            </div>
          </div>
          <div className="flex px-14 gap-2 rounded-lg shadow-lg py-5 items-center bg-gray-100 max-xl:px-2 max-2xl:px-5 max-xl:w-full max-xl:justify-center">
            <ImPriceTags className="text-5xl text-blue-600" />
            <div>
              <h1 className="text-2xl max-sm:text-xl max-xl:text-2xl max-2xl:text-xl font-medium">
                Check Refund
              </h1>
              <p className="text-gray-500">
                Call +91 9720169030 contact with us
              </p>
            </div>
          </div>
        </div>
    </div>
  );
}

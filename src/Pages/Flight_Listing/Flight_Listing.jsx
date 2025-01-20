import { Footer, Navbar } from "../../Component";
import { GoArrowSwitch } from "react-icons/go";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Flight_Listing() {
  return (
    <div>
      <Navbar />
      <div>
        <div className=" px-10 h-[500px] w-full bg-slate-300">
          <div className="flex justify-between items-center">
            <img
              src="vacation.png"
              alt="vacation"
              className="w-3/12 h-80 p-10"
            />
            <h1 className="text-center pl-8 text-5xl font-bold w-1/3">
              Flight Listing
            </h1>
            <img src="plane.png" alt="plan" className="w-2/6 h-48 p-8" />
          </div>
        </div>
        <div className="h-full bg-gray-200 ">
          <div className="flex justify-center px-16 max-xl:px-6 max-sm:px-4 z-50 -translate-y-48 ">
            <div className="w-full h-full px-20 max-xl:px-10 py-10 shadow-xl rounded-3xl bg-gray-100 max-sm:px-2 max-md:p-8">
              <div className="flex justify-between mt-8 gap-1 max-sm:flex-wrap max-sm:justify-start">
                <button className="bg-blue-700 h-12 rounded w-2/6 py-3 max-sm:w-full text-white ">
                  Flight
                </button>
                <button className="bg-gray-200 hover:bg-blue-700 hover:text-white duration-700 h-12 rounded w-2/6 py-3 max-sm:w-full">
                  Stopover
                </button>
                <button className="bg-gray-200 rounded h-12 hover:bg-blue-700 hover:text-white duration-700 w-2/6 max-sm:w-full max-sm:h-12">
                  Manage Booking / Check in
                </button>
                <button className="bg-gray-200 rounded h-12 hover:bg-blue-700 hover:text-white duration-700 w-2/6 max-sm:w-full">
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
              <div className="w-full flex h-42 px-5 py-4 rounded bg-slate-200 max-md:h-full max-xl:flex-wrap max-xl:gap-6">
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
                      <h1 className="text-xl">2 Passengers /</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-6 max-xl:flex-wrap">
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
          <div className="flex px-16 gap-8 w-full h-full -translate-y-32 ">
            <div className="w-4/12 h-screen shadow-2xl rounded-xl">
              <div>
                <div className=" w-full bg-indigo-200 py-4 text-2xl font-medium text-center ">
                  Filter Search
                </div>
              </div>
              <div className="py-2">
                <div className="flex justify-between text-2xl font-medium p-6">
                  <p>Cabin</p>
                  <IoIosArrowUp className="text-blue-400" />
                </div>
                <div className="flex flex-wrap px-6 gap-10">
                  <button className="w-5/12 px-8  bg-blue-600 text-2xl text-white border rounded border-black">
                    Economy Class
                  </button>
                  <button className="w-5/12 py-1 px-8 bg-indigo-200 text-2xl border rounded border-black">
                    Business Class
                  </button>
                  <button className="w-5/12 py-1 bg-indigo-200 text-2xl border rounded border-black">
                    First Class
                  </button>
                  <button className="w-5/12 py-1 bg-indigo-200 text-2xl border rounded border-black">
                    Premium Econimy
                  </button>
                </div>
              </div>
              <div className="w-full h-12 border-2 border-black">
                <hr />
              </div>
              <div className="px-6 py-4">
                <div className="flex justify-between text-2xl font-medium ">
                  <p>Price Range</p>
                  <IoIosArrowUp className="text-blue-400" />
                </div>
                <input type="range" name="range" className="w-full py-8" />
              </div>
            </div>

            <div className="w-8/12 h-full ">
              <div className="w-full h-full bg-white rounded-xl shadow-xl">
                <div className="flex justify-between items-center p-6">
                  <div className="flex gap-8">
                    <img
                      src="icon-1.png"
                      alt="icon"
                      className="rounded-full h-16 w-16"
                    />
                    <div>
                      <h6 className="font-medium text-lg">
                        Feel Dubai Airline
                      </h6>
                      <p className="text-sm font-bold text-gray-400">
                        Boeing 777-90
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="text-center">
                      <h6 className="font-medium text-lg">12:00</h6>
                      <p className="text-sm font-bold text-gray-400">DUB</p>
                    </div>
                    <div className="flex gap-2 text-center items-center">
                      <p className="text-sm font-medium">To</p>
                      <div>
                        <p className=" font-bold text-gray-400">0h 50m</p>
                        <img src="route-plan.png" alt="route-plan" />
                        <p className="">1 Stop</p>
                      </div>
                      <p className="text-sm font-medium">From</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-lg">12:50</p>
                      <p className="text-lg font-medium text-gray-400">SHJ</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex gap-2 items-center">
                      <p className="text-sm font-bold text-gray-400">Price</p>
                      <p className="font-medium text-lg">$240</p>
                    </div>
                    <button className="bg-blue-600 text-sm font-medium text-white py-3 px-6 rounded-lg shadow-xl hover:bg-orange-500 duration-700 ">
                      Book Now
                    </button>
                  </div>
                </div>
                <div className="px-6 ">
                  <hr></hr>
                </div>
                <div className="flex justify-between text-lg font-medium p-6">
                  <p>Monday 14 August</p>

                  <Link to="#">
                    <div className="flex items-center text-blue-600">
                      <IoIosArrowDown />
                      <p>Flight Details</p>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="w-full h-full bg-white rounded-xl mt-5 shadow-xl">
                <div className="flex justify-between items-center p-6">
                  <div className="flex gap-8">
                    <img
                      src="icon-2.png"
                      alt="icon"
                      className="rounded-full h-16 w-16"
                    />
                    <div>
                      <h6 className="font-medium text-lg">
                        United Dubai Airlines
                      </h6>
                      <p className="text-sm font-bold text-gray-400">
                        Boeing 777-90
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="text-center">
                      <h6 className="font-medium text-lg">12:00</h6>
                      <p className="text-sm font-bold text-gray-400">DUB</p>
                    </div>
                    <div className="flex gap-2 text-center items-center">
                      <p className="text-sm font-medium">To</p>
                      <div>
                        <p className=" font-bold text-gray-400">0h 50m</p>
                        <img src="route-plan.png" alt="route-plan" />
                        <p className="">1 Stop</p>
                      </div>
                      <p className="text-sm font-medium">From</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-lg">12:50</p>
                      <p className="text-lg font-medium text-gray-400">SHJ</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex gap-2 items-center">
                      <p className="text-sm font-bold text-gray-400">Price</p>
                      <p className="font-medium text-lg">$240</p>
                    </div>
                    <button className="bg-blue-600 text-sm font-medium text-white py-3 px-6 rounded-lg shadow-xl hover:bg-orange-500 duration-700 ">
                      Book Now
                    </button>
                  </div>
                </div>
                <div className="px-6 ">
                  <hr></hr>
                </div>
                <div className="flex justify-between text-lg font-medium p-6">
                  <p>Monday 14 August</p>

                  <Link to="#">
                    <div className="flex items-center text-blue-600">
                      <IoIosArrowDown />
                      <p>Flight Details</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="w-full h-full bg-white rounded-xl mt-5 shadow-xl">
                <div className="flex justify-between items-center p-6">
                  <div className="flex gap-8">
                    <img
                      src="icon-1.png"
                      alt="icon"
                      className="rounded-full h-16 w-16"
                    />
                    <div>
                      <h6 className="font-medium text-lg">
                        Feel Dubai Airline
                      </h6>
                      <p className="text-sm font-bold text-gray-400">
                        Boeing 777-90
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="text-center">
                      <h6 className="font-medium text-lg">12:00</h6>
                      <p className="text-sm font-bold text-gray-400">DUB</p>
                    </div>
                    <div className="flex gap-2 text-center items-center">
                      <p className="text-sm font-medium">To</p>
                      <div>
                        <p className=" font-bold text-gray-400">0h 50m</p>
                        <img src="route-plan.png" alt="route-plan" />
                        <p className="">1 Stop</p>
                      </div>
                      <p className="text-sm font-medium">From</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-lg">12:50</p>
                      <p className="text-lg font-medium text-gray-400">SHJ</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex gap-2 items-center">
                      <p className="text-sm font-bold text-gray-400">Price</p>
                      <p className="font-medium text-lg">$240</p>
                    </div>
                    <button className="bg-blue-600 text-sm font-medium text-white py-3 px-6 rounded-lg shadow-xl hover:bg-orange-500 duration-700 ">
                      Book Now
                    </button>
                  </div>
                </div>
                <div className="px-6 ">
                  <hr></hr>
                </div>
                <div className="flex justify-between text-lg font-medium p-6">
                  <p>Monday 14 August</p>
                  <Link to="#">
                    <div className="flex items-center text-blue-600">
                      <IoIosArrowDown />
                      <p>Flight Details</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="w-full h-full bg-white rounded-xl shadow-xl mt-5">
                <div className="flex justify-between items-center p-6">
                  <div className="flex gap-8">
                    <img
                      src="icon-2.png"
                      alt="icon"
                      className="rounded-full h-16 w-16"
                    />
                    <div>
                      <h6 className="font-medium text-lg">
                        United Dubai Airlines
                      </h6>
                      <p className="text-sm font-bold text-gray-400">
                        Boeing 777-90
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="text-center">
                      <h6 className="font-medium text-lg">12:00</h6>
                      <p className="text-sm font-bold text-gray-400">DUB</p>
                    </div>
                    <div className="flex gap-2 text-center items-center">
                      <p className="text-sm font-medium">To</p>
                      <div>
                        <p className=" font-bold text-gray-400">0h 50m</p>
                        <img src="route-plan.png" alt="route-plan" />
                        <p className="">1 Stop</p>
                      </div>
                      <p className="text-sm font-medium">From</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-lg">12:50</p>
                      <p className="text-lg font-medium text-gray-400">SHJ</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex gap-2 items-center">
                      <p className="text-sm font-bold text-gray-400">Price</p>
                      <p className="font-medium text-lg">$240</p>
                    </div>
                    <button className="bg-blue-600 text-sm font-medium text-white py-3 px-6 rounded-lg shadow-xl hover:bg-orange-500 duration-700 ">
                      Book Now
                    </button>
                  </div>
                </div>
                <div className="px-6 ">
                  <hr></hr>
                </div>
                <div className="flex justify-between text-lg font-medium p-6">
                  <p>Monday 14 August</p>
                  <Link to="#">
                    <div className="flex items-center text-blue-600">
                      <IoIosArrowDown />
                      <p>Flight Details</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="w-full h-full bg-white rounded-xl shadow-xl mt-5">
                <div className="flex justify-between items-center p-6">
                  <div className="flex gap-8">
                    <img
                      src="icon-1.png"
                      alt="icon"
                      className="rounded-full h-16 w-16"
                    />
                    <div>
                      <h6 className="font-medium text-lg">
                        Feel Dubai Airline
                      </h6>
                      <p className="text-sm font-bold text-gray-400">
                        Boeing 777-90
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="text-center">
                      <h6 className="font-medium text-lg">12:00</h6>
                      <p className="text-sm font-bold text-gray-400">DUB</p>
                    </div>
                    <div className="flex gap-2 text-center items-center">
                      <p className="text-sm font-medium">To</p>
                      <div>
                        <p className=" font-bold text-gray-400">0h 50m</p>
                        <img src="route-plan.png" alt="route-plan" />
                        <p className="">1 Stop</p>
                      </div>
                      <p className="text-sm font-medium">From</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-lg">12:50</p>
                      <p className="text-lg font-medium text-gray-400">SHJ</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex gap-2 items-center">
                      <p className="text-sm font-bold text-gray-400">Price</p>
                      <p className="font-medium text-lg">$240</p>
                    </div>
                    <button className="bg-blue-600 text-sm font-medium text-white py-3 px-6 rounded-lg shadow-xl hover:bg-orange-500 duration-700 ">
                      Book Now
                    </button>
                  </div>
                </div>
                <div className="px-6 ">
                  <hr></hr>
                </div>
                <div className="flex justify-between text-lg font-medium p-6">
                  <p>Monday 14 August</p>
                  <Link to="#">
                    <div className="flex items-center text-blue-600">
                      <IoIosArrowDown />
                      <p>Flight Details</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="w-full h-full bg-white rounded-xl shadow-xl mt-5">
                <div className="flex justify-between items-center p-6">
                  <div className="flex gap-8">
                    <img
                      src="icon-2.png"
                      alt="icon"
                      className="rounded-full h-16 w-16"
                    />
                    <div>
                      <h6 className="font-medium text-lg">
                        United Dubai Airlines
                      </h6>
                      <p className="text-sm font-bold text-gray-400">
                        Boeing 777-90
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="text-center">
                      <h6 className="font-medium text-lg">12:00</h6>
                      <p className="text-sm font-bold text-gray-400">DUB</p>
                    </div>
                    <div className="flex gap-2 text-center items-center">
                      <p className="text-sm font-medium">To</p>
                      <div>
                        <p className=" font-bold text-gray-400">0h 50m</p>
                        <img src="route-plan.png" alt="route-plan" />
                        <p className="">1 Stop</p>
                      </div>
                      <p className="text-sm font-medium">From</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-lg">12:50</p>
                      <p className="text-lg font-medium text-gray-400">SHJ</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex gap-2 items-center">
                      <p className="text-sm font-bold text-gray-400">Price</p>
                      <p className="font-medium text-lg">$240</p>
                    </div>
                    <button className="bg-blue-600 text-sm font-medium text-white py-3 px-6 rounded-lg shadow-xl hover:bg-orange-500 duration-700 ">
                      Book Now
                    </button>
                  </div>
                </div>
                <div className="px-6 ">
                  <hr></hr>
                </div>
                <div className="flex justify-between text-lg font-medium p-6">
                  <p>Monday 14 August</p>
                  <Link to="#">
                    <div className="flex items-center text-blue-600">
                      <IoIosArrowDown />
                      <p>Flight Details</p>
                    </div>
                  </Link>
                </div>
              </div>
              <ul className="flex items-center justify-center gap-4 mt-5">
                <li className="">
                  <Link
                    to="#"
                    className="bg-blue-600 px-5 py-3 text-sm font-medium text-white rounded-xl"
                  >
                    1
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="bg-slate-200 shadow-xl text-black hover:bg-blue-600 duration-700 px-5 py-3 text-sm font-medium hover:text-white rounded-xl"
                  >
                    2
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="bg-slate-200 shadow-xl text-black hover:bg-blue-600 duration-700 px-5 py-3 text-sm font-medium hover:text-white rounded-xl"
                  >
                    3
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="bg-slate-200 shadow-xl text-black hover:bg-blue-600 duration-700 px-5 py-3 text-sm font-medium hover:text-white rounded-xl"
                  >
                    4
                  </Link>
                </li>
                <li>
                  <Link to="#" className="flex items-center">
                    <IoIosArrowForward className=" text-[46px] shadow-xl  px-2 hover:text-white hover:bg-blue-600 duration-700 rounded-xl text-blue-600 bg-slate-200" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

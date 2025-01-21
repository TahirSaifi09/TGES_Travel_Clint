import { Link, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useState } from "react";

export default function Navbar() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const links = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "Flight",
      path: null,
      isDropDown: true,
      items: [
        {
          name: "Flight Listing",
          path: "/flight-listing",
        },
        {
          name: "Flight Booking",
          path: "/flightBooking",
        },
      ],
    },
    {
      name: "Car",
      path: null,
      isDropDown: true,
      items: [
        {
          name: "Car Listing",
          path: null,
        },
        {
          name: "Car Booking",
          path: null,
        },
        {
          name: "Car Detail",
          path: null,
        },
      ],
    },
    {
      name: "Hotel",
      path: null,
      isDropDown: true,
      items: [
        {
          name: "Hotel Listing",
          path: null,
        },
        {
          name: "Hotel Detail",
          path: null,
        },
      ],
    },
    {
      name: "Tour Package",
      path: "/Tour_Package",
    },
    {
      name: "Pages",
      path: null,
      isDropDown: true,
      items: [
        {
          name: "Contact",
          path: "/contact",
        },
        {
          name: "Privacy Policy",
          path: "/privacy_Policy",
        },
        {
          name: "Login",
          path: "/login",
        },
        {
          name: "Signup",
          path: "/signup",
        },
      ],
    },
  ];

  function handleDropDown() {
    setIsDropDownOpen(!isDropDownOpen);
  }

  function handleMouseEnter(index) {
    setIsDropDownOpen(true);
    setActiveDropdown(index);
  }

  function handleMouseLeave() {
    setIsDropDownOpen(false);
    setActiveDropdown(null);
  }
  const location = useLocation();
  // console.log("location", location)

  return (
    <div className="h-full flex gap-14 items-center px-20 py-2 bg-[#ECECF2] max-md:px-3 max-xl:px-10 max-md:py-2 max-xl:py-4">
      <div className="flex justify-between max-md:items-center max-xl:w-full ">
        <a href="/" className="max-md:w-3/12">
          <img src="tges-logo.png" alt="logo" className="w-1/2"></img>
        </a>
        <IoReorderThreeOutline className="text-blue-600 text-5xl max-md:text-4xl xl:hidden" />
      </div>
      <div className="flex justify-between w-full text-lg font-medium max-xl:hidden">
        <div className="flex gap-2 py-5 ">
          {links.map((item, index) => (
            // <Link to={item.path}>{item.name}</Link>
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <Link
                to={item.path}
                className={`py-4 px-6 ${
                  location.pathname === item.path
                    ? "text-blue-600"
                    : "hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>

              {/* {isDropDownOpen &&
                activeDropdown === index &&
                item.isDropDown &&
                item.items.map((dropDownItem, index) => (
                  <div className="flex absolute -right-24 top-10 flex-col px-8 py-3 gap-4 rounded-md bg-white transition-all delay-200 duration-300 ease-in-out">
                    <Link key={index} to={dropDownItem.path} className="">
                      {dropDownItem.name}
                      {console.log(dropDownItem.name)}
                    </Link>
                  </div>
                ))} */}

              {isDropDownOpen &&
                activeDropdown === index &&
                item.isDropDown && (
                  <div className="flex absolute shadow-lg top-10 flex-col px-8 py-4 w-[200px] gap-4 rounded-md bg-white transition-all delay-200 duration-300 ease-in-out">
                    <ul>
                      {
                        item.items.map((subItem, index) => (
                          <li key={index} className=" py-2">
                            <Link  to={subItem.path} className="p-2 ">
                              {subItem.name}
                            </Link>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                )}
            </div>
          ))}

          {/* <div>
            
              Home
            </Link>
          </div>
          <div>
            <Link
              to="/flight-listing"
              className={
                location.pathname === "/flight-listing"
                  ? "text-blue-600"
                  : "hover:text-blue-600"
              }
            >
              Flight
            </Link>
          </div>
          <div>
            <Link
              to="/Car"
              className={
                location.pathname === "/Car"
                  ? "text-blue-600"
                  : "hover:text-blue-600"
              }
            >
              Car
            </Link>
          </div>
          <div>
            <Link
              to="/Hotel"
              className={
                location.pathname === "/Hotel"
                  ? "text-blue-600"
                  : "hover:text-blue-600"
              }
            >
              Hotel
            </Link>
          </div>
          <div>
            <Link
              to="/Tour_Package"
              className={
                location.pathname === "/Tour_Package"
                  ? "text-blue-600"
                  : "hover:text-blue-600"
              }
            >
              Tour Package
            </Link>
          </div>
          <div>
            <Link
              to="/Pages"
              className={
                location.pathname === "/Pages"
                  ? "text-blue-600"
                  : "hover:text-blue-600"
              }
            >
              Pages
            </Link>
          </div>
          <div>
            <Link
              to="/News"
              className={
                location.pathname === "/News"
                  ? "text-blue-600"
                  : "hover:text-blue-600"
              }
            >
              News
            </Link>
          </div> */}
        </div>
        <div className="flex items-center gap-2 text-xl">
          <Link to="#">
            <CiSearch className="text-3xl" />
          </Link>
          <a href="/login" className="hover:text-blue-600">
            Login
          </a>
          <p>/</p>
          <Link to="/signup" className="hover:text-blue-600">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}

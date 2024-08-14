import { useState } from "react";
import { useNavigate, NavLink, Outlet, useLocation } from "react-router-dom";

import favIcon from "../assets/images/just-logo.png";

import { AiOutlineAlignRight } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import assets from "../assets/index";

const NavBar = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const { pathname } = location;

  const [navbar, setNavBar] = useState(false);

  const [language, setLanguage] = useState<"EN" | "KR">("EN");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section>
      <nav className=" bg-white  fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-600 font-poppins">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between  mx-auto p-4 max-md:py-2">
          <NavLink
            to="/"
            className="flex items-center cursor-pointer space-x-3 rtl:space-x-reverse"
          >
            <img
              src={favIcon}
              className="size-12 md:scale-125"
              alt="Just do Logo"
            />
          </NavLink>
          <div
            className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse 
        "
          >
            <button>
              <ul className="flex gap-5 relative">
                <li
                  className="flex items-center md:gap-3 gap-2 cursor-pointer"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <img
                    src={assets.global}
                    alt="home"
                    className="md:scale-125"
                  />
                  <p className="md:text-[20px] font-extrabold text-gray-900">
                    {language}
                  </p>
                  <img
                    src={assets.down}
                    alt="arrow"
                    className="md:h-[16px] md:w-[22px] h-[15px] w-[20px] "
                  />

                  <ul
                    className={`${
                      isMenuOpen ? "" : "hidden"
                    } absolute bg-white shadow-lg border-[1px] rounded-lg border-slate-400 md:top-10 top-8 left-0 md:w-[120px] w-[70px] `}
                  >
                    <li
                      className="p-2 cursor-pointer hover:bg-gray-200 "
                      onClick={() => setLanguage("EN")}
                    >
                      EN
                    </li>
                    <li
                      className="p-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => setLanguage("KR")}
                    >
                      KR
                    </li>
                  </ul>
                </li>
              </ul>
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden hover:bg-slate- focus:outline-none focus:ring-2  text-gray-400 hover:bg-slate-400 focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => setNavBar(!navbar)}
            >
              <span className="sr-only">Open main menu</span>
              {navbar ? (
                <AiOutlineClose
                  onClick={() => setNavBar(!navbar)}
                  className="text-gray-900 text-3xl cursor-pointer md:hidden z-50"
                />
              ) : (
                <AiOutlineAlignRight
                  onClick={() => setNavBar(!navbar)}
                  className="text-gray-900  text-3xl cursor-pointer md:hidden z-50"
                />
              )}
            </button>
          </div>
          <div
            className={`items-center justify-center ${
              navbar ? "flex " : "hidden"
            }  w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex items-center  flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-200 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <button
                  className={`cursor-pointer md:text-[21px] font-semibold block my-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  ${
                    pathname === "/"
                      ? "text-blue-900 border-b-[4px] border-blue-900"
                      : "text-gray-900"
                  } `}
                  onClick={() => {
                    navigate("/");
                    setNavBar(false);
                  }}
                >
                  What's
                </button>
              </li>

              <li>
                <button
                  className={`cursor-pointer md:text-[21px] font-semibold block my-2   px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 ${
                    pathname === "/features"
                      ? "text-red-900 border-b-[4px] border-blue-900"
                      : "text-gray-900"
                  } `}
                  onClick={() => {
                    navigate("/features");
                    setNavBar(false);
                  }}
                >
                  App
                </button>
              </li>
              <li>
                <button
                  className={`cursor-pointer md:text-[21px] font-semibold block my-2  px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 ${
                    pathname === "/contents"
                      ? "text-blue-900 border-b-[4px] border-blue-900"
                      : "text-gray-900"
                  } `}
                  onClick={() => {
                    navigate("/contents");
                    setNavBar(false);
                  }}
                >
                  Contents
                </button>
              </li>
              <li className="max-md:mt-5">
                <button
                  type="button"
                  className="md:text-[21px] text-white font-semibold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-4 py-3 text-center "
                >
                  Go Premium
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </section>
  );
};

export default NavBar;

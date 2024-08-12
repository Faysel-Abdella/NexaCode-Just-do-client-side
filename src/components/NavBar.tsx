import { useState } from "react";
import { Link } from "react-scroll";

import favIcon from "../assets/images/just-logo.png";

import { AiOutlineAlignRight } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import assets from "../assets/index";

const NavBar = () => {
  const [navbar, setNavBar] = useState(false);

  const [language, setLanguage] = useState<"EN" | "KR">("EN");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // <header className="max-container w-full max-md:py-3 py-1 bg-blue-600 font-poppins md:fixed-nav">
    //   <nav className="flex justify-between  items-center w-[82%] mx-auto ">
    //     <div className="z-50">
    //       <Link
    //         to="home"
    //         smooth={true}
    //         duration={500}
    //         spy={true}
    //         offset={-70}
    //         className="cursor-pointer"
    //       >
    //         <img src={favIcon} alt="logo" width={40} height={30} />
    //       </Link>
    //     </div>

    //     <div
    //       className={`md:static bg-blue-600 absolute md:min-h-fit   left-0 w-full md:w-auto  flex items-center max-md:justify-center px-5 ${
    //         navbar ? "top-[0%] max-md:pb-9 max-md:pt-16" : "top-[-100%]"
    //       } duration-500`}
    //     >
    //       <ul className="flex md:flex-row flex-col items-center md:gap-[4vw] gap-8 pt-6 pb-1">
    //         <li className="">
    //           <Link
    //             to="home"
    //             smooth={true}
    //             duration={500}
    //             spy={true}
    //             offset={-70}
    //             className="font-poppins text-white cursor-pointer"
    //           >
    //             What's
    //           </Link>
    //         </li>
    //         <li className="">
    //           <Link
    //             // href="#about"
    //             to="about"
    //             smooth={true}
    //             duration={500}
    //             className="font-poppins text-white cursor-pointer"
    //             onClick={() => setNavBar(!navbar)}
    //           >
    //             App
    //           </Link>
    //         </li>
    //         <li className="">
    //           <Link
    //             to="services"
    //             smooth={true}
    //             duration={500}
    //             spy={true}
    //             className="font-poppins text-white cursor-pointer"
    //             onClick={() => setNavBar(!navbar)}
    //           >
    //             Contents
    //           </Link>
    //         </li>
    //         <li>
    //           <button className="bg-[#00c0ff] text-white px-5 py-2  hover:bg-[rgb(111,200,230)] rounded-full text-lg font-medium relative">
    //             <Link
    //               to="contact"
    //               smooth={true}
    //               duration={500}
    //               spy={true}
    //               className="font-poppins text-white cursor-pointer"
    //               onClick={() => setNavBar(!navbar)}
    //             >
    //               Go Premium
    //             </Link>
    //           </button>
    //         </li>
    //       </ul>
    //     </div>

    //     <div className="flex items-center gap-6">
    //       <button>
    //         <ul className="flex gap-5 relative">
    //           <li
    //             className="flex items-center md:gap-5 gap-2 cursor-pointer"
    //             onClick={() => setIsMenuOpen(!isMenuOpen)}
    //           >
    //             <img src={assets.global} alt="home" className="md:scale-150" />
    //             <p className="md:text-[32px] font-extrabold text-white">
    //               {language}
    //             </p>
    //             <img
    //               src={assets.down}
    //               alt="arrow"
    //               className="md:h-[20px] md:w-[30px] h-[15px] w-[20px]"
    //             />

    //             <ul
    //               className={`${
    //                 isMenuOpen ? "" : "hidden"
    //               } absolute bg-white md:top-14 top-8 right-0 md:w-[120px] w-[70px]`}
    //             >
    //               <li
    //                 className="p-2 cursor-pointer hover:bg-gray-200"
    //                 onClick={() => setLanguage("EN")}
    //               >
    //                 EN
    //               </li>
    //               <li
    //                 className="p-2 cursor-pointer hover:bg-gray-200"
    //                 onClick={() => setLanguage("KR")}
    //               >
    //                 KR
    //               </li>
    //             </ul>
    //           </li>
    //         </ul>
    //       </button>
    //       {navbar ? (
    //         <AiOutlineClose
    //           onClick={() => setNavBar(!navbar)}
    //           className="text-white text-3xl cursor-pointer md:hidden z-50"
    //         />
    //       ) : (
    //         <AiOutlineAlignRight
    //           onClick={() => setNavBar(!navbar)}
    //           className="text-white text-3xl cursor-pointer md:hidden z-50"
    //         />
    //       )}
    //     </div>
    //   </nav>
    // </header>

    <nav className=" bg-white  fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between  mx-auto p-4 max-md:py-2">
        <Link
          to="home"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={favIcon} className="size-12 scale-125" alt="Just do Logo" />
        </Link>
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
                <img src={assets.global} alt="home" className="md:scale-125" />
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
                  } absolute bg-white md:top-10 top-8 left-0 md:w-[120px] w-[70px] `}
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
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => setNavBar(!navbar)}
          >
            <span className="sr-only">Open main menu</span>
            {navbar ? (
              <AiOutlineClose
                onClick={() => setNavBar(!navbar)}
                className="text-white text-3xl cursor-pointer md:hidden z-50"
              />
            ) : (
              <AiOutlineAlignRight
                onClick={() => setNavBar(!navbar)}
                className="text-white text-3xl cursor-pointer md:hidden z-50"
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
              <Link
                to="home"
                activeClass="active-link"
                className="cursor-pointer md:text-[21px] block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  "
                aria-current="page"
              >
                What's
              </Link>
            </li>

            <li>
              <Link
                to="app"
                className="cursor-pointer md:text-[21px] block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  "
              >
                App
              </Link>
            </li>
            <li>
              <Link
                to="contents"
                className="cursor-pointer md:text-[21px] block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  "
              >
                Contents
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="md:text-[21px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center "
              >
                Go Premium
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

import assets from "../assets/index";

const LoginPage = () => {
  return (
    <section className="max-w-[800px] mx-auto px-3 font-poppins">
      <header className=" lg:py-10 ">
        <nav className="py-6">
          <div className="max-container flex justify-center items-center z-10">
            <div>
              <img src={assets.logoBlue} alt="logo" className="md:h-[50px] " />
            </div>
            {/* <button>
              <ul className="flex gap-5 relative">
                <li
                  className="flex items-center md:gap-5 gap-2 cursor-pointer"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <p className="font-bold">Login</p>
                  <img
                    src={assets.globalBlack}
                    alt="home"
                    className="md:scale-150"
                  />
                  <p className="md:text-[32px] font-extrabold text-black">
                    {language}
                  </p>
                  <img
                    src={assets.downBlack}
                    alt="arrow"
                    className="md:h-[20px] md:w-[30px] h-[15px] w-[20px]"
                  />

                  <ul
                    className={`${
                      isMenuOpen ? "" : "hidden"
                    } absolute bg-slate-800 md:top-14 top-8 right-0 md:w-[120px] w-[70px]`}
                  >
                    <li
                      className="p-2 cursor-pointer hover:bg-slate-400 text-white"
                      onClick={() => setLanguage("EN")}
                    >
                      EN
                    </li>
                    <li
                      className="p-2 cursor-pointer hover:bg-slate-400 text-white"
                      onClick={() => setLanguage("KR")}
                    >
                      KR
                    </li>
                  </ul>
                </li>
              </ul>
            </button> */}
          </div>
        </nav>
      </header>

      <label
        htmlFor="input-group-1"
        className="block mb-2 text-sm md:text-lg font-medium text-gray-900 "
      >
        Your Email
      </label>
      <div className="relative mb-6">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 16"
          >
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
          </svg>
        </div>
        <input
          type="text"
          id="input-group-1"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-700 focus:outline-none block w-full ps-10 p-2.5  "
          placeholder="Email"
        />
      </div>
      <label
        htmlFor="password"
        className="block mb-2 text-sm md:text-lg font-medium text-gray-900 "
      >
        Password
      </label>
      <div className="relative mb-6">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <img src={assets.password} alt="password" className="w-4 h-4" />
        </div>
        <input
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-700 focus:outline-none block w-full ps-10 p-2.5  "
          placeholder="Password"
        />
      </div>

      <div>
        <button
          type="button"
          className="text-white  focus:ring-4  font-medium rounded-lg text-sm md:text-lg px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800"
        >
          Login
        </button>
      </div>
    </section>
  );
};

export default LoginPage;

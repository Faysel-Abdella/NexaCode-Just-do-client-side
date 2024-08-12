import { useState } from "react";
import assets from "../assets/index";

const LoginPage = () => {
  const [language, setLanguage] = useState<"EN" | "KR">("EN");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="max-w-[800px] mx-auto px-3">
      <header className=" lg:py-10 ">
        <nav className="py-6">
          <div className="max-container flex justify-between items-center z-10">
            <div>
              <img src={assets.logoBlue} alt="logo" className="md:h-[50px] " />
            </div>
            <button>
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
            </button>
          </div>
        </nav>
      </header>

      <form>
        <p>Hi</p>
        <input className="border-b-2 max-w-[200px]  focus:outline-none" />
        <input />
      </form>
    </section>
  );
};

export default LoginPage;

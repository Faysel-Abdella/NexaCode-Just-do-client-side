import { useState } from "react";

import assets from "../../assets/index";

const Hero = () => {
  const [language, setLanguage] = useState<"EN" | "KR">("EN");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"what" | "app" | "explore">(
    "what"
  );
  return (
    <section>
      <header className=" bg-hero-bg  bg-no-repeat bg-center bg-cover ">
        <nav className="p-6">
          <div className="max-container flex justify-between items-center z-10">
            <div>
              <img src={assets.logo} alt="logo" className="md:h-[50px] " />
            </div>
            <button>
              <ul className="flex gap-5 relative">
                <li
                  className="flex items-center md:gap-5 gap-2 cursor-pointer"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <img
                    src={assets.global}
                    alt="home"
                    className="md:scale-150"
                  />
                  <p className="md:text-[32px] font-extrabold text-white">
                    {language}
                  </p>
                  <img
                    src={assets.down}
                    alt="arrow"
                    className="md:h-[20px] md:w-[30px] h-[15px] w-[20px]"
                  />

                  <ul
                    className={`${
                      isMenuOpen ? "" : "hidden"
                    } absolute bg-white md:top-14 top-8 right-0 md:w-[120px] w-[70px]`}
                  >
                    <li
                      className="p-2 cursor-pointer hover:bg-gray-200"
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
          </div>
        </nav>

        <div className="pl-4 md:pl-10 pt-40 md:pt-[35rem] pb-10 md:pb-[13rem]">
          <h1 className="text-white text-[36px] md:text-[62px]  font-fredoka font-[800] tracking-wider">
            Fuck it, just Run
          </h1>
          <p className="text-white text-[22px] md:text-[38px] font-poppins font-medium">
            Don’t hesitate, No time
          </p>
        </div>
      </header>

      <div className="flex justify-center gap-5 py-4 md:py-5 font-semibold text-fade shadow-[#E0E0E0_0px_2px_0px_0px]">
        <button
          className={`${
            activeTab === "what" ? "text-black border-b-2 border-black" : ""
          } md:text-[34px]`}
          onClick={() => setActiveTab("what")}
        >
          What's
        </button>
        <button
          className={`${
            activeTab === "app" ? "text-black border-b-2 border-black" : ""
          } md:text-[34px]`}
          onClick={() => setActiveTab("app")}
        >
          App
        </button>
        <button
          className={`${
            activeTab === "explore" ? "text-black border-b-2 border-black" : ""
          } md:text-[34px]`}
          onClick={() => setActiveTab("explore")}
        >
          Explore Content
        </button>
      </div>

      <div className="mt-10 px-2">
        <h2 className="text-center text-[20px] md:text-[34px] text-black font-[900]">
          What is ‘Just DO’
        </h2>
        <p className="mt-3 text-[15px] md:text-[26px] text-fade text-center">
          ‘JUST DO’ is the best repetition learning tool for all speaking
          practice and memorizing.
        </p>
      </div>

      <div className="mt-16 flex justify-center items-center">
        <img src={assets.youtube} alt="what" className="md:w-[70%]" />
      </div>
    </section>
  );
};

export default Hero;

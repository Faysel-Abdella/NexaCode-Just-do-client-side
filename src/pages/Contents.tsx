import { useState } from "react";

import assets from "../assets/index";

const Contents = () => {
  const [selectedType, setSelectedType] = useState("all");
  return (
    <section className="max-container pt-7 md:pt-10 ">
      <section>
        <header>
          <div className="flex items-center justify-center gap-32 md:gap-48 ">
            <img src={assets.logoBlue} alt="logo" className="md:size-20" />
            <h2 className="font-bold text-[18px] md:text-[24px]">
              Explore content
            </h2>
          </div>
          <div className="max-w-md mx-auto mt-5 px-3">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <img src={assets.explore} alt="search" className="size-5" />
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 py-3 ps-10 text-base text-gray-900 border border-gray-300 rounded-full bg-gray-100 focus:ring-blue-500 focus:border-blue-500  "
                placeholder="Search"
                required
              />
            </div>
          </div>

          <aside className="overflow-x-auto w-[700px] max-md:max-w-full mx-auto">
            <div className="w-full  bg-gradient-to-br from-yellow-50 via-cyan-500 to-blue-800 py-2 mt-6 mb-3 whitespace-nowrap">
              <ul className="flex items-center md:justify-center  w-full overflow-x-auto px-5">
                <li className="me-5">
                  <button
                    onClick={() => setSelectedType("all")}
                    className="${selectedType === 'all' ? 'text-white border-b-[4px] border-white' : 'text-white opacity-50'} font-semibold text-[18px] md:text-[24px]"
                  >
                    All
                  </button>
                </li>

                <li className="me-5">Test</li>
                <li className="me-5">School</li>
                <li className="me-5">Life</li>
                <li className="me-5">Business</li>
                <li className="me-5">Health</li>
                <li className="me-5">Food</li>
                <li className="me-5">Food</li>
                <li className="me-5">Food</li>
              </ul>
            </div>
          </aside>
        </header>
        <main className="px-3"></main>
      </section>
    </section>
  );
};

export default Contents;

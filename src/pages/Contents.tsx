import { useState } from "react";

import assets from "../assets/index";
import privateContents from "../data/private-contents";
import groupContents from "../data/group-study";

import PrivateStudy from "../components/contents-page/PrivateStudy";
import GroupStudy from "../components/contents-page/GroupStudy";

const Contents = () => {
  const [selectedType, setSelectedType] = useState("all");
  const [language, setLanguage] = useState("EN");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sort, setSort] = useState<"All" | "Recent">("All");
  return (
    <section className="max-container pt-7 md:pt-10 font-poppins" id="contents">
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
            <div className="w-full  bg-gradient-to-br from-yellow-50 via-cyan-500 to-blue-800 h-[50px] my-auto flex items-center justify-center mt-6 mb-3 whitespace-nowrap">
              <ul className="flex items-center md:justify-center  w-full overflow-x-auto px-5">
                <li className="me-5">
                  <button
                    onClick={() => setSelectedType("all")}
                    className={`${
                      selectedType === "all"
                        ? "text-white border-b-[4px] border-white"
                        : "text-white opacity-50"
                    } font-semibold text-[18px] md:text-[24px]`}
                  >
                    All
                  </button>
                </li>

                <li className="me-5">
                  <button
                    onClick={() => setSelectedType("test")}
                    className={`${
                      selectedType === "test"
                        ? "text-white border-b-[4px] border-white"
                        : "text-white opacity-50"
                    } font-semibold text-[18px] md:text-[24px]`}
                  >
                    Test
                  </button>
                </li>
                <li className="me-5">
                  <button
                    onClick={() => setSelectedType("school")}
                    className={`${
                      selectedType === "school"
                        ? "text-white border-b-[4px] border-white"
                        : "text-white opacity-50"
                    } font-semibold text-[18px] md:text-[24px]`}
                  >
                    School
                  </button>
                </li>
                <li className="me-5">
                  <button
                    onClick={() => setSelectedType("life")}
                    className={`${
                      selectedType === "life"
                        ? "text-white border-b-[4px] border-white"
                        : "text-white opacity-50"
                    } font-semibold text-[18px] md:text-[24px]`}
                  >
                    Life
                  </button>
                </li>
                <li className="me-5">
                  {" "}
                  <button
                    onClick={() => setSelectedType("business")}
                    className={`${
                      selectedType === "business"
                        ? "text-white border-b-[4px] border-white"
                        : "text-white opacity-50"
                    } font-semibold text-[18px] md:text-[24px]`}
                  >
                    Business
                  </button>
                </li>
                <li className="me-5">
                  {" "}
                  <button
                    onClick={() => setSelectedType("health")}
                    className={`${
                      selectedType === "health"
                        ? "text-white border-b-[4px] border-white"
                        : "text-white opacity-50"
                    } font-semibold text-[18px] md:text-[24px]`}
                  >
                    Health
                  </button>
                </li>
              </ul>
            </div>
          </aside>

          <div className="flex justify-center mt-1  md:mt-5">
            <ul className="flex  items-center gap-14 md:gap-20">
              <div
                className=" flex items-center gap-2 cursor-pointer relative z-40"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <img
                  src={assets.globalBlack}
                  alt="home"
                  className="md:scale-125"
                />
                <button className="md:text-[25px] font-extrabold text-[#767678]">
                  {language}
                </button>

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
              </div>
              <div
                className=" flex items-center gap-2 cursor-pointer relative z-40"
                onClick={() => setIsSortOpen(!isSortOpen)}
              >
                <button className="md:text-[25px] font-extrabold text-[#767678]">
                  {sort}
                </button>
                <img
                  src={assets.downBlack}
                  alt="arrow"
                  className="md:size-7 h-[15px] w-[20px]"
                />

                <ul
                  className={`${
                    isSortOpen ? "" : "hidden"
                  } absolute bg-slate-800 md:top-14 top-8 right-0 md:w-[120px] w-[70px]`}
                >
                  <li
                    className="p-2 cursor-pointer hover:bg-slate-400 text-white"
                    onClick={() => setSort("All")}
                  >
                    All
                  </li>
                  <li
                    className="p-2 cursor-pointer hover:bg-slate-400 text-white"
                    onClick={() => setSort("Recent")}
                  >
                    Recent
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </header>
        <main className="px-3 flex justify-center items-center mt-6 md:mt-14 pb-10">
          <main>
            <div className="flex flex-wrap justify-center items-center ">
              {privateContents.map((content, index) => {
                return (
                  <PrivateStudy
                    key={index}
                    thumbnail={content.thumbnail}
                    type={index % 2 === 0 ? "practice" : "vocabulary"}
                    title={content.title}
                    profile={content.profile}
                    userName={content.userName}
                    downloadCompleted={content.downloadCompleted}
                    totalDownloads={content.totalDownloads}
                  />
                );
              })}
            </div>

            <div className="flex justify-center items-center mt-5 md:mt-10">
              <button className=" text-white font-semibold focus:ring-4  rounded-lg text-sm md:text-xl px-5 md:px-9 py-2.5 md:py-3 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none">
                More
              </button>
            </div>

            <h2 className="text-[20px] md:text-[26px] font-bold text-center pt-10 pb-8">
              How about group study?
            </h2>

            <div className="flex flex-wrap justify-center items-center">
              {groupContents.map((content, index) => {
                return (
                  <GroupStudy
                    key={index}
                    thumbnail={content.thumbnail}
                    title={content.title}
                    description={content.description}
                  />
                );
              })}
            </div>
          </main>
        </main>
      </section>
    </section>
  );
};

export default Contents;

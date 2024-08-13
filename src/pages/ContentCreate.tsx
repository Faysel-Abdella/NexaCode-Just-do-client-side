import { useState } from "react";

import Common from "../components/content-create-page/Common";
import Practice from "../components/content-create-page/Practice";
import Vocabulary from "../components/content-create-page/Vocabulary";

const ContentCreate = () => {
  const [selectedType, setSelectedType] = useState<"practice" | "card">(
    "practice"
  );

  const [selectedLanguage, setSelectedLanguage] = useState<"EN" | "KR">("EN");
  const [title, setTitle] = useState<string>("");
  const [imagePath, setImagePath] = useState<string | null>(null);
  const [description, setDescription] = useState<string>("");

  const handleSubmit = () => {
    // Peter, you can use these values to create a new content. This is as example.
    console.log("Selected language: ", selectedLanguage);
    console.log("Title: ", title);
    console.log("Image URL: ", imagePath);
    console.log("Description: ", description);
  };
  return (
    <section className="max-w-[800px] mx-auto px-3 py-10 md:pt-16 font-poppins">
      <h2 className="text-gray-900 text-center font-bold md:text-[28px]">
        CREATE NEW CONTENT
      </h2>

      <main className="mt-10 md:mt-20">
        {/* Common for both practice and vocabulary flash card */}
        <div>
          <label htmlFor="type" className="md:text-[21px] font-semibold">
            Content type
          </label>
          <select
            name="type"
            id="type"
            className="block w-full text-[21px] max-md:text-[15px] p-2 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-1 focus:border-blue-300"
            onChange={(e) =>
              setSelectedType(e.target.value as "practice" | "card")
            }
          >
            <option value="practice" className="max-md:text-[15px] text-[21px]">
              Speaking practice
            </option>
            <option value="card" className="max-md:text-[15px] text-[21px]">
              Flash Cards
            </option>
          </select>
        </div>
        <Common
          setSelectedLanguage={setSelectedLanguage}
          setTitle={setTitle}
          setImagePath={setImagePath}
        />
        {/* Changeable */}
        {selectedType === "practice" ? (
          <Practice setDescription={setDescription} />
        ) : (
          <Vocabulary />
        )}
      </main>
      <footer className="flex justify-center items-center mt-7 border-t-[4px] border-gray-900 pt-5">
        <button
          type="button"
          className="text-gray-900  focus:ring-4  font-medium rounded-lg text-sm md:text-lg px-5 md:px-9 py-2.5 md:py-3 me-2 mb-2 bg-slate-100 hover:slate-100 focus:outline-none focus:ring-slate-200"
        >
          Cancel
        </button>
        <button
          type="button"
          className="text-white   focus:ring-4 font-medium rounded-lg text-sm md:text-lg px-5 md:px-9 py-2.5 md:py-3 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800"
          onClick={handleSubmit}
        >
          Ok
        </button>
      </footer>
    </section>
  );
};

export default ContentCreate;

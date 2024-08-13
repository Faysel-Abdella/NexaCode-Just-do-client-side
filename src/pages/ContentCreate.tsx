import { useState } from "react";

import assets from "../assets/index";

const ContentCreate = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImageUrl(e.target?.result as string);
      };

      reader.readAsDataURL(file);

      event.target.value = "";
    }
  };

  return (
    <section className="max-w-[800px] mx-auto px-3 py-10 md:pt-16 font-poppins">
      <h2 className="text-gray-900 text-center font-bold md:text-[28px]">
        CREATE NEW CONTENT
      </h2>

      <main className="mt-10 md:mt-20">
        <div>
          <label htmlFor="type" className="md:text-[21px] font-semibold">
            Content type
          </label>
          <select
            name="type"
            id="type"
            className="block w-full text-[21px] max-md:text-[15px] p-2 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-1 focus:border-blue-300"
          >
            <option value="practice" className="max-md:text-[15px] text-[21px]">
              Speaking practice
            </option>
            <option value="card" className="max-md:text-[15px] text-[21px]">
              Flash Cards
            </option>
          </select>
        </div>
        <div className="mt-5">
          <label htmlFor="language" className="md:text-[21px] font-semibold">
            Select Language
          </label>
          <select
            name="language"
            id="language"
            className="block w-full text-[21px] max-md:text-[15px] p-2 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-1 focus:border-blue-300"
          >
            <option value="practice" className="max-md:text-[15px] text-[21px]">
              EN
            </option>
            <option value="card" className="max-md:text-[15px] text-[21px]">
              KR
            </option>
          </select>
        </div>
        <div className="mt-5">
          <label htmlFor="title" className="md:text-[21px] font-semibold">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter title"
            className="block w-full text-[21px] max-md:text-[15px] p-2 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-1 focus:border-blue-300"
          />
        </div>
        <div className="mt-5">
          <div className="flex justify-between items-center">
            <p className="md:text-[21px] font-semibold">
              Content thumbnail (main image)
            </p>
            {imageUrl && (
              <button
                className="text-red-500 md:text-[21px] font-semibold"
                onClick={() => setImageUrl(null)}
              >
                DEL
              </button>
            )}
          </div>
          <div className="mt-2">
            <label
              className="flex justify-center items-center border h-[200px] md:h-[280px] "
              htmlFor="image-upload"
            >
              {imageUrl ? (
                <img src={imageUrl} className="w-full h-full object-cover" />
              ) : (
                <img
                  src={assets.imageUpload}
                  className="size-11 md:size-20 cursor-pointer"
                />
              )}
            </label>
            <input
              type="file"
              name="image-upload"
              id="image-upload"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>
        </div>

        <div className="mt-5">
          <div className="flex justify-between items-center">
            <p className="md:text-[21px] font-semibold">Excel file</p>

            <button className="md:text-[21px] font-semibold">
              <img src={assets.info} alt="info" className="w-6 h-6" />
            </button>
          </div>
          <input
            type="text"
            name="excel-file"
            id="excel-file"
            className="block w-full text-[21px] max-md:text-[15px] p-2 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-1 focus:border-blue-300"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="description" className="md:text-[21px] font-semibold">
            Content text
          </label>
          <textarea
            name="description"
            id="description"
            rows={5}
            className="block w-full text-[21px] max-md:text-[15px] p-2 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-1 focus:border-blue-300"
          ></textarea>
        </div>

        <div className="mt-5">
          <label htmlFor="voice" className="md:text-[21px] font-semibold">
            Voice Select
          </label>
          <select
            name="voice"
            id="voice"
            className="block w-full text-[21px] max-md:text-[15px] p-2 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-1 focus:border-blue-300"
          >
            <option value="us" className="max-md:text-[15px] text-[21px]">
              En-US-Wavenet-D
            </option>
            <option value="kr" className="max-md:text-[15px] text-[21px]">
              Kr-KO-Wavenet-A
            </option>
          </select>
          <div className="flex justify-end items-center gap-2 mt-1">
            <p className="text-[18px] font-semibold">Voice</p>
            <button className="md:text-[21px] font-semibold">
              <img src={assets.voice} alt="voice" className="size-8 " />
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="share" className="md:text-[21px] font-semibold">
            Share
          </label>
          <div className="flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              name="share"
              id="share"
              className="block size-6 md:size-8 text-[21px] max-md:text-[15px] p-2 border border-gray-300 cursor-pointer rounded-md  focus:outline-none  "
            />
            <span className="md:text-[21px]">Only me</span>
          </div>
        </div>

        <div className="mt-5 border-t-2 pt-5">
          <label htmlFor="public" className="md:text-[21px] font-semibold">
            public
          </label>
          <div className="flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              name="public"
              id="public"
              className="block size-6 md:size-8 text-[21px] max-md:text-[15px] p-2 border border-gray-300 cursor-pointer rounded-md  focus:outline-none  "
            />
            <span className="md:text-[21px]">Category</span>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              name="public"
              id="public"
              className="block size-6 md:size-8 text-[21px] max-md:text-[15px] p-2 border border-gray-300 cursor-pointer rounded-md  focus:outline-none  "
            />
            <span className="md:text-[21px]">Category</span>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              name="public"
              id="public"
              className="block size-6 md:size-8 text-[21px] max-md:text-[15px] p-2 border border-gray-300 cursor-pointer rounded-md  focus:outline-none  "
            />
            <span className="md:text-[21px]">Category</span>
          </div>
        </div>

        <div className="mt-5 border-t-2 pt-5">
          <label htmlFor="group" className="md:text-[21px] font-semibold">
            Group
          </label>
          <p className="max-md:text-[14px] text-[18px]">
            You can only share to the group you created
          </p>
          <div className="mt-5 border-t-2 pt-5">
            <div className="flex items-center gap-2 mt-4">
              <input
                type="checkbox"
                name="group"
                id="group"
                className="block size-6 md:size-8 text-[21px] max-md:text-[15px] p-2 border border-gray-300 cursor-pointer rounded-md  focus:outline-none  "
              />
              <span className="md:text-[21px]">Group name1</span>
            </div>
          </div>
          <aside className="pl-10">
            <div>
              <div className="flex items-center gap-2 mt-4">
                <input
                  type="checkbox"
                  name="class"
                  id="class"
                  className="block size-6 md:size-8 text-[21px] max-md:text-[15px] p-2 border border-gray-300 cursor-pointer rounded-md  focus:outline-none  "
                />
                <span className="md:text-[21px]">Class name1</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mt-4">
                <input
                  type="checkbox"
                  name="class2"
                  id="class2"
                  className="block size-6 md:size-8 text-[21px] max-md:text-[15px] p-2 border border-gray-300 cursor-pointer rounded-md  focus:outline-none  "
                />
                <span className="md:text-[21px]">Class name2</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mt-4">
                <input
                  type="checkbox"
                  name="class3"
                  id="class3"
                  className="block size-6 md:size-8 text-[21px] max-md:text-[15px] p-2 border border-gray-300 cursor-pointer rounded-md  focus:outline-none  "
                />
                <span className="md:text-[21px]">Class name3</span>
              </div>
            </div>
          </aside>
        </div>
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
        >
          Ok
        </button>
      </footer>
    </section>
  );
};

export default ContentCreate;

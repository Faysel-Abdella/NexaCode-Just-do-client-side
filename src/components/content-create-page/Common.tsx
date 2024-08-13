import { useState } from "react";

import assets from "../../assets/index";

const Common = ({
  setSelectedLanguage,
  setTitle,
  setImagePath,
  children,
}: {
  setSelectedLanguage: (value: "EN" | "KR") => void;
  setTitle: (value: string) => void;
  setImagePath: (value: string | null) => void;
  children?: React.ReactNode;
}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImageUrl(e.target?.result as string);
        setImagePath(e.target?.result as string);
      };

      reader.readAsDataURL(file);

      event.target.value = "";
    }
  };
  return (
    <section>
      <div className="mt-5">
        <label htmlFor="language" className="md:text-[21px] font-semibold">
          Select Language
        </label>
        <select
          name="language"
          id="language"
          className="block w-full text-[21px] max-md:text-[15px] p-2 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-1 focus:border-blue-300"
          onChange={(e) => setSelectedLanguage(e.target.value as "EN" | "KR")}
        >
          <option value="EN" className="max-md:text-[15px] text-[21px]">
            EN
          </option>
          <option value="KR" className="max-md:text-[15px] text-[21px]">
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
          onChange={(e) => setTitle(e.target.value)}
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

      {/* ####  #### ####  */}
      {children}
      {/*####  ####  ####  */}

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
    </section>
  );
};

export default Common;

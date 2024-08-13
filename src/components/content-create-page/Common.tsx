import { useState } from "react";

import assets from "../../assets/index";

const Common = ({
  setSelectedLanguage,
  setTitle,
  setImagePath,
}: {
  setSelectedLanguage: (value: "EN" | "KR") => void;
  setTitle: (value: string) => void;
  setImagePath: (value: string | null) => void;
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
    </section>
  );
};

export default Common;

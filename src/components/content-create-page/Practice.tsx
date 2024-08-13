import assets from "../../assets/index";

const Practice = ({
  setDescription,
}: {
  setDescription: (value: string) => void;
}) => {
  return (
    <section>
      <div className="mt-5">
        <label htmlFor="description" className="md:text-[21px] font-semibold">
          Content text
        </label>
        <textarea
          name="description"
          id="description"
          rows={5}
          className="block w-full text-[21px] max-md:text-[15px] p-2 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-1 focus:border-blue-300"
          onChange={(e) => setDescription(e.target.value)}
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
    </section>
  );
};

export default Practice;

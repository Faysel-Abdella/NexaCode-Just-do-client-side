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
    </section>
  );
};

export default Practice;

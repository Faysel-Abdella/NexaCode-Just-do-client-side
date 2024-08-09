import assets from "../assets/index";

const Drill = () => {
  return (
    <section className="py-8 px-5 font-poppins md:flex md:items-center md:justify-center gap-5">
      <div className="md:w-[50%]">
        <header className="flex items-center gap-5 pb-5">
          <img src={assets.drillIcon} alt="Drill" />
          <h2 className="font-fredoka font-bold text-[32px] max-md:text-[22px]">
            DRILL
          </h2>
        </header>

        <p className=" text-fade md:text-[22px]">Let’s get started drilling!</p>
        <p className=" text-fade md:text-[22px]">
          This is a space where the selected learning materials are practiced
          intensively.
        </p>

        <ul className="text-black font-semibold pt-5 pb-8 md:text-[20px]">
          <li>You can :</li>
          <li>• focus much more easily through setting a goal.</li>
          <li>
            • see the result of your study challenge and see if you succeeded or
            failed.
          </li>
          <li>• have your own collection of sentences and word books.</li>

          <li>
            • see achievements of your studying like speaking practice time,
            number of repetitions and memorized words.
          </li>
        </ul>
      </div>

      <div className="flex justify-center items-center">
        <img src={assets.drillImage} alt="Drill" />
        <img src={assets.drillImage02} alt="Drill" />
      </div>
    </section>
  );
};

export default Drill;

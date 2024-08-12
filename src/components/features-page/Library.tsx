import assets from "../../assets/index";
const Library = () => {
  return (
    <section className="py-8 px-5 font-poppins md:flex md:items-center md:justify-center gap-5">
      <div className="md:w-[50%]">
        <header className="flex items-center gap-5 pb-5">
          <img src={assets.libraryIcon} alt="library" />
          <h2 className="font-fredoka font-bold text-[32px] max-md:text-[22px]">
            LIBRARY
          </h2>
        </header>

        <p className=" text-fade md:text-[22px]">
          This menu is for sharing content in various languages.
        </p>
        <p className=" text-fade md:text-[22px]">
          You can search & download the content which you need to practice
          speaking and create own your groups for your students.
        </p>

        <ul className="text-black font-semibold pt-5 pb-8 md:text-[20px]">
          <li>• Select the language you are going to study</li>
          <li>• There are 7 different subjects</li>
          <li>• There are two types of studying. </li>
          <li className="pl-3">
            Speaking practice content and Vocabulary content for memorizing.
          </li>
          <li>
            • You can create an open group or a secret group to share your own
            content exclusively with group members.
          </li>
        </ul>
      </div>

      <div className="flex justify-center items-center">
        <img
          src={assets.libraryImage}
          alt="library"
          className="w-[164px] h-[258px]"
        />
        <img
          src={assets.libraryImage02}
          alt="library"
          className="w-[164px] h-[258px]"
        />
      </div>
    </section>
  );
};

export default Library;

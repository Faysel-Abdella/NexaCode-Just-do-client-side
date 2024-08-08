import assets from "../assets/index";

const Library = () => {
  return (
    <section className="py-8 px-5 font-poppins">
      <header className="flex items-center gap-5 pb-5">
        <img src={assets.libraryIcon} alt="library" />
        <h2 className="font-fredoka font-bold text-[32px] max-md:text-[22px]">
          LIBRARY
        </h2>
      </header>

      <p className=" text-fade">
        This menu is for sharing content in various languages.
      </p>
      <p className=" text-fade">
        You can search & download the content which you need to practice
        speaking and create own your groups for your students.
      </p>

      <ul className="text-black font-semibold pt-5 pb-8">
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

      <div className="flex justify-center items-center">
        <img src={assets.libraryImage} alt="library" />
        <img src={assets.libraryImage02} alt="library" />
      </div>
    </section>
  );
};

export default Library;

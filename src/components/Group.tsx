import assets from "../assets/index";

const Group = () => {
  return (
    <section className="py-8 px-5 font-poppins">
      <header className="flex items-center gap-5 pb-5">
        <img src={assets.groupIcon} alt="Group" />
        <h2 className="font-fredoka font-bold text-[32px] max-md:text-[22px]">
          GROUP
        </h2>
      </header>

      <p className=" text-fade">
        You can create own your group anytime! This is a really helpful section
        especially for teachers, parents and tutors.
      </p>
      <p className=" text-fade">
        You can create groups for various subjects and study with members and
        see their learning progress.
      </p>

      <ul className="text-black font-semibold pt-5 pb-8">
        <li>• There are open groups and secret groups</li>
        <li>• You can create subcategories for each class.</li>
        <li>• You can customize the main page for your group.</li>

        <li>
          • Create or join groups for specific subjects like medical
          terminology, legal terminology etc.
        </li>
      </ul>

      <div className="flex justify-center items-center">
        <img src={assets.groupImage} alt="Group" />
        <img src={assets.groupImage02} alt="Group" />
      </div>
    </section>
  );
};

export default Group;

import assets from "../assets/index";

const Profile = () => {
  return (
    <section className="py-8 px-5 font-poppins">
      <header className="flex items-center gap-5 pb-5 md:justify-center">
        <img src={assets.profileIcon} alt="Profile" />
        <h2 className="font-fredoka font-bold text-[32px] max-md:text-[22px]">
          PROFILE
        </h2>
      </header>

      <p className=" text-fade md:text-center md:text-[28px]">
        My information & Set up page.
      </p>
      <p className=" text-fade md:text-center md:text-[24px]">
        You can share your achievement with your friends or teachers.
      </p>

      <div className="md:flex md:justify-center md:items-center">
        <ul className="text-black font-semibold pt-5 pb-8 md:text-[20px]">
          <li>
            • Parents or teacher can see the learning progress of their linked
            students.
          </li>
          <li>• You can connect with friends and study together.</li>
          <li>• There are two types of studying. </li>
          <li>• You can set alarms to remind you to study.</li>
        </ul>
      </div>

      <h2 className="text-[32px] mb-6 md:text-center md:mt-8">
        How to use{" "}
        <span className="font-fredoka font-semibold">
          Just <span className="font-extrabold">DO!</span>
        </span>
      </h2>

      <div className="flex justify-center items-center">
        <img src={assets.profileImage} alt="Profile" />
        <img src={assets.profileImage02} alt="Profile" />
      </div>

      <article className="md:flex md:items-center md:justify-center gap-5 md:text-[22px]">
        <div className="md:w-[50%]">
          <h3 className="font-bold pt-7 pb-3 md:text-[22px]">
            Speaking Practice
          </h3>

          <p className=" text-fade md:text-[22px]">
            This is learning content for speaking practice or for memorizing
            something consisting of multiple sentences
          </p>

          <ul className="text-black font-semibold pt-5 pb-2 md:text-[20px]">
            <li>
              • Set interval time for shadowing and number of repetitions.
            </li>
            <li>• Select either explain mode or conversation mode.</li>
            <li>
              • Choose a role A or B. Roleplay with AI as your counterpart.
            </li>
            <li>
              • It is effective to practice following along looking at the
              screen first and then gradually focusing on listening and
              speaking.
            </li>
          </ul>
        </div>

        <div className="flex justify-between items-center ">
          <img src={assets.practiceImage01} alt="Profile" />
          <img src={assets.practiceImage02} alt="Profile" />
          <img src={assets.practiceImage03} alt="Profile" />
          <img src={assets.practiceImage04} alt="Profile" />
        </div>
      </article>

      <article className="md:flex md:items-center md:justify-center gap-5 md:text-[22px]">
        <div className="md:w-[50%]">
          <h3 className="font-bold pt-7 pb-3 md:text-[22px]">
            Vocabulary Flashcards
          </h3>

          <p className=" text-fade md:text-[22px]">
            This is learning content for memorizing anything. There are 3 ways
            to study
          </p>

          <ul className="text-black font-semibold pt-5 pb-14 md:text-[20px]">
            <li>
              • Set the interval time and number of repetition for playing
              content in listening mode.
            </li>
            <li>
              • Try to memorize short sentences or vocabulary in flashcards
              mode.
            </li>
            <li> You can check the words memorized or not memorized.</li>
            <li>• Test yourself anytime in objective test mode.</li>
          </ul>
        </div>

        <div className="flex justify-between items-center">
          <img src={assets.flashCard} alt="Profile" />
          <img src={assets.flashCard02} alt="Profile" />
        </div>
      </article>

      <article className="md:flex md:items-center md:justify-center gap-5">
        <div className="md:w-[50%]">
          <h3 className="font-bold pt-7 pb-3 md:text-[22px]">
            All you need is text to easily create content.
          </h3>
          <h3 className="font-bold pt-3 pb-3 md:text-[22px]">
            Conveniently create content by importing Excel files.
          </h3>

          <ul className="text-fade font-semibold pt-5 pb-14 md:text-[20px]">
            <li>• To create your own content, tap the ‘+(new)’ button.</li>
            <li>
              • Choose the language and the type of content : speaking or
              vocabulary.
            </li>
            <li>• Paste or type the text into the textbox.</li>
            <li>• Tap the ‘auto separate’ button and edit.</li>
            <li>• Select a voice.</li>
            <li>
              • Select sharing categories or groups if you want to share your
              content.
            </li>
            <li>
              • If you use the excel file from ‘Just DO’, it’ll be easier to
              create massive learning content like hundreds of vocabulary
              flashcards or speaking content consisting of many sentences.
            </li>
          </ul>
        </div>

        <div className="flex justify-between items-center ">
          <img src={assets.infoImage01} alt="Profile" />
          <img src={assets.infoImage02} alt="Profile" />
        </div>
      </article>

      <h3 className="font-bold pt-7 pb-3 md:text-center md:text-[32px]">
        Let’s set goals and stay focused!
      </h3>
      <h3 className="font-bold pt-3 pb-3 md:text-center md:text-[24px]">
        The goal setting function is very useful to study hard within a short
        amount of time.
      </h3>

      <div className="md:flex md:justify-center md:items-center">
        <ul className="text-fade font-semibold pt-5 pb-14 md:text-[20px]">
          <li>
            • Our service is the best way to memorize information for any test,
            presentation, interview, script and so on.
          </li>
          <li>
            • For intensive practice, you can set deadlines and the number of
            repetitions.
          </li>
          <li>
            • In that case, 'Just DO' starts a countdown until the deadline you
            set and you have to practice repeatedly during this period.
          </li>
          <li>
            • If you finished what you are supposed to repeat, you can set
            accomplishment records.
          </li>
        </ul>
      </div>

      <div className="flex justify-center items-center pt-5">
        <button className="bg-[#00DADA] text-white font-bold py-3 px-24 rounded-[100px]">
          CLOSE
        </button>
      </div>
    </section>
  );
};

export default Profile;

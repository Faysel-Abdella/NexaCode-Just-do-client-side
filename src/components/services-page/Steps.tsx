import Step from "./Step";
import assets from "../../assets/index";

const Steps = () => {
  return (
    <section className="mt-24 px-5 flex flex-wrap  justify-center    w-full">
      <div className="w-1/2 max-lg:w-full mb-20  lg:pr-[25px]">
        <Step
          img={assets.kids}
          title="Can you speak naturally?"
          subtitle="Speaking practice should be first for learning languages or memorizing something."
          contentOne="Just DO is a learning service to help learners practice speaking or memorizing with AI voice while listening and following along."
          contentTwo="Try practicing speaking in various languages from around the world."
        />
      </div>
      <div className="w-1/2 max-lg:w-full mb-20">
        <section>
          <div>
            <img
              src={assets.study}
              alt="intro"
              className="lg:w-[450px] lg:h-[350px] object-cover w-full h-[260px] rounded-lg"
            />
            <h1 className="text-black text-[22px] lg:text-[32px] font-bold my-3">
              The best way for memorizing
            </h1>
            <h2 className="text-[#006CD8] text-[15px] font-medium lg:text-[28px]">
              Speaking practice is not necessarily limited to language learning.
            </h2>
            <h2 className="text-[#006CD8] text-[15px] font-medium lg:text-[28px] mb-3">
              It can be used for everything you need to memorize.
            </h2>
            <p className="text-fade text-[15px] lg:text-[24px]">
              When you give a presentation, get a job interview or make a
              speech, You’ll have to practice speaking and memorizing.
            </p>
            <p className="text-fade text-[15px] lg:text-[24px]">
              This app can be used to help you :
            </p>
            <ul>
              <li className="text-fade text-[15px] lg:text-[24px]">
                • learn languages
              </li>
              <li className="text-fade text-[15px] lg:text-[24px]">
                • practice speaking for presentations
              </li>
              <li className="text-fade text-[15px] lg:text-[24px]">
                • memorize a script
              </li>
              <li className="text-fade text-[15px] lg:text-[24px]">
                • memorize anything important like economic terms, medical words
                and so on.
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className="w-1/2 max-lg:w-full mb-20 m-0  lg:pr-[25px]">
        <Step
          img={assets.kids}
          title="What you want, What you need"
          subtitle="You can make content that you want to practice with any language."
          contentOne="You can easily create the content that you want or need and then study hard."
          contentTwo="Furthermore, if you use the excel file from ‘Just Do’, it’ll be easier to create massive learning content like 200 flashcards consisting of many sentences written material."
          contentThree="The best way to maximize efficiency when studying is to focus on exactly what you need. If you focus on studying exactly what you need, your efficiency will be the best."
        />
      </div>
      <div className="w-1/2 max-lg:w-full mb-20">
        <Step
          img={assets.kids}
          title="Go with friends or teachers"
          subtitle="Are you a student or a teacher? It doesn’t matter."
          contentOne="Are you not sure about what to do first? Then you can download study content."
          contentTwo="Not only can you download the content that you need but you can also create your own group and share your content exclusively with your group members."
          contentThree="Every user can make their own collection of sentences or vocabulary lists to study which can be shared with your friends."
        />
      </div>
    </section>
  );
};

export default Steps;

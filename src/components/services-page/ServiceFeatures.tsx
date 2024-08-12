import assets from "../../assets/index";
import ServiceFeature from "./ServiceFeature";

const ServiceFeatures = () => {
  return (
    <section className="mx-auto">
      <section className="max-container px-4 grid place-items-center grid-cols-3  max-[1450px]:grid-cols-2 max-[920px]:grid-cols-1 gap-y-10 gap-x-10">
        <ServiceFeature
          icon={assets.listen}
          title="Listen and Follow along"
          contentOne="It may not be enough to repeat something over and over."
          contentTwo="You have to practice speaking until you can say it naturally."
        />

        <ServiceFeature
          icon={assets.pc}
          iconTwo={assets.card}
          title="Flashcards for vocabulary"
          contentOne="There are three ways to study vocabulary."
          contentTwo="Listening, Flashcards and Objective test."
        />
        <ServiceFeature
          icon={assets.teacher}
          iconTwo={assets.discuss}
          title="Explanation or Dialogue"
          contentOne="You can practice speaking in real life situations with role playing."
        />
        <ServiceFeature
          icon={assets.time}
          iconTwo={assets.goal}
          title="Set a Goal"
          contentOne="You can focus on the content that you need to within a short amount of time."
          contentTwo="Let’s set a goal and try hard!"
        />
        <ServiceFeature
          icon={assets.group}
          iconTwo={assets.level}
          title="Study together or Teacher’s guidance"
          contentOne="Teachers or parents can see how much their students or kids studied what they are supposed to study."
        />
        <ServiceFeature
          icon={assets.phone}
          title="Create and Download content"
          contentOne="It’s ok If you don’t want to share or create."
          contentTwo="You just download it and study it by yourself."
        />

        <ServiceFeature
          icon={assets.meeting}
          iconTwo={assets.students}
          title="Create your own group"
          contentOne="You can create several classes in your groups."
        />
        <ServiceFeature
          icon={assets.home}
          title="Homepage for your own group"
          contentOne="We offer you the ability to customize the main page for your groups."
        />
        <div className="max-[1450px]:col-span-2 max-[920px]:col-span-1 flex max-[1450px]:justify-center max-[920px]:justify-start">
          <ServiceFeature
            icon={assets.copy}
            title="It’s enough to create content by using copy & paste"
            contentOne="If you want to add sentences that you need, you can easily add them using copy & paste."
          />
        </div>
      </section>
    </section>
  );
};

export default ServiceFeatures;

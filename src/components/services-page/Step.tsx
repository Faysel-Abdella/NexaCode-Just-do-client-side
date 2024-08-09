const Step = ({
  img,
  title,
  subtitle,
  contentOne,
  contentTwo,
  contentThree,
}: {
  img: any;
  title: string;
  subtitle: string;
  contentOne: string;
  contentTwo?: string;
  contentThree?: string;
}) => {
  return (
    <section>
      <div>
        <img
          src={img}
          alt="intro"
          className="lg:w-[450px] lg:h-[350px] object-cover w-full h-[260px] rounded-lg"
        />
        <h1 className="text-black text-[22px] lg:text-[32px] font-bold my-3">
          {title}
        </h1>
        <h2 className="text-[#006CD8] text-[15px] font-medium lg:text-[28px] mb-3">
          {subtitle}
        </h2>
        <p className="text-fade text-[15px] lg:text-[24px]">{contentOne}</p>
        {contentTwo && (
          <p className="text-fade text-[15px] lg:text-[24px]">{contentTwo}</p>
        )}
        {contentThree && (
          <p className="text-fade text-[15px] lg:text-[24px]">{contentThree}</p>
        )}
      </div>
    </section>
  );
};

export default Step;

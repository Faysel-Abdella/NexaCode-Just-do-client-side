const ServiceFeature = ({
  icon,
  iconTwo,
  title,
  contentOne,
  contentTwo,
}: {
  icon: any;
  iconTwo?: any;
  title: string;
  contentOne: string;
  contentTwo?: string;
}) => {
  return (
    <section className="lg:w-[450px] lg:h-[500px] w-[430px] h-[350px] max-[430px]:w-[100%] max-lg:pb-16 shadow-lg border-b-2 px-5 pt-6 ">
      <div className="flex flex-col items-center">
        <div className="flex self-end gap-3">
          <img src={icon} alt="intro" className="size-[70px]" />
          {iconTwo && <img src={iconTwo} alt="intro" className="size-[70px]" />}
        </div>

        <h1 className="w-[300px] text-black text-[20px] text-center lg:text-[32px] font-bold mt-10 mb-9">
          {title}
        </h1>
        <div className="lg:w-[400px]">
          <p className="text-fade text-[15px] text-center lg:text-[26px] ">
            {contentOne}
          </p>
          {contentTwo && (
            <p className="text-fade text-[15px] text-center lg:text-[26px]">
              {contentTwo}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeature;

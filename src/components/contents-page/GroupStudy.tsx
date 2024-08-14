const GroupStudy = ({
  thumbnail,
  title,
  description,
}: {
  thumbnail: string;
  title: string;
  description: string;
}) => {
  return (
    <section className="w-[164px] md:w-[250px] h-[240px] md:h-[305px]  border border-gray-700 shadow-sm md:m-6 max-md:mx-2 max-md:my-3">
      <img
        src={thumbnail}
        alt="thumbnail"
        className="w-full h-[130px] md:h-[180px]  object-cover"
      />
      <div className="flex justify-center items-center h-[50px] bg-slate-200">
        <h2 className=" text-[13px] md:text-[18px]  px-1 font-bold text-center  line-clamp-2 leading-5 ">
          {title}
        </h2>
      </div>
      <div className="h-[60px]">
        <p className="text-[12px] md:text-[16px] px-2 text-gray-800 line-clamp-3 ">
          {description}
        </p>
      </div>
    </section>
  );
};

export default GroupStudy;

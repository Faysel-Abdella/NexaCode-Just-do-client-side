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
    <section className="w-[164px] md:w-[250px] h-[240px] md:h-[300px]  border border-gray-700 shadow-sm md:m-6 max-md:mx-2 max-md:my-3">
      <img
        src={thumbnail}
        alt="thumbnail"
        className="w-full h-[130px] md:h-[180px]  object-cover"
      />
      <h2 className="text-[13px] md:text-[20px] px-1 font-bold text-center pt-3 line-clamp-2">
        {title}
      </h2>
      <p className="text-[12px] md:text-[16px] px-2 text-gray-400 line-clamp-2 h-[60px]">
        {description}
      </p>
    </section>
  );
};

export default GroupStudy;

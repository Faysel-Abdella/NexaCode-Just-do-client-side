import assets from "../../assets";

const PrivateStudy = ({
  thumbnail,
  title,
  profile,
  userName,
  type,
  downloadCompleted,
  totalDownloads,
}: {
  thumbnail: any;
  title: string;
  profile: any;
  userName: string;
  type: "practice" | "vocabulary";
  downloadCompleted: boolean;
  totalDownloads: number;
}) => {
  return (
    <section className="md:m-6 max-md:my-3">
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={thumbnail}
            alt="thumbnail"
            className="w-[112px] h-[80px] md:w-[150px] md:h-[110px]  object-cover rounded-md"
          />
          <img
            src={type === "practice" ? assets.practice : assets.vocabularyCard}
            className="size-[30px] absolute bottom-0 left-0"
            alt="card"
          />
        </div>
        <div className="border-b border-gray-900 pb-4 w-[220px]">
          <h3 className="text-[17px] md:text-[22px] font-semibold line-clamp-2">
            {title}
          </h3>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-1">
              <img
                src={profile}
                alt="profile"
                className="size-[24px] rounded-full"
              />
              <span className="md:text-[16px] font-medium">{userName}</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src={
                  downloadCompleted ? assets.downloadCompleted : assets.download
                }
                alt="Download info"
                className="size-6 cursor-pointer"
              />
              <p className="border-blue-600 flex justify-center items-center text-blue-800 font-semibold">
                {totalDownloads < 999 ? totalDownloads : "999+"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateStudy;

import assets from "../assets/index";
import Library from "../components/Library";
import Group from "../components/Group";
import Drill from "../components/Drill";
import Profile from "../components/Profile";

const FeaturesPage = () => {
  return (
    <section className="py-10">
      <header className="text-center flex justify-center items-center">
        <div>
          <h1 className="text-[46px] max-md:text-[32px]">
            <span className="font-fredoka font-medium">Just</span>
            <span className="font-fredoka font-extrabold"> DO!</span>
            <span> Features</span>
          </h1>
          <div className="mt-10 max-md:mt-5">
            <img src={assets.hero} alt="hero" />
          </div>
          <h2 className="text-[46px] max-md:text-[32px] mt-5">
            <span className="font-fredoka font-medium">Just</span>
            <span className="font-fredoka font-extrabold"> DO!</span>
          </h2>
          <p className="text-[36px] max-md:text-[26px]">
            Don’t think! No time!
          </p>
          <div className="flex justify-center mt-7">
            <img src={assets.feature01} alt="feature-example-01" />
            <img src={assets.feature02} alt="feature-example-02" />
          </div>
        </div>
      </header>

      <main className="mt-8">
        <Library />
        <Group />
        <Drill />
        <Profile />
      </main>
    </section>
  );
};

export default FeaturesPage;

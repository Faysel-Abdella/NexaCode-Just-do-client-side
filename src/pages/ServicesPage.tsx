import { useNavigate } from "react-router-dom";

import Hero from "../components/services-page/Hero";
import ServiceFeatures from "../components/services-page/ServiceFeatures";
import Steps from "../components/services-page/Steps";

const ServicePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/features");
  };

  return (
    <section className="max-container pb-10">
      <Hero />
      <Steps />
      <ServiceFeatures />
      <div className="flex justify-center items-center pt-36">
        <button
          className="bg-[#00DADA] text-white font-bold py-3 px-24 rounded-[100px]"
          onClick={handleClick}
        >
          NEXT
        </button>
      </div>
    </section>
  );
};

export default ServicePage;

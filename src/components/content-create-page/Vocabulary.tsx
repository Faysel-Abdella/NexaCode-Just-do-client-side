import { useState } from "react";

import assets from "../../assets/index";
import Card from "./Card";

const Vocabulary = () => {
  const [cards, setCards] = useState([...Array(1).keys()]);
  const deleteCard = (index: number) => {
    setCards((prevCards) => prevCards.filter((_, i) => i !== index));
  };

  return (
    <section className="mt-5">
      <div>
        <label htmlFor="voice_main" className="md:text-[21px] font-semibold">
          VOICE SELECT_MAIN
        </label>
        <select
          name="voice_main"
          id="voice_main"
          className="block w-full text-[21px] max-md:text-[15px] p-2 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-1 focus:border-blue-300"
        >
          <option value="en" className="max-md:text-[15px] text-[21px]">
            En-US-Wavenet-D
          </option>
          <option value="kr" className="max-md:text-[15px] text-[21px]">
            Kr-KO-Wavenet-A
          </option>
        </select>
        <div className="flex justify-end items-center gap-2 mt-1">
          <p className="text-[18px] font-semibold">Voice</p>
          <button className="md:text-[21px] font-semibold">
            <img src={assets.voice} alt="voice" className="size-8 " />
          </button>
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="voice_script" className="md:text-[21px] font-semibold">
          VOICE SELECT_Script
        </label>
        <select
          name="voice_script"
          id="voice_script"
          className="block w-full text-[21px] max-md:text-[15px] p-2 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-1 focus:border-blue-300"
        >
          <option value="kr" className="max-md:text-[15px] text-[21px]">
            Kr-KO-Wavenet-A
          </option>
          <option value="en" className="max-md:text-[15px] text-[21px]">
            En-US-Wavenet-D
          </option>
        </select>
        <div className="flex justify-end items-center gap-2 mt-1">
          <p className="text-[18px] font-semibold">Voice</p>
          <button className="md:text-[21px] font-semibold">
            <img src={assets.voice} alt="voice" className="size-8 " />
          </button>
        </div>

        <section>
          {cards.map((_, index) => {
            return (
              <Card
                key={index}
                order={index}
                onDelete={() => deleteCard(index)}
              />
            );
          })}
        </section>

        <div className="flex justify-center items-center mt-4">
          <button
            className="text-white font-semibold focus:ring-4  rounded-lg text-sm md:text-lg px-5 md:px-9 py-2.5 md:py-3 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none"
            onClick={() =>
              setCards((prevCards) => [...prevCards, prevCards.length])
            }
          >
            + Add Card
          </button>
        </div>
      </div>
    </section>
  );
};

export default Vocabulary;

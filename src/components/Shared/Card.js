import React from "react";
import { Link } from "react-router-dom";

const Card = ({ module }) => {
  const { moduleName, moduleRoute, img, resetOutput } = module;
  return (
    <Link className="flex items-center justify-center" to={moduleRoute}>
      <button
        className="scale-100 rounded-md hover:scale-105"
        onClick={resetOutput}
      >
        <section className="w-96 md:w-56 lg:w-96 h-20 px-4">
          <div className="flex items-center justify-between bg-blackHigh border-2 rounded-lg border-whiteHigh shadow-xl">
            <img className="w-20 h-20 p-2 bg-whiteHigh" src={img} alt="Movie" />
            <p className="text-mainColor w-full text-start px-2">
              {moduleName}
            </p>
          </div>
        </section>
      </button>
    </Link>
  );
};

export default Card;

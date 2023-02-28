import React, { useContext } from "react";
import { AiContext } from "../../contexts/AiContext";

const JobDescription = () => {
  const { output, processRequest, isLoading, setIsLoading } =
    useContext(AiContext);

  const handleClick = () => {
    const input = document.getElementById("input")?.value;
    const prompt = "Write a detailed Job description for:";
    setIsLoading(true);
    processRequest(prompt, input);
  };

  return (
    <section className="bg-whiteMid">
    <div className="lg:w-1/2 mx-auto my-0 bg-whiteHigh rounded-lg">
      <section className="flex flex-col">
        <h1 className="text-3xl font-bold text-blackHigh p-2">
          Job Description
        </h1>
        <div className="flex flex-col gap-2 p-2">
          <textarea
            className={`p-3 w-full rounded-sm border-solid border-2 border-whiteLow`}
            placeholder="Let me assist you with the help of AI"
            name="blog-input"
            id="input"
            cols="5"
            rows="5"
          ></textarea>
          <button
            className={`btn text-whiteHigh bg-infoColor border-none btn-md rounded-md px-4 ${
              isLoading ? "bg-mainColor w-44" : "bg-whiteLow w-36"
            }`}
            onClick={handleClick}
          >
            {isLoading ? (
              <p>
                <span>
                  <i className="fa-solid fa-spinner fa-spin-pulse"></i>
                </span>
                <span> Generating... </span>
              </p>
            ) : (
              <p>Create&nbsp;Content</p>
            )}
          </button>
        </div>
        <div>
          <p className="font-bold text-xl text-center py-2">
            {isLoading ? (
              <div>
                <i className="fa-solid fa-arrow-down fa-beat-fade"></i>
                <i className="fa-solid fa-arrow-down fa-beat-fade"></i>
                <i className="fa-solid fa-arrow-down fa-beat-fade"></i>
              </div>
            ) : (
              <div>
                <i className="fa-solid fa-arrow-down"></i>
              </div>
            )}
          </p>
        </div>
        <div className="p-4">
          <textarea
            className={`p-3 w-full rounded-sm border-solid border-2 border-whiteLow`}
            placeholder=""
            defaultValue={output}
            cols="10"
            rows="10"
          ></textarea>
        </div>
      </section>
    </div>
  </section>
  );
};

export default JobDescription;

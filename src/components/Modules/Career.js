import React, { useContext } from "react";
import { AiContext } from "../../contexts/AiContext";

const Career = () => {
  const { output, processRequest, isLoading, setIsLoading } =
    useContext(AiContext);

  const handleClick = () => {
    const input = document.getElementById("input")?.value;
    const prompt =
      "I want you to act as a career counselor. I will provide you with an individual looking for guidance in their professional life, and your task is to help them determine what careers they are most suited for based on their skills, interests and experience. You should also conduct research into the various options available, explain the job market trends in different industries and advice on which qualifications would be beneficial for pursuing particular fields. My first request is: ";
    setIsLoading(true);
    processRequest(prompt, input);
  };

  return (
    <div className="mx-12 flex flex-col justify-between bg-whiteLow rounded-xl">
      <section className="flex flex-col gap-4 p-4 bg-mainColor rounded-xl">
        <h1 className="text-xl font-bold text-center text-blackHigh bg-whiteHigh p-4">
          Career Consultant
        </h1>
        <div className="flex gap-2">
          <input
            className={`p-3 w-full rounded-sm border-solid border-2 border-mainColor ${
              isLoading ? "hidden" : "flex"
            }`}
            placeholder="Briefly describe desired career path"
            name="blog-input"
            id="input"
          ></input>
          <button
            disabled={isLoading}
            className={`btn text-blackHigh hover:bg-whiteMid rounded-sm px-4 ${
              isLoading ? "bg-mainColor w-full" : "bg-whiteLow"
            }`}
            onClick={handleClick}
          >
            {isLoading ? (
              <p>
                <span>
                  <i className="fa-solid fa-gear fa-spin"></i>
                </span>
                <span> Generating Career Consultancy </span>
                <span>
                  <i className="fa-solid fa-gear fa-spin"></i>
                </span>
              </p>
            ) : (
              <p>
                <span>
                  <i className="fa-solid fa-gear"></i>
                </span>
                <span> Generate </span>
                <span>
                  <i className="fa-solid fa-gear"></i>
                </span>
              </p>
            )}
          </button>
        </div>
        <div>
          <p className="font-bold text-xl text-center py-2">
            {isLoading ? (
              <i className="fa-solid fa-arrow-down fa-beat-fade"></i>
            ) : (
              <i className="fa-solid fa-arrow-down"></i>
            )}
          </p>
        </div>
        <textarea
          className="p-2 rounded-md border-solid border-2 border-mainColor"
          placeholder=""
          defaultValue={output}
          cols="10"
          rows="10"
        ></textarea>
      </section>
    </div>
  );
};

export default Career;

import React, { useContext } from "react";
import Card from "../../components/Shared/Card";
import blog from "../../assets/cover/blog.png";
import productDescription from "../../assets/cover/productDescription.png";
import coldEmail from "../../assets/cover/coldEmail.png";
import jobDescription from "../../assets/cover/jobDescription.png";
import social from "../../assets/cover/social.png";
import uniqueValue from "../../assets/cover/uniqueValue.png";
import headline from "../../assets/cover/headline.png";
import aida from "../../assets/cover/aida.png";
import itSupport from "../../assets/cover/itSupport.png";
import career from "../../assets/cover/career.png";
import { AiContext } from "../../contexts/AiContext";

const Home = () => {
  const { setOutput } = useContext(AiContext);
  const resetOutput = () => {
    const output = "";
    setOutput(output);
  };

  const moduleList = [
    {
      moduleName: "Blog Writting Tool",
      moduleDescription: "Write SEO friendly blogs that people actually reads!",
      moduleRoute: "/blog",
      img: blog,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Product Description Tool",
      moduleDescription:
        "Generate unique product descriptions to catch attention!",
      moduleRoute: "/product",
      img: productDescription,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Cold Email Generator",
      moduleDescription:
        "Generate cold rmail templates instantly without any hussle!",
      moduleRoute: "/cold",
      img: coldEmail,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Job Description Helper",
      moduleDescription: "Generate job descriptions using AI assistant!",
      moduleRoute: "/job",
      img: jobDescription,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Social Media Adverts",
      moduleDescription: "Write engaging social media adverts to boost sales!",
      moduleRoute: "/social",
      img: social,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Unique Value Propositions",
      moduleDescription: "Know the selling points of your product/service!",
      moduleRoute: "/unique",
      img: uniqueValue,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Headlines and Descriptions",
      moduleDescription:
        "Can't think of a good headline and description? AI got you covered!",
      moduleRoute: "/headlines",
      img: headline,
      resetOutput: resetOutput,
    },
    {
      moduleName: "AIDA Framework Generator",
      moduleDescription: "The best AI powered AIDA Framework on the internet!",
      moduleRoute: "/aida",
      img: aida,
      resetOutput: resetOutput,
    },
    {
      moduleName: "IT Support Provider",
      moduleDescription:
        "Do you have an technical issue with your computer or any other device, software or hardware? Consult the in-house IT Expert.",
      moduleRoute: "/itsupport",
      img: itSupport,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Career Counselor AI",
      moduleDescription:
        "Need some help deciding on the next step to take in your professional life? Talk to our on-hand career counselor.",
      moduleRoute: "/career",
      img: career,
      resetOutput: resetOutput,
    },
  ];

  return (
    <section>
      {/* cards */}
      <div className="md:w-2/3 mx-auto my-0 p-12 bg-whiteLow rounded-xl">
        <p className="text-center text-whiteHigh font-black text-3xl py-4 mb-12  bg-mainColor">
          ALL MODULES
        </p>
        <section className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 p-2">
          {moduleList?.map((module, i) => {
            return <Card key={i} module={module}></Card>;
          })}
        </section>
      </div>
    </section>
  );
};

export default Home;

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
      moduleDescription: "Write SEO friendly blogs that people actually reads.",
      moduleRoute: "/blog",
      img: blog,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Product Description Tool",
      moduleDescription:
        "Generate unique product descriptions to catch attention.",
      moduleRoute: "/product",
      img: productDescription,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Cold Email Generator",
      moduleDescription:
        "Generate cold email templates instantly without any hussle.",
      moduleRoute: "/cold",
      img: coldEmail,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Job Description Helper",
      moduleDescription: "Generate job descriptions using AI assistant.",
      moduleRoute: "/job",
      img: jobDescription,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Social Media Adverts",
      moduleDescription: "Write engaging social media adverts to boost sales.",
      moduleRoute: "/social",
      img: social,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Unique Value Propositions",
      moduleDescription: "Know the selling points of your product/service.",
      moduleRoute: "/unique",
      img: uniqueValue,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Headlines and Descriptions",
      moduleDescription:
        "Can't think of a good headline and description? AI got you covered.",
      moduleRoute: "/headlines",
      img: headline,
      resetOutput: resetOutput,
    },
    {
      moduleName: "AIDA Framework Generator",
      moduleDescription: "The best AI powered AIDA Framework on the internet.",
      moduleRoute: "/aida",
      img: aida,
      resetOutput: resetOutput,
    },
    {
      moduleName: "IT Support Provider",
      moduleDescription:
        "Consult the IT expert AI for any IT related assistance.",
      moduleRoute: "/itsupport",
      img: itSupport,
      resetOutput: resetOutput,
    },
    {
      moduleName: "Career Counselor AI",
      moduleDescription:
        "Talk to our on-hand career counselor for the best consultancy.",
      moduleRoute: "/career",
      img: career,
      resetOutput: resetOutput,
    },
  ];

  return (
    <section className="max-w-11/12 mx-auto my-0 p-4">
      {/* cards */}
      <div className="rounded-xl">
        <div className="text-center py-4 mb-8">
          <p className="text-4xl font-black">
            &#128075; Hey, what are we creating today?
          </p>
          <p className="opacity-70 pt-3">
            Get started by selecting the content type from the options below
          </p>
        </div>
        <p className="font-black text-center lg:text-left opacity-70 py-2">
          Most Popular
        </p>
        <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-between gap-4">
          {moduleList?.map((module, i) => {
            return <Card key={i} module={module}></Card>;
          })}
        </section>
      </div>
    </section>
  );
};

export default Home;

import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layouts/Main";
import AIDA from "../components/Modules/AIDA";
import ITSupport from "../components/Modules/ITSupport";
import Career from "../components/Modules/Career";
import BlogPost from "../components/Modules/BlogPost";
import ColdEmail from "../components/Modules/ColdEmail";
import HeadlinesAndDescriptions from "../components/Modules/HeadlinesAndDescriptions";
import ProductDescription from "../components/Modules/ProductDescription";
import SocialMediaAdvert from "../components/Modules/SocialMediaAdvert";
import UniqueValueProposition from "../components/Modules/UniqueValueProposition";
import JobDescription from "../components/Modules/JobDescription";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <BlogPost></BlogPost>,
      },
      {
        path: "/product",
        element: <ProductDescription></ProductDescription>,
      },
      {
        path: "/job",
        element: <JobDescription></JobDescription>,
      },
      {
        path: "/cold",
        element: <ColdEmail></ColdEmail>,
      },
      {
        path: "/social",
        element: <SocialMediaAdvert></SocialMediaAdvert>,
      },
      {
        path: "/unique",
        element: <UniqueValueProposition></UniqueValueProposition>,
      },
      {
        path: "/headlines",
        element: <HeadlinesAndDescriptions></HeadlinesAndDescriptions>,
      },
      {
        path: "/aida",
        element: <AIDA></AIDA>,
      },
      {
        path: "/itsupport",
        element: <ITSupport></ITSupport>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
    ],
  },

  {
    path: "*",
    element: (
      <h2 className="font-black py-6 text-3xl text-red-600 text-center">
        Page Not Found!
      </h2>
    ),
  },
]);

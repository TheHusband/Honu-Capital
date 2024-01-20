import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import LargeMultiFamily from "@/public/Honu Capital.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { url } from "inspector";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Education Protal",
    location: "Learn what we are doing",
    description:
      "We have build a custom portal for our Partners and potential partners.",
    icon: React.createElement(LuGraduationCap),
    date: "Contact us for more info",
  },
  {
    title: "HonuCap",
    location: "Our LP App",
    description:
      "Using this app our partners get access to a wealth of data to monitor their and our progress",
    icon: React.createElement(CgWorkAlt),
    date: "Contact us for more info",
  },
  {
    title: "HonuNews",
    location: "Our AI integrated newsletter",
    description:
      "Stay up to date on Honu Capital, the market, market trends and the latest technologies being leverage in the current market.",
    icon: React.createElement(FaReact),
    date: "Contact us for more info",
  },
] as const;

export const projectsData = [
  {
    title: "Large Multi-Family",
    description:
      "This book is a roadmap to harnessing the incredible advantages of passive investing in this sector.",
    tags: ["Risk Mitigation", "Tax Incentives", "Economies of Scale"],
    imageUrl: LargeMultiFamily,
  },
  {
    title: "Underwriting Formula",
    description:
      "In this book and attached excel file we give you a fully transparent look into our underwriting princables and philosophy.",
    tags: ["Financial Analysis", "Market Research", "Debt Structure"],
    imageUrl: rmtdevImg,
  },
  {
    title: "AI SaaS",
    description:
      "Learn about the new and exciting tech of AI (artificial intelegence) see how companies are and will be using this technology currently and in the future.",
    tags: ["Technology Evaluation", "Market Potential", "Scalability"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "CRE",
  "Multi-Family",
  "Risk Mitigation",
  "Tax Incentives",
  "Reduced OpEx",
  "CapEx",
  "Subsidies",
  "Property Value",
  "AI",
  "Data Analysis",
  "Efficiency Improvement",
  "FITC",
  "Risk Management",
  "Predictive Analytics",
  "MACRS",
  "Innovative Product Development",
  "Competitive Advantage",
  "Adaptability to Chang",
] as const;

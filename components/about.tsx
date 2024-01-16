"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About us</SectionHeading>
      <p className="mb-3">
        We are a family run {" "}
        <span className="font-medium">verticly integrated</span> company. Founded by a husband and wife, 
        after their time in the Army working for Tesla.{" "}
        <span className="font-medium">After investing in the single family market</span>.{" "}
        <span className="italic">Building their portfolio one door at a time</span>, They realized 
        they was a better way! <span className="underline">Honu Capital</span> is built to leverage 
        Economies of Scale. Taking advantage of their experience of running large complex operations in 
        lean and efficient matter, always looking at ways to cut cost, time and using AI/Tech to optimize 
        opperations. Along with their experience in the Real Estate industry{" "}
        <span className="font-medium">
          Fix and Flipping, Buy and Holding, Property Management, Wholesaling
        </span>
        . Honu Capital is familiar with ever changing market. We are always looking to
        learn new technologies and leverage that data in the current market conditions. We are always looking 
        to the past and future{" "}<span className="font-medium">to optimize our positions</span> and bring greater 
        value to our partners.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}

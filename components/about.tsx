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
        We are a family-run, {" "}
        <span className="font-medium">Vertically Integrated</span> company founded by a husband and wife team 
        who both served in the US Army and later met working at Tesla.{" "}
        <span className="font-medium">After venturing into the single-family market</span>,{" "}
        <span className="italic">and steadily building our portfolio one door at a time,</span>, we recognized 
        the need for a more efficient approach. <span className="underline">Honu Capital</span> is designed to 
        harness economies of scale, drawing on our experience in efficiently managing large, complex operations. 
        We constantly seek ways to reduce costs and save time, incorporating AI/tech solutions to optimize our 
        operations.{" "}
        <span className="font-medium">
          Fix and Flipping, Buy and Holding, Property Management, Wholesaling
        </span>
        Our expertise extends to various facets of the real estate industry, including fix and flipping, 
        buy and hold strategies, property management, and wholesaling. Through this diverse experience, 
        we identify opportunities that others may overlook. Honu Capital remains attuned to the dynamic 
        real estate markets, staying ahead by embracing new technologies and utilizing data to navigate 
        current conditions.{" "}<span className="font-medium">Our commitment</span> extends to learning 
        from the past, thriving in the present, and strategically positioning ourselves for the future 
        to enhance value for our partners.
      </p>
    </motion.section>
  );
}

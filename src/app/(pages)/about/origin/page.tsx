import React from "react";
import Hero from "@/components/about/origin/hero";
import Origin from "@/components/about/origin/origin";

const OriginStory: React.FC = () => {
  return (
    <>
      <Hero />
      <Origin />
      <div className="border-top mx-auto" style={{ maxWidth: "25rem" }} />
    </>
  );
};

export default OriginStory;

import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import ProgramAbout from "./section-about/ProgramAbout";
import ProgramFAQ from "./section-faq/ProgramFAQ";
import ProgramInfoLayout from "./section-info/ProgramInfoLayout";
import ProgramSlider from "./section-slider/ProgramSlider";

function MainComponent() {
  return (
    <>
      <Header />
      <ProgramInfoLayout />
      <ProgramAbout />
      <ProgramSlider />
      <ProgramFAQ />
      <Footer />
    </>
  );
}

export default MainComponent;

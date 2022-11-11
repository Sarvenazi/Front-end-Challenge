import { Grid, useMediaQuery } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import ProgramAbout from "./section-about/ProgramAbout";
import ProgramFAQ from "./section-faq/ProgramFAQ";
import ProgramInfoLayout from "./section-info/ProgramInfoLayout";
import ProgramSlider from "./section-slider/ProgramSlider";

function MainComponent() {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Grid sx={{ position: "relative" }}>
      <Header />
      <ProgramInfoLayout />
      <ProgramAbout />
      <ProgramSlider />
      <ProgramFAQ />
      {matches ? <Footer /> : null}
    </Grid>
  );
}

export default MainComponent;

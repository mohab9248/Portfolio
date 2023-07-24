import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import HeroImg2 from "../Components/HeroImg2";
import Work from "../Components/Work";
function Project() {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="PROJECTS" text="Some of My Recent Work." />
      <Work />
      <Footer />
    </div>
  );
}

export default Project;

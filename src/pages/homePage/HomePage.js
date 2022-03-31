import React from "react";
import SimpleSlider from "../../methods/ReactSlick/Slider";
import AboutUs from "../../parts/homepage/aboutUs/AboutUs";
import EveryThing from "../../parts/homepage/everyThing/EveryThing";
import LatestTrand from "../../parts/homepage/latestTrend/LatestTrend";
import ProductShow from "../../parts/homepage/productSlide/ProductShow";
import classes from "./HomePage.module.css";

export default function HomePage(params) {
  return (
    <div className={classes.homePage}>
      <div className={classes.slideContainer}>
        <SimpleSlider />
      </div>
      <div>
        <LatestTrand />
      </div>
      <div>
        <EveryThing />
      </div>
      <div>
        <ProductShow />
      </div>
      <div>
        <AboutUs />
      </div>
    </div>
  );
}

import React from "react";
import "./ContentItem.css";

import AOS from "aos";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 90,

  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom",
});

const ContentItem = ({ image, title }) => {
  return (
    <Card
      className="contentItem"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="false"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <CardActionArea>
        <CardMedia component="img" image={image} height="300" width="300" />
        <div className="backdrop">
          <Typography style={{ color: "#fff", padding: "0 20px" }}>
            {title}
          </Typography>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default ContentItem;

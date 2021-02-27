import React, { useState } from "react";
import "./Parallax.css";

import Typography from "@material-ui/core/Typography";

import Carousel from "react-bootstrap/Carousel";

import "bootstrap/dist/css/bootstrap.min.css";

import world_image from "../../assets/1.jpg";
import image1 from "../../assets/Vasudhaiva-kutumbakam.jpg";
import image2 from "../../assets/vasudheva-ku (1).jpg";

const Parallax = () => {
  const [index, setindex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setindex(selectedIndex);
  };
  return (
    <div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        indicators={false}
        interval={2000}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 parallax"
            alt="first-slide"
            src={image1}
          />
          <Carousel.Caption style={{ bottom: "40%" }}>
            <Typography variant="h5">VASUDHAIVA KUTUMBAKAM</Typography>
            <Typography variant="caption">
              The Whole World Is A Family
            </Typography>
          </Carousel.Caption>
          <div className="parallaxbackdrop" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 parallax"
            alt="first-slide"
            src={world_image}
          />
          <Carousel.Caption style={{ bottom: "40%" }}>
            <Typography variant="h5">VASUDHAIVA KUTUMBAKAM</Typography>
            <Typography variant="body2">The Whole World Is A Family</Typography>
          </Carousel.Caption>
          <div className="parallaxbackdrop" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 parallax"
            alt="first-slide"
            src={image2}
          />
          <Carousel.Caption style={{ bottom: "40%" }}>
            <Typography variant="h5">VASUDHAIVA KUTUMBAKAM</Typography>
            <Typography variant="body2">The Whole World Is A Family</Typography>
          </Carousel.Caption>
          <div className="parallaxbackdrop" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Parallax;

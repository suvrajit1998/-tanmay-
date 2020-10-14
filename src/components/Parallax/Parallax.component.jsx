import React, { useState } from "react";
import "./Parallax.css";

import Typography from "@material-ui/core/Typography";

import Carousel from "react-bootstrap/Carousel";

import "bootstrap/dist/css/bootstrap.min.css";

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
            src="https://images.unsplash.com/photo-1565569995015-414d4ef36690?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
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
            src="https://images.unsplash.com/photo-1496267472830-2eb2b7e0942d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1025&q=80"
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
            src="https://images.unsplash.com/photo-1508558936510-0af1e3cccbab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
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

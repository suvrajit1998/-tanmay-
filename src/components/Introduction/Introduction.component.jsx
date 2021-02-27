import React from "react";

import AOS from "aos";

import "aos/dist/aos.css";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { Button, colors } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxHeight: 550,
    minHeight: 550,
  },
  margins: {
    margin: "20px 0",
    fontFamily: "David Libre, serif",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  introduction: {
    margin: "10px 20px",
  },
});

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

const Introduction = () => {
  const classes = useStyles();
  return (
    <div className={classes.introduction}>
      <div className={classes.margins}>
        <div>
          <Typography variant="body1" align="left">
            HERE’S WHAT’S NEW
          </Typography>
          <Typography variant="caption" align="left">
            Don’t Be the Last to Know!
          </Typography>
        </div>
        <Button style={{ background: colors.pink["500"] }} variant="contained">
          View All
        </Button>
      </div>
      <Grid container spacing={1}>
        <Grid item sm={4} xs={12}>
          <Card
            className={classes.root}
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="false"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="EAGLE"
                height="350"
                image="https://i.ibb.co/VQZgcqH/IMG-20200110-WA0020.jpg"
              />
              <CardContent>
                <Typography
                  className={classes.margins}
                  variant="h5"
                  align="center"
                >
                  AGED EAGLE REBIRTH RETREAT
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  color="textSecondary"
                  className={classes.margins}
                >
                  For Overall Health, Happiness, Peace, Prosperity, Love, Energy
                  and Consciousness with Transcending and Awakening Yourself.
                </Typography>
                <Typography
                  className={classes.margins}
                  align="center"
                  variant="h6"
                >
                  THIS TRAINNING I MEANT FOR YOU.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Card
            className={classes.root}
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="false"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <CardActionArea>
              <CardContent>
                <Typography
                  className={classes.margins}
                  variant="h5"
                  align="center"
                >
                  YOUTH EAGLE
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  color="textSecondary"
                  className={classes.margins}
                >
                  For Overall Health, Happiness, Peace, Prosperity, Love, Energy
                  and Consciousness with Transcending and Awakening Yourself.
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                alt="EAGLE"
                height="350"
                image="https://i.ibb.co/7jRktqQ/IMG-20191117-WA0005.jpg"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Card
            className={classes.root}
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="false"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="EAGLE"
                height="350"
                image="https://i.ibb.co/GTFj5g0/Whats-App-Image-2020-08-03-at-11-01-27-PM.jpg"
              />
              <CardContent>
                <Typography
                  className={classes.margins}
                  variant="h5"
                  align="center"
                >
                  V K WELLNESS COUSE
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  color="textSecondary"
                  className={classes.margins}
                >
                  For Overall Health, Happiness, Peace, Prosperity, Love, Energy
                  and Consciousness with Transcending and Awakening Yourself.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Introduction;

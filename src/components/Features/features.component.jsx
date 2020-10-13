import React, { useState } from "react";

import "./Features.css";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";

import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";
import TwitterIcon from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";

import Transcend from "../TransendFeatures/Transend.component";

const useStyles = makeStyles({
  speedDial: {
    position: "fixed",
    top: "34%",
    right: "2%",
  },
});

const Features = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="features">
      <Paper>
        <SpeedDial
          className={classes.speedDial}
          hidden={hidden}
          icon={<SpeedDialIcon />}
          ariaLabel="speedDial"
          open={open}
          onOpen={handleOpen}
          onClose={handleClose}
          direction="up"
        >
          <SpeedDialAction
            icon={
              <a
                href="eaglerebirthretreat@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit" }}
              >
                <MailIcon />
              </a>
            }
            tooltipTitle="Gmail"
          />
          <SpeedDialAction
            icon={
              <a
                href="https://www.facebook.com/eaglerebirthindia/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit" }}
              >
                <FacebookIcon />
              </a>
            }
            tooltipTitle="Facebook"
          />
          <SpeedDialAction
            icon={
              <a
                href="https://mobile.twitter.com/rebirth_eagle?s=08"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit" }}
              >
                <TwitterIcon />
              </a>
            }
            tooltipTitle="Twitter"
          />
          <SpeedDialAction
            icon={
              <a
                href="https://www.youtube.com/channel/UC_cLZrmA_z6cht512hSmoKw"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit" }}
              >
                <YouTubeIcon />
              </a>
            }
            tooltipTitle="YouTube"
          />
          <SpeedDialAction
            icon={
              <a
                href=" https://www.instagram.com/vasudhaiva_kutumbakam__/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit" }}
              >
                <Instagram />
              </a>
            }
            tooltipTitle="WhatsApp => +919088213423"
          />
        </SpeedDial>
        <div className="features_title">
          <Grid item md={7} sm={7} xs={12}>
            <Typography
              variant="h4"
              style={{
                color: "#303030",
                fontFamily: "Montserrat, sans-serif",
                textAlign: "center",
                margin: "20px 0",
              }}
            >
              VASUDHAIBA KUTUMBAKAM
            </Typography>
            <Typography
              variant="body1"
              style={{
                color: "#303030",
                fontFamily: "Montserrat, sans-serif",
                textAlign: "center",
                margin: "20px 0",
              }}
            >
              Committed to Enriching the Lives of Every Human Beings on Earth
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              style={{
                fontFamily: "Montserrat, sans-serif",
                textAlign: "center",
                margin: "30px 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Transcendental Eagle Rebirth Retreat is a beautiful opportunity to
              Transcend yourself from Ordinary Consciousness to Super
              Consciousness. This Retreat Combines the best from the East
              (Wisdom) and West (Science).
            </Typography>
          </Grid>
        </div>
        <Transcend />
      </Paper>
    </div>
  );
};

export default Features;

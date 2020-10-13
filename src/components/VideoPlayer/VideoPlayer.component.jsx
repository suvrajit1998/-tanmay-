import React from "react";
import "./VideoPlayer.css";

import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

import ReactPlayer from "react-player";

const useStyles = makeStyles({
  videoPlayer: {
    display: "flex",
    flexDirection: "column",
    width: "95%",
    margin: "50px auto",
  },
  margins: {
    margin: "50px 0",
    fontFamily: "David Libre, serif",
  },
  videoPlayerList: {
    display: "flex",
    overflowX: "scroll",
  },
  videoCard: {
    minWidth: 300,
    height: 200,
    marginRight: 30,
    boxShadow: "5px 15px 10px #000",
  },
});

const VideoPlayer = () => {
  const classes = useStyles();
  return (
    <div className={classes.videoPlayer}>
      <Typography variant="h3" align="center" className={classes.margins}>
        OUR LATEST VIDEOS
      </Typography>
      <div className="videoPlayer_list">
        <Card className={classes.videoCard}>
          <ReactPlayer
            width="350px"
            height="200px"
            url="https://www.youtube.com/watch?v=TEIO9NYplrQ"
            controls
          />
        </Card>
        <Card className={classes.videoCard}>
          <ReactPlayer
            width="350px"
            height="200px"
            url="https://www.youtube.com/watch?v=JqJPrIA8UAg&feature=emb_title"
            controls
          />
        </Card>
        <Card className={classes.videoCard}>
          <ReactPlayer
            width="350px"
            height="200px"
            url="https://www.youtube.com/watch?v=oX_B7uFyKLg&feature=emb_title"
            controls
          />
        </Card>
        <Card className={classes.videoCard}>
          <ReactPlayer
            width="350px"
            height="200px"
            url="https://www.youtube.com/watch?v=8C-mURwo2Q4&feature=emb_title"
            controls
          />
        </Card>
        <Card className={classes.videoCard}>
          <ReactPlayer
            width="350px"
            height="200px"
            url="https://www.youtube.com/watch?v=wERuzeIRTMc&feature=emb_title"
            controls
          />
        </Card>
        <Card className={classes.videoCard}>
          <ReactPlayer
            width="350px"
            height="200px"
            url="https://www.youtube.com/watch?v=RIMPZEqTY3o&feature=emb_title"
            controls
          />
        </Card>
        <Card className={classes.videoCard}>
          <ReactPlayer
            width="350px"
            height="200px"
            url="https://www.youtube.com/watch?v=QcioR2y-FxEhttps://www.youtube.com/watch?v=LYTpML3jCG4&feature=emb_title"
            controls
          />
        </Card>
        <Card className={classes.videoCard}>
          <ReactPlayer
            width="350px"
            height="200px"
            url="https://www.youtube.com/watch?v=pgKD3widPuc&feature=emb_title"
            controls
          />
        </Card>
        <Card className={classes.videoCard}>
          <ReactPlayer
            width="350px"
            height="200px"
            url="https://www.youtube.com/watch?v=yRLRz56OP-A&feature=emb_title"
            controls
          />
        </Card>
      </div>
    </div>
  );
};

export default VideoPlayer;

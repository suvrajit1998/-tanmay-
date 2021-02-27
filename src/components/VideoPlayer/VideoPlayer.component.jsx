import React, { useEffect, useState } from "react";
import "./VideoPlayer.css";

import { Paper, Button, colors, Modal } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { PlayCircleFilled, Close } from "@material-ui/icons";

// import ReactPlayer from "react-player";

import { youtube } from "../../api/api";

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
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
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
    position: "relative",
  },
});

const VideoPlayer = () => {
  const [videos, setVideos] = useState([]);
  const classes = useStyles();
  const [playVideo, setplayVideo] = useState(false);
  const [selectVideo, setselectVideo] = useState();
  useEffect(() => {
    handleGetVideo();
  }, []);
  const skaleton = [{}, {}, {}, {}, {}];

  console.log(videos);

  const handleGetVideo = async () => {
    try {
      const res = await youtube();
      setVideos(res?.data?.items);
    } catch (error) {
      console.log(error);
    }
  };

  const videoPlayerModal = (video) => {
    console.log(video);
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
          outline: "none",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            width: "90%",
            height: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Close
            style={{ position: "absolute", top: 10, right: 10 }}
            onClick={() => setplayVideo(false)}
          />
          <iframe
            allowFullScreen={true}
            frameBorder="0"
            className={classes.videoCard}
            style={{ margin: 0 }}
            title="Video Player"
            src={`https://www.youtube.com/embed/${video && video?.id?.videoId}`}
          />
        </div>
      </div>
    );
  };

  return (
    <div className={classes.videoPlayer}>
      <div className={classes.margins}>
        <div>
          <Typography variant="body1" align="left">
            OUR LATEST VIDEOS
          </Typography>
          <Typography variant="caption" align="left">
            Check This
          </Typography>
        </div>
        <Button style={{ background: colors.pink["500"] }} variant="contained">
          View All
        </Button>
      </div>
      <Modal open={playVideo} onClose={() => setplayVideo(false)}>
        {videoPlayerModal(selectVideo)}
      </Modal>
      <div className="videoPlayer_list">
        {videos ? (
          videos.map((video) => (
            <Paper
              className={classes.videoCard}
              onClick={() => {
                setselectVideo(video);
                setplayVideo(true);
              }}
            >
              <img
                width="100%"
                height="100%"
                alt="tumbnail"
                src={video?.snippet?.thumbnails?.high?.url}
              />
              <PlayCircleFilled
                style={{
                  position: "absolute",
                  top: "30%",
                  left: "35%",
                  color: "#ffffff",
                  fontSize: "5rem",
                }}
              />
            </Paper>
          ))
        ) : (
          <div className="videoPlayer_list">
            {skaleton.map((obj) => (
              <Paper className={classes.videoCard}>
                <Skeleton width="100%" height="100%" />
              </Paper>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;

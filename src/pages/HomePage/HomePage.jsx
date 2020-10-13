import React from "react";

import Parallax from "../../components/Parallax/Parallax.component";
import Features from "../../components/Features/features.component";
import Introduction from "../../components/Introduction/Introduction.component";
import Content from "../../components/Content/Content.component";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer.component";

const HomePage = () => {
  return (
    <div className="homepage">
      <Parallax />
      <Features />
      <Introduction />
      <VideoPlayer />
      <Content />
    </div>
  );
};

export default HomePage;

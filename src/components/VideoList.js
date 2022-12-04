import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";
import "../style.css";

const VideoList = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map((video) => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));
  return (
    <Grid container spacing={4} className="video">
      {listOfVideos}
    </Grid>
  );
};

export default VideoList;

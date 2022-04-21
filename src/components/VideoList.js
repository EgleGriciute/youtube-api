import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem.js";

const VideoList = ({ videos, onSelectVideo }) => {
  const listOfVideos = videos.map((video) => (
    <VideoItem
      key={video.id.videoId}
      onSelectVideo={onSelectVideo}
      video={video}
    />
  ));
  return (
    <Grid container spacing={3}>
      {listOfVideos}
    </Grid>
  );
};

export default VideoList;

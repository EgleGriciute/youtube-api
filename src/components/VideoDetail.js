import React from "react";
import { Paper, Typography } from "@material-ui/core";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const VideoDetail = ({
  video: {
    id: { videoId },
    snippet: { title, channelTitle, description },
  },
}) => {
  if (!videoId)
    return (
      <div>
        <ArrowUpwardIcon style={{ marginLeft: "2vw" }} />
        <h1>Type in a search bar to find youtube videos</h1>
      </div>
    );

  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4">
          {title} - {channelTitle}
        </Typography>
        <Typography variant="subtitle1">{channelTitle}</Typography>
        <Typography variant="subtitle2">{description}</Typography>
      </Paper>
    </React.Fragment>
  );
};

export default VideoDetail;

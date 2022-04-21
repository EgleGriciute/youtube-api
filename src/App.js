import youtube from "./api/youtube";
import { Grid } from "@material-ui/core";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideos] = useState({ id: {}, snippet: {} });
  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={7}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={5}>
            <VideoList videos={videos} onSelectVideo={setSelectedVideos} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  async function handleSubmit(searchItem) {
    const {
      data: { items: videos },
    } = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 4,
        key: process.env.REACT_APP_API_KEY,
        q: searchItem,
      },
    });

    setVideos(videos);
    setSelectedVideos(videos[0]);
  }
}

export default App;

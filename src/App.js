import "./App.css";
import React, { useState } from "react";
import YouTobe from "./components/YouTobe";
import { Grid } from "@material-ui/core";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";
import "./style.css";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectVideo, setSelectVideos] = useState({ id: {}, snippet: {} });

  return (
    <Grid>
      <Grid className="containerMain">
        <div className="divSearchBar">
          <SearchBar onSubmit={handleSubmit} />
        </div>
        <div className="layoutVideos">
          <div className="videoDetail">
            <VideoDetail video={selectVideo} />
          </div>
          <div className="divVideoList">
            <VideoList videos={videos} onVideoSelect={setSelectVideos} />
          </div>
        </div>
      </Grid>
    </Grid>
  );

  async function handleSubmit(searchItem) {
    const {
      data: { items: videos },
    } = await YouTobe.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyDFOpFGTRMZPYBQnaogvWYX3NNckWXKxl0",
        q: searchItem,
      },
    });
    setVideos(videos);
    setSelectVideos(videos[0]);
  }
}

export default App;

import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import { SearchBar, VideoList, VideoDetail } from './components';
export default () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  async function OnFormSubmit(searchTerm) {
    const {
      data: { items: videos }
    } = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyAgB-b4M105feOwFza3taq60-V6cRFVSJU',
        q: searchTerm
      }
    });
    setVideos(videos);
    setSelectedVideo(videos[0]);
  }

  return (
    <Grid style={{ justifyContent: 'center' }} container spacing={10}>
      <Grid item xs={10}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit={OnFormSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

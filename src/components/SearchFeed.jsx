import {useState, useEffect } from 'react';
import { Box, Typography} from '@mui/material'
import { VideosDisplay} from './';
import { fetchFromApis } from './utils/fetchFromApis';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);



  useEffect(() => {
      fetchFromApis(`search?part=snippet&q=${""}`)
        .then((data) => setVideos(data.items));
  },[])

  return (
    <Box p={2} sx={{ overflowY: 'auto', height:'90vh', flex: 2}}>
        <Typography
          variant="h4"
          fontWeight="bold" mb={2} sx={{ color: 'white'}}
        >
          Search Results for: <span style={{ color: '#F31503'}}> videos  </span>
        </Typography>
        <VideosDisplay videos={videos} />
      </Box>
  )
}

export default SearchFeed
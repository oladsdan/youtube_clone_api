import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { VideosDisplay, ChannelCard } from '.';
import { fetchFromApis } from './utils/fetchFromApis';

const ChannelDetails = () => {
  
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState(null)

  
  const { id } = useParams();


  useEffect(() => {
    fetchFromApis(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

    fetchFromApis(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  },[id])

  // console.log(videos)
  // console.log("this is channelDetails")
  // console.log(channelDetail)

  return (
    <Box minHeight="95vh">
      <Box>
        
        <div style={{
          background: 'linear-gradient(90deg, rgba(0,238,246,1) 0%, rgba(206, 3, 184, 1) 100%, rgba(0, 212, 255,1) 100%)',
          zIndex: 10,
          height: '300px'
        }} 
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: {sm: '100px'}}}/>
          <VideosDisplay videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetails
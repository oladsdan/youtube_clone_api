import React from 'react'
import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard} from './'

const VideosDisplay = ({ videos, direction }) => {
  if(!videos?.length) return 'Loading...';
 
  return (
   <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
    {videos.map((item, idx) => (
        <Box key={idx}>
            {/* this assures that is a video properties */}
            {item.id.videoId && <VideoCard video={item} />}
            {/* this ensures that it can be a channel */}
            {item.id.channelId && <ChannelCard channelDetail={item} />}

        </Box>
    ))}

   </Stack>
  )
}

export default VideosDisplay 
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import {CheckCircle} from "@mui/icons-material";
import {Link} from 'react-router-dom';
import {demoProfilePicture} from '../utils/constants';

const ChannelCard = ({channeLDetaiL, marginTop}) => {
  return (
    <Box sx={{boxShadow:'none', borderRadius:'20px', display:'flex', justifyContent:'center', alignItems:'center',width:{xs: '356px', md:'320px', height:'326px', margin:'auto', marginTop: '-93px', marginTop}}}>
          <Link to={`/channel/${channeLDetaiL?.id?.channelId}`}>
              <CardContent sx={{display:'flex', flexDirection:'column', justifyContent: 'center', textAlign: 'center', color:'#fff'}}>
               <CardMedia image={channeLDetaiL?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channeLDetaiL?.snippet?.title} sx={{borderRadius:'50%', height: '180px', width:'180px', mb:2, border: '1px solid #e3e3e3'}}/>
               <Typography variant="h6">
                    {channeLDetaiL?.snippet?.title}
                    <CheckCircle sx={{ fontSize: "14px", color: "gray", ml: "5px" }} />
               </Typography>
               {channeLDetaiL?.statistics?.subscriberCount && (
                <Typography>
                  {parseInt(channeLDetaiL?.statistics?.subscriberCount).toLocaleString()} Subscribers
                </Typography>
               )}
              </CardContent>

          </Link>
    </Box>
  )
}

export default ChannelCard
import React from 'react';
import { Box,Typography,useTheme,IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import { tokens } from '../theme';


function CardCar(props){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const {category,type, rentPrice,imgUrl,carName,groupSize}=props.item;
    return (
        <Box
            backgroundColor={colors.primary[400]}
            padding="5px"
            borderRadius="20px">
             <Box m="5px" >
                <Box 
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between">
                  <Typography
                   sx={{
                    fontWeight:300,
                    fontSize:"0.8rem"
                   }}
                   >{carName}</Typography>
                   <IconButton>
                    <FavoriteBorderIcon/>
                   </IconButton>
                </Box>
                <Typography
                sx={{
                    fontSize:".7rem",
                    fontWeight:"400",
                    color:colors.grey[100]
                }}
                >{category}</Typography>
            </Box>
            <Box>
                <img src={imgUrl} alt=""  width={200} height={100}/>
            </Box>
            <Box 
            m="5px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            >
                <Box
                display="flex"
                alignItems="center"
                gap="1.5rem"
                >
                   <Box 
                   display="flex"
                   alignItems="center"
                   gap="5px">
                    <PersonOutlinedIcon/>
                    <Typography sx={{color:colors.grey[100]}}>{groupSize}</Typography>
                   </Box>
                   <Box 
                   display="flex"
                   alignContent="center"
                   gap="5px"
                    fontWeight="300"
                   >
                    <RepeatOutlinedIcon/>
                    <Typography>{type}</Typography>
                   </Box>
                </Box>
                <Typography
                sx={{color:colors.grey[100],
                    fontSize:"0.8rem",
                    fontWeight:"400"
                }}
                > {rentPrice} $</Typography>
            </Box>
        </Box>

    );
}

export default CardCar;

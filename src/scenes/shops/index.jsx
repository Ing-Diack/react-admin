import React, { useState } from 'react';
import Header from '../../components/Header';
import { tokens } from '../../theme';
import {Box,useTheme} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import CardCar from '../../components/cardCar';
import carData from "./../../data/carData";
import useMediaQuery from '@mui/material/useMediaQuery';
import {Grid }from '@mui/material';




function Shops() {
    const theme=useTheme();
    const colors = tokens(theme.palette.mode);
    const [selectData,setSelectData]=useState("");
    const isNonMobile = useMediaQuery("(min-width:600)");


    const handleOnchage = (e)=>{
        setSelectData(e.target.value)
    }
    return (
      <Box 
      m="5px 20px"
      paddingBottom="20px"
      >
        <Header  title="Car Location" subTitle="Simple Car Shops"/>
        <Box>
            <FormControl backgroundColor={colors.primary[500]} sx={{m:1, minWidth:100}} size="small">
                <InputLabel id="cardLabel1">New</InputLabel>
                <Select 
                labelId="cardLabel1"
                id="cardSelect1"
                value={selectData}
                label="Toyota"
                name="select1"
                onChange={handleOnchage}
                >
                    <MenuItem value="New">New</MenuItem>
                    <MenuItem value="Popular">Popular</MenuItem>
                    <MenuItem value="Upcoming">Upcoming</MenuItem>
                </Select>
            </FormControl>
             <FormControl sx={{m:1, minWidth:100}} size="small">
                <InputLabel id="cardLabel2">Toyata</InputLabel>
                <Select 
                labelId="cardLabel2"
                id="cardSelect2"
                value={selectData}
                label="Toyota"
                name="select2"
                onChange={handleOnchage}
                >
                    <MenuItem value="Toyota">Toyota</MenuItem>
                    <MenuItem value="BMW">BMW</MenuItem>
                    <MenuItem value="Audi">Audi</MenuItem>
                </Select>
            </FormControl>
        </Box>
        <Grid container spacing={3}>
            {carData.map((item)=>(
                <Grid item sx={3} md={3}>
                    <CardCar item={item} keys={item.id} />
                </Grid>
            ))}
        </Grid>
      </Box>
    );
}

export default Shops;

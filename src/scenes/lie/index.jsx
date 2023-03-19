import { Box } from "@mui/material";
import Header from "../../components/Header";
import LieChart from "../../components/LieChart";


const Lie =()=>{

    return(
        <Box m="20px">
            <Header title="Lie Chart"  subTitle="Simple Lie Chart" />
            <Box height="75vh">
                <LieChart/>
            </Box>
        </Box>
    )

}

export default Lie;
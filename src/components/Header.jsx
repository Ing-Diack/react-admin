import { Box, Typography,useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header =({ title,subTitle})=>{

        const theme = useTheme();
        const colors = tokens(theme.palette.mode);
    return(
            <Box>
                <Typography
                 variant="h3" 
                 color={colors.grey[100]}
                  sx={{mb:"2px"}}>
                    {title} 
                </Typography>
                <Typography 
                variant="h6" 
                color={colors.greenAccent[100]}>
                    {subTitle}
                </Typography>
            </Box>
    )
}
export default Header;
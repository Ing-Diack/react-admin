import { Box,useTheme , Typography} from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";


const FAQ =()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <Box m="20px">
            <Header title="FAQ" subTitle="Frequently Asked  Questions Page " />

            <Accordion defaultExpanded>
                <AccordionSummary  expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An important  Question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur
                         adipisicing elit. Eum hic optio saepe rem ut
                          nisi, suscipit aliquam sunt. Cumque vero natus 
                          doloribus dolor, aspernatur ut quos quam dolore suscipit error.
                    </Typography>
                </AccordionDetails>
            </Accordion>
             <Accordion defaultExpanded>
                <AccordionSummary  expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An nother  Question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur
                         adipisicing elit. Eum hic optio saepe rem ut
                          nisi, suscipit aliquam sunt. Cumque vero natus 
                          doloribus dolor, aspernatur ut quos quam dolore suscipit error.
                    </Typography>
                </AccordionDetails>
            </Accordion>
             <Accordion defaultExpanded>
                <AccordionSummary  expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    my favorite  Question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur
                         adipisicing elit. Eum hic optio saepe rem ut
                          nisi, suscipit aliquam sunt. Cumque vero natus 
                          doloribus dolor, aspernatur ut quos quam dolore suscipit error.
                    </Typography>
                </AccordionDetails>
            </Accordion>
             <Accordion defaultExpanded>
                <AccordionSummary  expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    An finality  Question
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur
                         adipisicing elit. Eum hic optio saepe rem ut
                          nisi, suscipit aliquam sunt. Cumque vero natus 
                          doloribus dolor, aspernatur ut quos quam dolore suscipit error.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Box>
    )
}

export default FAQ;
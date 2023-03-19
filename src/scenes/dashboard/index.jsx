import Header from "../../components/Header";
import { Box ,useTheme,Typography,Button,IconButton} from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import  DownloadIcon  from "@mui/icons-material/DownloadOutlined";
import  EmailIcon from "@mui/icons-material/EmailOutlined";
import PointOfSaleIcon from "@mui/icons-material/PointOfSaleOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAddOutlined";
import TrafficIcon from "@mui/icons-material/TrafficOutlined";
import LieChart from "../../components/LieChart";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgresCircle";
import { fontSize } from "@mui/system";

const Dashboard = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
        <Box m="10px 10px 3px 20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subTitle="Welcome in your Dashboard"/>
            
            <Box>
                <Button
                sx={{
                     backgroundColor:colors.blueAccent[500],
                     color:colors.grey[100],
                     fontSize:"14px",
                     fontWeight:"bold",
                     padding:"10px 20px"
                     }} >
                        <DownloadIcon sx={{mr:"10px"}} />
                        Download Reports

                </Button>
                </Box>
            </Box>
            {/**GRID AND CHARTS */}

            <Box
            display="grid"
            gridTemplateColumns="repeat(12,1fr)"
            gridAutoRows="140px"
            gap="20px"
              >
                {/**ROW 1 */}
                <Box 
                gridColumn="span 3"
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
                >
                    <StatBox 
                    title="12.361"
                    subtitle="Send Email"
                    progress="0.75"
                    increase="+17%"
                    icon={
                        <EmailIcon 
                        sx={{color:colors.greenAccent[600], 
                                fontSize:"26px"}} />
                    }
                    />
                </Box>
                
                  <Box 
                   gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox 
                    title="432.223"
                    subtitle="Sale obtened"
                    progress="0.5"
                    increase="+21%"
                    icon={
                        <PointOfSaleIcon
                        sx={{color:colors.greenAccent[600], 
                                fontSize:"26px"}} />
                    }
                    />
                </Box>

                  <Box 
                gridColumn="span 3"
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
                >
                    <StatBox 
                    title="32.441"
                    subtitle="New Clients"
                    progress="0.30"
                    increase="+5%"
                    icon={
                        <PersonAddIcon
                        sx={{color:colors.greenAccent[600], 
                                fontSize:"26px"}} />
                    }
                    />
                </Box>

                  <Box 
                gridColumn="span 3"
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
                >
                    <StatBox 
                    title="1,325,234"
                    subtitle="Trafic abouned"
                    progress="0.80"
                    increase="+43%"
                    icon={
                        <TrafficIcon 
                        sx={{color:colors.greenAccent[600], 
                                fontSize:"26px"}} />
                    }
                    />
                </Box>
            {/**ROW 2 */}
            <Box
            gridColumn="span 8"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            >
                <Box
                mt="25px"
                p="0 30px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                >
                    <Box>
                        <Typography 
                            variant="h5"
                             fontWeight="600" 
                             color={colors.grey[100]}>
                                Revenu Generated
                        </Typography>
                        <Typography 
                            variant="h4" 
                            fontWeight="bold" 
                            color={colors.greenAccent[400]}
                        >
                                $56,345,345
                        </Typography>
                    </Box>
               
                    <Box>
                        <IconButton>
                            <DownloadIcon
                             sx={{fontSize:"26px", 
                             color:colors.greenAccent[500]}}/>
                        </IconButton>
                </Box>
                </Box>
                <Box height="250px" mt="-20px">
                    <LieChart isDashboard={true}/>
                </Box>
                </Box>
                    {/**TRANSACTIONS */}
                   <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/**ROW 3 */}
        <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        p="30px"
        >
            <Typography
             variant="h5" 
            fontWeight="500">
                Campaign
            </Typography>
            <Box 
            display="flex" 
            flexDirection="column"
            alignItems="center"
            mt="25px"
            >
                <ProgressCircle  size="125"/>
                <Typography
                variant="h5"
                color={colors.greenAccent[500]}
                sx={{ mt:"15px"}}
                >
                    $4,34,345 Revenu Generated
                </Typography>   
                <Typography>
                       Includes Extra misc expenditures and costs
                </Typography>
            </Box>

        </Box>
       
        <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        >
            <Typography
             variant="h5" 
            fontWeight="500"
            sx={{p:"30px 30px 0 30px"}}
            >
                Sales Quantity
            </Typography>
            <Box 
            height="250px"
            mt="2-5px"
            >
                <BarChart  isDashboard={true}/>
            </Box>

        </Box>

         <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        p="30px"
        >
            <Typography
             variant="h5" 
            fontWeight="500"
            sx={{mb:"15px"}}
            >
                Geography Based Trafic
            </Typography>
            <Box 
            height="200px"
            >
                <GeographyChart  isDashboard={true}/>
            </Box>
            </Box>




        {/**fff */}
            </Box>
        </Box>
    )
}

export default Dashboard;
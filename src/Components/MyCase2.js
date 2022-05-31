import {  useEffect,useState } from "react";
import { styled } from '@mui/material/styles';
import '../Mycard.scss';
 import { Box, Paper,Grid,Divider,Button} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getTodosAsync } from "../redux/todoSlice";
import Animation from './Animation';

 const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 800,
  color: theme.palette.text.primary,
 }));
function MyCase2(props) {
 
 
 
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [animation, setanimation] = useState(true);

  

   useEffect(() => {
 
      dispatch(getTodosAsync());
      todos.length>0? setanimation(false):setanimation(true);
     
  },[todos]);
 
 
  return (
    <div>
    <div className={animation ? "animationShow" : "animationHide"}>
        <Animation />
      </div>
      {
        todos.length>0? 
        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
       {
         todos.map((td)=>(
          <StyledPaper key={td.Cash}
        sx={{
          my: 5,
          mx: 'auto',
          p: 4,
        }}
      >
        <Grid className="gridContainer" container wrap="nowrap" >
          <Grid item sm={12} lg={2}>
          <img
          className="logo"
        src={td.ImagePath}
         alt={td.title}
        loading="lazy"
       />
          </Grid>
          <Divider className="vertDivider" orientation="vertical" flexItem>
      </Divider>
          <Grid  item sm={12} lg={8}>
          <Box sx={{ fontWeight: 'bold', ml: 1 }}>{td.ProductDesc}</Box>
          <Box sx={{ fontWeight: 'regular', ml: 1 }}>{td.FirmName}</Box>

 
           </Grid>
          <Grid className="rightGrid" item xs={12} lg={2}>  
          {td.QuotaInfo.PremiumWithDiscount>0?<div> <Box  style={{  textDecoration: "line-through"}} sx={{ fontWeight: 'thin', m: 1 }}>Peşin {td.Cash.toFixed(2)} TL</Box><Box className="price" sx={{ fontWeight: 'bold', m: 1 }}>{td.QuotaInfo.PremiumWithDiscount.toFixed(2)} TL</Box></div>
:<Box  className="price"  sx={{ fontWeight: 'bold', m: 1 }}>{td.Cash.toFixed(2)} TL</Box>}
          <Box className="price" sx={{ fontWeight: 'regular', m: 1 }}><Button variant="contained">Satın Al</Button></Box>

           

</Grid>
        </Grid>
      </StyledPaper>
         ))
       }
    
       
    </Box>:null
      }
      
     </div>
  );
}

export default MyCase2;

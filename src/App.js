import React from "react";
import { Button, Typography, Container, Box } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import image from './image.png';

function App() {
  return (
     <Box sx={{ minHeight: "100vh", backgroundColor: "#e0f0ff", pt: "5%" }}>
    <Container sx={{ backgroundColor: "#fafcfb", borderRadius: 5, mt:2 }}>
        <Box sx={{pt:2,ml:5, display:"flex"}}>
        <Button sx={{color: 'inherit', textTransform: 'none'}} disableRipple><Typography sx={{color:"blue"}} variant="h5">Devkit.</Typography></Button>
        <Box sx={{display:"flex", flexWrap:"wrap", ml:"50%",color:"grey"}}>
            <Button sx={{color:"grey"}}>Account</Button>
            <Button sx={{color:"grey"}}>About</Button>
            <Button sx={{color:"grey"}}>Service</Button>
            <Button sx={{color:"grey"}}>Contact</Button>
        </Box>
        </Box><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <Box sx={{display:"flex", flexDirection:{sm:"row", xs:"column"}, pb:"5%"}}>
        <Box sx={{mr:"20%", ml:"10%"}}>
            <Typography variant="h4">
                Welcome to <span style={{color:"blue"}}>Devkit.</span> Develop anything.
            </Typography>
            <Typography variant="h6" sx={{color:"grey", mt:3}}>
                Build a beautiful, modern website with flexible components built from scratch
            </Typography>
            <Box sx={{mt:3}}>
                <Button variant="contained" sx={{mr:3}}> View all pages&nbsp;&nbsp;<ArrowForwardIcon fontSize="small"/></Button>
                <Button variant="outlined"> Documentation </Button>
            </Box>
        </Box>
        <Box sx={{width:{xs:"100%", sm:1000},transform: {xs:"none", sm:"translateY(-70px)"}}}>
        <img src={image} style={{width:"100%"}}></img>
        </Box>
        </Box>
    </Container>
    </Box>
  );
}

export default App;

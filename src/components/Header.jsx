import React from "react";
import { Grid, Typography , Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from '@mui/material/useMediaQuery';

const whiteColor = {
  color: "white",
};

function Header() {
  const matches = useMediaQuery('(min-width:527px)');
  return (
    <Grid
      sx={{ bgcolor: "#6154C2", height: "60px", px: 5 , position:"absolute",width:"100%"}}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid sx={whiteColor}>
        <Typography variant="body1">
          HARBOUR.SPACE{" "}
          <span style={{ fontSize: "11px" }}>/INTERACTION DESIGN</span>
        </Typography>
      </Grid>
      {matches ? <Avatar className="applybtn" 
      sx={{position:"absolute" , 
       width: 100, height: 100 , right:100 , top:10 ,
        bgcolor:"#5ACF81" , textAlign:"center" }} >APPLY NOW</Avatar> : null}
      <Grid sx={whiteColor}>
        <MenuIcon color="white" />
      </Grid>
    </Grid>
  );
}

export default Header;

import React from "react";
import { Divider, Grid, Typography } from "@mui/material";

function Footer() {
  return (
    <Grid container sx={{ position: "fixed", bottom: 0, width: "100%", p: 2 }}>
      <Divider width="100%" sx={{ mb: 1.5 }} />
      <Grid item={2} sx={{ pl: 10, pr: 5 }}>
        <Typography variant="body1">Zeptolab</Typography>
        <Typography variant="caption">Marketing Performance</Typography>
      </Grid>
      <Grid item={2} sx={{ pr: 5 }}>
        <Typography variant="body1">Location</Typography>
        <Typography variant="caption">Bangkok</Typography>
      </Grid>
      <Grid item={2} sx={{ pr: 5 }}>
        <Typography variant="body1">Duration</Typography>
        <Typography variant="caption">1 Year Full-Time</Typography>
      </Grid>
      <Grid item={2} sx={{ pr: 5 }}>
        <Typography variant="body1">Start date</Typography>
        <Typography variant="caption">3 Aug 2020</Typography>
      </Grid>
      <Grid item={2} sx={{ pr: 5 }}>
        <Typography variant="body1">Application deadline</Typography>
        <Typography variant="caption">30 June 2020</Typography>
      </Grid>
      <Grid item={2} sx={{ pr: 5 }}>
        <Typography variant="body1">Application closes in</Typography>
        <Typography variant="caption">6 Day : 22 Hrs : 56 Min</Typography>
      </Grid>
      <Grid item={1}></Grid>
    </Grid>
  );
}

export default Footer;

import React from "react";
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { ReactComponent as Icon } from "../../assets/icons/Icon.svg";
import { ReactComponent as Logo } from "../../assets/icons/Logo.svg";
import { ReactComponent as Pattern } from "../../assets/icons/Pattern.svg";
import { Container } from "@mui/system";

function ProgramInfoLayout() {
  const matches = useMediaQuery("(min-width:527px)");
  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 1, sm: 1, md: 2 }}
        columnGap={{ xs: 1, sm: 1, md: 2 }}
        columns={{ xs: 1, sm: 5, md: 12 }}
        alignContent="center"
        justifyContent="space-around"
      >
        <Grid
          item
          xs={1}
          sm={3}
          md={5.5}
          display="flex"
          sx={{
            flexDirection: "column",
            mt: 20,
            position: "relative",
            alignItems: "center",
          }}
        >
          <Grid sx={{ position: "absolute", left: 220, top: -100 }}>
            <Icon />
          </Grid>
          <Grid
            display="flex"
            sx={{ flexDirection: "column", flexWrap: "wrap" }}
          >
            <Typography
              sx={{ color: "#685DC5", fontWeight: 500, fontSize: "48px" }}
              variant="h4"
            >
              Interaction Design Apprenticeship
            </Typography>
            <Typography sx={{ mt: 5, fontWeight: 500, fontSize: "22px" }}>
              A fully funded work-study program to launch your tech career
            </Typography>
            <Typography sx={{ mt: 5, fontSize: "22px", color: "#535353" }}>
              Harbour.Space has partnered with SCG to empower driven talent and
              eliminate the barriers to accessing exceptional education and
              career opportunities through a Masters Fellowship.
            </Typography>
            <Typography sx={{ mt: 5, fontSize: "22px", color: "#535353" }}>
              <span style={{ fontWeight: "500", color: "black" }}>
                Position:{" "}
              </span>
              Marketing Performance
            </Typography>
            <Button
              sx={{
                mt: 5,
                p: 2,
                fontSize: "18px",
                bgcolor: "#685DC5",
                width: "11em",
                borderRadius: "29px",
                "&:hover": {
                  bgcolor: "#685DC5",
                },
              }}
              variant="contained"
            >
              Apply Now
            </Button>
          </Grid>
        </Grid>

        <Grid
          item
          xs={2}
          sm={3}
          md={5.5}
          display="flex"
          sx={{ flexDirection: "column", mt: 20 }}
        >
          <Grid container display="flex" sx={{ alignItems: "center" }}>
            <Grid item xs={3}>
              <Logo />
            </Grid>
            <Grid item xs={3} display="flex" sx={{ flexDirection: "column" }}>
              <Typography sx={{ fontSize: "18px" }}>Powered by:</Typography>
              <Typography sx={{ fontFamily: "Apercu Pro", fontSize: "27px" }}>
                Zeptolab
              </Typography>
            </Grid>
          </Grid>
          <Grid
            display="flex"
            sx={{
              flexDirection: "column",
              border: "1px solid #DADADA",
              p: 3,
              mt: 5,
            }}
          >
            <Typography
              sx={{ fontSize: "18px", color: "#685DC5", fontWeight: "500" }}
            >
              Application closes in
            </Typography>
            <Typography
              sx={{
                fontFamily: "ApercuPro",
                fontSize: "27px",
                color: "#535353",
              }}
            >
              6 Day : 22 Hrs : 56 Min : 13 Seg
            </Typography>
          </Grid>

          <Grid
            display="flex"
            sx={{
              flexDirection: "column",
              border: "1px solid #DADADA",
              p: 5,
              mt: 5,
              bgcolor: "white",
            }}
          >
            <Grid sx={{ display: "flex" }} container>
              <Grid display="flex" sx={{ flexDirection: "column" }} item xs={6}>
                <Typography
                  sx={{ fontSize: "18px", color: "#685DC5", fontWeight: "500" }}
                >
                  Location
                </Typography>
                <Typography sx={{ color: "#535353" }}>Bangkok</Typography>
              </Grid>
              <Grid display="flex" sx={{ flexDirection: "column" }} item xs={6}>
                <Typography
                  sx={{ fontSize: "18px", color: "#685DC5", fontWeight: "500" }}
                >
                  Duration
                </Typography>
                <Typography sx={{ color: "#535353" }}>
                  1 Year Full-Time
                </Typography>
              </Grid>
            </Grid>
            <Grid sx={{ display: "flex", mt: 2 }} container>
              <Grid display="flex" sx={{ flexDirection: "column" }} item xs={6}>
                <Typography
                  sx={{ fontSize: "18px", color: "#685DC5", fontWeight: "500" }}
                >
                  Start date
                </Typography>
                <Typography sx={{ color: "#535353" }}>30 June 2020</Typography>
              </Grid>
              <Grid display="flex" sx={{ flexDirection: "column" }} item xs={6}>
                <Typography
                  sx={{ fontSize: "18px", color: "#685DC5", fontWeight: "500" }}
                >
                  End date
                </Typography>
                <Typography sx={{ color: "#535353" }}>3 Aug 2020</Typography>
              </Grid>
            </Grid>
            {!matches ? null : (
              <Grid sx={{ position: "absolute", zIndex: -10 }}>
                <Pattern />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProgramInfoLayout;

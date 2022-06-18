import React from "react";
import "./banner.css";
import BannerImg from "../assets/banner-image1.png";
import { Button, Grid, Typography } from "@material-ui/core";
import Paypal from "../assets/paypal.png";
import Google from "../assets/google.png";
import Dropbox from "../assets/dropbox.png";
import Typed from "react-typed";

function Banner() {
  return (
    <>
      <div className="bannerDiv">
        <Grid container>
          <Grid className="great" md={4} xs={10}>
            <Typography>
              <h1 className="h1">Great Software is built with amazing</h1>
              <Typed
                className="type"
                strings={["Developers", "Engineers", "Desingners"]}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
            </Typography>
            <Typography>
              <p className="build">
                We help build and manage a team of of world-class developers to
                bring your vision to life.
              </p>
            </Typography>
            <input type="text" placeholder="Subscribe newsletter" />{" "}
            <Button className="btnSub">Subscribe</Button>
          </Grid>
          <Grid className="ban" md={5} xs={10}>
            <img src={BannerImg} alt="banner" />
          </Grid>
        </Grid>

        <Grid className="compa" container>
          <Grid md={7} xs={10}>
            <Typography>
              <h2 className="spon">Sponsored by:</h2>
            </Typography>
          </Grid>
          <div className="companies">
            <img src={Paypal} alt="" />
            <img src={Google} alt="" />
            <img src={Dropbox} alt="" />
          </div>
        </Grid>
      </div>
    </>
  );
}

export default Banner;

import React from "react";
import "./features.css";
import { Grid, Typography } from "@material-ui/core";
import Pen from "../assets/pen.svg";
import Vector from "../assets/vector.svg";
import Editing from "../assets/editing.svg";
import Award from "../assets/award.svg";
function Features() {
  return (
    <>
      <Typography>
        <h3 className="quality">Quality features</h3>
      </Typography>
      <Typography>
        <h2 className="meet">Meet exciting feature of app</h2>
      </Typography>
      <div className="top">
        <Grid container className="container">
          <Grid className="boxDiv1" md={3} xs={10}>
            <div className="box1">
              <img className="img1" src={Pen} alt="" />
            </div>
            <div className="box-content">
              <Typography>
                <h2 className="peru">Unlimited Customization</h2>
              </Typography>
              <Typography>
                <p className="get">
                  Get your blood tests delivered at home collect a sample from
                  the your blood tests.
                </p>
              </Typography>
            </div>
          </Grid>

          {/* second box */}
          <Grid className="boxDiv1" md={3} xs={10}>
            <div className="box2">
              <img className="img2" src={Vector} alt="" />
            </div>
            <div className="box-content">
              <Typography>
                <h2 className="peru">Vector shape & resizable</h2>
              </Typography>
              <Typography>
                <p className="get">
                  Get your blood tests delivered at home collect a sample from
                  the your blood tests.
                </p>
              </Typography>
            </div>
          </Grid>

          {/* third box */}

          <Grid className="boxDiv1" md={3} xs={10}>
            <div className="box3">
              <img className="img3" src={Editing} alt="" />
            </div>
            <div className="box-content">
              <Typography>
                <h2 className="peru" id="best">
                  Editing freedom
                </h2>
              </Typography>
              <Typography>
                <p className="get">
                  Get your blood tests delivered at home collect a sample from
                  the your blood tests.
                </p>
              </Typography>
            </div>
          </Grid>

          {/* fourth box */}
          <Grid className="boxDiv1" md={3} xs={10}>
            <div className="box4">
              <img className="img4" src={Award} alt="" />
            </div>
            <div className="box-content">
              <Typography>
                <h2 className="peru" id="best">
                  Best Award history
                </h2>
              </Typography>
              <Typography>
                <p className="get">
                  Get your blood tests delivered at home collect a sample from
                  the your blood tests.
                </p>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Features;

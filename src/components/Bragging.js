import React from "react";
import "./bragging.css";
import Plane from "../assets/plane.png";
import CheckMark from "../assets/check-mark.svg";
import Arrow from "../assets/arrow-right.svg";
import { Grid, Typography } from "@material-ui/core";

function Bragging() {
  return (
    <>
      <div>
        <Grid className="planeContainer" container>
          <Grid md={4} xs={10}>
            <img src={Plane} className="plane" alt="plane" />
          </Grid>

          <Grid className="boost" md={4} xs={10}>
            <Typography>
              <h2 className="agencies">
                Boost your agencies by choosing{" "}
                <span className="ninja">Ninja Developers </span>
              </h2>
            </Typography>
            <Typography>
              <p className="create">
                Create custom landing pages with Shades that convert more
                visitors than any website, no coding required.
              </p>
            </Typography>

            <ul className="listItems">
              <li className="checkMark1">
                <img src={CheckMark} alt="" />
                <span>Unlimited design possibility </span>
              </li>
              <li className="checkMark3">
                <img src={CheckMark} alt="" />
                <span>Completely responsive features</span>
              </li>
              <li className="checkMark3">
                <img src={CheckMark} alt="" />
                <span>Easy to customize plugins</span>
              </li>
            </ul>
            <div className="learn">
              {" "}
              <a href="/#">
                Learn More <img className="arrow" src={Arrow} alt="" />
              </a>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Bragging;

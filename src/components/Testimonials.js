import React from "react";
import { Typography } from "@material-ui/core";
import "./testimonials.css";
import ReactPlayer from "react-player";
const Testimonials = () => {
  return (
    <>
      <div className="test">
        <Typography>
          <h1 className="lead">
            Leading companies trust us to develop software
          </h1>
          <p className="we">
            We believe it’s important for everyone to have access to software
            especially when it comes to digital learning be navigate.
          </p>
          <h4 className="explore">Explore Details</h4>
        </Typography>
      </div>

      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=hb8eq26vxs4"
          width="70%"
          height="100vh"
        />
      </div>
    </>
  );
};

export default Testimonials;

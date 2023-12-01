"use client";
import React from "react";
import { Rotate, Slide, Swing, Wobble, Zoom } from "react-swift-reveal";

const Box = () => {
  return (
    <div className="container my-2">
      <div className="row">
        <div className="col-2">
          <div className="border px-2 py-5 bg-black"></div>
        </div>
        <div className="col-2">
          <div className="border px-2 py-5 bg-danger"></div>
        </div>
        <div className="col-2">
          <div className="border px-2 py-5 bg-success"></div>
        </div>
        <Slide delay={300} duration={800} right>
          <div className="col-2">
            <div className="border px-2 py-5 bg-info-subtle"></div>
          </div>
        </Slide>

        {/* Working with zoom */}
        <Zoom duration={2000} delay={500} count={1} right>
            <div className="col-2">
                <div className="border px-2 py-5 bg-info"></div>
            </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Box;

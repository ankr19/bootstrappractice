"use client"
import React from "react";
const Grid = () => {
  return (
    <div>
       <div>
        <h1>Equal-width</h1>
       </div>
      <div className="container text-center">
        <div className="row my-4 text-bg-secondary">
          <div className="col text-bg-primary">1 of 2</div>
          <div className="col">2 of 2</div>
        </div>
        <div className="row text-bg-secondary my-4 border rounded-2">
          <div className="col text-bg-primary border">1 of 3</div>
          <div className="col border">2 of 3</div>
          <div className="col border">3 of 3</div>
        </div>
      </div>
      <div>
        <h2>Setting one column width</h2>
      </div>
      <div className="container text-center">
        <div className="row my-4 text-bg-secondary border">
          <div className="col text-bg-primary border">1 of 2</div>
          <div className="col-6 border">2 of 2(wider)</div>
          <div className="col border">3 of 2</div>
        </div>
        <div className="row text-bg-secondary my-4 border rounded-2">
          <div className="col text-bg-primary border">1 of 3</div>
          <div className="col-4 border">2 of 3(wider)</div>
          <div className="col border">3 of 3</div>
        </div>
      </div>
      <div>
        <h2>Variable width content</h2>
        <div className="container text-center text-bg-success">
        <div className="row my-4 text-bg-secondary border">
          <div className="col text-bg-primary border">1 of 3</div>
          <div className="col border">2 of 3</div>
          <div className="col border">3 of 3</div>
        </div>
        <div className="row text-bg-secondary my-4 border rounded-2">
          <div className="col text-bg-primary border">1 of 3</div>
          <div className="col border">2 of 3</div>
          <div className="col border">3 of 3</div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Grid;

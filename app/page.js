"use client";
import Box from "@/components/Box";
import Grid from "@/components/Grid";
import { Fade, Roll, Slide } from "react-swift-reveal";

export default function Home() {
  return (
    <>
      <Grid />
      <Fade duration={1000} delay={400} distance="30px">
        <Box />
      </Fade>
      <Box />
      <Box />
      <Slide up duration={4000} delay={500}>
        <Box />
      </Slide>
      <div className="row">
        <div className="col-2 img-container pl-5">
          <img className="w-50" src="/mov1.png" alt="...." />
        </div>
      </div>
    </>
  );
}

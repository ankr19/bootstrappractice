"use client";
import React from "react";
export default function BootstrapJs() {
  React.useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min.js");
  }, []);
  return null;
}

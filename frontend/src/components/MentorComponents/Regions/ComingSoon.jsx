import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";

export default function ComingSoon() {
  return (
    <div>
      <div className="backDiv">
        <Button href="/region" className="backLink btn-lg rounded-lg">
          Back To Regions
        </Button>
      </div>
      <h1>Coming Soon!</h1>
    </div>
  );
}

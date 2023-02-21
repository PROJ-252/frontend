import React from "react";
import Webcam from "react-webcam";
// import "./App.css";
import LabelBottomNavigation from "../component/BottomNavigation"
import MyResponsivePie from "../component/MainPageComponent";
import {piedata} from "../component/piedata"

let style: React.CSSProperties = {
    display:"flex",
    background:"white",
    justifyContent: "center",
    alignItems: "center",
    // position: "absolute",
    // bottom: 0,
    // left: 0,
    // right: 0,
    height: 500,
}

function ReportPage() {
  return (
    <>
    <div style={style}>
        <MyResponsivePie data={piedata}/>
    </div>
    <div className="App">
      {/* <Webcam /> */}
      reportpage1
      <LabelBottomNavigation/>
    </div>
    </>
    
  );
}

export default ReportPage;
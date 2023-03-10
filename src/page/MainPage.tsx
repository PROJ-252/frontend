import React from "react";
import Webcam from "react-webcam";
// import "./App.css";
import LabelBottomNavigation from "../component/BottomNavigation"
import GroupButton from "../component/GruopButton";
import Webcam1 from "../component/Camera"
import ReportPanel from "../component/ReportPanel"
import Divider from '@mui/material/Divider';

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

function MainPage() {
  return (
    <div className="App">
      <Webcam1 />
      
      <ReportPanel/>
      {/* <GroupButton/> */}
      <LabelBottomNavigation/>
    </div>
    
  );
}

export default MainPage;
import React from "react";
import Webcam from "react-webcam";
// import "./App.css";
import LabelBottomNavigation from "../component/BottomNavigation"
import Calendar from "../component/Calendar1";
import {CalendarData} from "../component/CalendarData1"

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

function CalendarPage() {
  return (
    <>
    <div style={style}>
      {/* <Webcam /> */}
      <Calendar data={CalendarData}/>
    </div>
    <div>
      <LabelBottomNavigation/>
    </div>
    </>
  );
}

export default CalendarPage;
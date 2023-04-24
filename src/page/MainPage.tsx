import React from "react";
import Webcam from "react-webcam";
// import "./App.css";
import LabelBottomNavigation from "../component/BottomNavigation"
import GroupButton from "../component/GruopButton";
import Webcam1 from "../component/Camera"
import ReportPanel from "../component/ReportPanel"
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import VolumeSlider from "../component/VolumeSlider";

const theme = createTheme({
  palette: {
    primary: {
      main: '#26a69a',
    },
    secondary: {
      main: '#0097a7',
    },
  },
});

let style2: React.CSSProperties = {
    // display:"flex",
    background:"#c1eff4",
    // justifyContent: "center",
    // alignItems: "center",
    position: "absolute",
    // bottom: 0,
    // left: 0,
    // right: 0,
    width: "100%",
    height: "100%",
}


function MainPage() {
  return (
    <>
    <div style={style2}>
      <Webcam1 />
      <VolumeSlider/>
      <ReportPanel/>
    </div>
    <LabelBottomNavigation/>
    </>
    
  );
}

export default MainPage;
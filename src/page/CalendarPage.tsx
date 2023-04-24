import React from "react";
import Webcam from "react-webcam";
// import "./App.css";
import LabelBottomNavigation from "../component/BottomNavigation"
import Calendar from "../component/Calendar1";
import {CalendarData} from "../component/CalendarData1"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import styled from '@emotion/styled';

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

let style: React.CSSProperties = {
    display:"flex",
    background:"#c1eff4",
    justifyContent: "center",
    alignItems: "flex-start",
    // position: "absolute",
    // bottom: 0,
    // left: 0,
    // right: 0,
    width: "100%",
    height: "100%",
}
const CalendarViewFrame = styled.div({
  display:"flex",
  justifyContent: "center",
  alignItems: "flex-start",
  position: "absolute",
  // bottom: 150,
  //  left: 100,
  width: "100%",
  height: "100%",
  // left: 0,
  // right: 0,
  // border: 'solid 2px black',
  backgroundColor: '#c1eff4'
})
function CalendarPage() {
  return (
    <>
      <CalendarViewFrame>
        <ThemeProvider theme={theme}>
        <Calendar/>
        </ThemeProvider>
      </CalendarViewFrame>
      <div>
        <LabelBottomNavigation/>
      </div>
    </>
  );
}

export default CalendarPage;
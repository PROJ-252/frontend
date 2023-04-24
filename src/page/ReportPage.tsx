import React from "react";
import LabelBottomNavigation from "../component/BottomNavigation"
import MyResponsivePie from "../component/MainPageComponent";
import {piedata} from "../component/piedata"
import styled from "@emotion/styled";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

let style: React.CSSProperties = {
    display:"flex",
    // background:"white",
    justifyContent: "center",
    alignItems: "center",
    // position: "absolute",
    // bottom: 0,
    // left: 0,
    // right: 0,
    height: 300,
}

const ReportViewFrame = styled.div({
  position: "absolute",
  // bottom: 150,
  //  left: 100,
  width: "100%",
  height: "100%",
  // left: 0,
  // right: 0,
  // border: 'solid 2px black',
  backgroundColor: '#e2ebeb'
})


function ReportPage() {
  return (
    <ReportViewFrame>
      <div style={style}>
          <MyResponsivePie data={piedata}/>
      </div>
      <div className="report">
        <Stack spacing={2}>
          {/* <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item> */}
        </Stack>
        {/* <Webcam /> */}
        1. 총 사용시간: 10시간,
        2. 총 집중시간: 6시간,
        3. 총 주의단계: 3시간,
        4. 총 졸음시간: 1시간,
        5. 목표 집중시간 달성률: 6시간/ 8시간,
        <LabelBottomNavigation/>
      </div>
    </ReportViewFrame>
    
  );
}

export default ReportPage;
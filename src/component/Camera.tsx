import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import useCamera from '../hook/useCamera';
import { useRecoilValue } from 'recoil';
import { isClickState, isShowVidewState } from '../store/video';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
// import * as React from 'react';


const CamViewFrame = styled.div({
  position: "absolute",
  bottom: 100,
  left: 230,
  right: 0,
  zIndex: 5,
})

const openedWebcamStyle: React.CSSProperties = {
  display: 'block',
  width: 100,
  height: 'auto',
  borderRadius: 10
}

const closedWebcamStyle: React.CSSProperties = {
  display: 'block',
  width: 200,
  height: 'auto',
  borderRadius: 30
}



const videoConstraints = {
  facingMode: "user",
  width: 200,
  height: 320,
  // zIndex: 5,
}



function Webcam1() {

    const videoElement = useRef(null);

    const isShowVideo = useRecoilValue(isShowVidewState)
    const isClick = useRecoilValue(isClickState)

    const { startCam, stopCam, changeCameraViewState } = useCamera()


    const buttons = [
        <Button onClick={startCam} key="one">시작</Button>,
        <Button key="two">일시정지</Button>,
        <Button onClick={stopCam} key="three">사용종료</Button>,
    ];

    return (
        <div>
            <CamViewFrame>
                {isShowVideo &&
                    <Webcam
                      onClick={changeCameraViewState}
                      style={isClick ? openedWebcamStyle : closedWebcamStyle}
                      audio={false}
                      ref={videoElement}
                      videoConstraints={videoConstraints}
                    />
                }
            </CamViewFrame>
            <Box
              sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '100%',
                  height: 60,
                  marginTop: 3,
                  '& > *': {
                  m: 1,
                  },
              }}
            >
              <ButtonGroup size="large" aria-label="large button group">
                  {buttons}
              </ButtonGroup>
            </Box>
        </div>
    );
};

export default Webcam1;





{/* <ButtonGroup size="small" aria-label="small button group">
                {buttons}
            </ButtonGroup>
            <ButtonGroup color="secondary" aria-label="medium secondary button group">
                {buttons}
            </ButtonGroup> */}
import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
// import * as React from 'react';

const stylecam: React.CSSProperties = {
  position: "absolute",
  bottom: 150,
//   left: 100,
  right: 0,
  height: 100,
  fontSize: 30,
  borderRadius: 5,

}

function Webcam1() {

    const [isShowVideo, setIsShowVideo] = useState(false);
    const videoElement = useRef(null);
    
    const videoConstraints = {
        width: 140,
        height: 180,
        facingMode: "user",
        borderRadius: 5,

    }

    const startCam = () => {
        setIsShowVideo(true);
    }

    const stopCam = () => {
        // let stream = HTMLVideoElement.current.stream;
        // const tracks = stream.getTracks();
        // tracks.forEach((track: { stop: () => any; }): any => track.stop());
        setIsShowVideo(false);
    }
    const buttons = [
        <Button onClick={startCam} key="one">시작</Button>,
        <Button key="two">일시정지</Button>,
        <Button onClick={stopCam} key="three">사용종료</Button>,
      ];
    return (
        <div>
            <div className="camView" style={stylecam}>
                {isShowVideo &&
                    <Webcam audio={false} ref={videoElement} videoConstraints={videoConstraints} />
                }
            </div>
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                
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
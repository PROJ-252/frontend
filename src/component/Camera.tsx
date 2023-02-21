import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
// import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';


function Webcam1() {

    const [isShowVideo, setIsShowVideo] = useState(false);
    const videoElement = useRef(null);
    
    const videoConstraints = {
        width: 640,
        height: 480,
        facingMode: "user"
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
            <div className="camView">
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
            {/* <ButtonGroup size="small" aria-label="small button group">
                {buttons}
            </ButtonGroup>
            <ButtonGroup color="secondary" aria-label="medium secondary button group">
                {buttons}
            </ButtonGroup> */}
            <ButtonGroup size="large" aria-label="large button group">
                {buttons}
            </ButtonGroup>
            </Box>
        </div>
    );
};

export default Webcam1;
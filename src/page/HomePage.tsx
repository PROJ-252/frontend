import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import AlarmAddIcon from '@mui/icons-material/AlarmAdd';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { linearGradientDef } from '@nivo/core';
import Chip from '@mui/material/Chip';

const theme = createTheme({
  palette: {
    primary: {
      main: '#303f9f',
    },
    secondary: {
      main: '#00544a',
    },
  },
});


let style1: React.CSSProperties = {
  display:"flex",
  background: 'linear-gradient(115deg, #74ebd5, #acb6e5)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  justifyContent:"center",
  alignItems: "center",
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: '100% ',
  flexDirection: 'column',
}

let style2: React.CSSProperties = {
  display:"flex",
  // background: '#a5e2f1',
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: 1000,
  fontSize: 30,
}

let mainpage: React.CSSProperties = {
  background: '#a5e2f1',
}
let style: React.CSSProperties = {
  // display:"flex",
  // background:"white",
  // justifyContent: "center",
  // alignItems: "center",
  // position: "absolute",
  // bottom: 0,
  // left: 0,
  // right: 0,
  // height: 200,
  backgroundColor: "#c2185b",
  // background: linear-gradient(to right, #00c3ff, #ffff1c), /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

const HomePage = () => {
  const navigate = useNavigate();

  return (
    
      
      <div style={style1}>
      <div style={{fontSize: 30, fontWeight: 'bold'}}><AlarmAddIcon/> AI Stopwatch</div>
      <Stack 
      sx={{height: '60%'}}
      direction="column"
      justifyContent="flex-end"
      alignItems="center"
      spacing={4}>
        <ThemeProvider theme={theme}>
          <Chip onClick={() => navigate("/signin")} sx={{ height: 35, width: 180 }} label="로그인" variant="outlined" color="primary"/>
          </ThemeProvider>
          <ThemeProvider theme={theme}>
          <Chip onClick={() => navigate("/signup")} sx={{ height: 35, width: 180 }} label='회원가입' variant="outlined" color="secondary"/>
        </ThemeProvider>
      </Stack>
      </div>
    
  )
}

export default HomePage;

// function gradient(to: any, right: any, arg2: any, arg3: number, c3ff: any, arg5: any) {
//   throw new Error('Function not implemented.');
// }

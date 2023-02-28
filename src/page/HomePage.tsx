import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import AlarmAddIcon from '@mui/icons-material/AlarmAdd';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1769aa',
    },
    secondary: {
      main: '#0097a7',
    },
  },
});


let style1: React.CSSProperties = {
  display:"flex",
  // background:"white",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: 200,
}

let style2: React.CSSProperties = {
  display:"flex",
  backgroundColor: "#a5e2f1",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: 1000,
  fontSize: 30,
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
  backgroundColor: "#a5e2f1",
}

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div style={style2}><AlarmAddIcon/> AI Stopwatch</div>
      <div style={style1}>
      <Stack 
      sx={{height: 100}}
      direction="column"
      // justifyContent="space-evenly"
      alignItems="center"
      spacing={2}>
        <ThemeProvider theme={theme}>
        <Button onClick={() => navigate("/signin")} sx={{ width: 180 }} variant="contained" color="primary">로그인</Button>
        </ThemeProvider>
        <ThemeProvider theme={theme}>
        <Button onClick={() => navigate("/signup")} sx={{ width: 180 }} variant="contained" color="secondary" href="#outlined-buttons" >
            회원가입
        </Button>
        </ThemeProvider>
      </Stack>
      </div>
    </>
  )
}

export default HomePage;
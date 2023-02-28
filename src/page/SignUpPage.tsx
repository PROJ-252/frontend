import React from "react";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

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
    // backgroundColor: "#a5e2f1",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 300,
  }
let style2: React.CSSProperties = {
    display:"flex",
    backgroundColor: "#D3e7ec",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 1000,
    fontSize: 25,
}
function SignUpPage() {
  const navigate = useNavigate();

  return (
    <>
    <div style={style2}><AccessibilityNewIcon/> 내맘대로 회원가입~</div>
    <div style={style1}>
    <ThemeProvider theme={theme}>
    <Stack 
    sx={{bottom: 200, height: 0}}
    direction="column"
    // justifyContent="space-evenly"
    alignItems="center"
    spacing={2}>
      <Button onClick={() => navigate("/signupinfo")} sx={{ width: 200 }} variant="contained" color="primary">이메일로 회원가입</Button>
      <Button onClick={() => navigate("/main")} sx={{ width: 200 }} variant="contained" color="secondary" href="#outlined-buttons">
        카카오계정으로 회원가입
      </Button>
    </Stack>
    </ThemeProvider>
    </div>
    </>
  );
}

export default SignUpPage;
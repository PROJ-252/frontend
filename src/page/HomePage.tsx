import FixedBottomNavigation  from "../component/BottomNavigation";
import SignInPageComponent from "../component/SigninPageComponent";
import MyResponsivePieCanvas from "../component/MainPageComponent"
import {piedata} from "../component/piedata"
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import AlarmAddIcon from '@mui/icons-material/AlarmAdd';

let style1: React.CSSProperties = {
  display:"flex",
  background:"white",
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
  background:"white",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: 1000,
  fontSize: 25,
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
      <Button onClick={() => navigate("/signin")} sx={{ width: 180 }} variant="outlined" color="secondary">로그인</Button>
      <Button onClick={() => navigate("/signup")} sx={{ width: 180 }} variant="contained" color="secondary" href="#outlined-buttons">
          회원가입
      </Button>
    </Stack>
    </div>
    </>
  )
}

export default HomePage;
import React from "react";
import LabelBottomNavigation from "../component/BottomNavigation"
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

let style: React.CSSProperties = {
    display:"flex",
    background:"white",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 0,
}

function SignUpPage() {
  const navigate = useNavigate();

  return (  
    <Stack 
    direction="column"
    // justifyContent="space-evenly"
    alignItems="center"
    spacing={2}>
      <Button onClick={() => navigate("/signupinfo")} sx={{ width: 180 }} variant="outlined" color="secondary">이메일로 회원가입하기</Button>
      <Button onClick={() => navigate("/main")} sx={{ width: 180 }} variant="contained" color="secondary" href="#outlined-buttons">
        카카오계정으로 회원가입하기
      </Button>
    </Stack>
  );
}

export default SignUpPage;
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import InfoIcon from '@mui/icons-material/Info';
import LabelBottomNavigation from "../component/BottomNavigation"


export default function SettingPage() {
  return (
    <>
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        height: 50
      }}
    >
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <AccessTimeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="알람 시간 설정" secondary="Jan 9, 2014" />
      </ListItem>

      <Divider variant="inset" component="li" />

      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <EditNotificationsIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="알람 종류 설정" secondary="알람음 선택" />
      </ListItem>

      <Divider variant="inset" component="li" />

      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <DriveFileRenameOutlineIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="닉네임 변경" secondary="July 20, 2014" />
      </ListItem>

      <Divider variant="inset" component="li" />

      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <LogoutIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="로그아웃" secondary="July 20, 2014" />
      </ListItem>

      <Divider variant="inset" component="li" />

      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <DeleteForeverIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="회원탈퇴" secondary="July 20, 2014" />
      </ListItem>

      <Divider variant="inset" component="li" />

      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <InfoIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="이용약관" secondary="July 20, 2014" />
      </ListItem>
    </List>
    <LabelBottomNavigation/>
    </>
  );
}
// import * as React from 'react';
// import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import Box from '@mui/material/Box';
// import LabelBottomNavigation from "../component/BottomNavigation"

// const buttons = [
//   <Button sx={{
//     borderRadius: 1,
//     // gap: 2 ,
//     width: 350,
//     height: 100,
//     boxShadow: 1
//     // margin: 2
//     }}key="one">알람 시간 설정</Button>,

//   <Button sx={{
//     borderRadius: 2,
//     height: 100,
//     boxShadow: 1
//     }}key="two">알람 종류 설정</Button>,

//   <Button sx={{
//     borderRadius: 2,
//     height: 100,
//     boxShadow: 1
//     }}key="three">닉네임 변경</Button>,

//   <Button sx={{
//     borderRadius: 2,
//     height: 100,
//     boxShadow: 1
//     }}key="four">로그아웃</Button>,

//   <Button sx={{
//     borderRadius: 2,
//     height: 100,
//     boxShadow: 1
//     }}key="five">회원탈퇴</Button>,

//   <Button sx={{
//     borderRadius: 2,
//     height: 100,
//     boxShadow: 1
//     }}key="six">이용약관</Button>,
// ];

// export default function SettingPage() {
//   return (
//     <div>
//     <Box
//       sx={{
//         width: 20,
//         display: 'flex',
//         '& > *': {
//           m: 1,
//         },
//       }}
//     >
      
//       <ButtonGroup
//         sx={{
//             borderRadius: 2,
//             // gap: 2 
//         }}
//         size='large'
//         orientation="vertical"
//         aria-label="vertical contained button group"
//         // variant="contained"
//         color='secondary'
//       >
//         {buttons}
//       </ButtonGroup>
     
//     </Box>
//     <LabelBottomNavigation/>
//     </div>
//   );
// }
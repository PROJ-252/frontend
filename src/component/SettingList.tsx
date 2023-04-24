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
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import RingtoneDialog from './RingtoneDialog';


export default function SettingList(){
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('Dione');
  
    const handleClickListItem = () => {
      setOpen(true);
    };
  
    const handleClose = (newValue?: string) => {
      setOpen(false);
  
      if (newValue) {
        setValue(newValue);
      }
    };

    return(
    <List
    sx={{
      width: '100%',
      maxWidth: '90%',
      bgcolor: '#e7e7e7', 
      height: '100%', 
      paddingTop: 0,
      paddingBottom: 0,
      // spacing: 1,
      // marginBlockStart: 0,
      // marginBlockEnd: 0,
    }}
  >
    <ListItem 
      button
    >
      <ListItemAvatar>
        <Avatar>
          <AccessTimeIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="알람 시간 설정" secondary="Jan 9, 2014" />
    </ListItem>

    <Divider variant="inset" component="li" />

    <ListItem 
      button
      // divider
      aria-haspopup="true"
      aria-controls="ringtone-menu"
      aria-label="phone ringtone"
      onClick={handleClickListItem}
    >
      <ListItemAvatar>
        <Avatar>
          <EditNotificationsIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="알람 종류 설정" secondary={value} />
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

    <ListItem button onClick={() => navigate("/")}>
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

    <Divider variant="inset" component="li" />

    <RingtoneDialog
          id="ringtone-menu"
          keepMounted
          open={open}
          onClose={handleClose}
          value={value}
    />
  </List>
  )
}
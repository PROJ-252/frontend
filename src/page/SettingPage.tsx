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
import SettingList from '../component/SettingList';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import zIndex from '@mui/material/styles/zIndex';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e7e7e7',
    },
    secondary: {
      main: '#0097a7',
    },
  },
});

const SettingViewFrame = styled.div({
    position: "absolute",
    // bottom: 150,
    //  left: 100,
    width: "100%",
    height: "100%",
    // left: 0,
    // right: 0,
    // border: 'solid 2px black',
    backgroundColor: '#e7e7e7'
})

export default function SettingPage() {
  return (
    <>
    <SettingViewFrame>
        {/* <ThemeProvider theme={theme}> */}
        <SettingList/>
        {/* </ThemeProvider> */}
    </SettingViewFrame>
    <LabelBottomNavigation/>
    </>
  );
}

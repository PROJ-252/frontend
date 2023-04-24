import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
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

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');
  const navigate = useNavigate();
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    // <Box sx={{ pb: 0}}>
    <BottomNavigation sx={{backgroundColor: '#d0e7f7', borderTop: 4, borderColor: '#164b8d', position: 'fixed', bottom: 0, left: 0, right: 0 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        onClick={() => navigate("/main")}
        label="Stopwatch1"
        value="mainpage"  
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        onClick={() => navigate("/report")}
        label="Report"
        value="reportpage"
        icon={<AssessmentIcon />}
      />
      <BottomNavigationAction
        onClick={() => navigate("/calendar")}
        label="Calendar"
        value="calendarpage"
        icon={<CalendarMonthIcon />}
      />
      <BottomNavigationAction 
        onClick={() => navigate("/setting")}
        label="Setting" 
        value="settingpage" 
        icon={<SettingsSuggestIcon />} />
    </BottomNavigation>
    // </Box>
  );
}
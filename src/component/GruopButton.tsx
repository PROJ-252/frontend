import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

const buttons = [
  <Button key="one">시작</Button>,
  <Button key="two">일시정지</Button>,
  <Button key="three">사용종료</Button>,
];

export default function GroupButton() {
  return (
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
  );
}
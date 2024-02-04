import React, { useState } from 'react';
import { IconButton, Paper, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import './MenuToggle.css'
import { ArrowCircleLeftRounded, ArrowCircleRightRounded } from '@mui/icons-material';

const menuOptions = [
  {
    label: 'Summary',
    value: 'summary'
  },
  {
    label: 'Work Experience',
    value: 'experience'
  },
  {
    label: 'Academics',
    value: 'academics'
  },
  {
    label: 'Skills',
    value: 'skills'
  },
  {
    label: 'Personal Information',
    value: 'personal_info'
  },
  {
    label: 'More',
    value: 'more'
  }
]


const MenuToggle = () => {
  const [selectedTab, setSelectedTab] = useState('summary');
  const handleMenuChange = ( _, value) => {
    setSelectedTab(value);
  }
  return (
    <>
      <Paper className='content-body-paper' elevation={3} >
        {selectedTab}
        </Paper>
      <div className='content-footer'>
          <IconButton ><ArrowCircleLeftRounded/></IconButton>
          <Typography className='footer-heading' variant='h5'>{selectedTab}</Typography>
          <IconButton><ArrowCircleRightRounded/></IconButton>
      </div>
</>
  );
}

export default MenuToggle;

import { Avatar, Chip, Divider, Link, Paper, Tooltip, Typography } from "@mui/material";
import React from "react";
import profile from "/images/profile.jpg";
import { GitHub, LinkedIn, MailRounded, Call, ContentCopy } from '@mui/icons-material';

import './Profile.css';

const githubLink = "https://github.com/Ritikjaiswal16";
const linkedinURL = "https://www.linkedin.com/in/smartcoder16";

const Profile = ({ setShowSnackbar }) => {
    const handleCopy = (link) => {
        navigator.clipboard.writeText(link);
        setShowSnackbar(true);
    }
    return(<Paper elevation={3} className="profile">
        <Avatar alt="RJ" src={profile} sx={{ width: 200, height: 200 }}/>
        <Divider />
        <Typography variant="h4" component="h2">
            Ritik Jaiswal
        </Typography>
        <Chip label={<Typography>Software Engineer</Typography>} />
        <Link className="flex-row" underline="hover">
            <Call/> <Typography>+91 8839321128</Typography>
        </Link>
        
        <Link className="flex-row" underline="hover">
            <MailRounded/> <Typography>rtkjaiswal101@gmail.com</Typography>
        </Link>
        <div className="social-links">
        <Tooltip  title={<Typography className="flex-row" variant="body2">{githubLink} <ContentCopy className="hover-pointer" onClick={()=> handleCopy(githubLink)}/></Typography>}>
        <Link href={githubLink} underline="hover">
            <GitHub sx={{ fontSize: 50, color:'black' }}/>
        </Link>
        </Tooltip>
        <Tooltip title={<Typography className="flex-row" variant="body2" >{linkedinURL} <ContentCopy onClick={()=> handleCopy(linkedinURL)}/></Typography>}>
        <Link href={linkedinURL} underline="hover">
            <LinkedIn sx={{ fontSize: 50 }}/>
        </Link>
        </Tooltip>
        </div>
    </Paper>)
}

export default Profile;
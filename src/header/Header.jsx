import React from "react";
import Menu from "./Menu";
import { Paper, Typography } from "@mui/material";
import './Header.css'

const Header = () => {
    return (<Paper elevation={3} className="header">
        <Typography variant="h4">
            My Resume
        </Typography>
        <Menu/>
        </Paper>)
}

export default Header;
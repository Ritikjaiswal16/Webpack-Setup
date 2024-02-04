import React, { useState } from "react"
import Header from "/Header"
import Profile from "./Profile"
import { GlobalStyles, IconButton, Paper, Snackbar, ThemeProvider, createTheme } from "@mui/material"
import { Close } from "@mui/icons-material"
import MenuToggle from "./MenuToggle"

const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: 'cursive',
      },
    }
  });

function App() {
    const [showSnackbar, setShowSnackbar]= useState(false);
    return (
        <ThemeProvider theme={theme}>
    <div className="resume-page">
        <GlobalStyles class="globalstyles"/>
        <Header/>
        <div className="resume-body">
        <Profile setShowSnackbar={setShowSnackbar}/>
        <Paper elevation={3} className="details">
        <MenuToggle/>
        </Paper>
        <Snackbar
            open={showSnackbar}
            anchorOrigin={{ vertical: 'bottom', horizontal:'center' }}
            autoHideDuration={2000}
            onClose={()=> setShowSnackbar(false)}
            message="Link Copied"
            action={<IconButton onClick={()=> setShowSnackbar(false)}><Close sx={{ color: "white" }}/></IconButton>}
        />
        </div>
    </div></ThemeProvider>)
}

export default App
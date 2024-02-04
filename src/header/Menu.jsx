import React, { useState } from "react";
import { Button, Drawer } from "@mui/material";


const Menu = () => {
    const [showMenu, setShowMenu]  = useState(false);

    return(
        <div>
        <Button onClick={() => setShowMenu(!showMenu)}>Menu</Button>
        <Drawer
        anchor="top"
        open={showMenu}
        onClose={() => setShowMenu(!showMenu)}
        >
            <div>
                <Button variant="outlined">
                Home    
                </Button>
                <Button variant="outlined">
                Career   
                </Button>
                <Button variant="outlined">
                About    
                </Button>
                <Button variant="outlined">
                Testing button    
                </Button>
            </div>
        </Drawer>
        </div>
    )
}

export default Menu;
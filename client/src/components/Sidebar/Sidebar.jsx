import React from 'react'
import { Hidden, Drawer } from "@material-ui/core";

const Sidebar = () => {
    return (
        <div>
            <Hidden mdUp implementation="css">
                <Drawer
                variant="permanent"
                open
                color = 'red'
                >
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                </Drawer>
            </Hidden>
        </div>
    )
}

export default Sidebar

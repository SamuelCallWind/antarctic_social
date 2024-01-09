import React from "react";
import { navigationMenu } from "./SidebarNavigation";
import { Avatar, Button, Divider, Menu, MenuItem } from "@mui/material";
import avatarSam from '../../../img/avatar_sam_callwind.png';

const Sidebar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    }
    return (
        <div className="card h-screen
         text-black
         flex 
         flex-col 
         justify-between 
         py-5">
            <div className="space-y-8 pl-5">
                <div className="">

                    <span className="logo font-bold">Antarctic Social</span>

                </div>

                <div className="space-y-8">
{navigationMenu.map((item) => <div className="cursor-pointer flex flex-row items-center">
    {item.icon}
    <p className="text-xl ml-2">{item.name}</p>
</div>)}

                </div>
            </div>
            <div>
                <Divider/>
                <div className=" mt-2 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <Avatar src={avatarSam}></Avatar>
                        <div>
                            <p className="font-bold">Samuel CallWind</p>
                            <p>@samcallwind</p>
                        </div>

                    </div>
                    <div>
                        <Button
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>...</Button>
                        
                        <Menu
                        id="threeDotsParameters"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "left"
                        }}
                        transformOrigin={{
                            vertical: "left",
                            horizontal: "top"
                        }}
                        >
                            <MenuItem onclick={handleClick}>Profile</MenuItem>
                            <MenuItem onclick={handleClick}>My Account</MenuItem>
                            <MenuItem onclick={handleClick}>Logout</MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
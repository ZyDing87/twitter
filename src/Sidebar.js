import React from 'react'
import "./Sidebar.css"
import XIcon from '@mui/icons-material/X'
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import MailOutlineIcon from '@mui/icons-material/MailOutlineOutlined'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import ListAltIcon from '@mui/icons-material/ListAlt'
import PeopleIcon from '@mui/icons-material/People'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { Button } from '@mui/material'

function Sidebar() {
    return (
        <div className = "sidebar">
           <XIcon
              className = "sidebar__XIcon"                
           /> 

           <SidebarOption active
              Icon = {HomeIcon}
              text = "Home"  
           />
           <SidebarOption 
              Icon = {SearchIcon}
              text = "Explore"  
           />
           <SidebarOption 
              Icon = {NotificationsNoneIcon}
              text = "Notifications"  
           />
           <SidebarOption 
              Icon = {MailOutlineIcon}
              text = "Messages"  
           />
           <SidebarOption
              Icon = {ListAltIcon} 
              text = "Lists"  
           />
           <SidebarOption 
              Icon = {BookmarkBorderIcon}
              text = "Bookmarks"  
           />
           <SidebarOption 
              Icon = {PeopleIcon}
              text = "Communities"  
           />
           <SidebarOption 
              Icon = {XIcon}
              text = "Premium"  
           />
           <SidebarOption 
              Icon = {PermIdentityIcon}
              text = "Profile"  
           />
           <SidebarOption 
              Icon = {MoreHorizIcon}
              text = "More"  
           />
           <Button variant = "outlined" className = "sidebar__tweet">Post</Button>
        </div>
    )
}

export default Sidebar

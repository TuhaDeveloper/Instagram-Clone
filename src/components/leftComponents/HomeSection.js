import React from 'react'
import './homeSection.css'
import NavLink from './NavLink'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SendIcon from '@mui/icons-material/Send';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxIcon from '@mui/icons-material/AddBox';
const HomeSection = () => {
    return (
        <div className='homeSection'>
            <img src='https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png' />

            <div className='fullScreenUse'>
                <NavLink navIcon={<HomeIcon />} iconText="Home" />
                <NavLink navIcon={<SearchIcon />} iconText="Search" />
                <NavLink navIcon={<ExploreIcon />} iconText="Explore" />
                <NavLink navIcon={<VideoLibraryIcon />} iconText="Reels" />
                <NavLink navIcon={<SendIcon />} iconText="Message" />
                <NavLink navIcon={<FavoriteBorderIcon />} iconText="Notification" />
                <NavLink navIcon={<AddBoxIcon />} iconText="Create" />

            </div>

            {/* https://th.bing.com/th/id/R.af1159ea3dd22f4b3d84a87d869127b9?rik=iz68IEBoErXAHw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2finstagram-icon-png-instagram-icon-1600.png&ehk=%2bAo2wF7lgRZJrtXPe3ev37c8JDCD6NBcj%2fGufhuhjQE%3d&risl=&pid=ImgRaw&r=0 */}
        </div>
    )
}

export default HomeSection
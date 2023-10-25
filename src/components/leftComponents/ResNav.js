import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import './resnav.css'
import ResNavLink from './ResNavLink';

const ResNav = () => {
    return (
        <div className='allresnav'>
            <ResNavLink navIcon={<HomeIcon />} />
            <ResNavLink navIcon={<SearchIcon />} />
            <ResNavLink navIcon={<ExploreIcon />} />
            <ResNavLink navIcon={<VideoLibraryIcon />} />
        </div>
    )
}

export default ResNav
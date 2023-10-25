import React from 'react'
import './reels.css'
import { Avatar } from '@mui/material';
// import imgages from '../../images/avatar.png'




const Reels = ({ images }) => {

    return (
        <div className='reel'>
            <Avatar alt="T" src={images} className='reelAvatar' />
            {/* <AccountCircleIcon className='reelAvatar' /> */}
        </div>
    )
}

export default Reels
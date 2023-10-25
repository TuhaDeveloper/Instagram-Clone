import { Avatar } from '@mui/material'
import React from 'react'
const Account = ({ imgages, idName, FollowerName }) => {
    return (
        <div className='profile'>
            <Avatar alt="T" src={imgages} className='porfileAvatar' />
            <div className='profileText'>
                <h5>{idName}</h5>
                <p>{FollowerName}</p>
            </div>
        </div>
    )
}

export default Account
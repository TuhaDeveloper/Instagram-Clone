import React from 'react'
import './accountSection.css'
import imgages from '../../images/insta1.jpg'
import { Avatar, Link } from '@mui/material'
import Account from './Account'
import imgages3 from '../../images/avatar.png'
import imgages2 from '../../images/insta2.png'
// import imgages3 from '../../images/insta1.jpg'
import imgages4 from '../../images/insta3.jpg'
const AccountSection = () => {
    return (
        <div className='accountSection'>

            <div className='profile'>
                <Avatar alt="T" src={imgages} className='porfileAvatar' />
                <div className='profileText'>
                    <h5>jahidulislamtoha</h5>
                    <p>Followed by sw_sabbir</p>
                </div>
            </div>

            <div className='suggetionProfile'>
                <div className='suggetionTitle'>
                    <p>Suggetion for you</p>
                    <Link>See All</Link>
                </div>

                <Account imgages={imgages4} idName='EH Siam' FollowerName='Followed by eva_akter' />
                <Account imgages={imgages2} idName='toha_jahid' FollowerName='Followed by mh_shakil' />
                <Account imgages={imgages3} idName='Md Mobarak' FollowerName='Followed by borhan_234' />
                <Account imgages={imgages4} idName='AH Efran' FollowerName='Followed by anika_afrin' />



            </div>

        </div>
    )
}

export default AccountSection
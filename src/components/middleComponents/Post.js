import React from 'react'
import './post.css'
import { Avatar, Link } from '@mui/material'
// import imgages from '../../images/avatar.png'
// import imgages2 from '../../images/insta1.png'
// import imgages3 from '../../images/insta2.jpg'
// import imgages4 from '../../images/insta3.jpg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TelegramIcon from '@mui/icons-material/Telegram';
import MessageIcon from '@mui/icons-material/Message';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const Post = ({ images }) => {
    return (
        <div className='allpost'>
            <div className='post'>
                <div className='postHead'>
                    <div className='firstdiv'>
                        <Avatar src={images} />
                        <h5> Ali Abdal_04 </h5>
                        <h6> Arjet sing slow reverb lofi song</h6>
                    </div>
                    <div className='moreverticon'>
                        <MoreHorizIcon />
                    </div>
                </div>
                <div className='postImage'>
                    <img src={images} />
                </div>
                <div className='postLikes'>
                    <div className='leftLikes'>
                        <FavoriteBorderIcon className='icon' />
                        <MessageIcon className='icon' />
                        <TelegramIcon className='icon' />
                    </div>
                    <BookmarkBorderIcon />
                </div>
                <div className='commentSection'>
                    <h6>Zubair_29 🙂 @toha_jahid 👩‍🦱</h6>
                    <Link>
                        more..
                    </Link><br />
                    <Link>
                        Views all 394 comments
                    </Link>
                    <h6>toha_jahid 🙂</h6>
                    <h6>faisu_07 🤣 @jahidulislamt</h6>
                    <input type='text' placeholder='add a comment' />
                </div>
            </div>
        </div>
    )
}

export default Post
import React from 'react'
import './feedSection.css'
import Reels from './Reels'
import Post from './Post'
import imgages from '../../images/avatar.png'
import imgages2 from '../../images/insta2.png'
import imgages3 from '../../images/insta1.jpg'
import imgages4 from '../../images/insta3.jpg'
// import { FaArrowLeft, FaArrowRight } from '@mui/icons-material';


const FeedSection = () => {

    const countReal = document.querySelector('.reels');

    return (
        <div className='feedSection'>
            <div className='reels'>
                <Reels images={imgages3} />
                <Reels images={imgages} />
                <Reels images={imgages2} />
                <Reels images={imgages4} />
                <Reels images={imgages} />
                <Reels images={imgages3} />
                <Reels images={imgages2} />
                <Reels images={imgages} />
                <Reels images={imgages4} />

            </div>

            <section className='postSection'>
                <Post images={imgages3} />
                <Post images={imgages4} />
                <Post images={imgages2} />
                <Post images={imgages} />

            </section>
        </div>
    )
}

export default FeedSection
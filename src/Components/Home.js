import React from 'react';
import './Home.css';
import Footer from './Footer';
import img1 from './images/i1.jpg';
import img2 from './images/i2.jpg';
import img3 from './images/i3.jpg';
import img4 from './images/i4.jpg';

import {
    Link
} from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="container-1">
                <h2 id='heading'>StoryLane</h2>
                <p>A Mahatama Jyotiba Phule Rohilkhand University club with a motive to give a chance to all the students interested in photography with their regular studies.
                    In this you acn share your photos with a story related to those photos and i will share that on an Instagram page with you and your friends tagged in that
                    post and also your story behind that photos would be shared.
                </p>
            </div>
            <div className="container">
                <div className="box">
                    <div className="imgBx">
                        <img src={img3} alt='image1' />
                    </div>
                    <div className="content">
                        <div>
                            <h2>New friends</h2>
                            <p>Starting college life with some good friends.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src={img1} alt='image2' />
                    </div>
                    <div className="content">
                        <div>
                            <h2>Unexpected lab</h2>
                            <p>First time entering the OS lab, while we were not expecting it as a lab😁😂
                            </p>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src={img2} alt='image3' />
                    </div>
                    <div className="content">
                        <div>
                            <h2>College Museum</h2>
                            <p>Visiting the college museum and having a lot of fun and adventure.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="imgBx">
                        <img src={img4} alt='image4' />
                    </div>
                    <div className="content">
                        <div>
                            <h2>Department's view</h2>
                            <p>College exterior after a slight rainfall
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            {/* // <div className="images">
        //     <img src={image} width={200} className="rounded" id='img1' alt="img1" />
        //     <img src={image} width={200} className="rounded" id='img2' alt="img2" />
        //     <img src={image} width={200}  id='img3' alt="img3" />
        //     <img src={image} width={200} className="rounded float-end my-3 mx-3" alt="img2" /> 
        //     <img src={image} width={200} className="rounded" id='img4' alt="img4" />
        //     <img src={image} width={200} className="rounded" id='img5' alt="img5" /> */}

            {/* </div > */}
            <div className='strbtn'>
                <Link to="/story"><button id="startButton" type="button"> Let's Start</button></Link>
            </div>
            <Footer />
        </>
    )
}

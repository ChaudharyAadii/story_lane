import React from 'react';
import './Footer.css';
import git from './git.png';
import insta from './insta.png';
import likn from './likn.png';

export default function Footer() {
    return (
        <>
            <div className='footer'>

                {/* <div className='text'> */}
                <ul className='myUl'>
                    <li><a href="https://www.instagram.com/aadi.chaudhary._/"><img src={insta} alt="insta"
                        width="30px" /></a>
                        <a href="https://www.linkedin.com/in/aditya-chaudhary-73a7b2226"><img src={likn}
                            alt="linkedin" width="30px" /></a>
                        <a href="https://github.com/ChaudharyAadii"><img src={git} alt="github" width="30px" /></a></li>
                    <li><h5>Phone : +917906259764</h5></li>
                    <li><h5>Email : chaudharyaditya1232@gmail.com</h5></li>
                    {/* <li><h5 style={{ color: "white" }}>M.P.J.P.R.U, Bareilly (243006), Uttar Pradesh</h5></li> */}
                </ul>
                {/* </div> */}
            </div>
        </>
    )
}

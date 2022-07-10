import React from 'react';
import img2 from '../images/voting2.jpg';

function Signup() {
    return (
        <div className='main-div'>
            <div className='image'>
                <img src={img2} alt="" />
            </div>
            <div className='login'>
                <h4>One of us?</h4>
                <p> If you have already Signed up, that's great ! please Login </p>
                <button1>
                    Login
                </button1>
            </div>
            <div className='signin'>
                <h3> Sign up </h3>
                <input ></input>
            </div>
        </div>
    )
}

export default Signup;
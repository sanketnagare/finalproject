import React from 'react';
import { useNavigate } from "react-router-dom";
import img1 from '../../images/Crowdfunding.jpg';
import './Mainpage.css';

const Mainpage = (props) => {
  const navigate = useNavigate();
  return (
    <div className='main_div'>
      <div className='left_div'>
        {/* <h1 className='h1-text'> Crowdfunding system using blockchain technology</h1> */}
        <img src={img1} height="500" width="500" alt="" />


      </div>
      <div className='right_div'>
        <h2> We make ideas happen.</h2>
        <br />
        <h2> Crowdfunding system using blockchain technology</h2>
        {/* <button1 onClick={() => navigate("/login")}>
          Startup Login
        </button1> */}
        <button1>
          Startup Login
        </button1>
        <button2 onClick={() => navigate("/adlogin")} >
          Admin Login
        </button2>
        <button2 onClick={() => navigate("/login")} >
          Backer Login
        </button2>

      </div>

    </div>
  );

}
export default Mainpage;

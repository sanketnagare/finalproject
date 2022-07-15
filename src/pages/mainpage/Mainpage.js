import React from 'react';
import { useNavigate } from "react-router-dom";
import img1 from '../../images/voting1.jpg';
import './Mainpage.css';

const Mainpage = (props) => {
  const navigate = useNavigate();
  return (
    <div className='main_div'>
      <div className='left_div'>
        <h1 className='h1-text'> BLOCK-VOTE </h1>
        <img src={img1} height="400" width="400" alt="" />


      </div>
      <div className='right_div'>
        <h2> Innovative the way of voting.</h2>
        <button1 onClick={() => navigate("/login")}>
          User sign-up/Login
        </button1>
        <button2 onClick={() => navigate("/adlogin")} >
          Admin-Login
        </button2>

      </div>

    </div>
  );

}
export default Mainpage;

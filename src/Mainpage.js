 import React from 'react'; 
 import img1 from './images/voting1.jpg';
 import './Mainpage.css'

function Mainpage() {
     return (
     <div className='main_div'>
         
       <div className='left_div'>
       <img src={img1} height="400" width="400" alt=""/>
       
       </div>
       <div className='right_div'>
          <h2> Innovative way of voting  </h2>  
          <button1 >
              User sign-up/Login 
          </button1>
          <button2 >
            Admin-Login
          </button2>

       </div>
    
     </div>
     );

}
export default Mainpage;

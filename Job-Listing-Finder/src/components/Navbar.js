import React from 'react';
import './Navbar.css';
import {useNavigate} from 'react-router';
const Navbar=()=>{
    const navigate=useNavigate()
    return(
        <div style={{display:"flex",justifyContent:'space-between',backgroundColor:'rgb(215, 70, 70)',marginTop:'0px',height:'12vh',borderRadius:'0px 0px 30px 30px'}}>
          <h3 style={{marginLeft:'40px',color:'white'}}>JobFinder</h3>
          <div>
            <button className='login' onClick={()=>navigate('/login')}>Login</button>
            <button className='login' onClick={()=>navigate('/register')}>Register</button>
          </div>
        </div>
    )
}
export default Navbar;
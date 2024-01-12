import React from 'react';
import './Regis.css';
const Register=()=>{
    
    return(
       <div style={{width:'55vw',height:'100vh',paddingLeft:'10vh',boxSizing:'border-box'}}>
            <h1>Create an account</h1>
            <p>Your personal job finder is here</p>
            <input style={{width:'35vw',height:'27px',marginBottom:'8px'}} type='text' placeholder='Name' /> <br/>
            <input style={{width:'35vw',height:'27px',marginBottom:'8px'}} type='email' placeholder='Email'/> <br/>
            <input style={{width:'35vw',height:'27px',marginBottom:'8px'}}  type='number' placeholder='Mobile'/> <br/>
            <input style={{width:'35vw',height:'27px',marginBottom:'8px'}} type='password' placeholder='password'/> <br/>
            <div style={{width:'35vw'}}>
            <input type='checkbox'/><span >By creating an account, I agree to our termsn of use and privacy policy</span>
            </div>
            <button   style={{backgroundColor:'red',height:'27px',width:'15vw',border:'none',marginTop:'15px',marginBottom:'15px',color:'white',fontSize:'15px'}}>Create Account</button>
            <br/>
            <span >Already have an account?</span><span style={{borderBottom:'1.5px solid',fontWeight:'500'}} className='signup'>  Sign In</span>
       </div>
    )
}
export default Register;
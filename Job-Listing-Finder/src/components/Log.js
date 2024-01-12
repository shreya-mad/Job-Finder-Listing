import React from 'react';
const Login=()=>{
    return(
        <div style={{width:'55vw',height:'100vh',paddingLeft:'10vh',paddingTop:'20vh',boxSizing:'border-box'}}>
        <h1>Already have an account?</h1>
        <p>Your personal job finder is here</p>
        <input style={{width:'35vw',height:'27px',marginBottom:'8px'}} type='email' placeholder='Email'/> <br/>
        <input style={{width:'35vw',height:'27px',marginBottom:'8px'}} type='password' placeholder='password'/> <br/>
        <button style={{backgroundColor:'red',height:'27px',width:'15vw',border:'none',marginTop:'15px',marginBottom:'15px',color:'white',fontSize:'15px'}}>Sign in</button>
        <br/>
        <span >Already have an account?</span><span style={{borderBottom:'1.5px solid',fontWeight:'500'}} className='signup'>  Sign Up</span>
   </div>
    )
}
export default Login;
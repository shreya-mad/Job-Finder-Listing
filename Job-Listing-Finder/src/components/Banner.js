import React from 'react';
import banner from '../photos/banner.png';
const Banner=()=>{
    return(
       <div style={{height:'100vh',width:"50vw",boxSizing:'border-box',textAlign:'center',  backgroundImage: `url(${banner})`,backgroundSize:'110vh 50vw',backgroundPosition:'cover',backgroundRepeat:'no-repeat'}}>
           <h1 style={{color:'white'}}>Your Personal Job Finder</h1>
           {/* <img src={banner}/> */}
       </div>
    )
}
export default Banner;
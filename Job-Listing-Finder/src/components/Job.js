import React from 'react';
import jobBanner from '../photos/jobBaneer.png';
const Job=()=>{
    return(
       <div style={{display:'flex'}}>
           <div style={{width:'60vw',height:'100vh',boxSizing:'border-box',paddingLeft:'6vw',paddingRight:'12vw'}}>
              <form>
                 <h1>Add job description</h1>
                 <div style={{ margin:'10px',width:'100%',height:'20px'}}>
                 <label style={{fontWeight:'500',fontSize:'1.05rem'}} >Company Name:</label>
                 <input style={{float:'right',width:'65%',height:'20px'}} type='text' placeholder='Enter your company name here' />
                 </div>
                  
                  <div style={{ margin:'10px',width:'100%',height:'20px'}}>
                 <label style={{fontWeight:'500',fontSize:'1.05rem'}} >add logo URL:</label>
                 <input style={{float:'right',width:'65%',height:'20px'}} type='text' placeholder='Enter Location' />
                 </div>

                 <div style={{ margin:'10px',width:'100%',height:'20px'}}>
                 <label style={{fontWeight:'500',fontSize:'1.05rem'}} >Job position:</label>
                 <input style={{float:'right',width:'65%',height:'20px'}} type='text' placeholder='Enter job position' />
                 </div>

                 <div style={{ margin:'10px',width:'100%',height:'20px'}}>
                 <label style={{fontWeight:'500',fontSize:'1.05rem'}} >Monthly salary:</label>
                 <input style={{float:'right',width:'65%',height:'20px'}} type='text' placeholder='Enter amount in rupees' />
                 </div>
                 
                 <div style={{ margin:'10px',width:'100%',height:'20px'}}>
                 <label style={{fontWeight:'500',fontSize:'1.05rem'}} >Job type:</label>  
                 <select name="job"  style={{float:'right',width:'66.5%',height:'25px'}} >
                     <option value="select">select</option>
                     <option value="frontend developement">frontend developement</option>
                     <option value="backened developement">backened developement</option>
                     <option value="Wordpress developement">Wordpress developement</option>
                     <option value="PHP developement">PHP developement</option>
                 </select>
                 </div>

                 <div style={{ margin:'10px',width:'100%',height:'20px'}}>
                 <label style={{fontWeight:'500',fontSize:'1.05rem'}} >Remote/office:</label>  
                 <select name="job"  style={{float:'right',width:'66.5%',height:'25px'}} >
                     <option value="select">select</option>
                     <option value="remote">remote</option>
                     <option value="office">office</option>
                 </select>
                 </div>
                 
                 
                 <div style={{ margin:'10px',width:'100%',height:'20px'}}>
                 <label style={{fontWeight:'500',fontSize:'1.05rem'}} >Location:</label>
                 <input style={{float:'right',width:'65%',height:'20px'}} type='text' placeholder='Enter Location' />
                  </div>

                  <div style={{ margin:'10px',width:'100%',height:'60px'}}>
                 <label style={{fontWeight:'500',fontSize:'1.05rem'}} >job description:</label>
                 <input style={{float:'right',width:'65%',height:'60px'}} type='text' placeholder='Enter the job description' />
                  </div>

                  <div style={{ margin:'10px',width:'100%',height:'60px'}}>
                 <label style={{fontWeight:'500',fontSize:'1.05rem'}} >About Company:</label>
                 <input style={{float:'right',width:'65%',height:'60px'}} type='text' placeholder='Type about your company' />
                 </div>
                  
                 <div style={{ margin:'10px',width:'100%',height:'20px'}}>
                 <label style={{fontWeight:'500',fontSize:'1.05rem'}} >Skills Required:</label>
                 <input style={{float:'right',width:'65%',height:'20px'}} type='text' placeholder='Enter the must have skiils' />
                </div>
                <div style={{ margin:'10px',width:'100%',height:'20px'}}>
                 <label style={{fontWeight:'500',fontSize:'1.05rem'}} >Information:</label>
                 <input style={{float:'right',width:'65%',height:'20px'}} type='text' placeholder='enter the additional information' />
                 </div>
              </form>
              <div style={{display:'flex',float:'right',marginTop:'20px'}}>
                    <button>Cancel</button>
                    <button style={{backgroundColor:'red',color:'white',height:'30px',borderRadius:'5px',border:'none',marginLeft:'10px'}}>+Add Job</button>
                   
              </div>
           </div>
           <div style={{color:'white',width:'40vw',height:'100vh',boxSizing:'border-box',backgroundImage:`url(${jobBanner})`,backgroundSize:'93vh 42vw'}}> 
               <h1 style={{textAlign:'center'}}>Recruiter add job details here</h1>
           </div>
       </div>
    )
}
export default Job;
import axios from 'axios';
export const getAllJobs=async()=>{
    try{
      const reqUrl='http://localhost:500/api/jobs'
      return(await axios.get(reqUrl))
    }catch(error){
      console.log(arror)
      alert('somthing went wrong')
    }
}

export const getAllJobDescription=async(id)=>{
    try{
        const reqUrl=`http://localhost:500/api/jobs/${id}`
        return(await axios.get(reqUrl))
      }catch(error){
        console.log(arror)
        alert('somthing went wrong')
      }
}
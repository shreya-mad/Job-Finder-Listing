const express=require('express');
const jobPost =require('../models/jobs');
const requiredAutho=require('../middleware/requiredAutho')

const router=express.Router();

// creating job post api
router.post('/job-post',requiredAutho,async(req,res)=>{
    const {
        companyName,
        LogoUrl,
        Position,
        salary,
        jobType,
        remote,
        location,
        Description,
        skills,
        about,
        }=req.body;
    // const {companyName}=req.body;
    // console.log(req.body)

    const recruiterName=req.body.name;
    let skillsArray=skills;
    if(typeof skills ==='string'){
        skillsArray=skills.split(',').map(skill=>skill.trim());
    }
    try{
    const newJob=new jobPost({
        companyName,
        LogoUrl,
        Position,
        salary,
        jobType,
        remote,
        location,
        Description,
        about,
        skillsRequired: skillsArray,
        recruiterName
        });
        await jobPost.save();
        return res.json({masegge:'job post created successfully',name: recruiterName})

    }
    catch(error){
      console.error(error);
      return res.status(500).json({messege:'internal server error'})
    }
})


// Edit Job Post API
router.put('/job-posts/:id', requiredAutho, async (req, res) => {
    const jobId = req.params.id;
    const { companyName, jobType, skillsRequired } = req.body;
    const recruiterName = req.body.name;
  
    try {
      const JobPost = await jobPost.findById(jobId);
  
      if (!JobPost) {
        return res.status(404).json({ message: 'Job post not found' });
      }
  
      jobPost.companyName = companyName;
      jobPost.jobType = jobType;
      jobPost.skillsRequired = skillsRequired;
      jobPost.recruiterName = recruiterName;
  
      await jobPost.save();
  
      return res.json({ message: 'Job post updated successfully' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

  // Get Job Posts with Filters API
  router.get('/job-posts', async (req, res) => {
    const { jobType, skillsRequired } = req.query;
  
    try {
      let query = {};
  
      if (jobType) {
        query.jobType = jobType;
      }
  
      if (skillsRequired) {
        query.skillsRequired = { $in: skillsRequired.split('&') };
      }
      console.log(query)
      const jobPosts = await JobPost.find(query).sort({ createdAt: -1 });
  
      return res.json({ jobPosts });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });
  




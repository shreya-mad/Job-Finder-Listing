const mongoose=require('mongoose');
const  jobPostSchema=mongoose.Schema({
    _id:{
        type:mongoose.Schema.Types.objectId,
        auto: true},
    companyName:{
        type:String,
        required: true
    },
    remote:{
        type:String,
        enum:['remote','office'],
        required: true
    },
    recruiterName:{
        type:String,
        required: true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    LogoUrl:{
        type:String,
        required: true
    },
    Position:{
        type:String,
        required: true
    },
    salary:{
        type: Number,
        required: true
    },
    
    jobType:{
        type:String,
        enum:['full-time','part-time'],
        required: true
    },
    location:{
        type:String,
        required: true
    },
    Description:{
        type:String,
        required: true
    },
    
    skills:{
        type: Array,
        required: true
    },
    about:{
        type:String,
        required: true
    },
})

mongoose.exports=mongoose.model('jobPost',jobPostSchema)
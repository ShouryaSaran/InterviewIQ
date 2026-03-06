const mongoose = require("mongoose");


/**
 * - job description schema
 * - resume
 * - self description
 * 
 * - Technical Questions : 
 *          [{
 *              question : ""
 *              intention : ""
 *              answer: ""
 *          }]
 * - Behavioral Questions : [
 *           {
 *              question : ""
 *              intention : ""
 *              answer: ""
 *           }
 * - Skill gaps : [
 *      {
 *          skill:""
 *          severity: {
 *                  type: String,
 *                  enum: ["low" , "med" , "high"]
 *              }
 *       }
 * ]
 * - preparation plan : [{
 *                      day:number,
 *                      focus:String,
 *                      tasks:[String];
 *                      }]
 */ 


const technicalQuestionSchema = new mongoose.Schema({
    question:{
        type:String,
        required: [true , "Technical Question is required"]    
    },
    intention: {
        type: String,
        required:[true,"Intention is required"]
    },
    answer: {
        type: String,
        required: [true, "Answer is required"]
    }
}, {
    _id:false
})

const BehavioralQuestionSchema = new mongoose.Schema({
    question:{
        type:String,
        required: [true , "Technical Question is required"]    
    },
    intention: {
        type: String,
        required:[true,"Intention is required"]
    },
    answer: {
        type: String,
        required: [true, "Answer is required"]
    }
}, {
    _id:false
})

const SkillGapsSchema = new mongoose.Schema({
    skill: {
        type:String,
        required:[true,"Skill is required"]
    },
    severity: {
        type:String,
        enum: ["low" , "med" , "high"],
        required:[true,"severity is required"]
    }
},{
    _id:false
})

const PreparationPlanSchema = new mongoose.Schema({
    day:{
        type:String,
        required:[true,"day is required"]
    },
    focus:{
        type:String,
        required:[true,"Focus is required"]
    },
    tasks:[{
        type:String,
        required:[true,"task is required"]
    }]
})

const InterviewReportSchema = new mongoose.Schema({
    jobDescription:{
        type: String,
        required: [true, "Job description is required"],
    },
    resume: {
        type: String,
    },
    selfDescription: {
        type: String
    },
    matchScore: {
        type: Number,
        min:0,
        max: 100,
    },
    technicalQuestion: [technicalQuestionSchema],
    behavioralQuestion: [BehavioralQuestionSchema],
    skillGaps : [SkillGapsSchema],
    PreparationPlan : [PreparationPlanSchema]
},{
    timestamps:true
})

const interviewReportModel = mongoose.model("InterviewReport",InterviewReportSchema);

module.exports = interviewReportModel;
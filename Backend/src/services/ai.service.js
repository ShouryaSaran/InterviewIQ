const { GoogleGenAI } = require("@google/genai") 
const z = require('zod')
const zodToJsonSchema = require('zod-to-json-schema')


const ai = new GoogleGenAI({
    apiKey: process.env.GenAI_API_KEY
})

const InterviewReportSchema = z.object({
    technicalQuestions:z.array(z.object({
        question: z.string().description("The technical question that can be asked in interview"),
        intention: z.string().description("The intention of the interviewer behind the question asked"),
        answer: z.string().description("How to answer this question , what points to cover , what approach to take etc.")
    })),
    behavorialQuestions: z.array(z.object({
        question: z.string().description("The technical question that can be asked in interview"),
        intention: z.string().description("The intention of the interviewer behind the question asked"),
        answer: z.string().description("How to answer this question , what points to cover , what approach to take etc.")
    }))

})

async function generateInterviewReport({resume,selfDescription,jobDescription}) {


}


async function invoke () {
    const response = await ai.models.generateContent({
        model:"gemini-2.5-flash",
        contents: "Hello gemini! Explain what is interview ?"
    })

    console.log(response.text)
}

module.exports = invoke


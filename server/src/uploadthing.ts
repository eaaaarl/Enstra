import { createUploadthing, FileRouter } from "uploadthing/express";


const f = createUploadthing()

export const ourFileRouter = {
    medicalCert: f({
        image: {maxFileSize: "4MB"}
    }).middleware(()=>{
        return  {
            studentId:'1005001'
        }
    })
    .onUploadComplete((data) => {
        console.log("upload completed", data.file.name);
      }),
} satisfies FileRouter


export type OurFileRouter = typeof ourFileRouter 
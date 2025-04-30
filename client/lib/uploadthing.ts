import { generateUploadButton } from "@uploadthing/react";

export const UploadBtn = generateUploadButton({
  url: "http://localhost:3001/api/uploadthing",
});

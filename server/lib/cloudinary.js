
import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET // must be set
});

console.log('CLOUDINARY_API_SECRET length:', process.env.CLOUDINARY_API_SECRET ? process.env.CLOUDINARY_API_SECRET.length : 0);

export default cloudinary;

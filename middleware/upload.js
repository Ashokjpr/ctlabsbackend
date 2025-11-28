import multer from "multer";
import path from "path";

// storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/images/"); // save files to /uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() +path.extname(file.originalname)); // unique filename
    
  },
});


export const upload = multer({ storage });

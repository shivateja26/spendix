const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Specifying the folder where files will be stored
  },
  filename: (req, file, cb) => {
    cb(null,   ` ${Date.now()}-${file.originalname}`); // Generate a unique filename
  },
});
// file filter
const fileFilter = (req,file,cb)=>{
    const allowedTypes =['image/jpeg','image/png','image/jpg']
    if (allowedTypes.includes(file.mimetype)){
        cb(null,true)
    }else{
        cb(new Error('Only .jepg, .png and jpg are formats are allowed'),false);
    }
}

// Initialize multer with the storage option
const upload = multer({ storage,fileFilter });
module.exports = upload;
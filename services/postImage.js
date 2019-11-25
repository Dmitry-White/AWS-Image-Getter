import multer from 'multer';
import path from 'path';

const oneMegabyte = 1000000;

const storage = multer.diskStorage({
  destination: './public/images/',
  filename: (req, file, cb) => {
    const name = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
    cb(null, name);
  }
});

const upload = multer({
  storage,
  limits: {
    fileSize: oneMegabyte
  }
});

const uploadImage = upload.single('uploadImage');

export {
  uploadImage,
}
import multer from 'multer';
import path from 'path';

const oneMegabyte = 1000000;

const getFileName = (fileName) => path.extname(fileName);

const generateName = (req, file, cb) => {
  const inputName = getFileName(file.originalname);
  const outputName = `${file.fieldname}-${Date.now()}${inputName}`;
  cb(null, outputName);
};

const checkFileType = (file, cb) => {
  const fileTypes = /jpeg|jpg|png|gif/;
  const inputName = getFileName(file.originalname);
  const mimeType = file.mimetype;

  const isAllowedExt = fileTypes.test(inputName.toLowerCase());
  const isAllowedMimeType = fileTypes.test(mimeType);

  if (isAllowedExt && isAllowedMimeType) {
    return cb(null, true);
  }
  return cb('Error: Images Only!');
};

const storage = multer.diskStorage({
  destination: './public/images/',
  filename: generateName,
});

const upload = multer({
  storage,
  limits: {
    fileSize: oneMegabyte,
  },
  fileFilter: (req, file, cb) => checkFileType(file, cb),
});

const uploadImage = upload.single('uploadImage');

export default uploadImage;

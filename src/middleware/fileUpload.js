const multer = require("multer");

const FILE_MAX_SIZE = 2097152;
const ALLOW_FILE_TYPES = ["image/jpg", "image/jpeg", "image/png"];

const storage = multer.memoryStorage();

const fileFilter = (req, file, callback) => {
  if (!file.mimetype.startsWith("image/")) {
    return callback(new Error("only image types are allowed"), false);
  }
  if (file.size > FILE_MAX_SIZE) {
    return callback(new Error("file size not allowed then 2mb"), false);
  }

  if (!ALLOW_FILE_TYPES.includes(file.mimetype)) {
    return callback(new Error("file type not allowed"), false);
  }

  return callback(null, true);
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

module.exports = upload;

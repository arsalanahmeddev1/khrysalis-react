const multer = require("multer");
const { ObjectId } = require("mongodb");
const path = require("path");

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "../../" + "public/uploads"));
    },
    filename: (req, file, cb) => {
      const id = new ObjectId();
      req.body.upload = id.toString() + `.${file.mimetype.split("/").pop()}`;

      cb(null, req.body.upload);
    },
    onerror: (err, next) => {
      console.log(err);
      next();
    },
  }),
});

module.exports = upload;

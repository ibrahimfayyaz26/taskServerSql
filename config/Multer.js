const multer = require("multer");

const file_type = {
  "image/jpg": "jpg",
  "image/jpeg": "jpeg",
  "image/png": "png",
  "application/pdf": "pdf",
};

const storage = multer.diskStorage({
  destination: (req, file, cd) => {
    const fileT = file_type[file.mimetype];
    let err = new Error("wrong image type");
    if (fileT) {
      err = null;
    }
    cd(err, "upload");
  },
  filename: (req, file, cd) => {
    const fileT = file_type[file.mimetype];
    const fileName = `${file.originalname
      .split(" ")
      .join()}-${Date.now()}.${fileT}`;
    cd(null, fileName);
  },
});

exports.upload = multer({
  storage: storage,
  limits: {
    fileSize:	5242880
  }
})
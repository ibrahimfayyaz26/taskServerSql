const Documents = require("../models/User");

exports.DocumentsGet = (req,res)=>{
  Documents.findByPk(req.params.id).then((r) => {
    res.send({
      documents: r.documents,
    });
  }).catch((err) => {
    res.status(400).send({
      message: new Error(err.message),
      msg:err.message
    });
  });
}

exports.DocumentsController = async (req, res) => {
  const { documents } = await Documents.findByPk(req.params.id);

  let Images = [];

  const fileName = req.files;

  if (fileName) {
    fileName.map((fileT) =>
      Images.push({
        id: (Math.random()+Date.now()),
        url: `${req.protocol}://${req.get("host")}/upload/${fileT.filename}`,
      })
    );
  }
  Documents.update(
    {
      documents: documents.concat(Images),
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then(() => {
      Documents.findByPk(req.params.id).then((r) => {
        res.send({
          documents: r.documents,
        });
      });
    })
    .catch((err) => {
      res.status(400).send({
        message: new Error(err.message),
        msg:err.message
      });
    });
};

exports.DocumentsDelete = async (req, res) => {
  const { documents } = await Documents.findByPk(req.params.id);
  const Images = documents.filter((i) => i.id != req.body.removeId);
  Documents.update(
    {
      documents: Images,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then(() => {
      Documents.findByPk(req.params.id).then((r) => {
        res.send({
          documents: r.documents,
        });
      });
    })
    .catch((err) => {
      res.status(400).send({
        message: new Error(err.message),
        msg:err.message
      });
    });
};

const Profile = require("../models/User");

exports.createProfile = (req, res) => {
  let Images = [];

  const fileName = req.files;

  if (fileName) {
    fileName.map(
      (fileT) =>
        (Images.push(
          `${req.protocol}://${req.get("host")}/upload/${fileT.filename}`
        ))
    );
  }
  Profile.update({
    country: req.body.country,
    city: req.body.city,
    phone: req.body.phone,
    language: req.body.language,
    industry: req.body.industry,
    facebookLink: req.body.facebookLink,
    // documents: `${req.protocol}://${req.get("host")}/upload/${req.file.filename}`,
    documents: Images,
  }, { where: { id: req.params.id } })
    .then(() => {
      Profile.findByPk(req.params.id).then((r)=>{res.send({
        id:r.id,
        email:r.email,
        country: r.country,
        city: r.city,
        phone: r.phone,
        language: r.language,
        industry: r.industry,
        facebookLink: r.facebookLink,
        documents: r.documents,
      });})
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};



const addNewAnswer = require('../models/addNewAnswer');

module.exports = async function addAnswer(req, res) {
  try {
    let data = {
      body: req.body.body, 
      answerer_name: req.body.name,
      answerer_email: req.body.email,
      photos: req.body.photos
    };

    let update = await addNewAnswer(req.params.question_id, data)
    res.sendStatus(201)
} catch (err) {
    console.error(err);
    res.status(500);
}

}
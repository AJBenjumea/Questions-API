const addNewQuestion = require('../models/addNewQuestion');

module.exports = async function addQuestion(req, res) {
  try {
    let data = {
      body: req.body.body, 
      asker_name: req.body.name,
      asker_email: req.body.email,
    };

    let update = await addNewQuestion(req.params.product_id, data)
    res.sendStatus(201)
} catch (err) {
    console.error(err);
    res.status(500);
}

}
const returnAnswers = require('../models/returnAnswers');

module.exports = async function listAnswers(req, res) {
  try {
    //let update = await returnAnswers(req.params.question_id, req.params.count, req.params.page);
    returnAnswers(req.params.question_id, req.params.count, req.params.page)
      .then(data => res.send(data))
      .catch(err => res.status(500))
    // console.log('this is the update', update);
    // res.send(update);
} catch (err) {
    console.error('There was error ->', err);
    res.status(500);
}

}
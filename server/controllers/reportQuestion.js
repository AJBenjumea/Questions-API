const updateQuestionReport = require('../models/updateQuestionReport');

module.exports = async function helpfulQuestion(req, res) {
  try {
    let update = await updateQuestionReport(req.params.answer_id)
    res.sendStatus(204)
} catch (err) {
    console.error(err);
    res.status(500);
}

}
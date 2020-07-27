const updateAnswerReport = require('../models/updateAnswerReport');

module.exports = async function reportAnswer(req, res) {
  try {
    let update = await updateAnswerReport(req.params.answer_id)
    res.sendStatus(204)
} catch (err) {
    console.error(err);
    res.status(500);
}

}
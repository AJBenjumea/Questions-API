const updateQuestionHelpful = require('../models/updateQuestionHelpful');

module.exports = async function helpfulQuestion(req, res) {
  try {
    let update = await updateQuestionHelpful(req.params.answer_id)
    res.sendStatus(204)
} catch (err) {
    console.error(err);
    res.status(500);
}

}
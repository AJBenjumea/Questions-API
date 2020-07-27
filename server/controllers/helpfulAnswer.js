const updateAnswerHelpful = require('../models/updateAnswerHelpful');

module.exports = async function helpfulAnswer(req, res) {
  try {
    let update = await updateAnswerHelpful(req.params.answer_id)
    res.sendStatus(204)
} catch (err) {
    console.error(err);
    res.status(500);
}

}
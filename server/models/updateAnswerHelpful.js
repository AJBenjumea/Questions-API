const { query } =  require('../db');

module.exports = function updateAnswerHelpful(answerId) {
  return query(
    `
    UPDATE answers 
    SET helpful = helpful + 1
    WHERE id = $1;
    `,
    [answerId], 
    (err, result) => {
      if (err) {
        return err;
      }
      return result
    }
  )
}

const { query } =  require('../db');

module.exports = function updateQuestionHelpful(answerId) {
  return query(
    `
    UPDATE questions 
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

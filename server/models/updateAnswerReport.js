const { query } =  require('../db');

module.exports = function updateAnswerReport(answerId) {
  return query(
    `
    UPDATE answers 
    SET reported = reported + 1
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

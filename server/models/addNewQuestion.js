const { query } =  require('../db');

module.exports = function addNewQuestion(productId, data) {
  return query(
    `
    INSERT INTO questions (product_id, body, asker_name, asker_email)
    VALUES ($1, $2, $3, $4)
    `,
    [productId, data.body, data.asker_name, data.asker_email], 
    (err, result) => {
      if (err) {
        return err;
      }
      return result
    }
  )
}


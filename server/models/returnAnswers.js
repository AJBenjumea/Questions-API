const { query } =  require('../db');

module.exports = function returnAnswers(questionId, count = 5, page = 0) {

  return new Promise ((res, rej) =>  {
   query(
    `
    WITH answersQuery AS (
      SELECT id a_id, question_id, body, date_written, answerer_name, answerer_email, reported, helpful 
      FROM answers
      WHERE question_id = $1 AND reported = 0
    ), photoJoin AS (
      SELECT * FROM answersQuery
      LEFT JOIN photos 
      ON answersQuery.a_id = photos.answer_id
      AND question_id = $1
    ), photoConsolidate as (
      SELECT a_id aa_id, json_agg(json_strip_nulls(json_build_object(
        'id', photoJoin.id,
        'url', photoJoin.url
      ))) AS all_photos
      FROM photoJoin
      GROUP BY a_id
    ), finalResult as (
      SELECT DISTINCT ON (a_id)
      a_id answer_id, body, date_written date, answerer_name, helpful helpfulness, all_photos photos
      FROM photoJoin
      LEFT JOIN photoConsolidate
      ON photoJoin.a_id = photoConsolidate.aa_id)
    
    
    SELECT json_build_object(
      'question', $1::int,
      'page', $3::int,
      'count', $2::int,
      'results', json_agg(finalResult)
    )
    FROM finalResult
    LIMIT $2::int;
    `,
    [questionId, count, page], 
    (err, result) => {
      if (err) {
        rej(err);
      }
      res(result.rows[0].json_build_object)
    }
  )
  })
}

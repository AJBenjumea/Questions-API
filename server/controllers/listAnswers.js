const returnAnswers = require('../models/returnAnswers');
const {client} = require('../cache');

module.exports = async function listAnswers(req, res) {
    returnAnswers(req.params.question_id, req.params.count, req.params.page)
      .then(data => {
        const cacheString = JSON.stringify(data);
        client.set(req.params.question_id, cacheString, (err,data) =>{
          if (err) console.log('Cache error:', err);
        });
        return data;
      })
      .then(data => res.send(data))
      .catch(err => res.status(500))
}
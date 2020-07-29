const config = require('../config');
const express = require('express');
const bodyParser = require('body-parser');
const { client } = require('./cache');
const {
  reportAnswer, 
  helpfulAnswer,
  helpfulQuestion,
  reportQuestion,
  addAnswer,
  addQuestion,
  listAnswers
} = require('./controllers');


const app = express()
app.use(bodyParser.json())

function cache(req, res, next) {
  client.get(req.params.question_id, (err, data) => {
    if (err) throw err;
    if (data !== null) {
      res.send(data);
    } else {
      next();
    }
  })
}

app.get('/', (req, res) => {
  res.send('Questions API')
});

app.get(`/${config.LOADER_IO}`, (req,res) => {
  res.set('Content-Type', 'text/plain');
  res.send(`${config.LOADER_IO}`)
});


app.put('/qa/answer/:answer_id/report', reportAnswer);
app.put('/qa/answer/:answer_id/helpful', helpfulAnswer);
app.put('/qa/question/:answer_id/helpful', helpfulQuestion);
app.put('/qa/question/:answer_id/report', reportQuestion);
app.post('/qa/:question_id/answers', addAnswer); 
app.post('/qa/:product_id', addQuestion); 
app.get('/qa/:question_id/answers', cache, listAnswers)



app.listen(config.PORT, () => console.log(`App listening at http://localhost:${config.PORT}`));

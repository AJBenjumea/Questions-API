const express = require('express');
const bodyParser = require('body-parser');
const {
  reportAnswer, 
  helpfulAnswer,
  helpfulQuestion,
  reportQuestion,
  addAnswer
} = require('./controllers');


const app = express()
app.use(bodyParser.json())


app.put('/qa/answer/:answer_id/report', reportAnswer);
app.put('/qa/answer/:answer_id/helpful', helpfulAnswer);
app.put('/qa/question/:answer_id/helpful', helpfulQuestion);
app.put('/qa/question/:answer_id/report', reportQuestion);
app.post('/qa/:question_id/answers', addAnswer); 


const port = 3000;
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

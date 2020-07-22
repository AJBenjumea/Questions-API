CREATE DATABASE QuestionsAndAnswers;

\c questionsandanswers;

CREATE TABLE questions(
   id   INT   NOT NULL, 
   product_id INT  NOT NULL,
   body TEXT,
   date_written DATE,
   asker_name TEXT NOT NULL,
   asker_email TEXT, 
   reported INT, 
   helpful INT,
   PRIMARY KEY (id)
);

CREATE TABLE answers(
  id INT NOT NULL,
  question_id INT NOT NULL,
  body TEXT,
  date_written DATE,
  answerer_name TEXT,
  answerer_email TEXT,
  reported INT,
  helpful INT,
  PRIMARY KEY (id)
);

CREATE TABLE photos(
  id INT NOT NULL,
  answer_id INT NOT NULL,
  url TEXT,
  PRIMARY KEY (id)
);



\copy questions FROM '/var/lib/postgresql/questions_clean.csv' DELIMITER ',' CSV HEADER;
\copy answers FROM '/var/lib/postgresql/answers_clean.csv' DELIMITER ',' CSV HEADER;
\copy photos FROM '/var/lib/postgresql/photos_clean.csv' DELIMITER ',' CSV HEADER;
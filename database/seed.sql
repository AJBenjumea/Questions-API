CREATE DATABASE QuestionsAndAnswers;

\c questionsandanswers;

-- Create tables
CREATE TABLE questions(
   id   SERIAL PRIMARY KEY, 
   product_id INT  NOT NULL,
   body TEXT NOT NULL,
   date_written DATE NOT NULL DEFAULT CURRENT_DATE,
   asker_name TEXT NOT NULL,
   asker_email TEXT, 
   reported INT DEFAULT 0, 
   helpful INT DEFAULT 0
);

CREATE TABLE answers(
  id SERIAL PRIMARY KEY,
  question_id INT NOT NULL,
  body TEXT NOT NULL,
  date_written DATE NOT NULL DEFAULT CURRENT_DATE,
  answerer_name TEXT NOT NULL,
  answerer_email TEXT,
  reported INT DEFAULT 0,
  helpful INT DEFAULT 0
);

CREATE TABLE photos(
  id SERIAL PRIMARY KEY,
  answer_id INT NOT NULL,
  url TEXT
);

-- Add Answer and Photos to DB 
CREATE OR REPLACE FUNCTION addAnswer(qid INT, body TEXT, name TEXT, email TEXT, photos TEXT[])
RETURNS void AS $$
DECLARE
	answerid INT;
	photo TEXT;
BEGIN
INSERT INTO answers (question_id, body, answerer_name, answerer_email)
VALUES (qid, body, name, email )
RETURNING id INTO answerid;

FOREACH photo IN ARRAY photos
LOOP
	INSERT INTO photos (answer_id, url)
	VALUES (answerid, photo);
END LOOP;

END;
$$ LANGUAGE plpgsql;


-- Copy CSV data
\copy questions FROM '/var/lib/postgresql/questions_clean.csv' DELIMITER ',' CSV HEADER;
\copy answers FROM '/var/lib/postgresql/answers_clean.csv' DELIMITER ',' CSV HEADER;
\copy photos FROM '/var/lib/postgresql/photos_clean.csv' DELIMITER ',' CSV HEADER;

-- Update primary key sequence 
SELECT setval('answers_id_seq', (SELECT MAX(id) from "answers"));
SELECT setval('photos_id_seq', (SELECT MAX(id) from "photos"));
SELECT setval('questions_id_seq', (SELECT MAX(id) from "questions"));
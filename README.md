# Ecommerce Questions-Answers-API
The goal of this project was to rebuild a Questions & Answers service as part of an ecommerce API with a focus on scale and flexability. An ETL process was implementd to migrate legacy data into Postgres database. 

---

## Table of Contents
1. [Installing Dependencies](#Installing-Dependencies)
2. [Routes](#Routes)
3. [Load Testing](#Load-Testing)

---

## Installing-Dependencies


>*Install dependencies*
```
npm install
```
>*Start the server*
```
npm start
```
Open `http://localhost:3000`

---

## Routes

| Request Type | Endpoint                    | Action                                                                    | Status |
|--------------|-----------------------------|----------------------------------------------------------------------------|:--------:|
| GET          | /qa/:product_id                    | Retrieves a list of questions for a particular product                     | 200    |
| GET          | /qa/:question_id/answers           | Returns answers for a given question                                       | 200    |
| POST         | /qa/:product_id                    | Adds a question for the given product                                      | 201    |
| POST         | /qa/:question_id/answers           | Adds an answer for the given question                                      | 201    |
| PUT          | /qa/question/:question_id/helpful  | Updates a question to show it was found helpful                            | 204    |
| PUT          | /qa/question/:question_id/report   | Updates a question to show it was reported                                 | 204    |
| PUT          | /qa/answer/:question_id/helpful    | Updates an answer to show it was found helpful                             | 204    |
| PUT          | /qa/answer/:question_id/report     | Updates an answer to show it was reported                                  | 204    |


---

## Load-Testing

#### *Results*
| Optimization Type      | Avg. Response Time  | Successful Response Counts |
|------------------------|--------------------:|---------------------------:|
| Indexing               |             4219 ms |              23962 / 60000 |
| Indexing, Redis        |      304 ms (92.8%) |               60000 / 60000 |




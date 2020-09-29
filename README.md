# Ecommerce Questions-Answers-API
The goal of this project was to build a scalable RESTful API service for a retail web-portal and optimize to handle web-scale traffic. An ETL process was implemented to migrate legacy datasets of more than 20M+ records into a Postgres database. The service was incrementally optimized through database indexing, connection pooling, and Redis caching to handle a throughput of 60k client requests in 30 sec (2k per sec) with an average response time of 119ms (97.2% increase in avg. response time compared to just indexing).

---

## Table of Contents
1. [Installing Dependencies](#Installing-Dependencies)
2. [Routes](#Routes)
3. [Load Testing](#Load-Testing)

---

## Installing-Dependencies

### Navigate to the root directory and run the following in your terminal:

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

| Request Type | Endpoint                    | Returns                                                                    | Status |
|--------------|-----------------------------|----------------------------------------------------------------------------|:--------:|
| GET          | /qa/:product_id             | Retrieves a list of questions for a particular product                     | 200    |
| GET          | /qa/:question_id/answers    | Returns answers for a given question                                       | 200    |
| POST         | /qa/:product_id             | Adds a question for the given product                                      | 201    |
| PUT          | /qa/:question_id/answers    | Adds an answer for the given question                                      | 204    |
| Put          | /qa/question/:question_id/helpful  | Nothing is returned - updates a review to show it was reported             | 204    |

---

## Load-Testing

### Requests to specific endpoints
#### *Scenario*
>Surge in traffic to specific points of interest (news event, influencer, etc.)

#### *Test Type*
>2000 client requests made each second for 30 seconds

#### *Queries*
>GET /reviews/%{*:100000-100010}/list

>GET /reviews/%{*:100000-100010}/meta

#### *Results*
| Optimization Type      | Avg. Response Time  | Successful Response Counts |
|------------------------|--------------------:|---------------------------:|
| Indexing               |             4219 ms |              23962 / 60000 |
| Indexing, Redis        |      304 ms (92.8%) |               60000 / 60000 |
| Indexing, Redis, Pools |      119 ms (97.2%) |               60000 / 60000 |

#### *Detailed Loader.io results:*

<details>
<summary>Indexing</summary>
<br>

![]()

</details>

<details>
<summary>Indexing, Redis Caching</summary>
<br>

![]()

</details>

<details>
<summary>Indexing, Redis Caching, Connection Pooling</summary>

<br>

![]()

</details>

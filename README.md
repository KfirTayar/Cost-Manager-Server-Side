# Cost-Manager-Server-Side-REStful Web Services

This app is a RESTfull web service that used for tracking your daily costs due the years. You can get a report for every
month and it assists you to plan your budget and spending money in order way.

## Database
* Data is stored in **MongoDB** with the following features:
1. DB name: ***"costmanager"***.
2. DB collections: There are two collection that created, ***"users"*** with the properties: **id, firstname, lastname, and birthday** and<br/> ***"costs"***
with the properties: **user_id, year, month, day, description, sum and category**.

#### Default User (automaticly created in "users" collection)
`id: 123123 first_name: moshe last_name: israeli birthday: wed Jan, 10, 1990`

## Application
The application is built using **Express.js** and runs on the server side. It includes the following routes:

1. /addcost/ for inserting a cost (using POST method) according to the parameters: **user_id, year, month, day, description, sum and category**.
The user must insert the parameters: **sum, category, and description**.

* Example for cost request in POST (Using Curl):
```
curl -X POST http://localhost:3000/addcost -H "Content-Type: application/json" -d "{\"user_id\":123123,\"year\":1850,\"month\":\"may\",\"day\":10,\"description\":\"pizza\",\"sum\":50,\"category\":\"food\"}"
```
If you don't enter one of the must parameters, the cost wasn't add and you get an error.

2. /report/ for getting a filtered report (using GET method) by the parameters: **year, month and user_id**. The reports gets in JSON 
and includ the documents sorted by the categories.

* Example for report request in GET:
```
http://localhost:3000/report?year=1850&month=may&user_id=123123
```

3. /about/ for getting a report in JSON about team members.

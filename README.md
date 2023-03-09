# Cost Manager REStful Web Services

This app provides a RESTful web service for tracking your daily costs through the years.</br>By using this app, you can add costs and get a report which helps you plan your budget and spend money effectively.

## Database
* Data is stored in **MongoDB**:
1. DB name: ***"costmanager"***.
2. DB collections: There are two collections: ***"users"*** with the properties: **id, firstname, lastname, and birthday**<br/> and ***"costs"***
with the properties: **user_id, year, month, day, description, sum, and category**.

### Default User (automatically created in the "users" collection)
`id: 123123 first_name: moshe last_name: israeli birthday: wed Jan, 10, 1990`

## Application
The application is built using **Express.js** and runs on the server side. It includes the following routes:

1. /addcost/ for inserting a cost (using the POST method) according to the parameters: **user_id, year, month, day, description, sum, and category**.
The user must insert the parameters: **sum, category, and description**.

* Example for cost request in POST (Using Curl):
```
curl -X POST http://localhost:3000/addcost -H "Content-Type: application/json" -d "{\"user_id\":123123,\"year\":1850,\"month\":\"may\",\"day\":10,\"description\":\"pizza\",\"sum\":50,\"category\":\"food\"}"
```
If one of the required parameters is not entered, the cost will not be added.

2. /report/ for getting a filtered report (using the GET method) by the parameters: **year, month, and user_id**. The report gets in JSON and includes the documents sorted by categories.

* Example for report request in GET:
```
http://localhost:3000/report?year=1850&month=may&user_id=123123
```

3. /about/ for getting a report about team members in JSON.

## Demo

# Cost-Manager-Server-Side-RESTfull-webservice

This project is a RESTful web service for managing daily costs. The service is built using a MongoDB database and Express.js, and allows users to add new cost items and retrieve detailed reports of their expenses.

The cost Manager App is used for tracking your daily costs due the years. You can get a report for every
month and it assists you to plan your budget and spending money in order way.

## Database
* Data is stored in MongoDB with the following features:
1. DB name: CostManager.
2. DB collections: ***"users" and "costs".
3. collections properties: users: id, firstname, lastname, and birthday. costs: user_id, year, month, day, description, sum and category.

#### Default User (automaticly created in "users" collection)
`id: 123123 first_name: moshe last_name: israeli birthday: wed Jan, 10, 1990`

## Application
The application is built using Express.js and runs on the server side. It includes the following routes:

1. /addcost/ for adding a new cost item using the POST method. The parameters include: user_id, year, month, day, description, category, and sum. The category must be one of the available options.

2. /report/ for getting a detailed report (in JSON) of costs for a specific month and year, using the GET method. The parameters include: user_id, month, and year. The returned JSON document includes an object with properties for each category, whose values are arrays of objects describing cost items.

3. /about/ for getting a detailed report (in JSON) of the devs names and emails


# Data Query App

It queries the mongoDB database for the 5 queries which are:
1. Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
2. Male Users which have phone price greater than 10,000.
3. Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
4. Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
5. Show the data of top 10 cities which have the highest number of users and their average income.


![Screenshot](Screenshot.jpg)
## API Reference

#### Get all users

```
  GET /users
```


#### Load data from sample_data.JSON

```
  GET /user/load-data
```

#### Get results for Query-1

```
  GET /user/query1
```

#### Get results for Query-2

```
  GET /user/query2
```

#### Get results for Query-3

```
  GET /user/query3
```

#### Get results for Query-4

```
  GET /user/query4
```

#### Get results for Query-5

```
  GET /user/query5
```



## Demo
Server hosted on Render: 
https://mobiserver.onrender.com

Site hosted on Netlify: 
https://mobilicisdataquery.netlify.app/

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_URI=mongodb+srv://admin:XXjO4pWuBADNXjX1@nodeapplication.obb7vkx.mongodb.net/?retryWrites=true&w=majority`


## Run Locally

Clone the project

```bash
  git clone https://github.com/shubchaudhary/mobilicis
```

Go to the project directory

```bash
  cd mobilicis
```

Install server-side dependencies

```bash
  cd backend
  npm install
```

Install client-side dependencies

```bash
  cd frontend
  npm install
```

Start the server
```bash
  cd backend
  npm start
```

Start the site
```bash
  cd frontend
  npm start
```


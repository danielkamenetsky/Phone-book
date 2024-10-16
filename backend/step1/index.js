// importing express library using require method
const express = require("express")

// creating an instance of this express
const app = express()

//using let to update our data
let persons = 
[
  { 
    "id": "1",
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": "2",
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": "3",
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": "4",
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

// Creating an endpoint to display data on client service 
app.get("/api/persons", (request, response)=> {
  response.send(persons);
});

app.listen(3001, ()=> {
  console.log('Server is running!')
})
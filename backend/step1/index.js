// importing express library using require method
const express = require("express")

// creating an instance of this express
const app = express()

//using let to update our data
let persons = 
[
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

// Creating an endpoint to display data on client service 
app.get("/api/persons", (request, response)=> {
  response.send(persons);
});


app.get("/api/persons/:id", (request, response) => {
  const id = request.params.id
  const person = persons.find(person=>person.id === id)
  if (!person) {
    response.status(404).send(`Person with id:${id} is NOT FOUND`)
  }
  response.send(person)
})


app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id)
  let deletedPerson = persons.filter((person) => person.id !== id)
  response.send(deletedPerson)
})

app.listen(3001, ()=> {
  console.log('Server is running!')
})

app.get("/info", (request, response)=> {
  response.send(
    `Phonebook has info for ${persons.length} people. <br> ${Date()}`
  )

})
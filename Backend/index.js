const express=require("express");
const fs=require("fs")
const app=express();
const PORT=3000;
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const bcrypt=require('bcrypt');
const saltRounds=10;
app.use(bodyParser.json());
app.use(cookieParser());

let TODOS = [];
try {
    TODOS= JSON.parse(fs.readFileSync("todo.json", "utf8"));
} catch {
  TODOS= [];
}
app.get("/setcookie",(req,res)=>{
    res.cookie('token','djfnjdn');
    res.send("Set");
})
app.get("/",(req,res)=>{
    res.send("Restarted")
});
app.get("/bcrypt",(req,res)=>{
    bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash('SuhasGNayak', salt, function(err, hash) {
        console.log(hash);
    });
});
res.send("Bcrypted");
});

app.get("/compare",(req,res)=>{
    bcrypt.compare('SuhasGNayak', "$2b$10$vZeBrjkhLQx3dF9XTCvTsOidR70zLCQ/EZ66pN.SILTGppimhPsvS", function(err, result) {
    console.log(result);
    res.send("Confirmed");
});
})

app.get('/todos', (req, res) => {
  res.json(TODOS);
});

app.get('/todos/:id', (req, res) => {
  const todo = TODOS.find(t => t.id === parseInt(req.params.id));
  if (!todo) {
    res.status(404).send();
  } else {
    res.json(todo);
  }
});

app.post('/createTodo', (req, res) => {
  const newTodo = {
    id: Math.floor(Math.random() * 1000000), // unique random id
    title: req.body.title,
    description: req.body.description
  };
  const existing=TODOS.find((todo)=>todo.title===newTodo.title);
  if(existing){
    res.json("Todo already exists").status(404);
  }
  else{
    TODOS.push(newTodo);
  fs.writeFileSync("todo.json",JSON.stringify(TODOS));
//   console.log(TODOS);

  res.status(201).json(newTodo);
  }
  console.log(TODOS);
  
});

app.put('/todos/:id', (req, res) => {
  const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (todoIndex === -1) {
    res.status(404).send();
  } else {
    todos[todoIndex].title = req.body.title;
    todos[todoIndex].description = req.body.description;
    res.json(todos[todoIndex]);
  }
});

app.delete('/todos/:id', (req, res) => {
  const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (todoIndex === -1) {
    res.status(404).send();
  } else {
    todos.splice(todoIndex, 1);
    res.status(200).send();
  }
});

// for all other routes, return 404
// app.use((req, res, next) => {
//   res.status(404).send();
// });

module.exports = app;

app.listen(PORT,()=>{
    console.log(`Server is listening on PORT ${PORT}`);
})
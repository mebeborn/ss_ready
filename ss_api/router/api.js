const express = require('express');
const bodyParser = require('body-parser');
const json = require('../db/data.json');
const {nextId, findId} = require('../db/db_func');

const router = express.Router();

router.use(bodyParser.urlencoded({ 
  extended: false
 }));

router.get('/', (req, res) => {
  console.log(...json.students.filter(student => student.id == req.params.id));
  res.render('index', { 
    students: json.students 
  });
});

router.get('/edit/:id', (req, res) => {
  res.render('edit', { 
    student: findId(parseInt(req.params.id)) });
});

router.post('/edit', (req, res) => {
  const student = findId(parseInt(req.body.id));
  student.firstName = req.body.firstName;
  student.lastName = req.body.lastName;
  
  // console.log( ...json.students)

  res.render('index', { 
    students: json.students 
  });
  
});


router.post('/delete/', (req, res) => {
  //splice first element error -> last (id-1 -> 0-1 = -1)
  json.students = json.students.filter(
    student => student.id !== parseInt(req.body.id)
    );
  //after delete element url doesnt change to(/api/)
  res.render('index', { 
    students: json.students 
  });
  
});

router.post('/add', (req, res) => {
  const student = {id: nextId(), ...req.body};
  json.students = [...json.students, student];
  console.log(json.students)
  res.render('index', { 
    students: json.students 
  });
});



module.exports = router;

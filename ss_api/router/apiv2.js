const express = require('express');
const bodyParser = require('body-parser');
const json = require('../db/data.json');
const {nextId, findId} = require('../db/db_func');

const router = express.Router();
router.use(bodyParser.urlencoded({ 
    extended: false
   }));

router.get('/list', (req, res) => {
    res.json(json.students);
});

router.get('/list/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = json.students.filter(student=>student.id === id);
    res.json(...student);
});

router.post('/list/add', (req, res) => {
    const {firstName, lastName} = req.body;
    const student = {id: nextId(), firstName, lastName }
    json.students = [...json.students, student];
    console.log(firstName, lastName);
    res.json(req.body);
});

router.post('/edit', (req, res) => {
    const {id, firstName, lastName} = req.body;
    json.students = json.students.map(function(student) {
        if (student.id === id) 
            student = { id, firstName, lastName }
        return student;
    });
    res.json(json.students);
});

router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    json.students = json.students.filter(student=>student.id != id);
    res.json(json.students);
});
module.exports = router;
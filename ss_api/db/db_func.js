const json = require('./data.json');

const nextId = () => {return json.students.length};

const findId = id => json.students.find(student => student.id === id);

module.exports = {
  nextId,
  findId,
};
// JSON - JavaScript on notation. Saving arrays, boleans and objects, etc... as strings.

// var obj = {
// 	name: 'Snooze'
// };

// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj); 	

// var personString = '{"name": "Snooze", "age": 18}';
// var person = JSON.parse(personString); // Convert to Object

// console.log(typeof person);
// console.log(person);


const fs = require('fs');

var originalNote = {
	title: 'Some title',
	body: 'Some body'
};


var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);

const notes = require('./notes.js');


const fs = require('fs'); // File System API from NodeJS
const _ = require('lodash'); // Underscore variable for Lodash.
const yargs = require('yargs');

var titleOptions = {
		describe: 'Title of the note.',
		demand: true, // Require title argument when running add command.
		alias: 't'
	}

var bodyOptions = {
		describe: 'Body of the note.',
		demand: true, // Require body argument when running add command.
		alias: 'b'
	}

const argv = yargs
	.command('add', 'Add a new note.', {
		title: titleOptions,
		body: bodyOptions
	})
	.command('list', 'List all notes.')
	.command('read', 'Read a note.', {
		title: titleOptions
	})
	.command('remove', 'Remove a note.', {
		title: titleOptions
	})
	.help()
	.argv;


	
var command = argv._[0];


if (command === 'add') {

	var note = notes.addNote(argv.title, argv.body);
	if (note) {

		console.log('Note created.');
		notes.logNote(note);

	} else {

		console.log('Note title already exists.');

	}


} else if (command === 'list') {

	var allNotes = notes.getAll();
	console.log(`Retrieving ${allNotes.length} note(s).`);
	allNotes.forEach((note) => notes.logNote(note));

} else if (command === 'read') {

	var note = notes.getNote(argv.title);
	if (note) {

		console.log(`Retrieving note: ${note.title}`);
		notes.logNote(note);

	} else {

		console.log('Note not found.');

	}

} else if (command === 'remove') {

	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? 'Note was removed.' : 'Note not found.';
	console.log(message);

} else {

	console.log('Command is invalid.');

}
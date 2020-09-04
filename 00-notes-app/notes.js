const fs = require('fs')
const chalk = require('chalk')

const getNotes = function() {
    return "Your Notes..."
}

const addNotes = function(title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter( function(note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log('New Note Added!')

    } else {
        console.log('Note Title Taken!')
    }


}

const removeNote = function (title) {
    notes = loadNotes()

    const notesToKeep = notes.filter(n => {
        return n.title !== title
    })

    if (notesToKeep.length < notes.length) {
        saveNotes(notes)
        msg = chalk.bgGreen(`${title} note Removed!`)
        console.log(msg)
    } else {
        msg = chalk.bgRed("No Note to Remove!")
        console.log(msg)
    }
}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const notes = JSON.parse(dataBuffer.toString())
        return notes
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNotes,
    removeNote: removeNote
}
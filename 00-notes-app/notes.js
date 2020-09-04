const fs = require('fs')
const chalk = require('chalk')

const getNotes = function() {
    return "Your Notes..."
}

const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(note => note.title === title )

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

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((n) => n.title !== title )

    if (notesToKeep.length < notes.length) {
        saveNotes(notesToKeep)
        msg = chalk.bgGreen(`${title} note Removed!`)
        console.log(msg)
    } else {
        msg = chalk.bgRed("No Note to Remove!")
        console.log(msg)
    }
}

const listNotes = () => {
    const notes = loadNotes()
    if (notes.length > 0) {
        notes.forEach(n => {
            console.log(chalk.green.bold(`Title: ${n.title}`))
            console.log(`Body: ${chalk.italic(n.body)}`)
        })
    } else {
        console.log('No notes to list!')
    }
}

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const notes = JSON.parse(dataBuffer.toString())
        return notes
    } catch (e) {
        console.log(e)
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNotes,
    removeNote: removeNote,
    listNotes: listNotes
}

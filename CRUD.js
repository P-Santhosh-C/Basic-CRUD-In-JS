let notesList = [
    {
        title: 'wake up early',
        time: '6:00 AM'
    },
    {
        title: 'Eat BreakFast',
        time: '8:45 AM'
    },
    {
        title: 'Do Code',
        time: '9:15 AM'
    },
    {
        title: 'Eat Dinner',
        time: '8:30 AM'
    },
    {
        title: 'Go to Sleep',
        time: '10:30 AM'
    }

]
console.log('-------------------------------');

// display notes

let displayNotes = ()=>
{
notesList.forEach((note, index) =>
{
    console.log(`${index+1}. ${note.title}  ||  ${note.time}`);

});
}

displayNotes();
console.log('---------------------------');

//Add notes

let addNotes = (title, time) =>
{
   notesList.push({title: title, time: time});
   console.log('Note added successfully');
   displayNotes();
}
addNotes('walking', '5:30 AM');
console.log('------------------------------');

// delete notes

let deleteNotes = (title) =>
{
  let noteToDelete =   notesList.findIndex((note) =>
    {
        return note.title.toLowerCase() === title.toLowerCase();
    });
    notesList.splice(noteToDelete,1);
    console.log('note is deleted');
    displayNotes();
}

deleteNotes('go to sleep');
console.log('----------------------------------');

//update notes of title and time

let updateNotes = (oldtitle , newtitle) =>
{
  let noteToUpdate =  notesList.findIndex((note) =>
    {
        return note.title.toLowerCase() === oldtitle.toLowerCase();
    });
    notesList[noteToUpdate].title = newtitle;
    console.log('notes updated');
    displayNotes();
}
updateNotes('walking', 'jogging');
console.log('------------------------------------');

// update note status

let updateNoteStatus = (title, newTime)=>
{
   let noteToUpdate =   notesList.findIndex((note) =>
    {
        return note.title.toLowerCase() ===  title.toLowerCase();
    });
    notesList[noteToUpdate].time = newTime;
    console.log('updated Note Status');
    displayNotes();
}
updateNoteStatus('wake up early', '05:30 AM');
console.log('----------------------------------------');
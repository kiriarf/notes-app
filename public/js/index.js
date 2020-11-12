//Setup and references to objects
let noteController = new NoteController();

const noteInput = document.getElementById("note-input");
const addNoteBtn = document.getElementById("add-note");
const noteListElement = document.getElementById("note-list");
const backBtn = document.getElementById("go-back");
//----------------------------------------------------------

//Event listener for the add button -> adds a note only if input not blank
addNoteBtn.addEventListener('click', function() {
  if(noteInput.value === "") {
    alert("A note cannot be blank!");
  } else {
    noteController.noteList.addNote(noteInput.value);
    noteInput.value = "";
  };

  noteController.insertHTML();
});
//---------------------------------------------------------

//For showing a single note on hash change
makeUrlChangeShowNoteForCurrentPage();

function makeUrlChangeShowNoteForCurrentPage() {
  window.addEventListener('hashchange', showNoteForCurrentPage);
};

function showNoteForCurrentPage() {
  showNote(getNoteFromUrl(window.location));
};

function getNoteFromUrl(location) {
  return location.hash.split('#')[1];
};

function showNote(noteId) {
  let noteArr = noteController.noteList.list;
  //Loops through array of notes and checks if there is a note with the same id as the hash
  for(let i = 0; i < noteArr.length; i++) {
    if(noteId == noteArr[i].id) {
      let singleNoteView = new SingleNoteView(noteArr[i]);
      let noteHTML = singleNoteView.createHTML();
      noteListElement.innerHTML = noteHTML;
      //Change visibility of elements
      backBtn.style.display = "block";
      noteInput.style.display = "none";
      addNoteBtn.style.display = "none";
    };
  };
};
// -----------------------------------------------------

//Event listener for the All Notes button to go back to all notes when viewing single note
backBtn.addEventListener('click', showAllNotes);

function showAllNotes() {
  //Make All Notes button invisible
  backBtn.style.display = "none";
  //This does not trigger onhashchange (which is nice)
  history.replaceState(null, null, ' ');
  //Change visibility of elements
  noteInput.style.display = "inline";
  addNoteBtn.style.display = "inline";
  //Show the HTML for all notes in the NoteList
  noteController.insertHTML();
};
let noteController = new NoteController();

const noteInput = document.getElementById("note-input");
const addNoteBtn = document.getElementById("add-note");
const noteListElement = document.getElementById("note-list");
const backBtn = document.getElementById("go-back");

addNoteBtn.addEventListener('click', function() {
  if(noteInput.value === "") {
    alert("A note cannot be blank!");
  } else {
    noteController.noteList.addNote(noteInput.value);
    noteInput.value = "";
  };

  noteController.insertHTML();
});

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
  for(let i = 0; i < noteArr.length; i++) {
    if(noteId == noteArr[i].id) {
      let singleNoteView = new SingleNoteView(noteArr[i]);
      let noteHTML = singleNoteView.createHTML();
      noteListElement.innerHTML = noteHTML;
      backBtn.style.display = "block";
    };
  };
};

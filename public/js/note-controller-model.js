class NoteController {
  constructor(noteList = new NoteList()) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(this.noteList);
  }

  insertHTML() {
    var str = this.noteListView.createHTML();
    var listElem = document.getElementById('note-list')


    // var appDiv = document.getElementById('app');
    // var listDiv = document.createElement('div');
    listElem.innerHTML = str;
    // listDiv.id = "list-div"
    // appDiv.appendChild(listDiv);
  }
  
}

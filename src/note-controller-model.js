class NoteController {
  constructor(noteList = new NoteList()) {
    this.noteList = noteList;
    this.noteList.addNote("Favourite drink: seltzer");
    this.noteListView = new NoteListView(this.noteList);
  }

  insertHTML() {
    var str = this.noteListView.createHTML();
    var appDiv = document.getElementById('app');
    console.log(appDiv);
    appDiv.innerHTML = str;
  }

}

var nc = new NoteController();
nc.insertHTML();
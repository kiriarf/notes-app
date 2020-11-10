class NoteList {
  constructor() {
    this.list = [];
  }

  getList() {
    return this.list;
  }

  addNote(string){
    let note = new Note(string);
    this.list.push(note);
  }
}

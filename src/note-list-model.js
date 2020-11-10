class NoteList {
  constructor() {
    this._list = [];
  }

  get list() {
    return this._list;
  }

  addNote(string){
    let note = new Note(string);
    this._list.push(note);
  }
}

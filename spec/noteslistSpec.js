function notesListHasArray() {
  var noteslist = new Noteslist();
  assert.isTrue(noteslist.getList() === []);
}

(function(exports){
  var nl = new NoteList();
  nl.addNote('test string');
  nl.addNote('another test string');
  var noteListView = new NoteListView(nl);

  function hasNoteList() {
    assert.isTrue(noteListView.noteList === nl.list);
  };

  function canReturnHTML() {
    assert.isTrue(noteListView.createHTML() === "<ul><li><div>test string</li></div><li><div>another test string</li></div></ul>");
  }

  function canReturnHTMLwithNoNotes() {
    var nl2 = new NoteList();
    var nlw = new NoteListView(nl2);
    assert.isTrue(nlw.createHTML() === "<ul></ul>")
  }

  hasNoteList();
  canReturnHTML();
})(this);


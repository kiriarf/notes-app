(function(exports){
  console.log("-------NoteListView-------");
  var nl = new NoteList();
  nl.addNote('test string with more than 20 chars');
  nl.addNote('another test string');
  var noteListView = new NoteListView(nl);

  function hasNoteList() {
    console.log("NoteListView has an array of notes:");
    assert.isTrue(noteListView.noteList === nl.list);
  };

  function canReturnHTML() {
    console.log("NoteListView can return HTML with truncated notes:");
    assert.isTrue(noteListView.createHTML() === "<li><div id='0'><a href='#0'>test string with mor...</a></div></li><li><div id='1'><a href='#1'>another test string</a></div></li>");
  }

  function canReturnHTMLwithNoNotes() {
    console.log("NoteListView returns empty ul when there are no notes:");
    var nl2 = new NoteList();
    var nlw = new NoteListView(nl2);
    assert.isTrue(nlw.createHTML() === "")
  }

  hasNoteList();
  canReturnHTML();
  canReturnHTMLwithNoNotes();
})(this);


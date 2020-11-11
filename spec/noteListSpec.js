(function(exports){
  console.log("-------NoteList-------");
  var noteList = new NoteList();

  function noteListHasArray() {
    console.log("NoteList has an empty array on init:");
    assert.isTrue(noteList.list.length === 0);
  };

  function noteListCanStoreNote() {
    console.log("NoteList can store notes:");
    noteList.addNote('testing');
    noteList.addNote('testing too');
    assert.isTrue(noteList.list[0].content === 'testing');
    assert.isTrue(noteList.list[1].content === 'testing too');
  };

  function notesHaveUniqueId() {
    console.log("Each note has a unique ID");

    assert.isTrue(noteList.list[0].id === 0);
    assert.isTrue(noteList.list[1].id === 1);
  }

  noteListHasArray();
  noteListCanStoreNote();
  notesHaveUniqueId();
})(this);

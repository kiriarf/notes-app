(function(exports){
  var noteList = new NoteList();
  var note = {
    content: 'test string',
    getContent: () => { return this.content }
  };

  function noteListHasArray() {
    assert.isTrue(noteList.getList().length === 0);
  };

  function noteListCanStoreNote() {
    noteList.addNote('testing');
    noteList.addNote('testing too');
    assert.isTrue(noteList.getList()[0].getContent() === 'testing');
    assert.isTrue(noteList.getList()[1].getContent() === 'testing too');
  };

  noteListHasArray();
  noteListCanStoreNote();
})(this);

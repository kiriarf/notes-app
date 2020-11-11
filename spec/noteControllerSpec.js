(function(exports){
  console.log("-------NoteController-------");
  var noteController = new NoteController();
 
  function canBeInstantiated() {
    console.log("NoteController can be instantiated:");
    assert.isTrue(noteController);
  }

  function canReplaceHTML() {
    console.log("NoteController can replace HTML:");
    noteController.noteList.addNote("Yeehaw")
    noteController.insertHTML();
    var noteListEl = document.getElementById('note-list');
    assert.isTrue(noteListEl.innerHTML === '<li><div id="0"><a href="#0">Yeehaw</a></div></li>');
  }

  canBeInstantiated();
  canReplaceHTML();
})(this);

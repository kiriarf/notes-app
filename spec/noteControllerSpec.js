(function(exports){
  var noteController = new NoteController();
 
  function canBeInstantiated() {
    assert.isTrue(noteController);
  }

  function canReplaceHTML() {
    testAppDiv = document.getElementById('app');
    noteController.insertHTML();
    assert.isTrue(testAppDiv.innerHTML === "<ul><li><div>Favourite drink: seltzer</div></li></ul>");
  }

  canBeInstantiated();
  canReplaceHTML();
})(this);

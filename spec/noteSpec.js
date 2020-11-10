(function noteReturnsTextInput() {
  var note = new Note("My favourite language is JavaScript");
  assert.isTrue(note.content === "My favourite language is JavaScript");
})();

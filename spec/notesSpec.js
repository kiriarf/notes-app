function noteReturnsTextInput() {
  var note = new Note("My favourite language is JavaScript");
  assert.isTrue(note.getContent() === "My favourite language is JavaScript");
}

noteReturnsTextInput();

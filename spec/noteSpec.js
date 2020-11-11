(function (exports) {
  console.log("-------Note-------");
  var note = new Note("My favourite language is JavaScript");

  function noteReturnsTextInput() {
    console.log("A note has some text:");
    assert.isTrue(note.content === "My favourite language is JavaScript");
  };

  noteReturnsTextInput();
})(this);
(function(exports){
  console.log("-------SingleNoteView-------");
  var singleNoteView;
  var note;

  class FakeNote{

    constructor(string){
      this._content = string;
    }

    get content(){
      return this._content;
    }
  }

  note = new FakeNote('test');
  singleNoteView = new SingleNoteView(note);


  function canBeInstantiatedWithNote() {
    console.log("Single note view is instantiated with a note:");

    assert.isTrue(singleNoteView);
    assert.isTrue(singleNoteView.note.content);
  };

  function canReturnNoteHTML() {
    console.log("Single note view can wrap a note in a div:");
    assert.isTrue(singleNoteView.createHTML() === '<div>test</div>');
  };

  canBeInstantiatedWithNote();
  canReturnNoteHTML();
})(this);

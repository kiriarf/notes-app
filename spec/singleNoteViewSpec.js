(function(exports){
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
    assert.isTrue(singleNoteView);
    assert.isTrue(singleNoteView.note.content);
  };

  function canReturnNoteHTML() {
    assert.isTrue(singleNoteView.createHTML() === '<div>test</div>');
  }

  canBeInstantiatedWithNote();
  canReturnNoteHTML();
})(this);

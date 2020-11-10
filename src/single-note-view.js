class SingleNoteView{

  constructor(note){
    this.note = note;
  };

  createHTML(){
    return '<div>' + this.note.content + '</div>';
  };


}

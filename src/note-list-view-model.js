class NoteListView {
  constructor(noteList) {
    this.noteList = noteList.getList();
  }

  createHTML() {
    let htmlStr = "";

    for(let i = 0; i < this.noteList.length; i++) {
      htmlStr += `<li><div>${this.noteList[i].getContent()}</li></div>`
    };
    
    htmlStr = "<ul>" + htmlStr + "</ul>";
    return htmlStr;
  }
}
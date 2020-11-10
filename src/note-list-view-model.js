class NoteListView {
  constructor(noteList) {
    this.noteList = noteList.list;
  }

  createHTML() {
    let htmlStr = "";

    for(let i = 0; i < this.noteList.length; i++) {
      if (this.noteList[i].content.length <= 20) {
        htmlStr += `<li><div>${this.noteList[i].content}</li></div>`
      } else {
        htmlStr += `<li><div>${this.noteList[i].content.slice(0, 20)}...</li></div>`
      }
    };
    
    htmlStr = "<ul>" + htmlStr + "</ul>";
    return htmlStr;
  }
}
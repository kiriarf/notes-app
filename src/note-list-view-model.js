class NoteListView {
  constructor(noteList) {
    this.noteList = noteList.list;
  }

  createHTML() {
    let htmlStr = "";

    for(let i = 0; i < this.noteList.length; i++) {
      if (this.noteList[i].content.length <= 20) {
        htmlStr += `<li><div id='${this.noteList[i].id}'><a href='#${this.noteList[i].id}'>${this.noteList[i].content}</a></div></li>`
      } else {
        htmlStr += `<li><div id='${this.noteList[i].id}'><a href='#${this.noteList[i].id}'>${this.noteList[i].content.slice(0, 20)}...</a></div></li>`
      }
    };
    
    // htmlStr = "<ul>" + htmlStr + "</ul>";
    return htmlStr;
  }
}
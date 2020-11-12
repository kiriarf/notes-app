class Note{

  constructor(string) {
    this._content = string;
    this._id = 0
  };

  get content() {
    return this._content;
  };

  get id() {
    return this._id;
  }
  
  set id(newId) {
    this._id = newId;
  }

}

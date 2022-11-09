//在类中我们如何通过interface约束
{
  interface Userinterface {
    name: string;
    age: number;
  }
  class User {
    _info: Userinterface;
    constructor(info: Userinterface) {
      this._info = info;
    }
    get info() {
      return this._info;
    }
  }
  let hd = new User({ name: "后盾人", age: 18 });
  console.log(hd.info); //{ name: '后盾人', age: 18 }
}

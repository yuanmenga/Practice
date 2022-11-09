"use strict";
//在类中我们如何通过interface约束
{
    class User {
        constructor(info) {
            this._info = info;
        }
        get info() {
            return this._info;
        }
    }
    let hd = new User({ name: "后盾人", age: 18 });
    console.log(hd.info); //{ name: '后盾人', age: 18 }
}

"use strict";
//type独有的
{
    //interface再次声明不会覆盖而是合并
    let hd = {
        name: "houdunren ",
        age: 12,
    };
    let hds = {
        name: "houdunren ",
        age: 12,
    };
    let hdss = {
        name: "houdunren ",
    };
}
//
{
    class userss {
        constructor() {
            this.name = "asd";
            this.age = 12;
        }
    }
}

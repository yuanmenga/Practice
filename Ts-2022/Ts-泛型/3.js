"use strict";
//泛型在类使用
{
    class User {
        constructor() {
            this.data = [];
        }
        collect(...args) {
            this.data.push(...args);
        }
        shift() {
            return this.data.shift();
        }
    }
    let hd = new User();
    hd.collect(1, 2, 3, 4, 5, 6);
    console.log(hd.shift()); //1
    //如果传递的数字内容为字符串还需要修改函数，所以我们使用了泛型
}
{
    class User {
        constructor() {
            this.data = [];
        }
        collect(...args) {
            this.data.push(...args);
        }
        shift() {
            return this.data.shift();
        }
    }
    let hd = new User();
    let hdS = new User();
    hd.collect("asd", 1, 2, 3, 4, 5, 6);
    hdS.collect("as", "asas");
    console.log(hd.shift()); //as
    console.log(hdS.shift()); //as
}

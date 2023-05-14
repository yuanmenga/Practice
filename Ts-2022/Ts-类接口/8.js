"use strict";
//单利模式，只能创建一个实例
{
    class User {
        constructor() { } //正常情况下，constructor会默认执行，变成受保护的就不能在外部调用
        static make() {
            if (User.instance == null) {
                User.instance = new User();
                console.log(111);
            }
            return User.instance;
        }
    }
    User.instance = null;
    let hd = User.make();
    let hd1 = User.make();
    console.log(hd);
    console.log(hd1);
}

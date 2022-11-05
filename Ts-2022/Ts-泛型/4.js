"use strict";
//泛型在类和构造函数中使用
{
    class Users {
        constructor(user) {
            this.user = user;
            this.user = user;
        }
        get() {
            return this.user;
        }
    }
    let hd = new Users({ name: "sa", age: 12 });
    console.log(hd.get().name); //sa
}

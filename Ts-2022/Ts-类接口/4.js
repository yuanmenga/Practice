"use strict";
//private 私有属性，只能自己调用
{
    class Hd {
        constructor(n, a) {
            this.site = "后润人"; //私有属性，只能自己调用
            this.name = n;
            this.age = a;
        }
        info() {
            return `我是${this.name},年龄是${this.age},站点是${this.site}`;
        }
    }
    class User extends Hd {
        constructor(n, a) {
            super(n, a);
        }
        info() {
            return `我是${this.name},年龄是${this.age},站点是`; //属性“site”为私有属性，只能在类“Hd”中访问。
        }
    }
    let xj = new User("湘军", 23);
    console.log(xj.info());
}

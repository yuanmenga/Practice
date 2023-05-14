"use strict";
//类
//类的定义
class User {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    info() {
        return `我是${this.name},年龄是${this.age}`;
    }
}
let xj = new User("湘军", 23);
let xjd = new User("元阿三", 22);
console.log(xj.info()); //我是湘军,年龄是23
//下面我们定义一个只能是User的构造实例构成的数组
let aarr = [];
aarr.push(xj, xjd);

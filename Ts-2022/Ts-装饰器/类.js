"use strict";
//修饰符
class Hd {
    constructor(name) {
        this.name = name;
    }
}
class Useraa extends Hd {
    constructor(name) {
        super(name);
    }
    info() {
        return `你`; //属性是 private 不允许子类访问
    }
}
let ns = new Useraa("as");
console.log(ns.name);

/**
   单例模式:构造函数+核心代码
   一个构造函数只能有一个实例，不管new多少次
 */

const Person = (() => {
  let instance = null;
  function Person(name, age) {
    console.log(name, age);
    this.Person = name;
    this.age = age;
  }
  return function (...arg) {
    console.log(arg);
    if (!instance) instance = new Person(...arg);
    return instance;
  };
})();

let hd = new Person('John', 12);
let h1d = new Person('John', 12);
console.log(hd === h1d); //true

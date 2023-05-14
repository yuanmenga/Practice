//public
//修饰符
//默认为pubilc,公共的方法是写在原型上的
{
  class User {
    public name: string;
    public age: number;
    constructor(n: string, a: number) {
      this.name = n;
      this.age = a;
    }
    public info(): string {
      return `我是${this.name},年龄是${this.age}`;
    }
  }
  let xj = new User("湘军", 23);
  xj.name = "后盾人";
  console.log(xj.name); //后盾人
  console.log(xj);
  //遍历某个对象的属性
  for (const key in xj) {
    ///hasOwnProperty：是用来判断一个属性是否在某个对象中。此方法无法检查原型链中是否具有该属性。
    if (xj.hasOwnProperty(key)) {
      console.log(key);
    }
  }
}

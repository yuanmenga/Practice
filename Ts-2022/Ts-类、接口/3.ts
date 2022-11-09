//protected 是受保护的，只能在类及其子类中访问。

{
  class Hd {
    protected name: string;
    public age: number;
    constructor(n: string, a: number) {
      this.name = n;
      this.age = a;
    }
    protected info(): string {
      return `我是${this.name},年龄是${this.age}`;
    }
    public show(): string {
      return this.info();
    }
  }
  class User extends Hd {
    constructor(n: string, a: number) {
      super(n, a);
    }
  }
  let xj = new User("湘军", 23);
  //   xj.name = "s"; 不允许调用，但是在info里面可以调用
  xj.age = 12; //可以
  console.log(xj.show()); //我是湘军,年龄是12
}

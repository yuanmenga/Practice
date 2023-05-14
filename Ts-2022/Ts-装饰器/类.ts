//修饰符
class Hd {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class Useraa extends Hd {
  constructor(name: string) {
    super(name);
  }

  public info(): string {
    return `你`; //属性是 private 不允许子类访问
  }
}
let ns = new Useraa("as");
console.log(ns.name);

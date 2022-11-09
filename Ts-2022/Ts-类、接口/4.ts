//private 私有属性，只能自己调用

{
  class Hd {
    protected name: string;
    public age: number;
    private site: string = "后润人"; //私有属性，只能自己调用
    constructor(n: string, a: number) {
      this.name = n;
      this.age = a;
    }
    protected info(): string {
      return `我是${this.name},年龄是${this.age},站点是${this.site}`;
    }
  }
  class User extends Hd {
    constructor(n: string, a: number) {
      super(n, a);
    }
    public info(): string {
      return `我是${this.name},年龄是${this.age},站点是${this.site}`;
    }
  }
  let xj = new User("湘军", 23);
  console.log(xj.info());
}

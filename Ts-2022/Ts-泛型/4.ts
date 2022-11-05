//泛型在类和构造函数中使用
{
  interface USERinterface {
    name: string;
    age: number;
  }
  class Users<T> {
    constructor(private user: T) {
      this.user = user;
    }
    public get(): T {
      return this.user;
    }
  }
  let hd = new Users<USERinterface>({ name: "sa", age: 12 });
  console.log(hd.get().name); //sa
}

{
  class User {
    // public name: string; //在Ts中可以将这一步骤省略
    //public age: number
    constructor(public name: string, public age: number) {
      this.name = this.getname(name);
      this.age = age;
    }
    private getname(name: string): string {
      return `你好-${this.name}`;
    }
  }
  let hd = new User("后盾人", 12);
  console.log(hd.name); //你好-后盾人
  console.log(hd.age); //12
}

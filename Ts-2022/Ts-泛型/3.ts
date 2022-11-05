//泛型在类使用
{
  class User {
    data: number[] = [];
    public collect(...args: number[]) {
      this.data.push(...args);
    }
    public shift() {
      return this.data.shift();
    }
  }
  let hd = new User();
  hd.collect(1, 2, 3, 4, 5, 6);
  console.log(hd.shift()); //1
  //如果传递的数字内容为字符串还需要修改函数，所以我们使用了泛型
}
{
  class User<T> {
    data: T[] = [];
    public collect(...args: T[]) {
      this.data.push(...args);
    }
    public shift() {
      return this.data.shift();
    }
  }
  let hd = new User<Number | string>();
  let hdS = new User<String>();
  hd.collect("asd", 1, 2, 3, 4, 5, 6);
  hdS.collect("as", "asas");
  console.log(hd.shift()); //as
  console.log(hdS.shift()); //as
}

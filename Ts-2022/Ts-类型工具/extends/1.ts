//extend可以实现继承
{
  type hd = {
    age: number;
  };
  interface user extends hd {
    name: string;
  }
  let obj: user = {
    name: "as",
    age: 21,
  };
}

//在泛型中使用
{
  function hd<T extends { id: number; randon(n: number): number }>(arr: T[]) {
    arr.map((a) => a.randon(a.id));
  }
  hd([
    {
      id: 1,
      randon(n) {
        return n;
      },
    },
  ]);
}

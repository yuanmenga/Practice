//使用接口约束 TypeScript 对象
{
  interface Asdssddf {
    name: string;
    age: number;
    sex?: string; //可选，可声明也可以不声明
    info(): string;
    [key: string]: any; //属性的名字是字符串类型，value可以是任何类型
  }

  //对象必须符合接口的模板
  let hd: Asdssddf = {
    name: "后盾人",
    age: 12,
    info() {
      return "as";
    },
    asd: "asd",
  };
}

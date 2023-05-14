//interface在函数中的使用，以及合并
{
  interface User {
    (peice: number): number;
  }
  //函数中的使用
  let hdsasa: User = (peice: number) => 2;
  //接口合并
  interface Users {
    name: string;
  }
  //重复声明不会进行覆盖，而会进行合并
  interface Users {
    age: number;
  }
  let hd: Users = {
    name: "后盾人",
    age: 12,
  };
}

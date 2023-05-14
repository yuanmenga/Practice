// interface 结合enum 与array
{
  //枚举
  enum Typeuser {
    Boy,
    Girl,
  }
  //接口
  interface User {
    name: string;
    age: number;
    sex: Typeuser;
  }
  let hd: User = {
    name: "后盾人",
    age: 12,
    sex: Typeuser.Boy,
  };
  let hds: User = {
    name: "袁猛",
    age: 13,
    sex: Typeuser.Girl,
  };
  const arr: User[] = [hd, hds];
  //   const arr: User[] = [hd, hds, 3];  报错，不能有3
  console.log(arr); //[ { name: '后盾人', age: 12, sex: 0 }, { name: '
  //袁猛', age: 13, sex: 1 } ]
}

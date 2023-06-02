//&交叉类型，必须是同类型才可交叉
{
  type hd = {
    name: string;
  };
  type user = {
    age: number;
  };
  const userhd: user & hd = {
    //const userhd: user & hd
    name: "asd",
    age: 134,
  };
}
// {
//   type hd = string;
//   type user = number;
//   const hda: hd & user; //const hda: never ,因为string和number不是相同的类型
// }
{
  //&符的使用
  type user = {
    name: string;
    age: number;
  };
  type mangage = {
    quanxian: string;
  };
  const usermangage: mangage & user = {
    name: "后盾人",
    age: 12,
    quanxian: "mangage",
  };
}
{
  type user = {
    name: string;
    age: number;
  };
  type mangage = {
    quanxian: string;
    age: boolean;
  };
  //属性重复时会报错
  const usermangage: mangage & Pick<user, "name"> = {
    //只能通过pick工具将某一个类型的数据扔掉
    name: "后盾人",
    age: true,
    quanxian: "mangage",
  };
}

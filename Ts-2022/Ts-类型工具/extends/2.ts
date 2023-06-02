//extends用来类型条件判断

{
  type hd = { age: number; sex: string };
  type User = { age: number };
  //观察extends右边的宽泛类型。如果宽泛类型是两者中范围大的那就是true
  type hdUser = hd extends User ? true : false;
  let hds: hdUser = true;
  //   console.log(hds);

  type h = string;
  type z = string | number;
  const hz: h extends z ? string : false = "左边有的右面也有就对";
  console.log(hz); //左边有的右面也有就对

  const hzz: z extends h ? string : false = false; //右边没有number
  console.log(hzz); //false
}

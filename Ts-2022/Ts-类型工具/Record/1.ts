//快速生成属性
{
  type user = Record<"name" | "age", string | number>; //user包含两个属性，每个属性的数据类型是string | number
  const hd: user = {
    name: 12,
    age: 12,
  };
}

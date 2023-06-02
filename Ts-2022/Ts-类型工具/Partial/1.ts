//将类型的全部约束变为可选

{
  type user = {
    name: string;
    age: number;
  };
  const hd: Partial<user> = {};
}

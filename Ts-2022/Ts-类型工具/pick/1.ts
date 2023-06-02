//用于从另一个类型提取部分类型
{
  type hd = {
    name: string;
    age: number;
    sex: string;
  };
  type user = Pick<hd, "age" | "name">; //提取出age和name属性到user
  const userhd: user = {
    name: "ads",
    age: 12,
  };
}

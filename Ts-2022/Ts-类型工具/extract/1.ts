//与exclude相反，他是保存右边的数据类型
{
  type hd = string | number | boolean;
  type user = string;
  const hduser: Extract<hd, string | number> = 2; // hd包含3种类型，右边是两种
  //const hduser: string | number
}

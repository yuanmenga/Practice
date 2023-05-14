// 枚举
{
  //不设置值时，值以 0开始递增
  enum types {
    Boy, //0
    GIRL, //1
  }
  let user = {
    name: "后盾人",
    sex: types.GIRL,
  };

  console.log(types.Boy); //0
  console.log(user.sex); //1
}

{
  //当某个字段设置数值类型的值后，后面的在它基础上递增
  enum SexType {
    BOY = 1,
    GIRL,
  }
  console.log(SexType); //{ BOY: 1, GIRL: 2 }
}
{
  //可以将值设置为其他类型
  enum SexTypes {
    BOY = "男",
    GIRL = "女",
  }

  console.log(SexTypes); //{ BOY: '男', GIRL: '女' }
}

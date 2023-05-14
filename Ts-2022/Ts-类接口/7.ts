//Ts 内的静态属性和js相同，属于是函数的属性和方法
{
  //static 使用的语法
  class User {
    static names: string = "后盾人";
    getnames() {
      return `我是User的静态属性${User.names}`;
    }
  }
  let hd = new User();
  //console.log(hd.names); //undefined //属性“names”在类型“User”上不存在。你的意思是改为访问静态成员“User.names”吗
  console.log(User.names); //后盾人
  console.log(hd.getnames()); //我是User的静态属性后盾人
}

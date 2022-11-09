//interface对函数的使用
{
  interface Userinterface {
    name: string;
    age: number;
    islock: boolean;
  }
  let user = {
    name: "后盾人",
    age: 12,
    islock: false,
  };
  function hd(user: Userinterface): Userinterface {
    user.islock = true;
    return user;
  }
  console.log(hd(user)); //{ name: '后盾人', age: 12, islock: true }
}

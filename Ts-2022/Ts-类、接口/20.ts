//type独有的
{
  interface user {
    name: string;
  }
  interface user {
    age: number;
  }
  //interface再次声明不会覆盖而是合并
  let hd: user = {
    name: "houdunren ",
    age: 12,
  };

  //type需要这样合并
  type users = {
    name: string;
  };
  type userss = {
    age: number;
  };
  type usersum = users & userss; //两种类型合并
  type usersuma = users | userss; //两种类型符合任何一种即可

  let hds: usersum = {
    name: "houdunren ",
    age: 12,
  };
  let hdss: usersuma = {
    name: "houdunren ",
  };
}
//
{
  type user = {
    name: string;
    age: number;
  };
  class userss implements user {
    name: string = "asd";
    age: number = 12;
  }
}

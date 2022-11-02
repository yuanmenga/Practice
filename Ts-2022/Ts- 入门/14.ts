//  type 对参数对象或者函数进行声明，通过这种复用的手段可以很好的优化代码

// 正常声明,对对象参数的声明过于繁琐，代码过多
function adduser(user: { name: string; age: number }): void {
  console.log("添加");
}
adduser({ name: "as", age: 12 });

//使用type进行声明,优化代码
type userType = { name: string; age: number };
function addusers(user: userType): void {
  console.log("添加");
}
addusers({ name: "as", age: 12 });

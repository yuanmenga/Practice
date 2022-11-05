//命名空间
namespace usera {
  export let name = "asd";
  export const hd = {};
}
namespace hd {
  name: "asd";
}
// console.log(hd.name);报错，读取命名空间的内容必须使用export导出
console.log(usera.name);
console.log(usera.hd);

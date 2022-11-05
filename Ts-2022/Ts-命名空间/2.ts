//命名空间的套用
namespace usessr {
  export let name = "sd";
  //访问嵌套的命名空间也需要将其导出
  export namespace usesrchild {
    export let num = 12;
    let age = 12;
  }
}

console.log(usessr.usesrchild.num); //12
// console.log(usessr.usesrchild.age); 报错没有导出

"use strict";
//命名空间的套用
var usessr;
(function (usessr) {
    usessr.name = "sd";
    //访问嵌套的命名空间也需要将其导出
    let usesrchild;
    (function (usesrchild) {
        usesrchild.num = 12;
        let age = 12;
    })(usesrchild = usessr.usesrchild || (usessr.usesrchild = {}));
})(usessr || (usessr = {}));
console.log(usessr.usesrchild.num); //12
// console.log(usessr.usesrchild.age); 报错没有导出

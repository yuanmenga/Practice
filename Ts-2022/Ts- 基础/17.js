"use strict";
//元组，与数组类似，只不过在固定的位置必须是固定的值
let typle = ["das", 12, true];
console.log(typle);
// typle[0] = false   不允许更改，第一个元素必须是字符串类型
typle[0] = "dasAZSa";
console.log(typle); //[ 'dasAZSa', 12, true ]

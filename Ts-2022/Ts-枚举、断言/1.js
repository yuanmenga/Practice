"use strict";
// 枚举
var type;
(function (type) {
    type[type["Boy"] = 0] = "Boy";
    type[type["GIRL"] = 1] = "GIRL";
})(type || (type = {}));
let user = {
    name: "后盾人",
    sex: 2,
};
console.log(type.Boy); //0

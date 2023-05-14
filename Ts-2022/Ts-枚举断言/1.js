"use strict";
// 枚举
{
    //不设置值时，值以 0开始递增
    let types;
    (function (types) {
        types[types["Boy"] = 0] = "Boy";
        types[types["GIRL"] = 1] = "GIRL";
    })(types || (types = {}));
    let user = {
        name: "后盾人",
        sex: types.GIRL,
    };
    console.log(types.Boy); //0
    console.log(user.sex); //1
}
{
    //当某个字段设置数值类型的值后，后面的在它基础上递增
    let SexType;
    (function (SexType) {
        SexType[SexType["BOY"] = 1] = "BOY";
        SexType[SexType["GIRL"] = 2] = "GIRL";
    })(SexType || (SexType = {}));
    console.log(SexType); //{ BOY: 1, GIRL: 2 }
}
{
    //可以将值设置为其他类型
    let SexTypes;
    (function (SexTypes) {
        SexTypes["BOY"] = "\u7537";
        SexTypes["GIRL"] = "\u5973";
    })(SexTypes || (SexTypes = {}));
    console.log(SexTypes); //{ BOY: '男', GIRL: '女' }
}

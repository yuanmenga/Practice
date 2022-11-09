"use strict";
//interface对函数的使用
{
    let user = {
        name: "后盾人",
        age: 12,
        islock: false,
    };
    function hd(user) {
        user.islock = true;
        return user;
    }
    console.log(hd(user)); //{ name: '后盾人', age: 12, islock: true }
}

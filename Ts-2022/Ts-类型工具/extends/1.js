"use strict";
//extend可以实现继承
{
    let obj = {
        name: "as",
        age: 21,
    };
}
//在泛型中使用
{
    function hd(arr) {
        arr.map((a) => a.randon(a.id));
    }
    hd([
        {
            id: 1,
            randon(n) {
                return n;
            },
        },
    ]);
}

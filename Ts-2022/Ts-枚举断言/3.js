"use strict";
{
    //const 断言
    //宽泛类型
    let as = "asd";
    as = "sda"; //可以对值进行修改
    //let和const
    let lkj;
    lkj = "湘军";
    lkj = "哈速度"; //只能更改设定的值
    //const与let存在一点不同，const不可以对值进行修改
    const hd = "速度";
    // hd = "湘军"; //报错。不允许对值进行修改,因为它是常数。
    let hdu = "后盾人"; // ==let hdu: "后盾人",也就是宽泛类型转换成了值类型
    // let hdu = <const>"后盾人" 写法和上面结果相同
    //as const 把数组变成只读的元组
    let jk = "后盾人";
    let ass = "asd";
    let hdi = ["as", 8, jk]; //let hdi: (string | number)[]
    let hdsi = [ass, 8, jk]; //let hdsi: readonly [string, 8, "后盾人"] 变成元组
    // hdsi[0] = "as"; 不允许修改，as const 断言后变成只读
    console.log(hdsi[0], 1111);
    //as const 操作对象
    let assa = "asd";
    let hdsk = {
        name: assa,
    }; //断言后name只能是string类型
    // let hdsk: {
    //   readonly name: string;
    // };
    console.log(hdsk.name); //asd
}

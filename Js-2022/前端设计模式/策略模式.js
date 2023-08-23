'use strict';

// 策略模式
// 一个问题匹配多个解决方案，但是不一定用哪一个
// 可能会随时增加、删除方案
//购物车例子，计算商品有多重折扣方式

//使用立即执行函数，有效地创建私有作用域，避免变量冲突
//将返回的函数赋值给一个全局变量calePrice,也就是说calePrice指向的是内部返回的函数
const calePrice = (function () {
  let cl = {
    '100_10': (price) => (price -= Math.floor(price / 100) * 10),
    '200_25': (price) => (price -= Math.floor(price / 200) * 25),
    '80%': (price) => (price *= 0.8),
  };
  function calePrice(type, price) {
    console.log(type, price);
    if (!cl[type]) return '该折扣不存在';
    return cl[type](price);
  }
  calePrice.add = (type, fn) => {
    if (cl[type]) return '该折扣已存在';
    cl[type] = fn;
  };
  calePrice.del = (type) => {
    if (!cl[type]) return '不存在该折扣';
    delete cl[type];
  };
  return calePrice;
})();
// console.log(calePrice('100_10', 120));
// console.log(calePrice('200_25', 420));
// console.log(calePrice('80%', 120));

// console.log(calePrice.del('70%'));

// console.log(calePrice.add('70%', (price) => (price *= 0.7)));
// console.log(calePrice('70%', 120));

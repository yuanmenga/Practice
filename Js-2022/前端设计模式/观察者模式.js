//观察者模式
// 监控一个对象的状态，一旦状态发生变化，观察者立马触发技能
/**
 需要两个构造函数实现：
 1.一个创建观察者
 ==>需要身份证明
 ==>触发的技能
 2. 一个创建被观察者
 ==>属性:记录状态
 ==>数组:记录谁观察这自己
 ==>方法:设置自己的状态，触发方法改变状态
 ==>方法:添加和删除观察者的方法
**/
//观察者
class Observer {
  constructor(name, fn = () => {}) {
    this.name = name;
    this.fn = fn;
  }
}
//被观察者
class Subject {
  constructor(state) {
    this.state = state;
    this.observerQunie = [];
  }
  setState(dataState) {
    console.log(dataState);
    this.observerQunie.forEach((item) => {
      item.fn();
    });
    return dataState;
  }
  addObserver(oberser) {
    const index = this.observerQunie.findIndex((item) => item === oberser);
    if (index === -1) this.observerQunie.push(oberser);
  }
  delObserver(oberser) {
    this.observerQunie = this.observerQunie.filter((item) => item != oberser);
  }
}
let hd = new Observer('班主任', () => {
  console.log('找家长');
});
let xiaoming = new Subject('学习');
console.log(hd, xiaoming);
// xiaoming.setState('玩游戏');
xiaoming.addObserver(hd);
xiaoming.addObserver(hd);
// xiaoming.delObserver(hd);
console.log(xiaoming.setState('玩游戏'));

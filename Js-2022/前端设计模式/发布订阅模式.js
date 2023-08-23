//发布订阅模式
// 监控一个对象的状态，一旦状态发生变化，第三方通知观察者立马触发技能

/** 例如买书
 * 发布订阅模式，多了一个第三方
 * 去书店，问，没有，留下电话给店员
 * 有了书，店员打电话
 * 去买书

/**
 只需要一个构造函数实现，多了一个第三方身份：
 ==>消息队列:{}
 ==>方法：删除或者新增消息队列内容
 ==>方法：触发消息队列内容
**/
const HanderA = () => console.log('HanderA');
const HanderB = () => console.log('HanderA');
const HanderC = () => console.log('HanderA');
const HanderD = () => console.log('HanderA');
class Observer {
  constructor() {
    this.message = {};
  }
  //新增订阅
  on(type, fn) {
    console.log(type, fn);
    if (!this.message[type]) this.message[type] = [];
    const index = this.message[type].findIndex((item) => item === fn);
    if (index === -1) this.message[type].push(fn);
  }
  //删除订阅
  off(type, fn) {
    if (!fn) delete this.message[type];
    if (!this.message[type]) return;
    this.message[type] = this.message[type].filter((item) => item != fn);
  }
  //触发订阅
  chufa(type) {
    if (!this.message[type]) return;
    this.message[type].forEach((item) => item());
  }
}
let hd = new Observer();
hd.on('abc', HanderA);
hd.on('abc', HanderB);
// hd.off('abc', HanderA);
// hd.off('abc', HanderB);
hd.chufa('abc');
console.log(hd);

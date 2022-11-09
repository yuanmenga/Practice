"use strict";
// abstract 与 interface
//abstract抽象类可以定义规范和业务代码
// interface专门用来定义规范的
{
    class chouxiang {
        //抽象类中不只有规范，还有业务代码
        zuobiao() {
            return [1, 2];
        }
    }
    class Tank extends chouxiang {
        constructor() {
            super(...arguments);
            // implements实现接口
            this.name = "坦克";
        }
        move() {
            console.log(`${this.name}移动`);
        }
    }
    let tan = new Tank();
    tan.move();
    console.log(tan.zuobiao());
}

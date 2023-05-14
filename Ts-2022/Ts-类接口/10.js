"use strict";
//抽象类不能创建实例，换句话说就是给子类规定了模板，子类必须执行
{
    class chouxiang {
        //抽象类中不只有规范，还有业务代码
        zuobiao() {
            return [1, 2];
        }
    }
    //   let hdsa = new chouxiang(); 报错,抽象类不能被直接使用，只能被继承
    class player extends chouxiang {
        constructor() {
            super(...arguments);
            // 子类必须实现抽象类定义的抽象属性和抽象方法
            this.name = "";
        }
        move() {
            console.log("玩家移动");
        }
    }
    class Tank extends chouxiang {
        constructor() {
            super(...arguments);
            this.name = "";
        }
        move() {
            console.log("坦克移动");
        }
    }
    let tan = new Tank();
    let play = new player();
    tan.move();
    play.move();
    console.log(play.zuobiao());
}

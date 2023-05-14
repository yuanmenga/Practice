"use strict";
//接口的继承，跟类一样的
{
    class player {
        constructor() {
            // implements接口，子类必须执行规范
            this.name = "玩家";
        }
        move() {
            console.log(`${this.name}移动`);
        }
        end() {
            return "玩家end";
        }
    }
    let play = new player();
    play.move();
    console.log(play.end());
}

// abstract 与 interface
//abstract抽象类可以定义规范和业务代码
// interface专门用来定义规范的
{
  interface Azhisdhia {
    //命名大写
    name: string; //属性
    move(): void; //方法
  }
  abstract class chouxiang {
    //抽象类中不只有规范，还有业务代码
    public zuobiao(): number[] {
      return [1, 2];
    }
  }

  class Tank extends chouxiang implements Azhisdhia {
    // implements实现接口
    name: string = "坦克";
    public move(): void {
      console.log(`${this.name}移动`);
    }
  }
  let tan = new Tank();
  tan.move();
  console.log(tan.zuobiao());
}

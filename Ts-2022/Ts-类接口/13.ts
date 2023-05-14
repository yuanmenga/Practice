//接口的继承，跟类一样的
{
  interface Jsdaf {
    end(): string;
  }
  //接口的继承
  interface Azhisdhia extends Jsdaf {
    name: string;
    move(): void;
  }

  class player implements Azhisdhia {
    // implements接口，子类必须执行规范
    name: string = "玩家";
    public move(): void {
      console.log(`${this.name}移动`);
    }
    public end(): string {
      return "玩家end";
    }
  }
  let play = new player();
  play.move();
  console.log(play.end());
}

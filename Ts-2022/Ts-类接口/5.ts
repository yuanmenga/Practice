// readonly 的妙用，在外部属性值不允许更改

{
  class User {
    readonly site: string = "houdunren.com";
    //在外部不允许修改site，但是可以通过构造函数修改
    constructor(site: string) {
      this.site = site || this.site;
    }
    geturl(url?: string): string {
      //this.site = "asd";无法为“site”赋值，因为它是只读属性。
      return `我们的站点是${this.site}`;
    }
  }
  let hd = new User("www.yahuo.com");
  // hd.site = "asd"; //不允许更改，是只读的,但是可以通过构造函数修改
  console.log(hd.geturl()); //我们的站点是www.yahuo.com
}

"use strict";
// readonly 的妙用，在外部属性值不允许更改
{
    class User {
        //在外部不允许修改site，但是可以通过构造函数修改
        constructor(site) {
            this.site = "houdunren.com";
            this.site = site || this.site;
        }
        geturl(url) {
            return `我们的站点是${this.site}`;
        }
    }
    let hd = new User("www.yahuo.com");
    // hd.site = "asd"; //不允许更改，是只读的,但是可以通过构造函数修改
    console.log(hd.geturl()); //我们的站点是www.yahuo.com
}

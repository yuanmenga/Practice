//使用访问器动态的获取和设置属性
{
  class User {
    private _site: string = "";
    get site() {
      return this._site;
    }
    set site(site: string) {
      this._site = site;
    }
  }
  let hd = new User();
  hd.site = "访问器";
  console.log(hd.site); //访问器
}

//例子二 ；动态的截取数据
{
  class User {
    private _site: any[] = [];
    get site() {
      //在这里我们可以进行截取
      return this._site.map((site) => {
        site.title = site.title.substr(0, 2);
        return site;
      });
    }
    set site(site: any[]) {
      this._site = site;
    }
  }
  let hd = new User();
  hd.site = [{ title: "sdasd" }, { title: "koojd" }];
  console.log(hd.site); //[ { title: 'sd' }, { title: 'ko' } ]
}
let lessons = [
  { title: "媒体查询响应式布局", category: "css" },
  { title: "FLEX 弹性盒模型", category: "css" },
  { title: "MYSQL多表查询随意操作", category: "mysql" },
];

console.log(lessons.map((item) => item.title));
console.log(lessons);

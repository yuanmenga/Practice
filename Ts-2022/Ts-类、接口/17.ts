interface Pay {
  handle(price: number): void;
}
class ali implements Pay {
  public handle(price: number): void {
    console.log(`支付宝支付${price}元`);
  }
}
class weixin implements Pay {
  public handle(price: number): void {
    console.log(`支付宝支付${price}元`);
  }
}
function pays(type: string, price: number): void {
  let hd;
  if (type == "alipay") {
    hd = new ali();
  } else {
    hd = new weixin();
  }
  hd.handle(price);
}

"use strict";
class ali {
    handle(price) {
        console.log(`支付宝支付${price}元`);
    }
}
class weixin {
    handle(price) {
        console.log(`支付宝支付${price}元`);
    }
}
function pays(type, price) {
    let hd;
    if (type == "alipay") {
        hd = new ali();
    }
    else {
        hd = new weixin();
    }
    hd.handle(price);
}

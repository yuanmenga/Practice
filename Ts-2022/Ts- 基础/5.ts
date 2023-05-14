//如何设置组合类型
let hdsn: string | number;
hdsn = 12;
// hdsn = false;报错，只能是字符串和数值类型
let hdssna: string | number[]; //声明是字符串或者数值型的数组
let hdssnas: (string | number)[]; //数组由字符串和数值组成
hdssnas = ["asd", 12];
// hdssnas = ["asd", false];报错

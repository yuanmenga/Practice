//非空断言 ！
//在这里我们假设存在一个div盒子

const lo: HTMLDivElement = document.querySelector("div") as HTMLDivElement; //断言他就是HTMLDivElement
//或者这样写
const los: HTMLDivElement = document.querySelector("div")!; //断言他是非空的
//如果不进行断言 los的类型可能是HTMLDivElement | null，在使用.的时候没有准确的提示
// 不能将类型“HTMLDivElement | null”分配给类型“HTMLDivElement”。

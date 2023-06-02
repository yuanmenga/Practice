//exclude过滤,保留左面多出的变量

type hd = string;
type user = string | number | boolean;
const userandhd: Exclude<user, hd> = 1; //const userandhd: number | boolean 过滤掉了string

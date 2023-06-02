type hzs = string;
type hda<T> = T extends hzs ? string : false;
const hzl: hda<string | number> = "sda";
const hzzl: hda<string | number> = "sda";

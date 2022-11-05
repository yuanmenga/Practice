"use strict";
//命名空间的套用
var usessr;
(function (usessr) {
    usessr.name = "sd";
    let usesrchild;
    (function (usesrchild) {
        usesrchild.num = 12;
    })(usesrchild = usessr.usesrchild || (usessr.usesrchild = {}));
})(usessr || (usessr = {}));
var hdsa;
(function (hdsa) {
    let name = "sd";
})(hdsa || (hdsa = {}));
console.log(usessr.usesrchild.num); //12

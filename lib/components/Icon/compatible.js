"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IconTypeEnum_1 = require("./IconTypeEnum");
var TypeMap;
(function (TypeMap) {
})(TypeMap || (TypeMap = {}));
function compatible(type) {
    return IconTypeEnum_1.IconType[type] || TypeMap[type];
}
exports.compatible = compatible;
//# sourceMappingURL=compatible.js.map
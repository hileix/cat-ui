"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
// 翻页的效果
exports.pageTurning = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    transform: perspective(200px) rotateX(20deg);\n    opacity: 0;\n  }\n  50% {\n    transform: perspective(200px) rotateX(10deg);\n    opacity: 0.5;\n  }\n  100% {\n    transform: perspective(200px) rotateX(0deg);\n    opacity: 1;\n  }\n"], ["\n  0% {\n    transform: perspective(200px) rotateX(20deg);\n    opacity: 0;\n  }\n  50% {\n    transform: perspective(200px) rotateX(10deg);\n    opacity: 0.5;\n  }\n  100% {\n    transform: perspective(200px) rotateX(0deg);\n    opacity: 1;\n  }\n"])));
var templateObject_1;

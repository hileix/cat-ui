"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var StyledDragger = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 10px 0;\n"], ["\n  padding: 10px 0;\n"])));
exports.StyledDragger = StyledDragger;
var StyledDraggerItem = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  cursor: move;\n  &.hmly-dragger-item-dragging {\n    box-shadow: 0 2px 8px 0 rgba(74, 74, 74, 0.3);\n    /* transform: scale(1, 0.8); */\n  }\n"], ["\n  cursor: move;\n  &.hmly-dragger-item-dragging {\n    box-shadow: 0 2px 8px 0 rgba(74, 74, 74, 0.3);\n    /* transform: scale(1, 0.8); */\n  }\n"])));
exports.StyledDraggerItem = StyledDraggerItem;
var templateObject_1, templateObject_2;

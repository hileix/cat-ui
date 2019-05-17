"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var StyledTooltip = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
exports.StyledTooltip = StyledTooltip;
var StyledTooltipContent = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  padding: 5px;\n  background-color: #eee;\n  &.hmly-tooltip-topCenter::after {\n    position: absolute;\n    top: 27px;\n    left: calc(50% - 6px);\n    content: \" \";\n    width: 0;\n    height: 0;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-top: 10px solid #eee;\n  }\n"], ["\n  position: relative;\n  padding: 5px;\n  background-color: #eee;\n  &.hmly-tooltip-topCenter::after {\n    position: absolute;\n    top: 27px;\n    left: calc(50% - 6px);\n    content: \" \";\n    width: 0;\n    height: 0;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-top: 10px solid #eee;\n  }\n"])));
exports.StyledTooltipContent = StyledTooltipContent;
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map
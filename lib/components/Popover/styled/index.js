"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var styled_components_2 = require("styled-components");
var StyledPopover = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n"], ["\n  display: inline-block;\n"])));
exports.StyledPopover = StyledPopover;
var StyledPopoverTrigger = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
exports.StyledPopoverTrigger = StyledPopoverTrigger;
var StyledPopoverContent = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  border: 1px solid #e5e5e5;\n  /* padding: 10px; */\n  border-radius: 4px;\n  font-size: 14px;\n"], ["\n  position: relative;\n  border: 1px solid #e5e5e5;\n  /* padding: 10px; */\n  border-radius: 4px;\n  font-size: 14px;\n"])));
exports.StyledPopoverContent = StyledPopoverContent;
var fadeIn = styled_components_2.keyframes(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  0% {\n    transform: perspective(200px) rotateX(20deg);\n    opacity: 0;\n  }\n  50% {\n    transform: perspective(200px) rotateX(10deg);\n    opacity: 0.5;\n  }\n  100% {\n    transform: perspective(200px) rotateX(0deg);\n    opacity: 1;\n  }\n"], ["\n  0% {\n    transform: perspective(200px) rotateX(20deg);\n    opacity: 0;\n  }\n  50% {\n    transform: perspective(200px) rotateX(10deg);\n    opacity: 0.5;\n  }\n  100% {\n    transform: perspective(200px) rotateX(0deg);\n    opacity: 1;\n  }\n"])));
var StyledPopBox = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  border-radius: 4px;\n  background: #fff;\n  font-size: 14px;\n  transform-origin: left center;\n  animation: .15s ", " ease-in;\n"], ["\n  position: relative;\n  border-radius: 4px;\n  background: #fff;\n  font-size: 14px;\n  transform-origin: left center;\n  animation: .15s ", " ease-in;\n"])), fadeIn);
exports.StyledPopBox = StyledPopBox;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=index.js.map
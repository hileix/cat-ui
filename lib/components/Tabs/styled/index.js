"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var StyledTabs = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n"], ["\n\n"])));
exports.StyledTabs = StyledTabs;
var TabsNavBox = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border-bottom: 1px solid #eeeeee;\n"], ["\n  border-bottom: 1px solid #eeeeee;\n"])));
exports.TabsNavBox = TabsNavBox;
var TabsNav = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  height: 100%;\n  padding: 12px 0;\n  text-decoration: none;\n  cursor: pointer;\n  transition: color .3s cubic-bezier(.645, .045, .355, 1);\n  font-size: 18px;\n  color: #4a4a4a;\n\n  &.active {\n    font-weight: bold;\n    &::before {\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      content: \"\";\n      width: 40px;\n      height: 3px;\n      background-color: #ff4444;\n    }\n  }\n\n  & + & {\n    margin-left: 40px;\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  height: 100%;\n  padding: 12px 0;\n  text-decoration: none;\n  cursor: pointer;\n  transition: color .3s cubic-bezier(.645, .045, .355, 1);\n  font-size: 18px;\n  color: #4a4a4a;\n\n  &.active {\n    font-weight: bold;\n    &::before {\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      content: \"\";\n      width: 40px;\n      height: 3px;\n      background-color: #ff4444;\n    }\n  }\n\n  & + & {\n    margin-left: 40px;\n  }\n"])));
exports.TabsNav = TabsNav;
var TabsContentBox = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding-top: 20px;\n"], ["\n  padding-top: 20px;\n"])));
exports.TabsContentBox = TabsContentBox;
var TabsContent = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: none;\n\n  &.active {\n    display: block;\n  }\n"], ["\n  display: none;\n\n  &.active {\n    display: block;\n  }\n"])));
exports.TabsContent = TabsContent;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=index.js.map
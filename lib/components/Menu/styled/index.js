"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var StyledMenu = styled_components_1.default.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  list-style: none;\n  padding: 0;\n"], ["\n  list-style: none;\n  padding: 0;\n"])));
exports.StyledMenu = StyledMenu;
var StyledMenuItem = styled_components_1.default.li(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: #4a4a4a;\n  width: 100%;\n  height: 40px;\n  padding: 0 22px;\n  line-height: 40px;\n  font-size: 14px;\n  font-weight: 400;\n  font-style: normal;\n  font-stretch: normal;\n  letter-spacing: normal;\n  text-align: left;\n  box-sizing: border-box;\n  position: relative;\n  cursor: pointer;\n  &:hover {\n    background-color: #f3f3f3;\n    color: #4a4a4a;\n    font-weight: 600;\n  }\n  &.hmly-menu-item-checked {\n    font-weight: bold;\n    color: #3a3a3a;\n    &::before {\n      position: absolute;\n      top: 7px;\n      left: -50px;\n      content: '';\n      width: 4px;\n      height: 30px;\n      background-color: #ff4444;\n    }\n  }\n"], ["\n  color: #4a4a4a;\n  width: 100%;\n  height: 40px;\n  padding: 0 22px;\n  line-height: 40px;\n  font-size: 14px;\n  font-weight: 400;\n  font-style: normal;\n  font-stretch: normal;\n  letter-spacing: normal;\n  text-align: left;\n  box-sizing: border-box;\n  position: relative;\n  cursor: pointer;\n  &:hover {\n    background-color: #f3f3f3;\n    color: #4a4a4a;\n    font-weight: 600;\n  }\n  &.hmly-menu-item-checked {\n    font-weight: bold;\n    color: #3a3a3a;\n    &::before {\n      position: absolute;\n      top: 7px;\n      left: -50px;\n      content: '';\n      width: 4px;\n      height: 30px;\n      background-color: #ff4444;\n    }\n  }\n"])));
exports.StyledMenuItem = StyledMenuItem;
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map
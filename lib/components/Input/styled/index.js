"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var theme_1 = require("../../../styles/theme");
var StyledInput = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  font-size: 16px;\n  font-weight: normal;\n  position: relative;\n  z-index: 1;\n  background-color: transparent;\n  color: ", ";\n  border: 0;\n  &:focus{\n    outline: none;\n  }\n  &::-ms-clear{\n    display:none;\n  }\n  &::-ms-reveal{\n    display:none;\n  }\n  &::-webkit-credentials-auto-fill-button {\n    visibility: hidden;\n    display: none !important;\n    pointer-events: none;\n    position: absolute;\n    right: 0;\n  }\n  &::placeholder,\n  &::-webkit-input-placeholder{\n    font-size: 16px;\n    font-weight: normal;\n    line-height: 1;\n    color: ", ";\n  };\n"], ["\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  font-size: 16px;\n  font-weight: normal;\n  position: relative;\n  z-index: 1;\n  background-color: transparent;\n  color: ", ";\n  border: 0;\n  &:focus{\n    outline: none;\n  }\n  &::-ms-clear{\n    display:none;\n  }\n  &::-ms-reveal{\n    display:none;\n  }\n  &::-webkit-credentials-auto-fill-button {\n    visibility: hidden;\n    display: none !important;\n    pointer-events: none;\n    position: absolute;\n    right: 0;\n  }\n  &::placeholder,\n  &::-webkit-input-placeholder{\n    font-size: 16px;\n    font-weight: normal;\n    line-height: 1;\n    color: ", ";\n  };\n"])), theme_1.colorPrimary, theme_1.colorTertiary);
exports.StyledInput = StyledInput;
var StyledWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  box-sizing: border-box;\n  padding-left: ", ";\n"], ["\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  box-sizing: border-box;\n  padding-left: ", ";\n"])), function (props) { return (props.theme === 'box' || props.theme === 'box-pwd' ? '20px' : 0); });
exports.StyledWrapper = StyledWrapper;
var StyledWrapperBorder = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: all .3s;\n  &:hover{\n    border-color: ", ";\n  }\n  border-left: ", ";\n  border-right: ", ";\n  border-top: ", ";\n  border-bottom: 1px solid;\n  border-color: ", ";\n  border-radius: ", ";\n"], ["\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: all .3s;\n  &:hover{\n    border-color: ", ";\n  }\n  border-left: ",
    ";\n  border-right: ",
    ";\n  border-top: ",
    ";\n  border-bottom: 1px solid;\n  border-color: ",
    ";\n  border-radius: ", ";\n"])), theme_1.colorTertiary, function (props) {
    if (props.theme === 'line' || props.theme === 'line-pwd')
        return 0;
    return '1px solid';
}, function (props) {
    if (props.theme === 'line' || props.theme === 'line-pwd')
        return 0;
    return '1px solid';
}, function (props) {
    if (props.theme === 'line' || props.theme === 'line-pwd')
        return 0;
    return '1px solid';
}, function (props) {
    var color;
    switch (props.state) {
        case 0:
            color = theme_1.colorQuaternary;
            break;
        case 1:
            color = theme_1.colorTertiary;
            break;
        case 2:
            color = theme_1.colorPrimary;
            break;
        case 3:
            color = theme_1.colorRedPrimary;
            break;
        default:
            color = theme_1.colorQuaternary;
    }
    ;
    return color;
}, function (props) { return (props.theme === 'box' || props.theme === 'box-pwd' ? '4px' : 0); });
exports.StyledWrapperBorder = StyledWrapperBorder;
var StyledWrapperPlaceholder = styled_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%\n  left: ", ";\n  transform: translate(0, -50%);\n  font-size: 16px;\n  font-weight: normal;\n  transition: all .3s;\n  color: ", ";\n"], ["\n  position: absolute;\n  top: 50%\n  left: ", ";\n  transform: translate(0, -50%);\n  font-size: 16px;\n  font-weight: normal;\n  transition: all .3s;\n  color: ", ";\n"])), function (props) { return (props.theme === 'box' || props.theme === 'box-pwd' ? '20px' : 0); }, function (props) { return (props.state === 2 ? theme_1.colorPrimary : 'transparent'); });
exports.StyledWrapperPlaceholder = StyledWrapperPlaceholder;
var StyledWrapperMsg = styled_components_1.default.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: block;\n  font-size: 12px;\n  color: ", ";\n  font-weight: normal;\n  margin-top: 8px;\n"], ["\n  display: block;\n  font-size: 12px;\n  color: ", ";\n  font-weight: normal;\n  margin-top: 8px;\n"])), function (props) { return (props.state === 3 ? theme_1.colorRedPrimary : theme_1.colorPrimary); });
exports.StyledWrapperMsg = StyledWrapperMsg;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=index.js.map
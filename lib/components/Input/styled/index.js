"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var theme_1 = require("../../../styles/theme");
var size_width = {
    'large': '400px',
    'normal': '300px',
    'small': '200px'
};
var size_height = {
    'large': '50px',
    'normal': '40px',
    'small': '30px'
};
var StyledInput = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  font-size: 16px;\n  font-weight: normal;\n  position: relative;\n  z-index: 1;\n  background-color: transparent;\n  color: ", ";\n  border: 0;\n  outline: 0;\n  &:focus{\n    outline: none;\n  }\n  &::-ms-clear{\n    display:none;\n  }\n  &::-ms-reveal{\n    display:none;\n  }\n  &::-webkit-credentials-auto-fill-button {\n    visibility: hidden;\n    display: none !important;\n    pointer-events: none;\n    position: absolute;\n    right: 0;\n  }\n  &::placeholder,\n  &::-webkit-input-placeholder{\n    font-size: 16px;\n    font-weight: normal;\n    line-height: 1.5;\n    color: ", ";\n  };\n  cursor: ", "\n"], ["\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  font-size: 16px;\n  font-weight: normal;\n  position: relative;\n  z-index: 1;\n  background-color: transparent;\n  color: ", ";\n  border: 0;\n  outline: 0;\n  &:focus{\n    outline: none;\n  }\n  &::-ms-clear{\n    display:none;\n  }\n  &::-ms-reveal{\n    display:none;\n  }\n  &::-webkit-credentials-auto-fill-button {\n    visibility: hidden;\n    display: none !important;\n    pointer-events: none;\n    position: absolute;\n    right: 0;\n  }\n  &::placeholder,\n  &::-webkit-input-placeholder{\n    font-size: 16px;\n    font-weight: normal;\n    line-height: 1.5;\n    color: ", ";\n  };\n  cursor: ", "\n"])), theme_1.colorPrimary, theme_1.colorTertiary, function (props) { return props.disabled && 'not-allowed'; });
exports.StyledInput = StyledInput;
var StyledIcon = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  cursor: pointer;\n  position: absolute;\n  top: 50%\n  transform: translate(0, -50%);\n  z-index: 1;\n  width: 10px;\n  height: 10px;\n  right: 5.5%;\n  color: ", ";\n  font-size: ", ";\n"], ["\n  cursor: pointer;\n  position: absolute;\n  top: 50%\n  transform: translate(0, -50%);\n  z-index: 1;\n  width: 10px;\n  height: 10px;\n  right: 5.5%;\n  color: ", ";\n  font-size: ", ";\n"])), function (props) { return (props.state === 3 ? theme_1.colorRedPrimary : theme_1.colorPrimary); }, function (props) { return props.showClear ? '10px' : '16px'; });
exports.StyledIcon = StyledIcon;
var StyledWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-block;\n  width: ", ";\n  height: ", ";\n  position: relative;\n  box-sizing: border-box;\n  padding-left: ", ";\n  padding-right: ", ";\n"], ["\n  display: inline-block;\n  width: ", ";\n  height: ", ";\n  position: relative;\n  box-sizing: border-box;\n  padding-left: ", ";\n  padding-right: ", ";\n"])), function (props) { return props.size ? (size_width[props.size] || '100%') : '100%'; }, function (props) { return props.size ? (size_height[props.size] || '100%') : '100%'; }, function (props) { return (props.theme === 'box' || props.theme === 'box-pwd' ? '20px' : 0); }, function (props) { return props.showClear || props.showEye ? '3.5%' : 0; });
exports.StyledWrapper = StyledWrapper;
var StyledWrapperBorder = styled_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: all .3s;\n  border-left: ", ";\n  border-right: ", ";\n  border-top: ", ";\n  border-bottom: 1px solid;\n  border-color: ", ";\n  border-radius: ", ";\n"], ["\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: all .3s;\n  border-left: ",
    ";\n  border-right: ",
    ";\n  border-top: ",
    ";\n  border-bottom: 1px solid;\n  border-color: ",
    ";\n  border-radius: ", ";\n"])), function (props) {
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
}, function (props) { return props.theme === 'textarea' ? '2px' : (props.theme === 'box' || props.theme === 'box-pwd' ? '4px' : 0); });
exports.StyledWrapperBorder = StyledWrapperBorder;
var flyout = styled_components_1.keyframes(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  from {\n    font-size: 16px;\n    color: ", ";\n    background-color: transparent;\n    transform: translate(0, -50%);\n    top: 50%;\n  }\n\n  to {\n    font-size: 12px;\n    color: ", ";\n    background-color: #ffffff;\n    transform: translate(0, 0);\n    top: -15%;\n  }\n"], ["\n  from {\n    font-size: 16px;\n    color: ", ";\n    background-color: transparent;\n    transform: translate(0, -50%);\n    top: 50%;\n  }\n\n  to {\n    font-size: 12px;\n    color: ", ";\n    background-color: #ffffff;\n    transform: translate(0, 0);\n    top: -15%;\n  }\n"])), theme_1.colorTertiary, theme_1.colorPrimary);
var flyin = styled_components_1.keyframes(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  from {\n    font-size: 12px;\n    color: ", ";\n    background-color: #ffffff;\n    transform: translate(0, 0);\n    top: -15%;\n  }\n\n  to {\n    font-size: 16px;\n    color: ", ";\n    background-color: transparent;\n    transform: translate(0, -50%);\n    top: 50%;\n  }\n"], ["\n  from {\n    font-size: 12px;\n    color: ", ";\n    background-color: #ffffff;\n    transform: translate(0, 0);\n    top: -15%;\n  }\n\n  to {\n    font-size: 16px;\n    color: ", ";\n    background-color: transparent;\n    transform: translate(0, -50%);\n    top: 50%;\n  }\n"])), theme_1.colorPrimary, theme_1.colorTertiary);
var StyledWrapperPlaceholder = styled_components_1.default.span(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%\n  z-index: 1;\n  left: ", ";\n  padding: ", ";\n  transform: translate(0, -50%);\n  font-size: 16px;\n  font-weight: normal;\n  line-height: 1;\n  letter-spacing: 0.75px;\n  color: ", ";\n  animation: ", " .2s ease-out forwards;\n"], ["\n  position: absolute;\n  top: 50%\n  z-index: 1;\n  left: ", ";\n  padding: ", ";\n  transform: translate(0, -50%);\n  font-size: 16px;\n  font-weight: normal;\n  line-height: 1;\n  letter-spacing: 0.75px;\n  color: ", ";\n  animation: ", " .2s ease-out forwards;\n"])), function (props) { return (props.theme === 'box' || props.theme === 'box-pwd' ? '15px' : 0); }, function (props) { return (props.theme === 'box' || props.theme === 'box-pwd' ? '0 5px' : 0); }, theme_1.colorTertiary, function (props) { return ((props.state === 2 || props.value) ? flyout : flyin); });
exports.StyledWrapperPlaceholder = StyledWrapperPlaceholder;
var StyledWrapperMsg = styled_components_1.default.span(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: block;\n  font-size: 12px;\n  color: ", ";\n  font-weight: normal;\n  margin-top: 8px;\n"], ["\n  display: block;\n  font-size: 12px;\n  color: ", ";\n  font-weight: normal;\n  margin-top: 8px;\n"])), function (props) { return (props.state === 3 ? theme_1.colorRedPrimary : theme_1.colorPrimary); });
exports.StyledWrapperMsg = StyledWrapperMsg;
var StyledTextArea = styled_components_1.default.textarea(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  font-size: 16px;\n  font-weight: normal;\n  position: relative;\n  padding: 10px 15px;\n  z-index: 1;\n  background-color: transparent;\n  color: ", ";\n  border: 0;\n  outline: 0;\n  &:focus{\n    outline: none;\n  };\n  resize:none;\n"], ["\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  font-size: 16px;\n  font-weight: normal;\n  position: relative;\n  padding: 10px 15px;\n  z-index: 1;\n  background-color: transparent;\n  color: ", ";\n  border: 0;\n  outline: 0;\n  &:focus{\n    outline: none;\n  };\n  resize:none;\n"])), theme_1.colorPrimary);
exports.StyledTextArea = StyledTextArea;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=index.js.map
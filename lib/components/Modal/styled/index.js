"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var ModalBox = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n"], ["\n\n"])));
exports.ModalBox = ModalBox;
var Background = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  backdrop-filter: blur(1px);\n  height: 100%;\n  z-index: 1000;\n"], ["\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  backdrop-filter: blur(1px);\n  height: 100%;\n  z-index: 1000;\n"])));
exports.Background = Background;
var StyledModal = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: initial;\n  background-color: #fff;\n  border-radius: 2px;\n  box-shadow: 0 2px 8px 0 rgba(49, 54, 70, 0.2);\n  padding: 30px;\n  font-size: 14px;\n  white-space: normal;\n  min-width: 450px;\n  max-width: 600px;\n  z-index: 9999;\n  &.hmly-modal-center {\n    text-align: center;\n  }\n"], ["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: initial;\n  background-color: #fff;\n  border-radius: 2px;\n  box-shadow: 0 2px 8px 0 rgba(49, 54, 70, 0.2);\n  padding: 30px;\n  font-size: 14px;\n  white-space: normal;\n  min-width: 450px;\n  max-width: 600px;\n  z-index: 9999;\n  &.hmly-modal-center {\n    text-align: center;\n  }\n"])));
exports.StyledModal = StyledModal;
var ModalHeader = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 18px;\n  font-weight: 600;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n  margin-bottom: 20px;\n  color: #4a4a4a;\n"], ["\n  font-size: 18px;\n  font-weight: 600;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.33;\n  letter-spacing: normal;\n  margin-bottom: 20px;\n  color: #4a4a4a;\n"])));
exports.ModalHeader = ModalHeader;
var ModalBody = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: 18px;\n  color: #4a4a4a;\n"], ["\n  font-size: 18px;\n  color: #4a4a4a;\n"])));
exports.ModalBody = ModalBody;
var ModalFooter = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  float: ", ";\n"], ["\n  float: ", ";\n"])), function (props) { return (props.align === 'center') ? 'none' : 'right'; });
exports.ModalFooter = ModalFooter;
var CloseBox = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: absolute;\n  top: 15px;\n  right: 20px;\n  .hmly-icon {\n    font-size: 12px;\n    cursor: pointer;\n  }\n"], ["\n  position: absolute;\n  top: 15px;\n  right: 20px;\n  .hmly-icon {\n    font-size: 12px;\n    cursor: pointer;\n  }\n"])));
exports.CloseBox = CloseBox;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;

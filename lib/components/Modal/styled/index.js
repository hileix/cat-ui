"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var ModalBox = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: rgba(0,0,0,.6);\n  height: 100%;\n  z-index: 1050;\n"], ["\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: rgba(0,0,0,.6);\n  height: 100%;\n  z-index: 1050;\n"])));
exports.ModalBox = ModalBox;
var InnerModal = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: initial;\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 20px;\n  font-size: 14px;\n  white-space: normal;\n  min-width: 450px;\n  max-width: 75%;\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: initial;\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 20px;\n  font-size: 14px;\n  white-space: normal;\n  min-width: 450px;\n  max-width: 75%;\n"])));
exports.InnerModal = InnerModal;
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map
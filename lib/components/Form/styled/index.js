"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var StyledForm = styled_components_1.default.form(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
exports.StyledForm = StyledForm;
var StyledFormItem = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  & + & {\n    margin-top: 30px;\n  }\n"], ["\n  & + & {\n    margin-top: 30px;\n  }\n"])));
exports.StyledFormItem = StyledFormItem;
var LabelBox = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-block;\n  width: ", ";\n"], ["\n  display: inline-block;\n  width: ", ";\n"])), function (props) { return props.width; });
exports.LabelBox = LabelBox;
var ControlBox = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: inline-block;\n"], ["\n  display: inline-block;\n"])));
exports.ControlBox = ControlBox;
var FormItemLabel = styled_components_1.default.label(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
exports.FormItemLabel = FormItemLabel;
var FormItemDesc = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  opacity: 0.7;\n  font-size: 12px;\n  font-weight: 600;\n  font-style: normal;\n  font-stretch: normal;\n  letter-spacing: normal;\n  color: #313646;\n"], ["\n  opacity: 0.7;\n  font-size: 12px;\n  font-weight: 600;\n  font-style: normal;\n  font-stretch: normal;\n  letter-spacing: normal;\n  color: #313646;\n"])));
exports.FormItemDesc = FormItemDesc;
var FormItemControl = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject([""], [""])));
exports.FormItemControl = FormItemControl;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=index.js.map
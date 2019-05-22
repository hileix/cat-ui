"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var Icon_1 = require("../../Icon");
var StyledForm = styled_components_1.default.form(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
exports.StyledForm = StyledForm;
var StyledFormItem = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  & + & {\n    margin-top: 20px;\n  }\n"], ["\n  & + & {\n    margin-top: 20px;\n  }\n"])));
exports.StyledFormItem = StyledFormItem;
var LabelBox = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  width: ", ";\n  &.hmly-form-label-required::after {\n    content: \"*\";\n    position: absolute;\n    top: 0;\n    left: -15px;\n    font-size: 20px;\n    color: #ff8585;\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  width: ", ";\n  &.hmly-form-label-required::after {\n    content: \"*\";\n    position: absolute;\n    top: 0;\n    left: -15px;\n    font-size: 20px;\n    color: #ff8585;\n  }\n"])), function (props) { return props.width; });
exports.LabelBox = LabelBox;
var ControlBox = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: inline-block;\n  vertical-align: top;\n  min-height: 60px;\n"], ["\n  display: inline-block;\n  vertical-align: top;\n  min-height: 60px;\n"])));
exports.ControlBox = ControlBox;
var FormItemLabel = styled_components_1.default.label(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
exports.FormItemLabel = FormItemLabel;
var FormItemDesc = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-top: 10px;\n  opacity: 0.7;\n  font-size: 12px;\n  font-weight: 600;\n  font-style: normal;\n  font-stretch: normal;\n  letter-spacing: normal;\n  color: #313646;\n"], ["\n  margin-top: 10px;\n  opacity: 0.7;\n  font-size: 12px;\n  font-weight: 600;\n  font-style: normal;\n  font-stretch: normal;\n  letter-spacing: normal;\n  color: #313646;\n"])));
exports.FormItemDesc = FormItemDesc;
var FormItemControl = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject([""], [""])));
exports.FormItemControl = FormItemControl;
var ItemError = styled_components_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  margin-top: 10px;\n  font-size: 13px;\n  font-weight: 600;\n  font-style: italic;\n  color: #ff8585;\n"], ["\n  margin-top: 10px;\n  font-size: 13px;\n  font-weight: 600;\n  font-style: italic;\n  color: #ff8585;\n"])));
exports.ItemError = ItemError;
var LabelIcon = styled_components_1.default(Icon_1.default)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  margin-left: 5px;\n"], ["\n  margin-left: 5px;\n"])));
exports.LabelIcon = LabelIcon;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=index.js.map
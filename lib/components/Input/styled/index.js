"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var theme_1 = require("../../../styles/theme");
var StyledLabel = styled_components_1.default.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n"], ["\n  display: inline-block;\n"])));
exports.StyledLabel = StyledLabel;
var StyledInput = styled_components_1.default.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  width: 100%;\n  font-size: 16px;\n  font-weight: 600;\n  color: ", "\n"], ["\n  display: inline-block;\n  width: 100%;\n  font-size: 16px;\n  font-weight: 600;\n  color: ", "\n"])), theme_1.colorPrimary);
exports.StyledInput = StyledInput;
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var Icon_1 = require("../../Icon");
var StyledPagination = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
exports.StyledPagination = StyledPagination;
var StyledPageItem = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: ", ";\n  padding: 0 10px;\n  cursor: pointer;\n"], ["\n  display: inline-block;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: ", ";\n  padding: 0 10px;\n  cursor: pointer;\n"])), function (props) { return props.active ? '#313646' : '#bcbcbc'; });
exports.StyledPageItem = StyledPageItem;
var StyledIcon = styled_components_1.default(Icon_1.default)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  cursor: pointer;\n  padding: 0 10px;\n"], ["\n  cursor: pointer;\n  padding: 0 10px;\n"])));
exports.StyledIcon = StyledIcon;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=index.js.map
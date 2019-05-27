"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var Icon_1 = require("../../Icon");
var StyledTableBox = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: relative;\n  clear: both;\n  box-sizing: border-box;\n  font-size: 12px;\n  color: #4a4a4a;\n  .table {\n    width: 100%;\n    border-collapse: collapse;\n  }\n"], ["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: relative;\n  clear: both;\n  box-sizing: border-box;\n  font-size: 12px;\n  color: #4a4a4a;\n  .table {\n    width: 100%;\n    border-collapse: collapse;\n  }\n"])));
exports.StyledTableBox = StyledTableBox;
var StyledTableHeader = styled_components_1.default.thead(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  text-align: ", ";\n"], ["\n  text-align: ", ";\n"])), function (props) { return props.align; });
exports.StyledTableHeader = StyledTableHeader;
var StyledTr = styled_components_1.default.tr(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  text-align: left;\n  &:hover {\n    background-color: rgba(238, 238, 238, 0.3);\n  }\n  &.hmly-table-row-center {\n    text-align: center;\n  }\n  &.hmly-table-row-draggable {\n    cursor: move;\n  }\n"], ["\n  text-align: left;\n  &:hover {\n    background-color: rgba(238, 238, 238, 0.3);\n  }\n  &.hmly-table-row-center {\n    text-align: center;\n  }\n  &.hmly-table-row-draggable {\n    cursor: move;\n  }\n"])));
exports.StyledTr = StyledTr;
var StyledTd = styled_components_1.default.td(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  vertical-align: middle;\n  border-bottom: 1px solid #e1e6f0;\n  padding: 20px 10px;\n  line-height: 22px;\n  word-break: break-all;\n  font-size: 14px;\n  font-weight: 600;\n  color: #4a4a4a;\n"], ["\n  position: relative;\n  vertical-align: middle;\n  border-bottom: 1px solid #e1e6f0;\n  padding: 20px 10px;\n  line-height: 22px;\n  word-break: break-all;\n  font-size: 14px;\n  font-weight: 600;\n  color: #4a4a4a;\n"])));
exports.StyledTd = StyledTd;
var StyledTdInner = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
exports.StyledTdInner = StyledTdInner;
var StyledTh = styled_components_1.default.th(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: relative;\n  vertical-align: middle;\n  border-bottom: 1px solid #e1e6f0;\n  padding: 10px;\n  line-height: 22px;\n  word-break: break-all;\n  color: #9b9b9b;\n  font-size: 12px;\n  font-weight: 600;\n"], ["\n  position: relative;\n  vertical-align: middle;\n  border-bottom: 1px solid #e1e6f0;\n  padding: 10px;\n  line-height: 22px;\n  word-break: break-all;\n  color: #9b9b9b;\n  font-size: 12px;\n  font-weight: 600;\n"])));
exports.StyledTh = StyledTh;
var EmptyInner = styled_components_1.default.span(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  min-height: 400px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .empty-bg {\n    display: block;\n    width: 127px;\n    height: 137px;\n    font-size: 19px;\n    margin: 0 auto;\n    background-image: url(", ");\n    background-size: contain;\n    background-repeat: no-repeat;\n  }\n  .empty-desc {\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: -0.3px;\n    text-align: center;\n    color: #bcbcbc;\n  }\n"], ["\n  min-height: 400px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .empty-bg {\n    display: block;\n    width: 127px;\n    height: 137px;\n    font-size: 19px;\n    margin: 0 auto;\n    background-image: url(", ");\n    background-size: contain;\n    background-repeat: no-repeat;\n  }\n  .empty-desc {\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: -0.3px;\n    text-align: center;\n    color: #bcbcbc;\n  }\n"])), function (props) { return props.image; });
exports.EmptyInner = EmptyInner;
var EmptyImage = styled_components_1.default.img(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: block;\n  width: auto;\n  max-height: 137px;\n  margin: 0 auto;\n"], ["\n  display: block;\n  width: auto;\n  max-height: 137px;\n  margin: 0 auto;\n"])));
exports.EmptyImage = EmptyImage;
var StyledFilter = styled_components_1.default(Icon_1.default)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  cursor: pointer;\n  margin-left: 5px;\n  vertical-align: middle;\n"], ["\n  cursor: pointer;\n  margin-left: 5px;\n  vertical-align: middle;\n"])));
exports.StyledFilter = StyledFilter;
var StyledPaginationBox = styled_components_1.default.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  margin: 30px auto;\n  text-align: center;\n"], ["\n  margin: 30px auto;\n  text-align: center;\n"])));
exports.StyledPaginationBox = StyledPaginationBox;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
//# sourceMappingURL=index.js.map
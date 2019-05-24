"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var classnames_1 = require("classnames");
var styled_1 = require("./styled");
var TableTr = (function (_super) {
    __extends(TableTr, _super);
    function TableTr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderTds = function () {
            var _a = _this.props, columns = _a.columns, data = _a.data;
            return columns.map(function (elem) {
                var id = elem.id;
                var result = typeof data[id] === 'function' ? data[id]() : data[id];
                return (React.createElement(styled_1.StyledTd, { key: id, className: 'table-td' }, elem.render
                    ? elem.render(result, data)
                    : React.createElement(styled_1.StyledTdInner, null, result)));
            });
        };
        return _this;
    }
    TableTr.prototype.render = function () {
        var align = this.props.align;
        var classes = classnames_1.default('hmly-table-row', "hmly-table-row-" + align);
        var tds = this.renderTds();
        return (React.createElement(styled_1.StyledTr, { className: classes }, tds));
    };
    return TableTr;
}(react_1.Component));
exports.default = TableTr;
//# sourceMappingURL=TableTr.js.map
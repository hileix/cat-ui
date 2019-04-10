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
var TableTr_1 = require("./TableTr");
var Empty_1 = require("./Empty");
var TableBody = (function (_super) {
    __extends(TableBody, _super);
    function TableBody() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toRenderTrs = function () {
            var _a = _this.props, columns = _a.columns, dataSource = _a.dataSource, align = _a.align;
            return dataSource.map(function (elem, index) {
                return (React.createElement(TableTr_1.default, { columns: columns, data: elem, align: align, key: index }));
            });
        };
        return _this;
    }
    TableBody.prototype.render = function () {
        var _a = this.props, columns = _a.columns, dataSource = _a.dataSource, align = _a.align, empty = _a.empty;
        var classes = classnames_1.default('hmly-table-row', "hmly-table-row-" + align);
        var trs = this.toRenderTrs();
        var colSpan = columns.length;
        return (React.createElement("tbody", null, dataSource.length === 0
            ? React.createElement(Empty_1.default, { colSpan: colSpan, empty: empty })
            : (trs)));
    };
    return TableBody;
}(react_1.Component));
exports.default = TableBody;
//# sourceMappingURL=TableBody.js.map
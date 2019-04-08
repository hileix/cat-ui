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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableBody.prototype.render = function () {
        var _a;
        var _b = this.props, columns = _b.columns, columnsIndex = _b.columnsIndex, dataSource = _b.dataSource, align = _b.align, emptyText = _b.emptyText;
        var classes = classnames_1.default((_a = {
                'hmly-table-row': true
            },
            _a["hmly-table-row-" + align] = align,
            _a));
        return (React.createElement("tbody", null,
            dataSource.map(function (elem, index) {
                return (React.createElement(TableTr_1.default, { columns: columns, columnsIndex: columnsIndex, data: elem, align: align, key: index }));
            }),
            dataSource.length === 0
                ? React.createElement(Empty_1.default, { columns: columns, emptyText: emptyText })
                : null));
    };
    return TableBody;
}(react_1.Component));
exports.default = TableBody;
//# sourceMappingURL=TableBody.js.map
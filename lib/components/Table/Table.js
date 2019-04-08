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
var TableHeader_1 = require("./TableHeader");
var TableRow_1 = require("./TableRow");
var Empty_1 = require("./Empty");
var Table = (function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Table.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, columns = _a.columns, dataSource = _a.dataSource, align = _a.align, emptyText = _a.emptyText;
        var classes = classnames_1.default('hmly-table', className);
        console.log('columns', columns, dataSource, align);
        var columnsIndex = columns.map(function (elem) {
            return elem.dataIndex;
        });
        return (React.createElement(styled_1.StyledTable, { className: classes, style: style },
            React.createElement("table", { className: 'table' },
                React.createElement(TableHeader_1.default, { columns: columns, align: align }),
                React.createElement("tbody", null,
                    dataSource.map(function (elem, index) {
                        return (React.createElement(TableRow_1.default, { columns: columns, columnsIndex: columnsIndex, data: elem, align: align, key: index }));
                    }),
                    dataSource.length === 0
                        ? React.createElement(Empty_1.default, { columns: columns, emptyText: emptyText })
                        : null))));
    };
    return Table;
}(react_1.Component));
exports.default = Table;
//# sourceMappingURL=Table.js.map
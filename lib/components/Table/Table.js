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
var TableBody_1 = require("./TableBody");
var Table = (function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Table.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, columns = _a.columns, dataSource = _a.dataSource, align = _a.align, emptyText = _a.emptyText;
        var classes = classnames_1.default('hmly-table', className);
        return (React.createElement(styled_1.StyledTableBox, { className: classes, style: style },
            React.createElement("table", { className: 'table' },
                React.createElement(TableHeader_1.default, { columns: columns, align: align }),
                React.createElement(TableBody_1.default, { columns: columns, align: align, dataSource: dataSource, emptyText: emptyText }))));
    };
    Table.defaultProps = {
        align: 'left',
        emptyText: ''
    };
    return Table;
}(react_1.Component));
exports.default = Table;
//# sourceMappingURL=Table.js.map
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
var TableHeader = (function (_super) {
    __extends(TableHeader, _super);
    function TableHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableHeader.prototype.render = function () {
        var _a;
        var _b = this.props, columns = _b.columns, align = _b.align;
        var classes = classnames_1.default((_a = {
                'hmly-table-thead': true
            },
            _a["hmly-table-thead-" + align] = align,
            _a));
        return (React.createElement("thead", null,
            React.createElement("tr", null, columns.map(function (elem) {
                var _render = elem.render;
                if (typeof elem.render === 'function') {
                    _render = elem.render();
                }
                return (React.createElement("th", { key: elem.dataIndex, className: 'table-th' },
                    React.createElement("span", { className: 'th-inner' }, _render)));
            }))));
    };
    return TableHeader;
}(react_1.Component));
exports.default = TableHeader;
//# sourceMappingURL=TableHeader.js.map
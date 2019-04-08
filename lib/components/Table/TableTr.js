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
var TableTr = (function (_super) {
    __extends(TableTr, _super);
    function TableTr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableTr.prototype.render = function () {
        var _a;
        var _b = this.props, columnsIndex = _b.columnsIndex, data = _b.data, align = _b.align;
        var classes = classnames_1.default((_a = {
                'hmly-table-row': true
            },
            _a["hmly-table-row-" + align] = true,
            _a));
        return (React.createElement("tr", { className: classes }, columnsIndex.map(function (elem, index) {
            var _render = data[elem];
            if (typeof data[elem] === 'function') {
                _render = data[elem]();
            }
            return (React.createElement("td", { key: index, className: 'table-td' },
                React.createElement("span", null, _render)));
        })));
    };
    return TableTr;
}(react_1.Component));
exports.default = TableTr;
//# sourceMappingURL=TableTr.js.map
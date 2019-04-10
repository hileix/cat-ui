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
var TableHeader = (function (_super) {
    __extends(TableHeader, _super);
    function TableHeader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toRenderTds = function () {
            var columns = _this.props.columns;
            return columns.map(function (elem) {
                var result = typeof elem.render === 'function' ? elem.render() : elem.render;
                return (React.createElement(styled_1.StyledTh, { key: elem.id, className: 'table-th' },
                    React.createElement("span", { className: 'th-inner' }, result)));
            });
        };
        return _this;
    }
    TableHeader.prototype.render = function () {
        var align = this.props.align;
        var trClasses = classnames_1.default('hmly-table-row', "hmly-table-row-" + align);
        var tds = this.toRenderTds();
        return (React.createElement("thead", { className: 'hmly-table-thead' },
            React.createElement("tr", { className: trClasses }, tds)));
    };
    return TableHeader;
}(react_1.Component));
exports.default = TableHeader;
//# sourceMappingURL=TableHeader.js.map
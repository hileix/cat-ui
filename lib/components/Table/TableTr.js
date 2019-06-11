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
/**
 * TableTr
 */
var TableTr = /** @class */ (function (_super) {
    __extends(TableTr, _super);
    function TableTr(props) {
        var _this = _super.call(this, props) || this;
        _this.handleDragStart = function (e) {
            var onDragStart = _this.props.onDragStart;
            onDragStart && onDragStart(e);
            _this.setState({ dragging: true });
        };
        _this.handleDragEnd = function (e) {
            var _a = _this.props, onDragEnd = _a.onDragEnd, data = _a.data;
            var id = data.id;
            onDragEnd && onDragEnd(e, id);
            _this.setState({ dragging: false });
        };
        _this.renderTds = function () {
            var _a = _this.props, columns = _a.columns, data = _a.data;
            return columns.map(function (elem) {
                var id = elem.id;
                // 渲染字符串或函数返回的DOM
                var result = typeof data[id] === 'function' ? data[id]() : data[id];
                return (React.createElement(styled_1.StyledTd, { key: id, className: 'table-td' }, elem.render
                    ? elem.render(result, data)
                    : React.createElement(styled_1.StyledTdInner, null, result)));
            });
        };
        _this.state = {
            dragging: false
        };
        return _this;
    }
    TableTr.prototype.render = function () {
        var dragging = this.state.dragging;
        var _a = this.props, align = _a.align, draggable = _a.draggable, data = _a.data, order = _a.order;
        var id = data.id;
        var classes = classnames_1.default('hmly-table-row', "hmly-table-row-" + align, { 'hmly-table-row-dragging': dragging }, { 'hmly-table-row-draggable': draggable });
        var tds = this.renderTds();
        // console.log('id', id)
        return (React.createElement(styled_1.StyledTr, { draggable: draggable, "data-order": order, onDragStart: this.handleDragStart, onDragEnd: this.handleDragEnd, className: classes }, tds));
    };
    return TableTr;
}(react_1.Component));
exports.default = TableTr;
//# sourceMappingURL=TableTr.js.map
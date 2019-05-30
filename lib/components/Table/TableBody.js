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
var TableTr_1 = require("./TableTr");
var Empty_1 = require("./Empty");
var TableBody = (function (_super) {
    __extends(TableBody, _super);
    function TableBody(props) {
        var _this = _super.call(this, props) || this;
        _this.dragStart = function (event) {
            var onDragStart = _this.props.onDragStart;
            _this.dragged = event.currentTarget;
            onDragStart && onDragStart(event);
        };
        _this.dragOver = function (event) {
            var onDragOver = _this.props.onDragOver;
            event.preventDefault();
            _this.over = event.target.closest('.hmly-table-row');
            if (_this.over === null) {
                _this.over = _this.dragged;
            }
            onDragOver && onDragOver(event);
        };
        _this.dragEnd = function (event, activeId) {
            var _a = _this.props, currentPageData = _a.currentPageData, draggedElement = _a.draggedElement, onDragEnd = _a.onDragEnd, onSort = _a.onSort, onDragChange = _a.onDragChange;
            var from = Number(_this.dragged.dataset.order);
            var to = Number(_this.over.dataset.order);
            var childrenNode = Array.from(currentPageData);
            var ids = [];
            childrenNode.forEach(function (element, index) {
                ids.push(element.id);
            });
            var draggedNode = childrenNode.splice(from - 1, 1)[0];
            childrenNode.splice(to - 1, 0, draggedNode);
            var _draggedEleIndex = childrenNode.indexOf(draggedNode);
            var draggerDOM = _this.draggerRef.current;
            var _draggedEle = draggerDOM.querySelector(":nth-child(" + (_draggedEleIndex + 1) + ")");
            var sortedIds = [];
            childrenNode.forEach(function (element, index) {
                sortedIds.push(element.id);
            });
            console.log('ids', ids, sortedIds);
            onDragChange && onDragChange(childrenNode);
            draggedElement && draggedElement(_draggedEle);
            onSort && onSort(sortedIds, activeId);
            onDragEnd && onDragEnd(event);
        };
        _this.renderTrs = function () {
            var self = _this;
            var _a = _this.props, columns = _a.columns, currentPageData = _a.currentPageData, align = _a.align, draggable = _a.draggable;
            return currentPageData.map(function (element, index) {
                return (React.createElement(TableTr_1.default, { key: index, order: index + 1, columns: columns, data: element, align: align, draggable: draggable, onDragStart: self.dragStart, onDragEnd: self.dragEnd }));
            });
        };
        _this.state = {};
        _this.draggerRef = React.createRef();
        return _this;
    }
    TableBody.prototype.render = function () {
        var _a = this.props, columns = _a.columns, currentPageData = _a.currentPageData, draggable = _a.draggable, empty = _a.empty, emptyText = _a.emptyText;
        var trs = this.renderTrs();
        var colSpan = columns.length;
        return (React.createElement("tbody", { ref: this.draggerRef, onDragOver: this.dragOver }, currentPageData.length === 0
            ? React.createElement(Empty_1.default, { colSpan: colSpan, empty: empty, emptyText: emptyText })
            : trs));
    };
    return TableBody;
}(react_1.Component));
exports.default = TableBody;
//# sourceMappingURL=TableBody.js.map
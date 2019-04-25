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
var Dragger = (function (_super) {
    __extends(Dragger, _super);
    function Dragger(props) {
        var _this = _super.call(this, props) || this;
        _this.componentDidMount = function () {
            var children = _this.props.children;
            _this.setState({
                childrenNode: children
            });
        };
        _this.dragStart = function (event) {
            var onDragStart = _this.props.onDragStart;
            _this.dragged = event.currentTarget;
            onDragStart && onDragStart(event);
        };
        _this.dragOver = function (event) {
            var onDragOver = _this.props.onDragOver;
            event.preventDefault();
            _this.over = event.target.closest('.hmly-dragger-item');
            if (_this.over === null) {
                _this.over = _this.dragged;
            }
            onDragOver && onDragOver(event);
        };
        _this.dragEnd = function (event) {
            var childrenNode = _this.state.childrenNode;
            var _a = _this.props, draggedElement = _a.draggedElement, onDragEnd = _a.onDragEnd, onSort = _a.onSort;
            var from = Number(_this.dragged.dataset.order);
            var to = Number(_this.over.dataset.order);
            var _childrenNode = Array.from(childrenNode);
            var draggedNode = _childrenNode.splice(from - 1, 1)[0];
            _childrenNode.splice(to - 1, 0, draggedNode);
            var _draggedEleIndex = _childrenNode.indexOf(draggedNode);
            var draggerDOM = _this.draggerRef.current;
            var _draggedEle = draggerDOM.querySelector(":nth-child(" + (_draggedEleIndex + 1) + ")");
            var sortedIds = [];
            _childrenNode.forEach(function (element, index) {
                sortedIds.push(element.props.id);
            });
            _this.setState({ childrenNode: _childrenNode });
            draggedElement && draggedElement(_draggedEle);
            onSort && onSort(sortedIds);
            onDragEnd && onDragEnd(event);
        };
        _this.state = {
            childrenNode: []
        };
        _this.draggerRef = React.createRef();
        return _this;
    }
    Dragger.prototype.render = function () {
        var self = this;
        var childrenNode = this.state.childrenNode;
        var _a = this.props, className = _a.className, style = _a.style;
        var classes = classnames_1.default('hmly-dragger', className);
        return (React.createElement(styled_1.StyledDragger, { ref: this.draggerRef, className: classes, style: style, onDragOver: self.dragOver }, React.Children.map(childrenNode, function (element, index) {
            var itemClasses = classnames_1.default('hmly-dragger-item');
            return (React.createElement(styled_1.StyledDraggerItem, { draggable: true, "data-order": index + 1, onDragStart: self.dragStart, onDragEnd: self.dragEnd, className: itemClasses }, element));
        })));
    };
    return Dragger;
}(react_1.Component));
exports.default = Dragger;
//# sourceMappingURL=Dragger.js.map
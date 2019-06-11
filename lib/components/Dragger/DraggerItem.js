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
 * DraggerItem
 */
var DraggerItem = /** @class */ (function (_super) {
    __extends(DraggerItem, _super);
    function DraggerItem(props) {
        var _this = _super.call(this, props) || this;
        _this.handleDragStart = function (e) {
            var onDragStart = _this.props.onDragStart;
            onDragStart && onDragStart(e);
            _this.setState({ dragging: true });
        };
        _this.handleDragEnd = function (e) {
            var onDragEnd = _this.props.onDragEnd;
            onDragEnd && onDragEnd(e);
            _this.setState({ dragging: false });
        };
        _this.state = {
            dragging: false
        };
        return _this;
    }
    DraggerItem.prototype.render = function () {
        var dragging = this.state.dragging;
        var _a = this.props, className = _a.className, style = _a.style, order = _a.order, children = _a.children;
        var classes = classnames_1.default('hmly-dragger-item', {
            'hmly-dragger-item-dragging': dragging
        }, className);
        return (React.createElement(styled_1.StyledDraggerItem, { draggable: true, "data-order": order, onDragStart: this.handleDragStart, onDragEnd: this.handleDragEnd, className: classes, style: style }, children));
    };
    return DraggerItem;
}(react_1.PureComponent));
exports.default = DraggerItem;
//# sourceMappingURL=DraggerItem.js.map
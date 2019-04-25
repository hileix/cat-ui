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
var DraggerItem = (function (_super) {
    __extends(DraggerItem, _super);
    function DraggerItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DraggerItem.prototype.render = function () {
        var self = this;
        var childrenNode = this.state.childrenNode;
        var _a = this.props, className = _a.className, style = _a.style, order = _a.order, onDragStart = _a.onDragStart, onDragEnd = _a.onDragEnd, children = _a.children;
        var classes = classnames_1.default('hmly-dragger-item', className);
        return (React.createElement(styled_1.StyledDraggerItem, { draggable: true, "data-order": order, onDragStart: onDragStart, onDragEnd: onDragEnd, className: classes }, children));
    };
    return DraggerItem;
}(react_1.PureComponent));
exports.default = DraggerItem;
//# sourceMappingURL=DraggerItem.js.map
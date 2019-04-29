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
var PopoverTrigger = (function (_super) {
    __extends(PopoverTrigger, _super);
    function PopoverTrigger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function () {
            var _a = _this.props, mode = _a.mode, toggleVisible = _a.toggleVisible;
            if (mode === 'click') {
                toggleVisible(true);
            }
        };
        _this.handleMouseEnter = function () {
            var _a = _this.props, mode = _a.mode, toggleVisible = _a.toggleVisible;
            if (mode === 'hover') {
                toggleVisible(true);
            }
        };
        _this.handleMouseLeave = function () {
            var _a = _this.props, mode = _a.mode, toggleVisible = _a.toggleVisible;
            if (mode === 'hover') {
                toggleVisible(false);
            }
        };
        return _this;
    }
    PopoverTrigger.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, children = _a.children;
        var classes = classnames_1.default('hmly-popover', className);
        return (React.createElement(styled_1.StyledPopoverTrigger, { className: classes, style: style, onClick: this.handleClick, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, children));
    };
    return PopoverTrigger;
}(react_1.Component));
exports.default = PopoverTrigger;
//# sourceMappingURL=PopoverTrigger.js.map
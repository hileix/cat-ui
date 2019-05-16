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
var Popover_1 = require("../Popover");
var Tooltip = (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip(props) {
        var _this = _super.call(this, props) || this;
        _this.onPopoverChange = function (value) {
            _this.setState({ isPopOpen: value });
        };
        _this.state = {
            isPopOpen: false
        };
        return _this;
    }
    Tooltip.prototype.componentDidMount = function () {
        var _this = this;
        setTimeout(function () {
            _this.setState({ isPopOpen: true });
        }, 1000);
    };
    Tooltip.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, mode = _a.mode, content = _a.content, children = _a.children;
        var isPopOpen = this.state.isPopOpen;
        var classes = classnames_1.default('hmly-tooltip', className);
        return (React.createElement(Popover_1.default, { visible: isPopOpen, mode: mode, onChange: this.onPopoverChange },
            React.createElement(Popover_1.default.Trigger, null,
                React.createElement(styled_1.StyledTooltip, { className: classes, style: style }, children)),
            React.createElement(Popover_1.default.Content, null,
                React.createElement(styled_1.StyledTooltipContent, null, content))));
    };
    Tooltip.defaultProps = {
        mode: 'hover'
    };
    return Tooltip;
}(react_1.Component));
exports.default = Tooltip;
//# sourceMappingURL=Tooltip.js.map
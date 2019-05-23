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
            isPopOpen: false,
            tipLeft: 0,
        };
        _this.contentRef = React.createRef();
        return _this;
    }
    Tooltip.prototype.componentDidUpdate = function () {
        var contentDOM = this.contentRef.current;
        if (!contentDOM) {
            return;
        }
        var _a = this.state, isPopOpen = _a.isPopOpen, tipLeft = _a.tipLeft;
        if (isPopOpen && tipLeft === 0) {
            var contentRect = contentDOM.getBoundingClientRect();
            var rectCollection = contentDOM.getClientRects();
            this.setState({ tipLeft: contentRect.width / 2 - 8 });
        }
    };
    Tooltip.prototype.render = function () {
        var _a;
        var _b = this.props, className = _b.className, style = _b.style, mode = _b.mode, content = _b.content, position = _b.position, width = _b.width, children = _b.children;
        var _c = this.state, isPopOpen = _c.isPopOpen, tipLeft = _c.tipLeft;
        var triggerClass = classnames_1.default('hmly-tooltip-trigger', className);
        var contentClass = classnames_1.default('hmly-tooltip-content', (_a = {},
            _a["hmly-tooltip-" + position] = position,
            _a));
        return (React.createElement(Popover_1.default, { visible: isPopOpen, mode: mode, position: position, onChange: this.onPopoverChange },
            React.createElement(Popover_1.default.Trigger, null,
                React.createElement(styled_1.StyledTooltip, { className: triggerClass, style: style }, children)),
            React.createElement(Popover_1.default.Content, null,
                React.createElement(styled_1.StyledTooltipContent, { ref: this.contentRef, className: contentClass, left: tipLeft, width: width }, content))));
    };
    Tooltip.defaultProps = {
        mode: 'hover',
        position: 'topCenter',
        width: 500
    };
    return Tooltip;
}(react_1.Component));
exports.default = Tooltip;
//# sourceMappingURL=Tooltip.js.map
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var classnames_1 = require("classnames");
var throttle = require("lodash/throttle");
var styled_1 = require("./styled");
var Portal_1 = require("../Portal");
var defaultPostion = {
    position: 'absolute',
    top: 0,
    left: 0,
};
var PopoverContent = (function (_super) {
    __extends(PopoverContent, _super);
    function PopoverContent(props) {
        var _this = _super.call(this, props) || this;
        _this.adjustPosition = function () {
            var _a = _this.props, visible = _a.visible, triggerDOM = _a.triggerDOM;
            var position = _this.state.position;
            if (!visible || !triggerDOM) {
                return;
            }
            var nodeRect = triggerDOM.getBoundingClientRect();
            var left = nodeRect.left, top = nodeRect.top, width = nodeRect.width, height = nodeRect.height;
            var newPosition = __assign({}, position, { left: left, top: window.pageYOffset + top + height });
            _this.setState({ position: newPosition });
        };
        _this.onWindowResize = throttle(function (evt) {
            if (_this.props.visible) {
                _this.adjustPosition();
            }
        }, 16);
        _this.onWindowScroll = throttle(_this.adjustPosition, 16);
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
        _this.state = {
            position: defaultPostion
        };
        return _this;
    }
    PopoverContent.prototype.componentDidMount = function () {
        var visible = this.props.visible;
        if (visible) {
            this.adjustPosition();
        }
        window.addEventListener('scroll', this.onWindowScroll);
        window.addEventListener('resize', this.onWindowResize);
    };
    PopoverContent.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.visible && prevProps.visible !== this.props.visible) {
            this.adjustPosition();
        }
    };
    PopoverContent.prototype.componentWillUnmount = function () {
        window.removeEventListener('scroll', this.onWindowScroll);
        window.removeEventListener('resize', this.onWindowResize);
    };
    PopoverContent.prototype.render = function () {
        var position = this.state.position;
        var _a = this.props, className = _a.className, style = _a.style, visible = _a.visible, triggerDOM = _a.triggerDOM, children = _a.children;
        var classes = classnames_1.default('hmly-popover', className);
        return (React.createElement(Portal_1.default, { visible: visible },
            React.createElement(styled_1.StyledPopBox, { style: position, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave },
                React.createElement(styled_1.StyledPopoverContent, { className: classes, style: style }, children))));
    };
    return PopoverContent;
}(react_1.Component));
exports.default = PopoverContent;
//# sourceMappingURL=PopoverContent.js.map
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
var PopoverTrigger_1 = require("./PopoverTrigger");
var PopoverContent_1 = require("./PopoverContent");
var kindOf_1 = require("../../utils/kindOf");
var Popover = (function (_super) {
    __extends(Popover, _super);
    function Popover(props) {
        var _this = _super.call(this, props) || this;
        _this.open = function () {
        };
        _this.close = function () {
        };
        _this.toggleVisible = function (value) {
            _this.setState({ visible: value });
        };
        _this.removePopover = function (e) {
            var visible = _this.state.visible;
            var node = e.target;
            var triggerDOM = _this.popoverRef.current;
            if (visible && triggerDOM.contains(node) === false) {
                console.log('removePopover');
                _this.setState({ visible: false });
            }
        };
        _this.genTriggerContent = function () {
            var children = _this.props.children;
            var childArray = react_1.Children.toArray(children);
            if (childArray.length !== 2) {
                throw new Error('There must be one and only one trigger and content in Popover');
            }
            var _a = childArray.reduce(function (result, child) {
                var type = child.type;
                if (kindOf_1.default(type, PopoverTrigger_1.default)) {
                    result.trigger = child;
                }
                else if (kindOf_1.default(type, PopoverContent_1.default)) {
                    result.content = child;
                }
                return result;
            }, { trigger: null, content: null }), trigger = _a.trigger, content = _a.content;
            return { trigger: trigger, content: content };
        };
        _this.renderTrigger = function (trigger) {
            var mode = _this.props.mode;
            var visible = _this.state.visible;
            return React.cloneElement(trigger, {
                mode: mode,
                open: _this.open,
                close: _this.close,
                toggleVisible: _this.toggleVisible
            });
        };
        _this.renderContent = function (content) {
            var mode = _this.props.mode;
            var visible = _this.state.visible;
            return React.cloneElement(content, {
                visible: visible,
                mode: mode,
                open: _this.open,
                close: _this.close,
                triggerDOM: _this.popoverRef.current,
                toggleVisible: _this.toggleVisible
            });
        };
        _this.state = {
            visible: false
        };
        _this.popoverRef = React.createRef();
        return _this;
    }
    Popover.getDerivedStateFromProps = function (nextProps) {
        if ('visible' in nextProps) {
            return {
                visible: nextProps.visible
            };
        }
        else {
            return null;
        }
    };
    Popover.prototype.componentDidMount = function () {
        window.addEventListener('click', this.removePopover);
    };
    Popover.prototype.componentWillUnmount = function () {
        window.removeEventListener('click', this.removePopover);
    };
    Popover.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, children = _a.children;
        var visible = this.state.visible;
        var classes = classnames_1.default('hmly-popover', className);
        var _b = this.genTriggerContent(), trigger = _b.trigger, content = _b.content;
        return (React.createElement(styled_1.StyledPopover, { ref: this.popoverRef, className: classes, style: style },
            this.renderTrigger(trigger),
            this.renderContent(content)));
    };
    Popover.defaultProps = {
        mode: 'click'
    };
    return Popover;
}(react_1.Component));
exports.default = Popover;
//# sourceMappingURL=Popover.js.map
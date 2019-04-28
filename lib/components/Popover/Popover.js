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
    function Popover() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.open = function () {
        };
        _this.close = function () {
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
            return React.cloneElement(trigger, {
                open: _this.open,
                close: _this.close,
            });
        };
        _this.renderContent = function (content) {
            return React.cloneElement(content, {
                open: _this.open,
                close: _this.close,
            });
        };
        return _this;
    }
    Popover.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, visible = _a.visible, children = _a.children;
        var classes = classnames_1.default('hmly-popover', className);
        var _b = this.genTriggerContent(), trigger = _b.trigger, content = _b.content;
        console.log('Popover:render', visible, trigger, content);
        return (React.createElement(styled_1.StyledPopover, { className: classes, style: style },
            this.renderTrigger(trigger),
            this.renderContent(content)));
    };
    return Popover;
}(react_1.Component));
exports.default = Popover;
//# sourceMappingURL=Popover.js.map
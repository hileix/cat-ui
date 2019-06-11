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
 * Option
 */
var Option = /** @class */ (function (_super) {
    __extends(Option, _super);
    function Option() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function () {
            var _a = _this.props, value = _a.value, onOptionClick = _a.onOptionClick, onClick = _a.onClick, disable = _a.disable, children = _a.children;
            if (!disable && onOptionClick) {
                onOptionClick(value, children);
            }
            onClick && onClick(value, children);
        };
        return _this;
    }
    Option.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, disable = _a.disable, children = _a.children;
        var classes = classnames_1.default('hmly-option', {
            'hmly-option-disable': disable
        }, className);
        return (React.createElement(styled_1.StyledOption, { className: classes, style: style, onClick: this.handleClick }, children));
    };
    Option.defaultProps = {
        disable: false
    };
    return Option;
}(react_1.Component));
exports.default = Option;
//# sourceMappingURL=Option.js.map
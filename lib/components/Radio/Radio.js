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
var styled_1 = require("./styled");
/**
 * 单选框
 */
var Radio = /** @class */ (function (_super) {
    __extends(Radio, _super);
    function Radio() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (e) {
            console.log('handleChange');
        };
        _this.handleClick = function (e) {
            var _a = _this.props, disabled = _a.disabled, onChange = _a.onChange;
            if (disabled) {
                return;
            }
            onChange && onChange({
                target: __assign({}, _this.props, { checked: e.target.checked }),
                stopPropagation: function () {
                    e.stopPropagation();
                },
                preventDefault: function () {
                    e.preventDefault();
                },
                nativeEvent: e.nativeEvent
            });
        };
        return _this;
    }
    Radio.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, disabled = _a.disabled, readOnly = _a.readOnly, checked = _a.checked, value = _a.value, children = _a.children;
        var classes = classnames_1.default('hmly-radio', className);
        return (React.createElement(styled_1.StyledRadioBox, { className: classes, style: style },
            React.createElement(styled_1.StyledRadio, null,
                React.createElement(styled_1.RadioInner, { checked: checked, disabled: disabled }),
                React.createElement(styled_1.RadioInput, { value: value, checked: checked, disabled: disabled, readOnly: readOnly, onClick: this.handleClick, onChange: this.handleChange })),
            React.createElement(styled_1.RadioSlot, { disabled: disabled }, children)));
    };
    return Radio;
}(react_1.Component));
exports.default = Radio;

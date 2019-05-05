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
var lodash_1 = require("lodash");
var classnames_1 = require("../../utils/classnames");
var styled_1 = require("./styled");
var domProps = {
    placeholder: '',
    defaultValue: '',
    value: '',
    disabled: false,
    readOnly: false
};
var Input = (function (_super) {
    __extends(Input, _super);
    function Input(props) {
        var _this = _super.call(this, props) || this;
        var value = typeof props.value === 'undefined' ? props.defaultValue : props.value;
        _this.state = {
            value: value
        };
        return _this;
    }
    Input.prototype.handleFocus = function (e) {
        var onFocus = this.props.onFocus;
        onFocus && onFocus(e);
    };
    Input.prototype.handleBlur = function (e) {
        var onBlur = this.props.onBlur;
        onBlur && onBlur(e);
    };
    Input.prototype.handleChange = function (e) {
        var onChange = this.props.onChange;
        onChange && onChange(e);
    };
    Input.prototype.handleKeyDown = function (e) {
        var _a = this.props, onPressEnter = _a.onPressEnter, onKeyDown = _a.onKeyDown;
        if (e.keyCode === 13 && onPressEnter) {
            onPressEnter(e);
        }
        if (onKeyDown) {
            onKeyDown(e);
        }
    };
    Input.prototype.render = function () {
        var _a = this.props, theme = _a.theme, className = _a.className;
        var props = lodash_1.pick(this.props, Object.keys(domProps));
        var classes = classnames_1.default({
            prefix: 'hmly-input',
            theme: theme
        });
        return (React.createElement(styled_1.StyledLabel, { className: classes('label', className) },
            React.createElement(styled_1.StyledInput, __assign({ className: classes('', className), onFocus: this.handleFocus.bind(this), onBlur: this.handleBlur.bind(this), onChange: this.handleChange.bind(this), onKeyDown: this.handleKeyDown.bind(this) }, props))));
    };
    Input.defaultProps = {
        type: 'text',
        theme: 'line',
        disabled: false
    };
    return Input;
}(React.PureComponent));
exports.default = Input;
//# sourceMappingURL=Input.js.map
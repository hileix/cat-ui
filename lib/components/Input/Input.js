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
var styled_1 = require("./styled");
var Wrapper_1 = require("./Wrapper");
var Icon_1 = require("../Icon");
var domProps = {
    disabled: false
};
var Input = (function (_super) {
    __extends(Input, _super);
    function Input(props) {
        var _this = _super.call(this, props) || this;
        var type = typeof props.type === 'undefined' ? 'text' : (props.type === 'line-pwd' || props.type === 'box-pwd' ? 'password' : 'text');
        var value = (typeof props.value === 'undefined' ? props.defaultValue : props.value) || '';
        var inputState = props.error ? 3 : 0;
        _this.state = {
            type: type,
            value: value,
            domProps: Object.keys(domProps),
            inputState: inputState
        };
        _this.input = React.createRef();
        return _this;
    }
    Input.getDerivedStateFromProps = function (nextProps) {
        if ('value' in nextProps) {
            return {
                value: nextProps.value
            };
        }
        return null;
    };
    Input.prototype.componentDidMount = function () {
        var autoFocus = this.props.autoFocus;
        if (autoFocus)
            this.input.current.focus();
    };
    Input.prototype.handleFocus = function (e) {
        var _a = this.state, domProps = _a.domProps, inputState = _a.inputState;
        inputState !== 3 && this.setState({
            inputState: 2
        });
        var onFocus = this.props.onFocus;
        onFocus && onFocus(e);
    };
    Input.prototype.handleBlur = function (e) {
        var _a = this.state, domProps = _a.domProps, inputState = _a.inputState;
        inputState !== 3 && this.setState({
            inputState: 0
        });
        var onBlur = this.props.onBlur;
        onBlur && onBlur(e);
    };
    Input.prototype.handleChange = function (e) {
        this.setValue(e.target.value, e);
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
    Input.prototype.handleMouseEnter = function (e) {
        var inputState = this.state.inputState;
        inputState === 0 && this.setState({
            inputState: 1
        });
    };
    Input.prototype.handleMouseLeave = function (e) {
        var inputState = this.state.inputState;
        inputState === 1 && this.setState({
            inputState: 0
        });
    };
    Input.prototype.setValue = function (value, e, callback) {
        if (!('value' in this.props)) {
            this.setState({ value: value }, callback);
        }
        var onChange = this.props.onChange;
        if (onChange) {
            var event_1 = e;
            if (e.type === 'click') {
                event_1 = Object.create(e);
                event_1.target = this.input.current;
                event_1.currentTarget = this.input.current;
                var originalInputValue = this.input.current.value;
                this.input.current.value = '';
                onChange(event_1);
                this.input.current.value = originalInputValue;
                return;
            }
            onChange(event_1);
        }
    };
    Input.prototype.handleClear = function () {
        var value = this.state.value;
        value && this.setState({ value: '' });
    };
    Input.prototype.handleEye = function () {
        this.setState(function (prevState) {
            var type = prevState.type === 'text' ? 'password' : 'text';
            return { type: type };
        });
    };
    Input.prototype.render = function () {
        var _a = this.state, type = _a.type, value = _a.value, domProps = _a.domProps, inputState = _a.inputState;
        var _b = this.props, size = _b.size, className = _b.className, message = _b.message, placeholder = _b.placeholder, showClear = _b.showClear, showEye = _b.showEye;
        var theme = this.props.type;
        var props = lodash_1.pick(this.props, domProps);
        return (React.createElement(Wrapper_1.default, { value: value, theme: theme, size: size, state: inputState, className: className, placeholder: placeholder, message: message, showClear: showClear, showEye: showEye },
            React.createElement(styled_1.StyledInput, __assign({ type: type, value: value, onFocus: this.handleFocus.bind(this), onBlur: this.handleBlur.bind(this), onChange: this.handleChange.bind(this), onKeyDown: this.handleKeyDown.bind(this), onMouseEnter: this.handleMouseEnter.bind(this), onMouseLeave: this.handleMouseLeave.bind(this), ref: this.input }, props)),
            React.createElement(styled_1.StyledIcon, { showClear: showClear, showEye: showEye },
                showClear && React.createElement(Icon_1.default, { type: 'close', onClick: this.handleClear.bind(this) }),
                !showClear && (theme === 'line-pwd' || theme === 'box-pwd') && showEye && React.createElement(Icon_1.default, { type: type === 'text' ? 'eye-open' : 'eye-close', onClick: this.handleEye.bind(this) }))));
    };
    Input.defaultProps = {
        autoFocus: false,
        disabled: false,
        type: 'line',
        error: false
    };
    return Input;
}(React.PureComponent));
exports.default = Input;
//# sourceMappingURL=Input.js.map
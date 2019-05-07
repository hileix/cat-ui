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
var domProps = {
    placeholder: '',
    disabled: false,
    readOnly: false
};
var EinputState;
(function (EinputState) {
    EinputState[EinputState["default"] = 0] = "default";
    EinputState[EinputState["hover"] = 1] = "hover";
    EinputState[EinputState["active"] = 2] = "active";
    EinputState[EinputState["error"] = 3] = "error";
})(EinputState || (EinputState = {}));
var Input = (function (_super) {
    __extends(Input, _super);
    function Input(props) {
        var _this = _super.call(this, props) || this;
        var value = typeof props.value === 'undefined' ? props.defaultValue : props.value;
        var inputState = props.error ? EinputState['error'] : EinputState['default'];
        _this.state = {
            value: value,
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
    Input.prototype.getSnapShotBeforeUpdate = function (prevProps, prevState) {
    };
    Input.prototype.handleFocus = function (e) {
        var onFocus = this.props.onFocus;
        var inputState = this.state.inputState;
        inputState !== EinputState['error'] && this.setState({
            inputState: EinputState['active']
        });
        onFocus && onFocus(e);
    };
    Input.prototype.handleBlur = function (e) {
        var onBlur = this.props.onBlur;
        var inputState = this.state.inputState;
        inputState !== EinputState['error'] && this.setState({
            inputState: EinputState['default']
        });
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
    Input.prototype.handleMouseEnter = function (e) {
        var inputState = this.state.inputState;
        inputState === EinputState['default'] && this.setState({
            inputState: EinputState['hover']
        });
    };
    Input.prototype.handleMouseLeave = function (e) {
        var inputState = this.state.inputState;
        inputState === EinputState['hover'] && this.setState({
            inputState: EinputState['default']
        });
    };
    Input.prototype.render = function () {
        var _a = this.state, value = _a.value, inputState = _a.inputState;
        var _b = this.props, theme = _b.theme, className = _b.className;
        var props = lodash_1.pick(this.props, Object.keys(domProps));
        return (React.createElement(Wrapper_1.default, { theme: theme, state: inputState, className: className },
            React.createElement(styled_1.StyledInput, __assign({ value: value, onFocus: this.handleFocus.bind(this), onBlur: this.handleBlur.bind(this), onChange: this.handleChange.bind(this), onKeyDown: this.handleKeyDown.bind(this), onMouseEnter: this.handleMouseEnter.bind(this), onMouseLeave: this.handleMouseLeave.bind(this), ref: this.input }, props))));
    };
    Input.defaultProps = {
        type: 'text',
        theme: 'line'
    };
    return Input;
}(React.PureComponent));
exports.default = Input;
//# sourceMappingURL=Input.js.map
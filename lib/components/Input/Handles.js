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
var Handles = function (WrappedComponent) {
    return /** @class */ (function (_super) {
        __extends(Input, _super);
        function Input() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Input.prototype.handleFocus = function (e) {
            var inputState = this.state.inputState;
            // set input active state
            inputState !== 3 /* error */ && this.setState({
                inputState: 2 /* active */
            });
            var onFocus = this.props.onFocus;
            onFocus && onFocus(e);
        };
        Input.prototype.handleBlur = function (e) {
            var inputState = this.state.inputState;
            // set input default state
            inputState !== 3 /* error */ && this.setState({
                inputState: 0 /* default */
            });
            var onBlur = this.props.onBlur;
            onBlur && onBlur(e);
        };
        Input.prototype.handleChange = function (e) {
            var value = e.target.value;
            if (!('value' in this.props)) {
                this.setState({ value: value });
            }
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
            inputState === 0 /* default */ && this.setState({
                inputState: 1 /* hover */
            });
        };
        Input.prototype.handleMouseLeave = function (e) {
            var inputState = this.state.inputState;
            inputState === 1 /* hover */ && this.setState({
                inputState: 0 /* default */
            });
        };
        Input.prototype.handleClipboard = function (e) {
            var _a = this.props, onPaste = _a.onPaste, onContextMenu = _a.onContextMenu, onCopy = _a.onCopy, onCut = _a.onCut, clipboardFree = _a.clipboardFree, copyFree = _a.copyFree, pasteFree = _a.pasteFree, cutFree = _a.cutFree;
            switch (('' + e.type).toLowerCase()) {
                case 'copy':
                    onCopy && onCopy(e);
                    !copyFree && notFree();
                    break;
                case 'paste':
                    onPaste && onPaste(e);
                    !pasteFree && notFree();
                    break;
                case 'cut':
                    onCut && onCut(e);
                    !cutFree && notFree();
                    break;
                case 'contextmenu':
                    onContextMenu && onContextMenu(e);
                    break;
            }
            !clipboardFree && notFree();
            function notFree() {
                if (e && e.preventDefault) {
                    e.preventDefault();
                }
                else {
                    window.event.returnValue = false;
                }
            }
        };
        Input.prototype.render = function () {
            return React.createElement(WrappedComponent, __assign({}, this.props, { handleFocus: this.handleFocus, handleBlur: this.handleBlur, handleChange: this.handleChange, handleKeyDown: this.handleKeyDown, handleMouseEnter: this.handleMouseEnter, handleMouseLeave: this.handleMouseLeave, handleClipboard: this.handleClipboard }));
        };
        return Input;
    }(React.PureComponent));
};
exports.default = Handles;
//# sourceMappingURL=Handles.js.map
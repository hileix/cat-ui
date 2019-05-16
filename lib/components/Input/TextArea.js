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
var Handles_1 = require("./Handles");
var domProps = {
    disabled: false,
    maxlength: 500,
    placeholder: '',
    readonly: false
};
var TextArea = (function (_super) {
    __extends(TextArea, _super);
    function TextArea(props) {
        var _this = _super.call(this, props) || this;
        var value = (typeof props.value === 'undefined' ? props.defaultValue : props.value) || '';
        var inputState = props.error ? 3 : 0;
        _this.state = {
            value: value,
            inputState: inputState
        };
        return _this;
    }
    TextArea.prototype.render = function () {
        var _a = this.state, value = _a.value, inputState = _a.inputState;
        var _b = this.props, className = _b.className, autosize = _b.autosize, showCount = _b.showCount, maxlength = _b.maxlength, areaStyle = _b.areaStyle, handleFocus = _b.handleFocus, handleBlur = _b.handleBlur, handleChange = _b.handleChange, handleKeyDown = _b.handleKeyDown, handleMouseEnter = _b.handleMouseEnter, handleMouseLeave = _b.handleMouseLeave, handleClipboard = _b.handleClipboard;
        var props = lodash_1.pick(this.props, domProps);
        return (React.createElement(Wrapper_1.default, { value: value, theme: 'textarea', state: inputState, className: className, showCount: showCount, maxlength: maxlength },
            React.createElement(styled_1.StyledTextArea, __assign({}, props, { style: areaStyle, onFocus: handleFocus.bind(this), onBlur: handleBlur.bind(this), onChange: handleChange.bind(this), onKeyDown: handleKeyDown.bind(this), onMouseEnter: handleMouseEnter.bind(this), onMouseLeave: handleMouseLeave.bind(this), onPaste: handleClipboard.bind(this), onContextMenu: handleClipboard.bind(this), onCopy: handleClipboard.bind(this), onCut: handleClipboard.bind(this) }))));
    };
    TextArea.defaultProps = {
        autosize: false,
        disabled: false,
        error: false,
        placeholderOrigin: false,
        clipboardFree: true,
        copyFree: true,
        pasteFree: true,
        cutFree: true
    };
    return TextArea;
}(React.PureComponent));
exports.default = Handles_1.default(TextArea);
//# sourceMappingURL=TextArea.js.map
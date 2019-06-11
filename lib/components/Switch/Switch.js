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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
var react_1 = require("react");
var lodash_1 = require("lodash");
var styled_1 = require("./styled");
/**
 * Switch
 */
var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    function Switch(props) {
        var _this = _super.call(this, props) || this;
        _this.toggle = function () {
            var onClick = _this.props.onClick;
            var checked = !_this.state.checked;
            _this.setChecked(checked);
            onClick(checked);
        };
        _this.handleKeyDown = function (e) {
            if (e.keyCode === 37) { // Left
                _this.setChecked(false);
            }
            else if (e.keyCode === 39) { // Right
                _this.setChecked(true);
            }
        };
        // Handle auto focus when click switch in Chrome
        _this.handleMouseUp = function (e) {
            if (_this.node) {
                _this.node.blur();
            }
            if (_this.props.onMouseUp) {
                _this.props.onMouseUp(e);
            }
        };
        _this.focus = function () {
            _this.node.focus();
        };
        _this.blur = function () {
            _this.node.blur();
        };
        _this.saveNode = function (node) {
            _this.node = node;
        };
        var checked = false;
        if ('checked' in props) {
            checked = !!props.checked;
        }
        else {
            checked = !!props.defaultChecked;
        }
        _this.state = { checked: checked };
        _this.switchRef = React.createRef();
        return _this;
    }
    Switch.prototype.componentDidMount = function () {
        var _a = this.props, autoFocus = _a.autoFocus, disabled = _a.disabled;
        this.node = this.switchRef.current;
        if (autoFocus && !disabled) {
            this.focus();
        }
    };
    Switch.getDerivedStateFromProps = function (nextProps) {
        if ('checked' in nextProps) {
            return { checked: !!nextProps.checked };
        }
        return null;
    };
    Switch.prototype.setChecked = function (checked) {
        if (this.props.disabled) {
            return;
        }
        if (!('checked' in this.props)) {
            this.setState({ checked: checked });
        }
        this.props.onChange(checked);
    };
    Switch.prototype.render = function () {
        var _a = this.props, className = _a.className, disabled = _a.disabled, loadingIcon = _a.loadingIcon, checkedChildren = _a.checkedChildren, unCheckedChildren = _a.unCheckedChildren, restProps = __rest(_a, ["className", "disabled", "loadingIcon", "checkedChildren", "unCheckedChildren"]);
        var checked = this.state.checked;
        var calsses = classnames_1.default('hmly-switch', className, {
            'hmly-switch-checked': checked,
            'hmly-switch-disabled': disabled
        });
        return (React.createElement(styled_1.StyledSwitch, __assign({}, restProps, { type: 'button', role: 'switch', "aria-checked": checked, disabled: disabled, className: calsses, ref: this.saveNode, onKeyDown: this.handleKeyDown, onClick: this.toggle, onMouseUp: this.handleMouseUp }),
            loadingIcon,
            React.createElement("span", { className: 'hmly-switch-inner' }, checked ? checkedChildren : unCheckedChildren)));
    };
    Switch.defaultProps = {
        // checkedChildren: '',
        // unCheckedChildren: '',
        className: '',
        defaultChecked: false,
        onChange: lodash_1.noop,
        onClick: lodash_1.noop
    };
    return Switch;
}(react_1.Component));
exports.default = Switch;
//# sourceMappingURL=Switch.js.map
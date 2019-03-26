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
var react_1 = require("react");
var classnames_1 = require("classnames");
require("./Button.scss");
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (event) {
            var _a = _this.props, disabled = _a.disabled, onClick = _a.onClick;
            if (disabled)
                return;
            if (onClick) {
                onClick(event);
            }
        };
        return _this;
    }
    Button.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, className = _b.className, style = _b.style, theme = _b.theme, size = _b.size, block = _b.block, disabled = _b.disabled, children = _b.children, others = __rest(_b, ["prefix", "className", "style", "theme", "size", "block", "disabled", "children"]);
        var classes = classnames_1.default(prefix + "-button", (_a = {},
            _a[prefix + "-button-" + theme] = theme,
            _a[prefix + "-button-" + size] = size,
            _a[prefix + "-button-block"] = block,
            _a[prefix + "-button-disabled"] = disabled,
            _a), className);
        return (React.createElement("div", __assign({ className: classes, style: style, onClick: this.handleClick }, others), children));
    };
    Button.defaultProps = {
        prefix: 'hmly',
        theme: 'primary',
        size: 'md',
        disabled: false
    };
    return Button;
}(react_1.Component));
exports.default = Button;
//# sourceMappingURL=Button.js.map
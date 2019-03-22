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
// import * as PropTypes from 'prop-types';
var classnames_1 = require("classnames");
require("./Button.scss");
/**
 * 按钮
 */
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, className = _b.className, theme = _b.theme, size = _b.size, disabled = _b.disabled, others = __rest(_b, ["prefix", "className", "theme", "size", "disabled"]);
        var classes = classnames_1.default(prefix + "-button", (_a = {},
            _a[prefix + "-button-" + theme] = theme,
            _a[prefix + "-button-" + size] = size,
            _a[prefix + "-button-disabled"] = disabled,
            _a), className);
        return (React.createElement("div", { className: classes }, "Button"));
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
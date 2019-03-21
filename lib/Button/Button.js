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
// import * as PropTypes from 'prop-types';
var classnames_1 = require("classnames");
var react_1 = require("react");
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
        var _b = this.props, prefix = _b.prefix, className = _b.className, theme = _b.theme;
        var classes = classnames_1.default(prefix + "-button", (_a = {},
            _a[prefix + "-button-" + theme] = theme,
            _a), className);
        return React.createElement("div", null, "Button");
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
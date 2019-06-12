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
var styled_1 = require("./styled");
var Wrapper = /** @class */ (function (_super) {
    __extends(Wrapper, _super);
    function Wrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wrapper.prototype.render = function () {
        var _a = this.props, value = _a.value, className = _a.className, size = _a.size, theme = _a.theme, state = _a.state, placeholder = _a.placeholder, message = _a.message, showClear = _a.showClear, showEye = _a.showEye, children = _a.children;
        return (React.createElement(styled_1.StyledWrapper, { size: size, theme: theme, state: state, showClear: showClear, showEye: showEye, className: className },
            React.createElement(styled_1.StyledWrapperBorder, { theme: theme, state: state }, placeholder && React.createElement(styled_1.StyledWrapperPlaceholder, { value: value, theme: theme, state: state }, placeholder)),
            children,
            message && React.createElement(styled_1.StyledWrapperMsg, { theme: theme, state: state }, message)));
    };
    return Wrapper;
}(React.PureComponent));
exports.default = Wrapper;

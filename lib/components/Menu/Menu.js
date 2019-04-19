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
var react_1 = require("react");
var classnames_1 = require("classnames");
var styled_1 = require("./styled");
var Menu = (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Menu.prototype.render = function () {
        var _a;
        var self = this;
        var _b = this.props, className = _b.className, style = _b.style, mode = _b.mode, children = _b.children;
        var classes = classnames_1.default('hmly-menu', (_a = {},
            _a["hmly-menu-" + mode] = mode,
            _a), className);
        var items = React.Children.map(children, function (element, index) {
            if (!element) {
                return element;
            }
            return react_1.cloneElement(element, {
                key: index
            });
        });
        return (React.createElement(styled_1.StyledMenu, { className: classes, style: style }, items));
    };
    Menu.defaultProps = {
        mode: 'pop'
    };
    return Menu;
}(react_1.Component));
exports.default = Menu;
//# sourceMappingURL=Menu.js.map
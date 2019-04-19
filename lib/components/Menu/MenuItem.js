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
var MenuItem = (function (_super) {
    __extends(MenuItem, _super);
    function MenuItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onItemClick = function (e) {
            var _a = _this.props, onClick = _a.onClick, onMenuChange = _a.onMenuChange, id = _a.id;
            onClick && onClick(e);
            onMenuChange && onMenuChange(id);
        };
        return _this;
    }
    MenuItem.prototype.render = function () {
        var _a;
        var _b = this.props, className = _b.className, style = _b.style, mode = _b.mode, checked = _b.checked, children = _b.children;
        var classes = classnames_1.default('hmly-menu-item', (_a = {},
            _a["hmly-menu-item-" + mode] = mode,
            _a["hmly-menu-item-checked"] = checked,
            _a), className);
        return (React.createElement(styled_1.StyledMenuItem, { className: classes, style: style, onClick: this.onItemClick }, children));
    };
    return MenuItem;
}(react_1.Component));
exports.default = MenuItem;
//# sourceMappingURL=MenuItem.js.map
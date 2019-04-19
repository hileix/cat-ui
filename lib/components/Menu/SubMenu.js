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
var SubMenu = (function (_super) {
    __extends(SubMenu, _super);
    function SubMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.onSubMenuClick = function (e) {
            var _a = _this.props, onClick = _a.onClick, onMenuChange = _a.onMenuChange, id = _a.id;
            onClick && onClick(e);
            onMenuChange && onMenuChange(id);
        };
        _this.onMouseEnter = function () {
            if (_this.leaveTimer) {
                clearTimeout(_this.leaveTimer);
            }
            _this.enterTimer = setTimeout(function () {
                _this.setState({ subMenuVisible: true });
            }, 200);
        };
        _this.onMouseLeave = function () {
            if (_this.enterTimer) {
                clearTimeout(_this.enterTimer);
            }
            _this.leaveTimer = setTimeout(function () {
                _this.setState({ subMenuVisible: false });
            }, 200);
        };
        _this.renderContent = function () {
            var _a;
            var _b = _this.props, mode = _b.mode, title = _b.title, checked = _b.checked, children = _b.children;
            var subMenuItems = null;
            var classes = classnames_1.default((_a = {},
                _a["hmly-submenu-title-" + mode] = mode,
                _a));
            var subMenuTitle = (React.createElement(styled_1.SubMenuTitle, { className: classes }, title));
            if (mode === 'inline') {
                subMenuItems = (React.createElement(React.Fragment, null,
                    subMenuTitle,
                    React.createElement(styled_1.InlineMenu, null, children)));
            }
            if (mode === 'pop') {
                subMenuItems = (React.createElement(React.Fragment, null, subMenuTitle));
            }
            if (mode === 'replace') {
                subMenuItems = (React.createElement(React.Fragment, null, subMenuTitle));
            }
            return subMenuItems;
        };
        _this.state = {
            subMenuVisible: false
        };
        return _this;
    }
    SubMenu.prototype.render = function () {
        var _a;
        var _b = this.props, className = _b.className, style = _b.style, mode = _b.mode, title = _b.title, checked = _b.checked, children = _b.children;
        var classes = classnames_1.default('hmly-submenu', (_a = {},
            _a["hmly-submenu-" + mode] = mode,
            _a["hmly-submenu-checked"] = checked,
            _a), className);
        var subMenuItems = this.renderContent();
        return (React.createElement(styled_1.StyledSubMenu, { className: classes, style: style, onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave, onClick: this.onSubMenuClick }, subMenuItems));
    };
    return SubMenu;
}(react_1.Component));
exports.default = SubMenu;
//# sourceMappingURL=SubMenu.js.map
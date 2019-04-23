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
var AnimateHeight_1 = require("./AnimateHeight");
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
        _this.onSubMenuTitleClick = function () {
            var isInlineExpand = _this.state.isInlineExpand;
            var mode = _this.props.mode;
            if (mode === 'inline') {
                _this.setState({ isInlineExpand: !isInlineExpand });
            }
            console.log('onSubMenuTitleClick', mode);
        };
        _this.onMouseEnter = function () {
            var mode = _this.props.mode;
            if (mode !== 'pop') {
                return;
            }
            if (_this.leaveTimer) {
                clearTimeout(_this.leaveTimer);
            }
            _this.enterTimer = setTimeout(function () {
                _this.setState({ isPopVisible: true });
            }, 200);
        };
        _this.onMouseLeave = function () {
            var mode = _this.props.mode;
            if (mode !== 'pop') {
                return;
            }
            if (_this.enterTimer) {
                clearTimeout(_this.enterTimer);
            }
            _this.leaveTimer = setTimeout(function () {
                _this.setState({ isPopVisible: false });
            }, 200);
        };
        _this.renderContent = function () {
            var _a;
            var _b = _this.props, mode = _b.mode, title = _b.title, checked = _b.checked, children = _b.children;
            var _c = _this.state, isPopVisible = _c.isPopVisible, isInlineExpand = _c.isInlineExpand;
            var subMenuItems = null;
            var classes = classnames_1.default((_a = {},
                _a["hmly-submenu-title-" + mode] = mode,
                _a['hmly-submenu-title-expand'] = isInlineExpand,
                _a));
            var subMenuTitle = (React.createElement(styled_1.SubMenuTitle, { className: classes, onClick: _this.onSubMenuTitleClick }, title));
            var items = React.Children.map(children, function (element, index) {
                if (!element) {
                    return element;
                }
                return react_1.cloneElement(element, {
                    key: index,
                    id: element.key,
                    mode: mode
                });
            });
            if (mode === 'inline') {
                subMenuItems = (React.createElement(React.Fragment, null,
                    subMenuTitle,
                    React.createElement(AnimateHeight_1.default, { duration: 200, height: isInlineExpand ? 'auto' : 0 },
                        React.createElement(styled_1.InlineSubMenu, { height: isInlineExpand ? 'auto' : 0 }, items))));
            }
            if (mode === 'pop') {
                subMenuItems = (React.createElement(React.Fragment, null,
                    subMenuTitle,
                    isPopVisible && React.createElement(styled_1.PopSubMenuBox, null,
                        React.createElement(styled_1.PopSubMenu, null, items))));
            }
            if (mode === 'replace') {
                subMenuItems = (React.createElement(React.Fragment, null, subMenuTitle));
            }
            return subMenuItems;
        };
        _this.state = {
            isPopVisible: false,
            isInlineExpand: false
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
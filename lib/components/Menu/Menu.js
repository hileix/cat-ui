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
/**
 * 菜单
 */
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu(props) {
        var _this = _super.call(this, props) || this;
        _this.onMenuChange = function (id) {
            // console.log('Menu:onMenuChange', id)
            var onChange = _this.props.onChange;
            onChange && onChange(id);
        };
        // replace时，切换显示组件
        _this.onSwitchMenu = function (menu, backHeader) {
            _this.setState({
                activeMenu: menu,
                activeHeader: backHeader,
                isSubMenu: true
            });
        };
        _this.onBackClick = function () {
            var children = _this.props.children;
            _this.setState({
                activeMenu: children,
                activeHeader: null,
                isSubMenu: false
            });
        };
        _this.state = {
            activeMenu: props.children,
            activeHeader: null,
            isSubMenu: false,
        };
        return _this;
    }
    Menu.prototype.render = function () {
        var _a;
        var self = this;
        var _b = this.state, activeMenu = _b.activeMenu, activeHeader = _b.activeHeader, isSubMenu = _b.isSubMenu;
        var _c = this.props, className = _c.className, style = _c.style, mode = _c.mode, activeKey = _c.activeKey, children = _c.children;
        var classes = classnames_1.default('hmly-menu', (_a = {},
            _a["hmly-menu-" + mode] = mode,
            _a), className);
        var items = React.Children.map(activeMenu, function (element, index) {
            if (!element) {
                return element;
            }
            // console.log('element', element, element.key)
            return react_1.cloneElement(element, {
                key: index,
                id: element.key,
                mode: mode,
                checked: activeKey === element.key,
                onMenuChange: self.onMenuChange,
                onSwitchMenu: self.onSwitchMenu
            });
        });
        // console.log('activeMenu', activeMenu === children)
        return (React.createElement(styled_1.StyledMenu, { className: classes, style: style },
            isSubMenu && React.createElement(styled_1.BackToMenu, { onClick: this.onBackClick }, activeHeader),
            items));
    };
    Menu.defaultProps = {
        mode: 'pop'
    };
    return Menu;
}(react_1.Component));
exports.default = Menu;

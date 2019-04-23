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
var styled_1 = require("./styled");
var Tabs = (function (_super) {
    __extends(Tabs, _super);
    function Tabs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toRender = function () {
            var children = _this.props.children;
            var navs = [];
            var contents = [];
            React.Children.forEach(children, function (child) {
                var isElemet = React.isValidElement(child);
                if (!isElemet) {
                    return;
                }
                var _a = child.props, tab = _a.tab, id = _a.id;
                navs.push({ id: id, tab: tab });
                contents.push(child);
            });
            return { navs: navs, contents: contents };
        };
        _this.onTabClick = function (id) {
            var onChange = _this.props.onChange;
            onChange && onChange(id);
        };
        _this.renderNav = function (navs) {
            var activeId = _this.props.activeId;
            return navs.map(function (element) {
                var classes = activeId === element.id ? 'active' : '';
                var isElement = React.isValidElement(element.tab);
                if (isElement) {
                    return (React.createElement(styled_1.TabsNavLink, { key: element.id, onClick: function () { _this.onTabClick(element.id); }, className: classes }, element.tab));
                }
                else {
                    return (React.createElement(styled_1.TabsNav, { key: element.id, onClick: function () { _this.onTabClick(element.id); }, className: classes }, element.tab));
                }
            });
        };
        _this.renderContent = function (contents) {
            var activeId = _this.props.activeId;
            return contents.map(function (element, index) {
                var id = element.props.id;
                var classes = activeId === id ? 'active' : '';
                return (React.createElement(styled_1.TabsContent, { key: index, className: classes }, element));
            });
        };
        return _this;
    }
    Tabs.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style;
        var _b = this.toRender(), navs = _b.navs, contents = _b.contents;
        return (React.createElement(styled_1.StyledTabs, { className: className, style: style },
            React.createElement(styled_1.TabsNavBox, null, this.renderNav(navs)),
            React.createElement(styled_1.TabsContentBox, null, this.renderContent(contents))));
    };
    return Tabs;
}(react_1.PureComponent));
exports.default = Tabs;
//# sourceMappingURL=Tabs.js.map
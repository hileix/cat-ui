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
 * PageItem
 */
var PageItem = /** @class */ (function (_super) {
    __extends(PageItem, _super);
    function PageItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function () {
            var _a = _this.props, onItemClick = _a.onItemClick, value = _a.value;
            onItemClick && onItemClick(value);
        };
        return _this;
    }
    PageItem.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, active = _a.active, value = _a.value, children = _a.children;
        var classes = classnames_1.default('hmly-page-item', className);
        return (React.createElement(styled_1.StyledPageItem, { className: classes, style: style, active: active, onClick: this.handleClick }, children));
    };
    return PageItem;
}(react_1.PureComponent));
exports.default = PageItem;

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
var classnames_1 = require("classnames");
var Popup_1 = require("../Popup");
require("./Tooltip.scss");
var Tooltip = (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (_a) {
            var _b = _a.popup, popup = _b === void 0 ? false : _b;
            _this.setState({
                popup: popup
            });
        };
        _this.state = {
            popup: false
        };
        return _this;
    }
    Tooltip.prototype.render = function () {
        var _a = this.props, prefixCls = _a.prefixCls, className = _a.className, style = _a.style, placement = _a.placement, title = _a.title, trigger = _a.trigger, children = _a.children;
        var popup = this.state.popup;
        var classes = classnames_1.default(prefixCls + "-pop", className, {
            popuped: popup
        });
        return (React.createElement(Popup_1.default, { prefixClx: prefixCls, className: classes, innerCls: 'hi-children', style: style, placement: placement, title: title, trigger: trigger, onChange: this.handleChange }, children));
    };
    Tooltip.defaultProps = {
        prefixCls: 'hmly',
        placement: 'top',
        trigger: 'hover'
    };
    return Tooltip;
}(React.Component));
exports.default = Tooltip;
//# sourceMappingURL=Tooltip.js.map
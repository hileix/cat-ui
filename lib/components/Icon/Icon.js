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
var compatible_1 = require("./compatible");
var Icon = (function (_super) {
    __extends(Icon, _super);
    function Icon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (event) {
            var onClick = _this.props.onClick;
            onClick && onClick(event);
        };
        return _this;
    }
    Icon.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, type = _a.type;
        console.log(compatible_1.compatible(type));
        var classes = classnames_1.default('hmly-icon', "hmly-icon-" + compatible_1.compatible(type), className);
        return (React.createElement(React.Fragment, null,
            React.createElement("i", { className: classes, style: style, onClick: this.handleClick }),
            React.createElement(styled_1.StyledIcon, null)));
    };
    return Icon;
}(react_1.PureComponent));
exports.default = Icon;
//# sourceMappingURL=Icon.js.map
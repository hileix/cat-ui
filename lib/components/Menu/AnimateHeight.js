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
var AnimateHeight = (function (_super) {
    __extends(AnimateHeight, _super);
    function AnimateHeight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimateHeight.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style;
        var classes = classnames_1.default('hmly-animate', className);
        return (React.createElement(styled_1.StyledAnimateHeight, { className: classes, style: style }, "AnimateHeight"));
    };
    return AnimateHeight;
}(react_1.PureComponent));
exports.default = AnimateHeight;
//# sourceMappingURL=AnimateHeight.js.map
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
var Portal_1 = require("../Portal");
var PopoverContent = (function (_super) {
    __extends(PopoverContent, _super);
    function PopoverContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PopoverContent.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, visible = _a.visible;
        var classes = classnames_1.default('hmly-popover', className);
        return (React.createElement(Portal_1.default, { visible: visible },
            React.createElement(styled_1.StyledPopoverContent, { className: classes, style: style }, "PopoverContent")));
    };
    return PopoverContent;
}(react_1.Component));
exports.default = PopoverContent;
//# sourceMappingURL=PopoverContent.js.map
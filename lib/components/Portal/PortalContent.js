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
var PortalContent = (function (_super) {
    __extends(PortalContent, _super);
    function PortalContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PortalContent.prototype.componentDidMount = function () {
        var onMount = this.props.onMount;
        onMount && onMount();
    };
    PortalContent.prototype.componentWillUnmount = function () {
        var onUnmount = this.props.onUnmount;
        onUnmount && onUnmount();
    };
    PortalContent.prototype.render = function () {
        var visible = this.props.visible;
        return (React.createElement(styled_1.StyledPortalContent, { visible: visible }, this.props.children));
    };
    PortalContent.defaultProps = {
        selector: 'body'
    };
    return PortalContent;
}(react_1.Component));
exports.default = PortalContent;
//# sourceMappingURL=PortalContent.js.map
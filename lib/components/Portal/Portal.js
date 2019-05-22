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
var ReactDOM = require("react-dom");
var PortalContent_1 = require("./PortalContent");
var Portal = (function (_super) {
    __extends(Portal, _super);
    function Portal(props) {
        var _this = _super.call(this, props) || this;
        _this.getContainer = function (selector) {
            if (!document) {
                return;
            }
            var node = document.querySelector(selector) || document.body;
            return node;
        };
        _this.state = {
            isInited: false
        };
        return _this;
    }
    Portal.prototype.componentDidMount = function () {
        var visible = this.props.visible;
        if (visible) {
            this.setState({ isInited: true });
        }
    };
    Portal.prototype.componentDidUpdate = function (prevProps) {
        var isNotEqual = prevProps.visible !== this.props.visible;
        if (this.props.visible && isNotEqual) {
            this.setState({ isInited: true });
        }
    };
    Portal.prototype.render = function () {
        var _a = this.props, selector = _a.selector, onMount = _a.onMount, onUnmount = _a.onUnmount, render = _a.render, visible = _a.visible, children = _a.children;
        var isInited = this.state.isInited;
        var domNode = this.getContainer(selector);
        var content = render ? render() : children;
        if (!visible && !isInited) {
            return null;
        }
        if (!domNode) {
            return null;
        }
        return ReactDOM.createPortal(React.createElement(PortalContent_1.default, { visible: visible, onMount: onMount, onUnmount: onUnmount }, content), domNode);
    };
    Portal.defaultProps = {
        selector: 'body'
    };
    return Portal;
}(react_1.PureComponent));
exports.default = Portal;
//# sourceMappingURL=Portal.js.map
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
var throttle_1 = require("lodash-es/throttle");
var styled_1 = require("./styled");
var Portal_1 = require("../Portal");
var PopoverContent = (function (_super) {
    __extends(PopoverContent, _super);
    function PopoverContent(props) {
        var _this = _super.call(this, props) || this;
        _this.adjustPosition = function () {
            var _a = _this.props, visible = _a.visible, triggerDOM = _a.triggerDOM;
            if (!visible) {
                return;
            }
            var contentBoundingBox = triggerDOM.getBoundingClientRect();
            console.log('adjustPosition:contentBoundingBox', contentBoundingBox);
        };
        _this.onWindowResize = throttle_1.default(function (evt, delta) {
            if (_this.props.visible && (delta.deltaX !== 0 || delta.deltaY !== 0)) {
                _this.adjustPosition();
            }
        }, 16);
        _this.onWindowScroll = throttle_1.default(_this.adjustPosition, 16);
        _this.state = {
            position: null
        };
        return _this;
    }
    PopoverContent.prototype.componentDidMount = function () {
        var visible = this.props.visible;
        if (visible) {
            this.adjustPosition();
        }
        window.addEventListener('scroll', this.onWindowScroll);
        window.addEventListener('resize', this.onWindowResize);
    };
    PopoverContent.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.visible && prevProps.visible !== this.props.visible) {
            this.adjustPosition();
        }
        window.removeEventListener('scroll', this.onWindowScroll);
        window.removeEventListener('resize', this.onWindowResize);
    };
    PopoverContent.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, visible = _a.visible, triggerDOM = _a.triggerDOM, children = _a.children;
        var classes = classnames_1.default('hmly-popover', className);
        console.log('PopoverContent:render', visible, triggerDOM);
        return (React.createElement(Portal_1.default, { visible: visible },
            React.createElement(styled_1.StyledPopoverContent, { className: classes, style: style }, children)));
    };
    return PopoverContent;
}(react_1.Component));
exports.default = PopoverContent;
//# sourceMappingURL=PopoverContent.js.map
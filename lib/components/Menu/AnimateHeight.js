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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var classnames_1 = require("classnames");
var styled_1 = require("./styled");
/**
 * AnimateHeight
 */
var AnimateHeight = /** @class */ (function (_super) {
    __extends(AnimateHeight, _super);
    function AnimateHeight(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            overflow: 'visible'
        };
        return _this;
    }
    AnimateHeight.prototype.render = function () {
        var _a = this.props, className = _a.className, _b = _a.style, style = _b === void 0 ? {} : _b, height = _a.height, duration = _a.duration, easing = _a.easing, children = _a.children;
        var overflow = this.state.overflow;
        var classes = classnames_1.default('hmly-animate', className);
        var userTransition = style.transition ? style.transition + "," : '';
        var transitionString = userTransition + " height " + duration + "ms " + easing;
        var componentStyle = __assign({}, style, { height: height, overflow: overflow || style.overflow });
        // console.log('AnimateHeight:render', height, componentStyle)
        return (React.createElement(styled_1.StyledAnimateHeight, { className: classes, style: componentStyle }, children));
    };
    AnimateHeight.defaultProps = {
        duration: 250,
        easing: 'ease'
    };
    return AnimateHeight;
}(react_1.PureComponent));
exports.default = AnimateHeight;
//# sourceMappingURL=AnimateHeight.js.map
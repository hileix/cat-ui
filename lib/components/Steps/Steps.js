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
var styled_1 = require("./styled");
var classnames_1 = require("../../utils/classnames");
var Steps = /** @class */ (function (_super) {
    __extends(Steps, _super);
    function Steps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Steps.prototype.render = function () {
        var _a = this.props, current = _a.current, direction = _a.direction, theme = _a.theme, className = _a.className, style = _a.style, children = _a.children;
        var classes = classnames_1.default({ prefix: 'hmly-steps', theme: theme });
        var StepChildren = React.Children.map(children, function (child, index) {
            if (!child)
                return child;
            return React.cloneElement(child, {
                current: current,
                direction: direction,
                theme: theme,
                stepNumber: index + 1,
                isFirst: index === 0,
                isLast: index + 1 === children.length,
                total: children.length
            });
        });
        return (React.createElement(styled_1.StyledSteps, { className: classes('', className), style: style }, StepChildren));
    };
    Steps.defaultProps = {
        direction: 'horizontal',
        style: {}
    };
    return Steps;
}(React.PureComponent));
exports.default = Steps;

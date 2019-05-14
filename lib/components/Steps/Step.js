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
exports.prefix = 'hmly-steps-step';
var Step = (function (_super) {
    __extends(Step, _super);
    function Step() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Step.prototype.render = function () {
        var _a = this.props, current = _a.current, direction = _a.direction, theme = _a.theme, stepNumber = _a.stepNumber, title = _a.title, description = _a.description, total = _a.total, isLast = _a.isLast;
        var suffix = +current === +stepNumber ? 'current' : +current > +stepNumber ? 'active' : '';
        var classes = classnames_1.default({ prefix: exports.prefix, theme: theme, suffix: suffix });
        return (React.createElement(styled_1.StyledStep, { className: classes() },
            React.createElement("div", { className: "" + classes('icon') },
                React.createElement("span", { className: classes('icon-index') }, stepNumber)),
            React.createElement("div", { className: classes('content') },
                React.createElement("div", { className: "" + classes('content-title') }, title),
                React.createElement("div", { className: "" + classes('content-description') }, description))));
    };
    return Step;
}(React.PureComponent));
exports.default = Step;
//# sourceMappingURL=Step.js.map
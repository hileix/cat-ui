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
var noop = require("lodash/noop");
var styled_1 = require("./styled");
var Form = (function (_super) {
    __extends(Form, _super);
    function Form() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.checkFunc = function (field) {
            return noop;
        };
        _this.onFieldChange = function (field, value) {
            var _a, _b;
            var fieldError = _this.state.fieldError;
            var errorType = field + 'Error';
            var errorMsg = _this.checkFunc(field)(value);
            var newFieldError = __assign({}, fieldError, (_a = {}, _a[errorType] = errorMsg, _a));
            _this.setState((_b = {},
                _b[field] = value,
                _b.fieldError = newFieldError,
                _b));
        };
        return _this;
    }
    Form.prototype.componentDidMount = function () {
        console.log('Form:componentDidMount');
    };
    Form.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, labelWidth = _a.labelWidth, labelAlign = _a.labelAlign, children = _a.children;
        var classes = classnames_1.default('hmly-form', className);
        var items = React.Children.map(children, function (element, index) {
            if (!element) {
                return element;
            }
            var child = element.props.children;
            var componentType = child.type.name;
            console.log('componentType', componentType);
            return react_1.cloneElement(element, {
                key: index,
                labelWidth: labelWidth,
                labelAlign: labelAlign
            });
        });
        return (React.createElement(styled_1.StyledForm, { className: classes, style: style }, items));
    };
    Form.defaultProps = {
        colon: false
    };
    return Form;
}(react_1.Component));
exports.default = Form;
//# sourceMappingURL=Form.js.map
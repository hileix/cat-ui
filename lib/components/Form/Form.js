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
var Form = (function (_super) {
    __extends(Form, _super);
    function Form(props) {
        var _this = _super.call(this, props) || this;
        _this.onFieldChange = function (field, value, error) {
            var _a = _this.state, values = _a.values, errors = _a.errors;
            if (field) {
                values[field] = value;
                errors[field] = error;
                field && _this.setState({ values: values, errors: errors });
            }
        };
        _this.onSubmitClick = function (fn) {
            var _a = _this.state, values = _a.values, errors = _a.errors;
            _this.setState({ isCheck: true }, function () {
                fn(values, errors);
            });
        };
        _this.toggleIsCheck = function (isCheck) {
            _this.setState({ isCheck: isCheck });
        };
        _this.state = {
            values: {},
            errors: {},
            isCheck: false
        };
        return _this;
    }
    Form.prototype.componentDidMount = function () {
        var _this = this;
        var children = this.props.children;
        React.Children.map(children, function (element, index) {
            if (!element) {
                return;
            }
            var _a = _this.state, values = _a.values, errors = _a.errors;
            var child = element.props.children;
            var componentType = child.type.name;
            var name = element.props.name;
            switch (componentType) {
                case 'Button':
                    break;
                case 'CheckboxGroup':
                    values[name] = [];
                    errors[name] = '';
                    break;
                case 'RadioGroup':
                case 'Select':
                default:
                    values[name] = '';
                    errors[name] = '';
                    break;
            }
            if ('value' in child.props) {
                values[name] = child.props.value;
            }
            else if ('defaultValue' in child.props) {
                values[name] = child.props.defaultValue;
            }
            _this.setState({ values: values, errors: errors });
        });
    };
    Form.prototype.componentDidUpdate = function () {
    };
    Form.prototype.render = function () {
        var self = this;
        var _a = this.state, values = _a.values, errors = _a.errors, isCheck = _a.isCheck;
        var _b = this.props, className = _b.className, style = _b.style, labelWidth = _b.labelWidth, labelAlign = _b.labelAlign, children = _b.children;
        var classes = classnames_1.default('hmly-form', className);
        var items = React.Children.map(children, function (element, index) {
            if (!element) {
                return;
            }
            return react_1.cloneElement(element, {
                key: index,
                labelWidth: labelWidth,
                labelAlign: labelAlign,
                onFieldChange: self.onFieldChange,
                onSubmitClick: self.onSubmitClick,
                toggleIsCheck: self.toggleIsCheck,
                isCheck: isCheck,
                values: values,
                errors: errors
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
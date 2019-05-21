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
        _this.onFieldChange = function (field, value) {
            var _a;
            _this.setState((_a = {}, _a[field] = value, _a));
        };
        _this.onSubmitClick = function (values, errors) {
            console.log('Form:onSubmitClick');
        };
        _this.state = {};
        return _this;
    }
    Form.prototype.componentDidMount = function () {
        var _this = this;
        var children = this.props.children;
        React.Children.map(children, function (element, index) {
            var _a, _b;
            if (!element) {
                return element;
            }
            var child = element.props.children;
            var componentType = child.type.name;
            var _c = element.props, name = _c.name, defaultValue = _c.defaultValue, value = _c.value;
            switch (componentType) {
                case 'Button':
                    console.log('Button');
                case 'CheckboxGroup':
                    _this.setState((_a = {}, _a[name] = [], _a));
                    break;
                case 'Select':
                default:
                    _this.setState((_b = {}, _b[name] = '', _b));
                    break;
            }
        });
    };
    Form.prototype.componentDidUpdate = function () {
        var getFormFields = this.props.getFormFields;
        getFormFields && getFormFields(this.state, {});
    };
    Form.prototype.render = function () {
        var self = this;
        var _a = this.props, className = _a.className, style = _a.style, labelWidth = _a.labelWidth, labelAlign = _a.labelAlign, children = _a.children;
        var classes = classnames_1.default('hmly-form', className);
        var items = React.Children.map(children, function (element, index) {
            if (!element) {
                return element;
            }
            var child = element.props.children;
            var componentType = child.type.name;
            console.log('componentType', child);
            if (componentType === 'Button') {
                var item = react_1.cloneElement(child, {
                    key: 'childrenElement',
                    onClick: self.onSubmitClick
                });
                element.props.children = item;
            }
            return react_1.cloneElement(element, {
                key: index,
                labelWidth: labelWidth,
                labelAlign: labelAlign,
                onFieldChange: self.onFieldChange
            });
        });
        console.log('Form:render', this.state);
        return (React.createElement(styled_1.StyledForm, { className: classes, style: style }, items));
    };
    Form.defaultProps = {
        colon: false
    };
    return Form;
}(react_1.Component));
exports.default = Form;
//# sourceMappingURL=Form.js.map
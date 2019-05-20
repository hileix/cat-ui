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
var noop = require("lodash/noop");
var Tooltip_1 = require("../Tooltip");
var styled_1 = require("./styled");
var FormItem = (function (_super) {
    __extends(FormItem, _super);
    function FormItem(props) {
        var _this = _super.call(this, props) || this;
        _this.onItemChange = function (value) {
            var _a = _this.props, _b = _a.check, check = _b === void 0 ? noop : _b, name = _a.name, onFieldChange = _a.onFieldChange, children = _a.children;
            var _c = children, _d = _c.props, props = _d === void 0 ? {} : _d, _e = _c.type, type = _e === void 0 ? {} : _e;
            var onChange = props.onChange;
            var error = check(value);
            _this.setState({ error: error });
            console.log('FormItem:onItemChange:error', value, error);
            onChange && onChange(value);
            onFieldChange && onFieldChange(name, value);
        };
        _this.state = {
            value: '',
            error: ''
        };
        _this.formItemRef = React.createRef();
        return _this;
    }
    FormItem.prototype.componentDidMount = function () {
        var children = this.props.children;
        var _a = children.props, props = _a === void 0 ? {} : _a;
        var defaultValue = props.defaultValue, value = props.value;
        if ('value' in props) {
            this.setState({ value: value });
        }
        else if ('defaultValue' in props) {
            this.setState({ value: defaultValue });
        }
    };
    FormItem.prototype.componentDidUpdate = function () {
        var error = this.state.error;
        if (Boolean(error)) {
            var element = this.formItemRef.current;
            var eleRect = element.getBoundingClientRect();
            var _a = eleRect.top, top_1 = _a === void 0 ? 0 : _a;
            if (element && top_1 < 0) {
                element.scrollIntoView({ behavior: 'instant', block: 'center' });
            }
        }
    };
    FormItem.prototype.render = function () {
        var self = this;
        var error = this.state.error;
        var _a = this.props, className = _a.className, style = _a.style, label = _a.label, desc = _a.desc, tips = _a.tips, labelWidth = _a.labelWidth, labelAlign = _a.labelAlign, required = _a.required, children = _a.children;
        var classes = classnames_1.default('hmly-form-item', className);
        var labelBoxClass = classnames_1.default({ 'hmly-form-label-required': required });
        var item = react_1.cloneElement(children, {
            key: 'childrenElement',
            onChange: self.onItemChange
        });
        return (React.createElement(styled_1.StyledFormItem, { className: classes, style: style, ref: this.formItemRef },
            React.createElement(styled_1.LabelBox, { width: labelWidth, className: labelBoxClass },
                React.createElement(styled_1.FormItemLabel, null,
                    label,
                    Boolean(tips) &&
                        React.createElement(Tooltip_1.default, { content: tips },
                            React.createElement(styled_1.LabelIcon, { type: 'question-circle' }))),
                Boolean(desc) && React.createElement(styled_1.FormItemDesc, null, desc)),
            React.createElement(styled_1.ControlBox, null,
                React.createElement(styled_1.FormItemControl, null, item),
                Boolean(error) && React.createElement(styled_1.ItemError, null, error))));
    };
    FormItem.defaultProps = {
        colon: false
    };
    return FormItem;
}(react_1.Component));
exports.default = FormItem;
//# sourceMappingURL=FormItem.js.map
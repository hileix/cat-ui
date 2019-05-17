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
var CheckboxGroup = (function (_super) {
    __extends(CheckboxGroup, _super);
    function CheckboxGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onCheckboxChange = function (e) {
            var _a = _this.props, value = _a.value, onChange = _a.onChange;
            var newValue = e.target.value;
            var optionIndex = value.indexOf(newValue);
            if (optionIndex === -1) {
                value.push(newValue);
            }
            else {
                value.splice(optionIndex, 1);
            }
            onChange && onChange(value);
        };
        return _this;
    }
    CheckboxGroup.prototype.render = function () {
        var self = this;
        var _a = this.props, className = _a.className, style = _a.style, disabled = _a.disabled, readOnly = _a.readOnly, checked = _a.checked, value = _a.value, children = _a.children;
        var classes = classnames_1.default('hmly-Checkbox-group', className);
        var Checkboxs = React.Children.map(children, function (element, index) {
            if (!element) {
                return element;
            }
            return react_1.cloneElement(element, {
                onChange: self.onCheckboxChange,
                key: value,
                checked: value.indexOf(element.props.value) > -1,
                disabled: disabled,
                readOnly: readOnly
            });
        });
        return (React.createElement(styled_1.StyledCheckboxGroup, { className: classes, style: style }, Checkboxs));
    };
    return CheckboxGroup;
}(react_1.Component));
exports.default = CheckboxGroup;
//# sourceMappingURL=CheckboxGroup.js.map
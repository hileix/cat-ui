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
var Icon_1 = require("../Icon");
var styled_1 = require("./styled");
var FormItem = (function (_super) {
    __extends(FormItem, _super);
    function FormItem(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            error: ''
        };
        return _this;
    }
    FormItem.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, label = _a.label, desc = _a.desc, tips = _a.tips, labelWidth = _a.labelWidth, labelAlign = _a.labelAlign, required = _a.required, error = _a.error, children = _a.children;
        var classes = classnames_1.default('hmly-form-item', className);
        return (React.createElement(styled_1.StyledFormItem, { className: classes, style: style },
            React.createElement(styled_1.LabelBox, { width: labelWidth },
                React.createElement(styled_1.FormItemLabel, null,
                    label,
                    tips && React.createElement(Icon_1.default, { type: 'question-circle' })),
                desc && React.createElement(styled_1.FormItemDesc, null, desc)),
            React.createElement(styled_1.ControlBox, null,
                React.createElement(styled_1.FormItemControl, null, children))));
    };
    FormItem.defaultProps = {
        colon: false
    };
    return FormItem;
}(react_1.Component));
exports.default = FormItem;
//# sourceMappingURL=FormItem.js.map
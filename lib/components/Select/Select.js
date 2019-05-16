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
var Popover_1 = require("../Popover");
var Select = (function (_super) {
    __extends(Select, _super);
    function Select(props) {
        var _this = _super.call(this, props) || this;
        _this.onPopoverChange = function (value) {
            _this.setState({ isPopOpen: value });
        };
        _this.onOptionClick = function (value, child) {
            var onChange = _this.props.onChange;
            onChange && onChange(value, child);
        };
        _this.state = {
            isPopOpen: false,
            selectWidth: 'auto'
        };
        _this.selectRef = React.createRef();
        return _this;
    }
    Select.prototype.componentDidMount = function () {
        var selectDOM = this.selectRef.current;
        if (selectDOM) {
            var selectRect = selectDOM.getBoundingClientRect();
            var width = selectRect.width;
            this.setState({ selectWidth: width + 'px' });
        }
    };
    Select.prototype.render = function () {
        var self = this;
        var _a = this.state, isPopOpen = _a.isPopOpen, selectWidth = _a.selectWidth;
        var _b = this.props, className = _b.className, style = _b.style, value = _b.value, placeholder = _b.placeholder, children = _b.children;
        var filler = placeholder;
        var options = React.Children.map(children, function (element, index) {
            if (!element) {
                return element;
            }
            if (element.props && (element.props.value === value)) {
                filler = element.props.children;
            }
            return react_1.cloneElement(element, {
                key: index,
                onOptionClick: function (value, child) {
                    if (element.props.onOptionClick) {
                        var flag = element.props.onOptionClick(value, child);
                        return (flag !== false && flag !== void 0) && self.onOptionClick(value, child);
                    }
                    else {
                        return self.onOptionClick(value, child);
                    }
                }
            });
        });
        var isValueEmpty = value === '' || (typeof value === undefined);
        var classes = classnames_1.default('hmly-select', {
            'hmly-select-open': isPopOpen,
            'hmly-select-placeholder': isValueEmpty
        }, className);
        return (React.createElement(Popover_1.default, { mode: 'click', onChange: this.onPopoverChange },
            React.createElement(Popover_1.default.Trigger, null,
                React.createElement(styled_1.StyledSelect, { ref: this.selectRef, className: classes, style: style }, filler)),
            React.createElement(Popover_1.default.Content, null,
                React.createElement(styled_1.StyledOptionBox, { width: selectWidth }, options))));
    };
    return Select;
}(react_1.Component));
exports.default = Select;
//# sourceMappingURL=Select.js.map
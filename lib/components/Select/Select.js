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
/**
 * 下拉选择
 */
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select(props) {
        var _this = _super.call(this, props) || this;
        _this.onPopoverChange = function (value) {
            _this.setState({ isPopOpen: value });
        };
        _this.onOptionClick = function (value, child) {
            var onChange = _this.props.onChange;
            // 是否有value值传递下来
            if (!('value' in _this.props)) {
                _this.setState({
                    value: value
                });
            }
            onChange && onChange(value, child);
        };
        var value = '';
        if ('value' in props) {
            value = props.value;
        }
        else if ('defaultValue' in props) {
            value = props.defaultValue;
        }
        _this.state = {
            isPopOpen: false,
            selectWidth: 'auto',
            value: value
        };
        _this.selectRef = React.createRef();
        return _this;
    }
    Select.getDerivedStateFromProps = function (nextProps) {
        if ('value' in nextProps) {
            return {
                value: nextProps.value
            };
        }
        else {
            return null;
        }
    };
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
        var _a = this.state, isPopOpen = _a.isPopOpen, selectWidth = _a.selectWidth, value = _a.value;
        var _b = this.props, className = _b.className, style = _b.style, placeholder = _b.placeholder, children = _b.children;
        var filler = placeholder;
        var options = React.Children.map(children, function (element, index) {
            if (!element) {
                return element;
            }
            // 显示value值对应的文本内容
            if (element.props && (element.props.value === value)) {
                filler = element.props.children;
            }
            return react_1.cloneElement(element, {
                key: index,
                onOptionClick: self.onOptionClick
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

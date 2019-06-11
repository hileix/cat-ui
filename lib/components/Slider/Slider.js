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
require("./Slider.scss");
/**
 * Slider滑动输入条
 *
 * 为Slider组件提供value属性，可使Slider变为受控组件，否则当前组件为非受控
 *
 * Slider兼容至移动端，在移动端下会默认使用touch事件
 *
 */
var Slider = /** @class */ (function (_super) {
    __extends(Slider, _super);
    function Slider(props) {
        var _this = _super.call(this, props) || this;
        _this.calcValue = function (clientX) {
            var slider = _this.refSlider.current;
            var value = (clientX - slider.getBoundingClientRect().left) / slider.offsetWidth;
            if (value < 0) {
                value = 0;
            }
            else if (value > 1) {
                value = 1;
            }
            return value * 100;
        };
        _this.onMouseDown = function (e) {
            var _a = _this.props, onBeforeChange = _a.onBeforeChange, onChange = _a.onChange;
            var value = _this.calcValue(e.clientX);
            document.addEventListener('mousemove', _this.onMouseMove);
            document.addEventListener('mouseup', _this.onMouseUp);
            if (!('value' in _this.props)) {
                _this.setState({ value: value });
            }
            _this.setState({ dragging: true });
            onBeforeChange && onBeforeChange(value);
            onChange && onChange(value);
        };
        _this.onMouseMove = function (e) {
            var onChange = _this.props.onChange;
            var value = _this.calcValue(e.clientX);
            if (!('value' in _this.props)) {
                _this.setState({ value: value });
            }
            onChange && onChange(value);
        };
        _this.onMouseUp = function (e) {
            var onAfterChange = _this.props.onAfterChange;
            var value = _this.calcValue(e.clientX);
            _this.setState({ dragging: false });
            document.removeEventListener('mousemove', _this.onMouseMove);
            document.removeEventListener('mouseup', _this.onMouseUp);
            onAfterChange && onAfterChange(value);
        };
        _this.onTouchStart = function (e) {
            var _a = _this.props, onBeforeChange = _a.onBeforeChange, onChange = _a.onChange;
            var value = _this.calcValue(e.touches[0].clientX);
            document.addEventListener('touchmove', _this.onTouchMove);
            document.addEventListener('touchend', _this.onTouchEnd);
            if (!('value' in _this.props)) {
                _this.setState({ value: value });
            }
            _this.setState({ dragging: true });
            onBeforeChange && onBeforeChange(value);
            onChange && onChange(value);
        };
        _this.onTouchMove = function (e) {
            var onChange = _this.props.onChange;
            var value = _this.calcValue(e.touches[0].clientX);
            if (!('value' in _this.props)) {
                _this.setState({ value: value });
            }
            onChange && onChange(value);
        };
        _this.onTouchEnd = function (e) {
            var onAfterChange = _this.props.onAfterChange;
            var value = _this.calcValue(e.changedTouches[0].clientX);
            _this.setState({ dragging: false });
            document.removeEventListener('touchmove', _this.onTouchMove);
            document.removeEventListener('touchend', _this.onTouchEnd);
            onAfterChange && onAfterChange(value);
        };
        _this.state = {
            value: props.value || props.defaultValue || 0
        };
        _this.refSlider = react_1.createRef();
        return _this;
    }
    Slider.prototype.componentDidMount = function () {
        var slider = this.refSlider.current;
        if ('ontouchstart' in document) {
            slider.addEventListener('touchstart', this.onTouchStart);
        }
        else {
            slider.addEventListener('mousedown', this.onMouseDown);
        }
    };
    Slider.prototype.componentWillUnmount = function () {
        var slider = this.refSlider.current;
        if ('ontouchstart' in document) {
            slider.removeEventListener('touchstart', this.onTouchStart);
        }
        else {
            slider.removeEventListener('mousedown', this.onMouseDown);
        }
    };
    Slider.getDerivedStateFromProps = function (nextProps, prevState) {
        return 'value' in nextProps ? { value: nextProps.value } : null;
    };
    Slider.prototype.render = function () {
        var _a;
        var _b = this.props, className = _b.className, prefixCls = _b.prefixCls, theme = _b.theme;
        var _c = this.state, value = _c.value, dragging = _c.dragging;
        var trackStyle = { width: value + "%" };
        var handleStyle = { left: value + "%" };
        var classes = classnames_1.default(prefixCls + "-slider", (_a = {},
            _a[prefixCls + "-slider-" + theme] = theme,
            _a.dragging = dragging,
            _a), className);
        return (React.createElement("div", { className: classes, ref: this.refSlider },
            React.createElement("div", { className: 'slider-rail' }),
            React.createElement("div", { className: 'slider-track', style: trackStyle }),
            React.createElement("div", { className: 'slider-handle-wrap' },
                React.createElement("div", { className: 'slider-handle', style: handleStyle, title: value },
                    React.createElement("div", { className: 'circle' })))));
    };
    Slider.defaultProps = {
        className: '',
        prefixCls: 'hmly',
        theme: '',
        defaultValue: 0
    };
    return Slider;
}(react_1.Component));
exports.default = Slider;
//# sourceMappingURL=Slider.js.map
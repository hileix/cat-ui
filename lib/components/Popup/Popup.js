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
var react_dom_1 = require("react-dom");
var classnames_1 = require("classnames");
/**
 * Popup弹出层
 *
 * Popup组件只是一个壳子，负责组装Trigger和Content，以及计算目标要显示的位置，添加弹出时的过渡、动画等。
 *
 * 打开弹层的方式由Trigger控制，比如click, 触发后返回值给Content，由Content决定自己的展示和关闭
 *
 */
var Popup = /** @class */ (function (_super) {
    __extends(Popup, _super);
    function Popup(props) {
        var _this = _super.call(this, props) || this;
        _this.handleMouseEnter = function () {
            var onChange = _this.props.onChange;
            onChange && onChange({ popup: true });
        };
        _this.handleMouseLeave = function () {
            var onChange = _this.props.onChange;
            onChange && onChange({ popup: false });
        };
        _this.handleClick = function () {
            var onChange = _this.props.onChange;
            onChange && onChange({ popup: true });
        };
        _this.handleTouchStart = function () {
            var onChange = _this.props.onChange;
            onChange && onChange({ popup: true });
        };
        _this.handleClickLeave = function () {
            var onChange = _this.props.onChange;
            onChange && onChange({ popup: false });
        };
        _this.createParent = function () {
            var parent = document.createElement('div');
            parent.style.position = 'fixed';
            parent.style.zIndex = '10000';
            document.body.appendChild(parent);
            return parent;
        };
        _this.addEventByTrigger = function () {
            var trigger = _this.props.trigger;
            var events = {};
            switch (trigger) {
                case 'hover':
                    events = {
                        onMouseEnter: _this.handleMouseEnter,
                        onMouseLeave: _this.handleMouseLeave
                    };
                    break;
                case 'click':
                    events = {
                        onClick: _this.handleClick,
                        onMouseLeave: _this.handleMouseLeave
                    };
                    break;
                case 'touchstart':
                    events = {
                        onTouchStart: _this.handleTouchStart,
                        onMouseLeave: _this.handleMouseLeave
                    };
                    break;
            }
            return events;
        };
        _this.createChildren = function () {
            var _a = _this.props, innerCls = _a.innerCls, style = _a.style, children = _a.children;
            var eles = children;
            var events = _this.addEventByTrigger();
            var classes = classnames_1.default(innerCls, eles.props && eles.props.className);
            var childrenProperty = __assign({ key: 'childrenElement', className: classes, style: style, ref: _this.refChildren }, events);
            return React.Children.map(eles, function (ele) {
                var tempEle = ele;
                if (ele.type === undefined)
                    tempEle = React.createElement("div", null, ele);
                return React.cloneElement(tempEle, childrenProperty);
            });
        };
        _this.createPopElement = function () {
            var _a = _this.props, className = _a.className, outStyle = _a.outStyle, title = _a.title;
            var popProperty = {
                key: 'popElement',
                className: className,
                style: outStyle
            };
            _this.getPlacement();
            var popElement = React.cloneElement(title, popProperty);
            return react_dom_1.createPortal(popElement, _this.parent);
        };
        _this.getPlacement = function () {
            var _a = _this.props, placement = _a.placement, spacing = _a.spacing;
            var refChildren = _this.refChildren.current;
            if (refChildren) {
                var cPosition = refChildren.getBoundingClientRect();
                var clientHeight = document.documentElement.clientHeight;
                var clientWidth = document.documentElement.clientWidth;
                var parentDOM = _this.parent;
                switch (placement) {
                    case 'top':
                        parentDOM.style.left = (cPosition.left + cPosition.width / 2) + "px";
                        parentDOM.style.bottom = clientHeight - cPosition.top + spacing + "px";
                        parentDOM.style.transform = 'translateX(-50%)';
                        break;
                    case 'topLeft':
                        parentDOM.style.left = cPosition.left + "px";
                        parentDOM.style.bottom = clientHeight - cPosition.top + spacing + "px";
                        break;
                    case 'topRight':
                        parentDOM.style.right = (clientWidth - cPosition.right) + "px";
                        parentDOM.style.bottom = clientHeight - cPosition.top + spacing + "px";
                        break;
                    case 'left':
                        parentDOM.style.right = (clientWidth - cPosition.left + spacing) + "px";
                        parentDOM.style.top = cPosition.top + cPosition.height / 2 + "px";
                        parentDOM.style.transform = 'translateY(-50%)';
                        break;
                    case 'leftTop':
                        parentDOM.style.right = (clientWidth - cPosition.left + spacing) + "px";
                        parentDOM.style.bottom = clientHeight - cPosition.bottom + "px";
                        parentDOM.style.transform = 'translateY(-50%)';
                        break;
                    case 'leftBottom':
                        parentDOM.style.right = (clientWidth - cPosition.left + spacing) + "px";
                        parentDOM.style.bottom = clientHeight - cPosition.bottom + "px";
                        break;
                    case 'bottom':
                        parentDOM.style.left = cPosition.left + cPosition.width / 2 + "px";
                        parentDOM.style.top = (cPosition.bottom + spacing) + "px";
                        parentDOM.style.transform = 'translateX(-50%)';
                        break;
                    case 'bottomLeft':
                        parentDOM.style.left = cPosition.left + "px";
                        parentDOM.style.top = (cPosition.bottom + spacing) + "px";
                        break;
                    case 'bottomRight':
                        parentDOM.style.right = clientWidth - cPosition.right + "px";
                        parentDOM.style.top = (cPosition.bottom + spacing) + "px";
                        break;
                    case 'right':
                        parentDOM.style.left = cPosition.right + spacing + "px";
                        parentDOM.style.top = (cPosition.top + cPosition.height / 2) + "px";
                        parentDOM.style.transform = 'translateY(-50%)';
                        break;
                    case 'rightTop':
                        parentDOM.style.left = cPosition.right + spacing + "px";
                        parentDOM.style.top = cPosition.top + "px";
                        break;
                    case 'rightBottom':
                        parentDOM.style.left = cPosition.right + spacing + "px";
                        parentDOM.style.bottom = clientHeight - cPosition.bottom + "px";
                        break;
                }
            }
        };
        _this.refChildren = React.createRef();
        return _this;
    }
    Popup.prototype.componentDidMount = function () {
        this.parent = this.createParent();
    };
    Popup.prototype.componentWillUnmount = function () {
        document.body.removeChild(this.parent);
    };
    Popup.prototype.render = function () {
        var Pop = null;
        if (this.parent)
            Pop = this.createPopElement();
        return [this.createChildren(), Pop];
    };
    Popup.defaultProps = {
        prefixCls: 'hi',
        placement: 'top',
        trigger: 'hover',
        outStyle: {},
        spacing: 10
    };
    return Popup;
}(React.Component));
exports.default = Popup;

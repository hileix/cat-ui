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
require("./Popup.scss");
var Popup = (function (_super) {
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
            var childrenProperty = __assign({ key: 'childrenElement', className: innerCls, style: style, ref: _this.refChildren }, events);
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
                var chdPosition = refChildren.getBoundingClientRect();
                var clientHeight = document.documentElement.clientHeight;
                var clientWidth = document.documentElement.clientWidth;
                var parentDOM = _this.parent;
                switch (placement) {
                    case 'top':
                        parentDOM.style.left = (chdPosition.left + chdPosition.width / 2) + "px";
                        parentDOM.style.bottom = clientHeight - chdPosition.top + spacing + "px";
                        parentDOM.style.transform = 'translateX(-50%)';
                        break;
                    case 'topLeft':
                        parentDOM.style.left = chdPosition.left + "px";
                        parentDOM.style.bottom = clientHeight - chdPosition.top + spacing + "px";
                        break;
                    case 'topRight':
                        parentDOM.style.right = (clientWidth - chdPosition.right) + "px";
                        parentDOM.style.bottom = clientHeight - chdPosition.top + spacing + "px";
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
        spacing: 20
    };
    return Popup;
}(React.Component));
exports.default = Popup;
//# sourceMappingURL=Popup.js.map
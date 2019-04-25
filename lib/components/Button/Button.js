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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var lodash_1 = require("lodash");
var react_1 = require("react");
var classnames_1 = require("classnames");
var styled_1 = require("./styled");
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        var _this = _super.call(this, props) || this;
        _this.originalBtnStyle = '';
        _this.handleClick = function (event) {
            var _a = _this.props, disabled = _a.disabled, onClick = _a.onClick;
            console.log('Button:handleClick: disabled', disabled);
            if (disabled)
                return;
            onClick && onClick(event);
        };
        _this.onMouseEnter = function () {
            var theme = _this.props.theme;
            var btnDOM = _this.buttonRef.current;
            if (theme === 'primary-up') {
                btnDOM.setAttribute('style', 'top: -3px;');
                console.log('onMouseEnter', btnDOM);
            }
        };
        _this.onMouseLeave = function () {
            var theme = _this.props.theme;
            var btnDOM = _this.buttonRef.current;
            if (theme === 'primary-up') {
                if (_this.originalBtnStyle) {
                    btnDOM.setAttribute('style', _this.originalBtnStyle);
                }
                else {
                    btnDOM.removeAttribute('style');
                }
            }
        };
        _this.state = {};
        _this.buttonRef = React.createRef();
        return _this;
    }
    Button.prototype.componentDidMount = function () {
        var btnDOM = this.buttonRef.current;
        this.originalBtnStyle = btnDOM.getAttribute('style');
        console.log('componentDidMount', lodash_1.debounce);
    };
    Button.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, className = _b.className, style = _b.style, theme = _b.theme, size = _b.size, block = _b.block, disabled = _b.disabled, htmlType = _b.htmlType, children = _b.children, others = __rest(_b, ["prefix", "className", "style", "theme", "size", "block", "disabled", "htmlType", "children"]);
        var classes = classnames_1.default(prefix + "-button", (_a = {},
            _a[prefix + "-button-" + theme] = theme,
            _a[prefix + "-button-" + size] = size,
            _a[prefix + "-button-block"] = block,
            _a[prefix + "-button-disabled"] = disabled,
            _a), className);
        return (React.createElement(styled_1.StyledButton, { ref: this.buttonRef, className: classes, style: style, type: htmlType, disabled: disabled, onClick: this.handleClick, onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave }, children));
    };
    Button.defaultProps = {
        prefix: 'hmly',
        htmlType: 'button',
        theme: 'primary',
        size: 'lg',
        disabled: false
    };
    return Button;
}(react_1.PureComponent));
exports.default = Button;
//# sourceMappingURL=Button.js.map
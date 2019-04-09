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
var react_1 = require("react");
var classnames_1 = require("classnames");
var Portal_1 = require("../Portal");
var components_1 = require("../../components");
var index_1 = require("./styled/index");
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onMaskClick = function (e) {
            if (e.target === e.currentTarget) {
                _this.props.onClose && _this.props.onClose(e);
            }
        };
        _this.handleCancle = function (e) {
            var onClose = _this.props.onClose;
            if (onClose) {
                onClose(e);
            }
            else {
                _this.onMaskClick(e);
            }
        };
        _this.handleOk = function (e) {
            var onOk = _this.props.onOk;
            if (onOk) {
                onOk(e);
            }
            else {
                _this.onMaskClick(e);
            }
        };
        _this.setBodyStyle = function () {
            var node = document.querySelector('body');
            var visible = _this.props.visible;
            if (visible) {
                node.setAttribute('style', 'overflow: hidden; padding-right: 15px;');
            }
            else {
                node.removeAttribute('style');
            }
        };
        _this.toRenderFooter = function () {
            var _a = _this.props, footer = _a.footer, okText = _a.okText, cancelText = _a.cancelText, align = _a.align;
            if (footer) {
                return footer;
            }
            else {
                return (React.createElement(index_1.ModalFooter, { align: align },
                    cancelText.length > 0 && React.createElement(components_1.Button, { theme: 'white-primary', onClick: _this.handleCancle }, cancelText),
                    React.createElement(components_1.Button, { onClick: _this.handleOk }, okText)));
            }
        };
        return _this;
    }
    Modal.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, className = _b.className, style = _b.style, theme = _b.theme, size = _b.size, width = _b.width, disabled = _b.disabled, visible = _b.visible, title = _b.title, okText = _b.okText, cancelText = _b.cancelText, align = _b.align, noClose = _b.noClose, children = _b.children, others = __rest(_b, ["prefix", "className", "style", "theme", "size", "width", "disabled", "visible", "title", "okText", "cancelText", "align", "noClose", "children"]);
        var classes = classnames_1.default(prefix + "-modal", (_a = {},
            _a[prefix + "-modal-" + size] = size,
            _a[prefix + "-modal-" + align] = align,
            _a), className);
        this.setBodyStyle();
        var modalFooter = this.toRenderFooter();
        return (React.createElement(Portal_1.default, { visible: visible },
            React.createElement(index_1.ModalBox, { className: classes, style: style, onClick: this.onMaskClick },
                React.createElement(index_1.InnerModal, null,
                    React.createElement(index_1.ModalHeader, null,
                        title,
                        !noClose && React.createElement(index_1.CloseBox, null,
                            React.createElement(components_1.Icon, { type: 'close', onClick: this.onMaskClick }))),
                    React.createElement(index_1.ModalBody, null, children),
                    modalFooter))));
    };
    Modal.defaultProps = {
        prefix: 'hmly',
        theme: 'primary',
        size: 'md',
        visible: false,
        disabled: false,
        noClose: false
    };
    return Modal;
}(react_1.Component));
exports.default = Modal;
//# sourceMappingURL=Modal.js.map
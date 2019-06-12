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
// import * as PropTypes from 'prop-types'
var classnames_1 = require("classnames");
var Portal_1 = require("../Portal");
var components_1 = require("../../components");
var index_1 = require("./styled/index");
/**
 * 对话框
 */
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal(props) {
        var _this = _super.call(this, props) || this;
        _this.onMaskClick = function (e) {
            var onClose = _this.props.onClose;
            if (e.target === e.currentTarget) {
                onClose && onClose(e);
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
            var nodeBody = document.querySelector('body');
            var nodeFirstDiv = document.querySelector('body > div');
            var visible = _this.props.visible;
            var hasScroll = document.body.scrollHeight > document.documentElement.clientHeight;
            if (visible) {
                Modal.pools[_this.mid] = 1;
                Modal.originalBodyStyle = nodeBody.getAttribute('style');
                Modal.originalFirstDivStyle = nodeBody.getAttribute('style');
                var bodyStyle = hasScroll
                    ? 'overflow: hidden; padding-right: 15px;'
                    : 'padding-right: 15px;';
                nodeBody.setAttribute('style', bodyStyle);
                // nodeFirstDiv.setAttribute('style', 'filter: blur(2px);')
            }
            else {
                Modal.pools[_this.mid] = 0;
                if (Modal.pools.indexOf(1) === -1) {
                    // 背景层不可滑动
                    if (Modal.originalBodyStyle) {
                        nodeBody.setAttribute('style', Modal.originalBodyStyle);
                    }
                    else {
                        nodeBody.removeAttribute('style');
                    }
                    // 背景层模糊
                    // if (Modal.originalFirstDivStyle) {
                    //   nodeFirstDiv.setAttribute('style', Modal.originalFirstDivStyle)
                    // } else {
                    //   nodeFirstDiv.removeAttribute('style')
                    // }
                }
            }
        };
        _this.renderFooter = function () {
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
        _this.mid = Modal.modalId++;
        Modal.pools.push(0);
        return _this;
    }
    Modal.prototype.componentDidUpdate = function () {
        this.setBodyStyle();
    };
    Modal.prototype.render = function () {
        var _a;
        var _b = this.props, prefix = _b.prefix, className = _b.className, style = _b.style, theme = _b.theme, size = _b.size, width = _b.width, disabled = _b.disabled, visible = _b.visible, title = _b.title, okText = _b.okText, cancelText = _b.cancelText, align = _b.align, noCloseIcon = _b.noCloseIcon, children = _b.children, others = __rest(_b, ["prefix", "className", "style", "theme", "size", "width", "disabled", "visible", "title", "okText", "cancelText", "align", "noCloseIcon", "children"]);
        var classes = classnames_1.default(prefix + "-modal", (_a = {},
            _a[prefix + "-modal-" + size] = size,
            _a[prefix + "-modal-" + align] = align,
            _a), className);
        var modalFooter = this.renderFooter();
        return (React.createElement(Portal_1.default, { visible: visible },
            React.createElement(index_1.ModalBox, null,
                React.createElement(index_1.Background, { onClick: this.onMaskClick }),
                React.createElement(index_1.StyledModal, { className: classes, style: style },
                    React.createElement(index_1.ModalHeader, null,
                        title,
                        !noCloseIcon && React.createElement(index_1.CloseBox, null,
                            React.createElement(components_1.Icon, { type: 'close', onClick: this.onMaskClick }))),
                    React.createElement(index_1.ModalBody, null, children),
                    modalFooter))));
    };
    Modal.modalId = 0;
    Modal.pools = [];
    Modal.originalBodyStyle = '';
    Modal.originalFirstDivStyle = '';
    Modal.defaultProps = {
        prefix: 'hmly',
        theme: 'primary',
        size: 'md',
        visible: false,
        disabled: false,
        noCloseIcon: false
    };
    return Modal;
}(react_1.PureComponent));
exports.default = Modal;

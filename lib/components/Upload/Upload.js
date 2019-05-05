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
var react_1 = require("react");
var lodash_1 = require("lodash");
var classnames_1 = require("../../utils/classnames");
var styled_1 = require("./styled");
var errorTypes;
(function (errorTypes) {
    errorTypes[errorTypes["overCount"] = 0] = "overCount";
    errorTypes[errorTypes["overSize"] = 1] = "overSize";
    errorTypes[errorTypes["unmatchAccept"] = 2] = "unmatchAccept";
    errorTypes[errorTypes["trycatch"] = 3] = "trycatch";
})(errorTypes || (errorTypes = {}));
var domProps = {
    id: '',
    style: {},
    multiple: false,
    disabled: false,
    accept: ''
};
var Upload = (function (_super) {
    __extends(Upload, _super);
    function Upload(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isMounted: false
        };
        _this.file = React.createRef();
        return _this;
    }
    Upload.prototype.handleChange = function () {
    };
    Upload.prototype.render = function () {
        var _a = this.props, className = _a.className, theme = _a.theme, forwardedRef = _a.forwardedRef;
        var props = lodash_1.pick(this.props, Object.keys(domProps));
        var classes = classnames_1.default({
            prefix: 'hmly-upload',
            theme: theme
        });
        return (React.createElement(styled_1.StyledUpload, __assign({ type: 'file', className: classes('', className), ref: this.file, onChange: this.handleChange.bind(this) }, props)));
    };
    Upload.defaultProps = {
        theme: 'default',
        style: {},
        multiple: false,
        disabled: false
    };
    return Upload;
}(react_1.Component));
exports.default = Upload;
//# sourceMappingURL=Upload.js.map
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
var classnames_1 = require("classnames");
var react_1 = require("react");
var styled_1 = require("./styled");
var Portal_1 = require("../Portal");
var MessageContent = /** @class */ (function (_super) {
    __extends(MessageContent, _super);
    function MessageContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessageContent.prototype.render = function () {
        var _a = this.props, text = _a.text, type = _a.type;
        var classes = classnames_1.default('message-content', "theme-" + type);
        // console.log('MessageContent:visible', visible)
        return (React.createElement(Portal_1.default, { visible: true },
            React.createElement(styled_1.StyledMessageContent, { className: classes }, text)));
    };
    return MessageContent;
}(react_1.Component));
exports.default = MessageContent;

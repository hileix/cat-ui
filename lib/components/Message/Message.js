"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var noop = require("lodash/noop");
var MessageContent_1 = require("./MessageContent");
var Message = (function () {
    function Message() {
    }
    Message.success = function (text, duration, callback) {
        return Message.show('success', text, duration, callback);
    };
    Message.error = function (text, duration, callback) {
        return Message.show('error', text, duration, callback);
    };
    Message.info = function (text, duration, callback) {
        return Message.show('info', text, duration, callback);
    };
    Message.warn = function (text, duration, callback) {
        return Message.show('warn', text, duration, callback);
    };
    Message.loading = function (text, duration, callback) {
        return Message.show('loading', text, duration, callback);
    };
    Message.show = function (type, text, duration, callback) {
        if (duration === void 0) { duration = 3000; }
        if (callback === void 0) { callback = noop; }
        var container = document.createElement('div');
        ReactDOM.render(React.createElement(MessageContent_1.default, { text: text, type: type }), container);
        setTimeout(function () {
            var unmountResult = ReactDOM.unmountComponentAtNode(container);
            if (unmountResult !== true) {
                container.parentNode.removeChild(container);
            }
            callback();
        }, duration);
    };
    return Message;
}());
exports.default = Message;
//# sourceMappingURL=Message.js.map
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
var Input = (function (_super) {
    __extends(Input, _super);
    function Input(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            value: ''
        };
        var value = typeof props.value === 'undefined' ? props.defaultValue : props.value;
        _this.state = {
            value: value
        };
        return _this;
    }
    Input.prototype.render = function () {
        return (React.createElement("input", null));
    };
    Input.defaultProps = {
        type: 'text',
        disabled: false
    };
    return Input;
}(React.PureComponent));
exports.default = Input;
//# sourceMappingURL=Input.js.map
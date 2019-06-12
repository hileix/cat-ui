"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Enzyme = require("enzyme");
var enzyme_1 = require("enzyme");
var Adapter = require("enzyme-adapter-react-16");
var index_1 = require("../index");
Enzyme.configure({ adapter: new Adapter() });
describe('Popover', function () {
    test('renders correctly', function () {
        var wrapper = enzyme_1.render(React.createElement(index_1.default, { mode: 'click' },
            React.createElement(index_1.default.Trigger, null,
                React.createElement("span", null, "\u70B9\u51FB\u6253\u5F00")),
            React.createElement(index_1.default.Content, null,
                React.createElement("div", { className: 'pop-content' },
                    React.createElement("p", null, "\u901A\u7528\u7684\u89E6\u53D1\u5F0F\u5F39\u5C42\u7EC4\u4EF6, \u53EF\u4EE5\u81EA\u5B9A\u4E49\u5B9A\u4F4D\u7B97\u6CD5\u3001\u89E6\u53D1\u65B9\u5F0F\u4EE5\u53CA\u5F39\u5C42\u663E\u793A\u65B9\u5F0F\u3002"),
                    React.createElement("p", null, "\u5411\u4E0B\u5F39\u51FA\u7684\u5F39\u5C42\u7EC4\u4EF6")))));
        expect(wrapper).toMatchSnapshot();
    });
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Enzyme = require("enzyme");
var enzyme_1 = require("enzyme");
var Adapter = require("enzyme-adapter-react-16");
var index_1 = require("../index");
Enzyme.configure({ adapter: new Adapter() });
describe('Dragger', function () {
    test('renders correctly', function () {
        var wrapper = enzyme_1.render(React.createElement(index_1.default, null,
            React.createElement(index_1.default.Item, { id: 1, className: 'item' },
                React.createElement("div", { className: 'text' }, "111")),
            React.createElement(index_1.default.Item, { id: 2, className: 'item' },
                React.createElement("div", { className: 'text' }, "222")),
            React.createElement(index_1.default.Item, { id: 3, className: 'item' },
                React.createElement("div", { className: 'text' }, "333")),
            React.createElement(index_1.default.Item, { id: 4, className: 'item' },
                React.createElement("div", { className: 'text' }, "444"))));
        expect(wrapper).toMatchSnapshot();
    });
});

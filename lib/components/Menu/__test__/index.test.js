"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Enzyme = require("enzyme");
var enzyme_1 = require("enzyme");
var Adapter = require("enzyme-adapter-react-16");
var index_1 = require("../index");
Enzyme.configure({ adapter: new Adapter() });
describe('Menu', function () {
    test('renders correctly', function () {
        var wrapper = enzyme_1.render(React.createElement(index_1.default, { mode: 'pop', className: 'menu1' },
            React.createElement(index_1.default.Item, null, "Edit"),
            React.createElement(index_1.default.Item, null, "Share"),
            React.createElement(index_1.default.Item, null, "Download"),
            React.createElement(index_1.default.Item, null, "Delete")));
        expect(wrapper).toMatchSnapshot();
    });
});
//# sourceMappingURL=index.test.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Enzyme = require("enzyme");
var enzyme_1 = require("enzyme");
var Adapter = require("enzyme-adapter-react-16");
var index_1 = require("../index");
Enzyme.configure({ adapter: new Adapter() });
describe('Form', function () {
    test('renders correctly', function () {
        var wrapper = enzyme_1.render(React.createElement(index_1.default, null,
            React.createElement(index_1.default.Item, { label: 'field1', desc: 'How much would you like to charge your fans?', tips: 'field1 tips text' })));
        expect(wrapper).toMatchSnapshot();
    });
});
//# sourceMappingURL=index.test.js.map
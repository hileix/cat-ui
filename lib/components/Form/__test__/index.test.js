"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Enzyme = require("enzyme");
var enzyme_1 = require("enzyme");
var Adapter = require("enzyme-adapter-react-16");
var index_1 = require("../index");
var Input_1 = require("../../Input");
Enzyme.configure({ adapter: new Adapter() });
describe('Form', function () {
    test('renders correctly', function () {
        var checkField1 = function (value) {
            var isInvalid = value.length === 0 || value.length > 10;
            var error = isInvalid ? '长度需要大于0，小于10' : '';
            return error;
        };
        var wrapper = enzyme_1.render(React.createElement(index_1.default, { labelWidth: '200px' },
            React.createElement(index_1.default.Item, { name: 'username', label: 'field1', desc: 'How much would you like to charge your fans?', tips: 'field1 tips text', required: true, check: checkField1 },
                React.createElement(Input_1.default, null))));
        expect(wrapper).toMatchSnapshot();
    });
});

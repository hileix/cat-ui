"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Enzyme = require("enzyme");
var enzyme_1 = require("enzyme");
var renderer = require("react-test-renderer");
var Adapter = require("enzyme-adapter-react-16");
var index_1 = require("../index");
Enzyme.configure({ adapter: new Adapter() });
describe('Button', function () {
    test('renders correctly', function () {
        var wrapper = enzyme_1.render(React.createElement(index_1.default, null, "Follow"));
        expect(wrapper).toMatchSnapshot();
    });
    test('two plus two is four', function () {
        expect(2 + 2).toBe(4);
    });
    test('mount correctly', function () {
        if (process.env.REACT === '15') {
            return;
        }
        expect(function () { return renderer.create(React.createElement(index_1.default, null, "Follow")); }).not.toThrow();
    });
});
//# sourceMappingURL=index.test.js.map
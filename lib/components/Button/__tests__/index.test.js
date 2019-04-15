"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Enzyme = require("enzyme");
var enzyme_1 = require("enzyme");
var Adapter = require("enzyme-adapter-react-16");
var index_1 = require("../index");
Enzyme.configure({ adapter: new Adapter() });
describe('Button', function () {
    test('renders correctly', function () {
        var wrapper = enzyme_1.render(React.createElement(index_1.default, null, "Button"));
        expect(wrapper).toMatchSnapshot();
    });
    test('renders characters: Chinese, Japanese', function () {
        var wrapper1 = enzyme_1.render(React.createElement(index_1.default, null, "\u6309\u94AE"));
        var wrapper2 = enzyme_1.render(React.createElement(index_1.default, null, "\u30D2\u30DE\u30E9\u30E4"));
        expect(wrapper1).toMatchSnapshot();
        expect(wrapper2).toMatchSnapshot();
    });
    test('props: size', function () {
        var wrapper1 = enzyme_1.render(React.createElement(index_1.default, { size: 'sm' }, "sm"));
        var wrapper2 = enzyme_1.render(React.createElement(index_1.default, { size: 'md' }, "md"));
        var wrapper3 = enzyme_1.render(React.createElement(index_1.default, { size: 'lg' }, "lg"));
        expect(wrapper1).toMatchSnapshot();
        expect(wrapper2).toMatchSnapshot();
        expect(wrapper3).toMatchSnapshot();
    });
    test('props: theme', function () {
        var wrapper1 = enzyme_1.render(React.createElement(index_1.default, { theme: 'primary' }, "primary"));
        var wrapper2 = enzyme_1.render(React.createElement(index_1.default, { theme: 'yellow' }, "yellow"));
        var wrapper3 = enzyme_1.render(React.createElement(index_1.default, { theme: 'white-primary' }, "white-primary"));
        var wrapper4 = enzyme_1.render(React.createElement(index_1.default, { theme: 'white-cyan' }, "white-cyan"));
        var wrapper5 = enzyme_1.render(React.createElement(index_1.default, { theme: 'borderless' }, "borderless"));
        expect(wrapper1).toMatchSnapshot();
        expect(wrapper2).toMatchSnapshot();
        expect(wrapper3).toMatchSnapshot();
        expect(wrapper4).toMatchSnapshot();
        expect(wrapper5).toMatchSnapshot();
    });
    test('props: block', function () {
        var wrapper = enzyme_1.render(React.createElement(index_1.default, { block: true }, "block"));
        expect(wrapper).toMatchSnapshot();
    });
    test('props: disabled', function () {
        var wrapper = enzyme_1.render(React.createElement(index_1.default, { disabled: true }, "disabled"));
        expect(wrapper).toMatchSnapshot();
    });
    test('props: onClick', function () {
        var isClicked = false;
        var wrapper = enzyme_1.mount(React.createElement(index_1.default, { onClick: function () { isClicked = true; } }, "Button"));
        wrapper.simulate('click');
        expect(isClicked).toBe(true);
    });
});
//# sourceMappingURL=index.test.js.map
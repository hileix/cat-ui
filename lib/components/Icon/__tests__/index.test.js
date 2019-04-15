"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Enzyme = require("enzyme");
var enzyme_1 = require("enzyme");
var Adapter = require("enzyme-adapter-react-16");
var index_1 = require("../index");
Enzyme.configure({ adapter: new Adapter() });
describe('Icon', function () {
    test('renders correctly', function () {
        var wrapper = enzyme_1.render(React.createElement(index_1.default, { type: 'close' }));
        expect(wrapper).toMatchSnapshot();
    });
    test('props: type', function () {
        var wrapper1 = enzyme_1.render(React.createElement(index_1.default, { type: 'question-circle' }));
        var wrapper2 = enzyme_1.render(React.createElement(index_1.default, { type: 'question' }));
        var wrapper3 = enzyme_1.render(React.createElement(index_1.default, { type: 'share3' }));
        var wrapper4 = enzyme_1.render(React.createElement(index_1.default, { type: 'share2' }));
        var wrapper5 = enzyme_1.render(React.createElement(index_1.default, { type: 'share1' }));
        var wrapper6 = enzyme_1.render(React.createElement(index_1.default, { type: 'more' }));
        var wrapper7 = enzyme_1.render(React.createElement(index_1.default, { type: 'stats' }));
        var wrapper8 = enzyme_1.render(React.createElement(index_1.default, { type: 'forward' }));
        var wrapper9 = enzyme_1.render(React.createElement(index_1.default, { type: 'backward' }));
        var wrapper10 = enzyme_1.render(React.createElement(index_1.default, { type: 'ins' }));
        var wrapper11 = enzyme_1.render(React.createElement(index_1.default, { type: 'twitter' }));
        var wrapper12 = enzyme_1.render(React.createElement(index_1.default, { type: 'facebook' }));
        var wrapper13 = enzyme_1.render(React.createElement(index_1.default, { type: 'crown' }));
        var wrapper14 = enzyme_1.render(React.createElement(index_1.default, { type: 'early-access' }));
        var wrapper15 = enzyme_1.render(React.createElement(index_1.default, { type: 'hi-circle' }));
        var wrapper16 = enzyme_1.render(React.createElement(index_1.default, { type: 'ad-free' }));
        var wrapper17 = enzyme_1.render(React.createElement(index_1.default, { type: 'close' }));
        expect(wrapper1).toMatchSnapshot();
        expect(wrapper2).toMatchSnapshot();
        expect(wrapper3).toMatchSnapshot();
        expect(wrapper4).toMatchSnapshot();
        expect(wrapper5).toMatchSnapshot();
        expect(wrapper6).toMatchSnapshot();
        expect(wrapper7).toMatchSnapshot();
        expect(wrapper8).toMatchSnapshot();
        expect(wrapper9).toMatchSnapshot();
        expect(wrapper10).toMatchSnapshot();
        expect(wrapper11).toMatchSnapshot();
        expect(wrapper12).toMatchSnapshot();
        expect(wrapper13).toMatchSnapshot();
        expect(wrapper14).toMatchSnapshot();
        expect(wrapper15).toMatchSnapshot();
        expect(wrapper16).toMatchSnapshot();
        expect(wrapper17).toMatchSnapshot();
    });
    test('props: onClick', function () {
        var isClicked = false;
        var wrapper = enzyme_1.mount(React.createElement(index_1.default, { type: 'more', onClick: function () { isClicked = true; } }));
        wrapper.simulate('click');
        expect(isClicked).toBe(true);
    });
});
//# sourceMappingURL=index.test.js.map
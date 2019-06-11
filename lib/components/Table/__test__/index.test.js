"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Enzyme = require("enzyme");
var Adapter = require("enzyme-adapter-react-16");
Enzyme.configure({ adapter: new Adapter() });
describe('Table', function () {
    // test('renders correctly', () => {
    //   const wrapper = render(
    //     <Table>Test</Table>
    //   )
    //   expect(wrapper).toMatchSnapshot()
    // })
    test('two plus two is four', function () {
        expect(2 + 2).toBe(4);
    });
});
//# sourceMappingURL=index.test.js.map
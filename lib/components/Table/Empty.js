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
var react_1 = require("react");
/**
 * Empty
 */
var Empty = /** @class */ (function (_super) {
    __extends(Empty, _super);
    function Empty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Empty.prototype.render = function () {
        var _a = this.props, colSpan = _a.colSpan, empty = _a.empty, emptyText = _a.emptyText;
        // const defaultEmpty = (<EmptyInner image={EmptyBgImg}>
        //   <span className='content'>
        //     <span className='empty-bg' />
        //     <p className='empty-desc'>{emptyText}</p>
        //   </span>
        // </EmptyInner>)
        // <EmptyImage src={EmptyBgImg} />
        // const emptyDOM = empty ? empty : defaultEmpty
        return (React.createElement("tr", { className: 'hmly-table-row' },
            React.createElement("td", { colSpan: colSpan, className: 'table-td-empty' }, empty)));
    };
    return Empty;
}(react_1.PureComponent));
exports.default = Empty;
//# sourceMappingURL=Empty.js.map
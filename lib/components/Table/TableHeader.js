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
var classnames_1 = require("classnames");
var styled_1 = require("./styled");
var isEmpty = require("lodash/isEmpty");
var Popover_1 = require("../Popover");
var Menu_1 = require("../Menu");
var Radio_1 = require("../Radio");
var TableHeader = (function (_super) {
    __extends(TableHeader, _super);
    function TableHeader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onFilterClick = function (id, value) {
            var onFilterSelect = _this.props.onFilterSelect;
            onFilterSelect && onFilterSelect(id, value);
        };
        _this.renderTds = function () {
            var self = _this;
            var _a = _this.props, columns = _a.columns, filterKeys = _a.filterKeys;
            var _b = filterKeys.id, id = _b === void 0 ? '' : _b, _c = filterKeys.value, value = _c === void 0 ? '' : _c;
            var isAllFilter = value === '';
            return columns.map(function (elem) {
                var elementRender = typeof elem.render === 'function' ? elem.render() : elem.render;
                var hasFilters = !isEmpty(elem.filters);
                return (React.createElement(styled_1.StyledTh, { key: elem.id, className: 'table-th' },
                    React.createElement("span", { className: 'th-inner' },
                        elementRender,
                        hasFilters &&
                            React.createElement(Popover_1.default, { mode: 'click' },
                                React.createElement(Popover_1.default.Trigger, null,
                                    React.createElement(styled_1.StyledFilter, { type: 'filter' })),
                                React.createElement(Popover_1.default.Content, null,
                                    React.createElement("div", { className: 'pop-content-menu' },
                                        React.createElement(Menu_1.default, { mode: 'pop', className: 'menu1' },
                                            elem.filters.map(function (item) {
                                                var filterChecked = item.value === value;
                                                return (React.createElement(Menu_1.default.Item, { key: item.value, onClick: function () { self.onFilterClick(elem.id, item.value); } },
                                                    React.createElement(Radio_1.default, { checked: filterChecked, value: item.value }, item.text)));
                                            }),
                                            React.createElement(Menu_1.default.Item, { key: 'all', onClick: function () { self.onFilterClick(elem.id, ''); } },
                                                React.createElement(Radio_1.default, { checked: isAllFilter, value: 'all' }, "\u5168\u90E8")))))))));
            });
        };
        return _this;
    }
    TableHeader.prototype.render = function () {
        var align = this.props.align;
        var trClasses = classnames_1.default('hmly-table-row', "hmly-table-row-" + align);
        var tds = this.renderTds();
        return (React.createElement(styled_1.StyledTableHeader, { align: align },
            React.createElement("tr", { className: trClasses }, tds)));
    };
    return TableHeader;
}(react_1.Component));
exports.default = TableHeader;
//# sourceMappingURL=TableHeader.js.map
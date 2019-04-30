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
var isEmpty = require("lodash/isEmpty");
var styled_1 = require("./styled");
var TableHeader_1 = require("./TableHeader");
var TableBody_1 = require("./TableBody");
var Pagination_1 = require("../Pagination");
var console = require("console");
var Table = (function (_super) {
    __extends(Table, _super);
    function Table(props) {
        var _this = _super.call(this, props) || this;
        _this.onFilterSelect = function (id, value) {
            var _a = _this.props, columns = _a.columns, align = _a.align, pagination = _a.pagination, dataSource = _a.dataSource;
            var current = pagination.current, total = pagination.total, pageSize = pagination.pageSize, onChange = pagination.onChange;
            var hasPagination = !isEmpty(pagination);
            var begin = (current - 1) * pageSize;
            var currentPageData = dataSource.slice(begin, begin + pageSize);
            var showDataSource = hasPagination ? currentPageData : dataSource;
            var _showDataSource = showDataSource.filter(function (elem, index) {
                if (elem[id] === value || value === '') {
                    return elem;
                }
            });
            console.log('_showDataSource', _showDataSource);
            var _filterKeys = { id: id, value: value };
        };
        _this.onPaginationChange = function (page) {
            var pagination = _this.props.pagination;
            var onChange = pagination.onChange;
            console.log('Table:onPaginationChange', page);
            onChange && onChange(page);
        };
        _this.state = {
            filterKeys: {},
            currentPageData: props.dataSource
        };
        return _this;
    }
    Table.prototype.render = function () {
        var _a = this.state, filterKeys = _a.filterKeys, currentPageData = _a.currentPageData;
        var _b = this.props, className = _b.className, style = _b.style, columns = _b.columns, dataSource = _b.dataSource, align = _b.align, pagination = _b.pagination, empty = _b.empty, emptyText = _b.emptyText;
        var current = pagination.current, total = pagination.total, pageSize = pagination.pageSize, onChange = pagination.onChange;
        var classes = classnames_1.default('hmly-table', className);
        var hasPagination = !isEmpty(pagination);
        return (React.createElement(styled_1.StyledTableBox, { className: classes, style: style },
            React.createElement("table", { className: 'table' },
                React.createElement(TableHeader_1.default, { align: align, columns: columns, filterKeys: filterKeys, onFilterSelect: this.onFilterSelect }),
                React.createElement(TableBody_1.default, { align: align, columns: columns, currentPageData: currentPageData, filterKeys: filterKeys, pagination: pagination, empty: empty, emptyText: emptyText })),
            hasPagination && React.createElement(styled_1.StyledPaginationBox, null,
                React.createElement(Pagination_1.default, { current: current, total: total, pageSize: pageSize, onChange: this.onPaginationChange }))));
    };
    Table.defaultProps = {
        align: 'left',
        emptyText: '',
        pagination: {}
    };
    return Table;
}(react_1.Component));
exports.default = Table;
//# sourceMappingURL=Table.js.map
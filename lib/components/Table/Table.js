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
var isEqual = require("lodash/isEqual");
var styled_1 = require("./styled");
var TableHeader_1 = require("./TableHeader");
var TableBody_1 = require("./TableBody");
var Pagination_1 = require("../Pagination");
var Table = (function (_super) {
    __extends(Table, _super);
    function Table(props) {
        var _this = _super.call(this, props) || this;
        _this.hasPagination = function () {
            return !isEmpty(_this.props.pagination);
        };
        _this.pagingDataSource = function (currentArg) {
            var pagination = _this.props.pagination;
            var filterDataSource = _this.state.filterDataSource;
            var current = pagination.current, pageSize = pagination.pageSize;
            var currentPage = currentArg || current;
            var begin = (currentPage - 1) * pageSize;
            var currentPageData = filterDataSource.slice(begin, begin + pageSize);
            if (_this.hasPagination()) {
                _this.setState({ currentPageData: currentPageData });
            }
        };
        _this.onFilterSelect = function (id, key) {
            var _a = _this.props, dataSource = _a.dataSource, onFilterChange = _a.onFilterChange;
            onFilterChange && onFilterChange(id, key);
            var _filterKeys = { id: id, key: key };
            _this.setState({ filterKeys: _filterKeys });
        };
        _this.onPaginationChange = function (page) {
            var _a = _this.props, pagination = _a.pagination, onPageChange = _a.onPageChange;
            onPageChange && onPageChange(page);
            var onChange = pagination.onChange;
            onChange && onChange(page);
            _this.pagingDataSource(page);
        };
        _this.onDragChange = function (nodes) {
            _this.setState({ currentPageData: nodes });
        };
        _this.state = {
            filterKeys: {},
            pageTotal: 0,
            filterDataSource: props.dataSource,
            currentPageData: props.dataSource
        };
        return _this;
    }
    Table.prototype.componentDidMount = function () {
        if (this.hasPagination()) {
            var pagination = this.props.pagination;
            var _a = pagination.total, total = _a === void 0 ? 0 : _a;
            this.setState({ pageTotal: total });
        }
    };
    Table.prototype.componentDidUpdate = function (prevProps) {
        var dataSource = this.props.dataSource;
        var prevDataSource = prevProps.dataSource;
        if (!isEqual(dataSource, prevDataSource)) {
            this.setState({
                filterDataSource: dataSource,
                currentPageData: dataSource
            });
        }
    };
    Table.prototype.render = function () {
        var _a = this.state, filterKeys = _a.filterKeys, currentPageData = _a.currentPageData, pageTotal = _a.pageTotal;
        var _b = this.props, className = _b.className, style = _b.style, columns = _b.columns, align = _b.align, draggable = _b.draggable, pagination = _b.pagination, empty = _b.empty, emptyText = _b.emptyText, draggedElement = _b.draggedElement, onDragEnd = _b.onDragEnd, onSort = _b.onSort, dataSource = _b.dataSource;
        var current = pagination.current, pageSize = pagination.pageSize;
        var classes = classnames_1.default('hmly-table', className);
        var showPagination = this.hasPagination() && (dataSource.length > 0);
        return (React.createElement(styled_1.StyledTableBox, { className: classes, style: style },
            React.createElement("table", { className: 'table' },
                React.createElement(TableHeader_1.default, { align: align, columns: columns, filterKeys: filterKeys, onFilterSelect: this.onFilterSelect }),
                React.createElement(TableBody_1.default, { align: align, columns: columns, draggable: draggable, currentPageData: currentPageData, empty: empty, emptyText: emptyText, draggedElement: draggedElement, onSort: onSort, onDragEnd: onDragEnd, onDragChange: this.onDragChange })),
            showPagination && React.createElement(styled_1.StyledPaginationBox, null,
                React.createElement(Pagination_1.default, { current: current, total: pageTotal, pageSize: pageSize, onChange: this.onPaginationChange }))));
    };
    Table.defaultProps = {
        align: 'left',
        emptyText: '',
        pagination: {},
        draggable: false
    };
    return Table;
}(react_1.Component));
exports.default = Table;
//# sourceMappingURL=Table.js.map
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
var memoize_one_1 = require("memoize-one");
var isNumber_1 = require("lodash-es/isNumber");
var styled_1 = require("./styled");
var PageItem_1 = require("./PageItem");
var Pagination = (function (_super) {
    __extends(Pagination, _super);
    function Pagination(props) {
        var _this = _super.call(this, props) || this;
        _this.onItemClick = function (value) {
            var onChange = _this.props.onChange;
            onChange && onChange(value);
        };
        _this.onPrevClick = function () {
            var _a = _this.props, onChange = _a.onChange, pageSize = _a.pageSize, current = _a.current;
            if (current > 1) {
                onChange && onChange(current - 1, pageSize);
            }
        };
        _this.onNextClick = function () {
            var _a = _this.props, onChange = _a.onChange, pageSize = _a.pageSize, current = _a.current, total = _a.total;
            var pageNum = Math.ceil(total / pageSize);
            if (current < pageNum) {
                onChange && onChange(current + 1, pageSize);
            }
        };
        _this.calculateShowPages = function (current, pageNum, bufferSize) {
            var res = [current];
            for (var i = 1; i <= bufferSize; i++) {
                if (current - i > 1) {
                    res = [current - i].concat(res);
                }
                if (current + i < pageNum) {
                    res = res.concat([(current + i)]);
                }
            }
            if (current - (bufferSize + 1) > 1) {
                res = ['...'].concat(res);
            }
            if (current > 1) {
                res = [1].concat(res);
            }
            if (current + bufferSize + 1 < pageNum) {
                res = res.concat([' ...']);
            }
            if (current < pageNum) {
                res = res.concat([pageNum]);
            }
            return res;
        };
        _this.renderItems = memoize_one_1.default(function (current, total, pageSize) {
            var pageNum = Math.ceil(total / pageSize);
            var res = _this.calculateShowPages(current, pageNum, 2);
            return res.map(function (element, index) {
                if (isNumber_1.default(element)) {
                    return (React.createElement(PageItem_1.default, { key: element, value: element, active: current === element, onItemClick: _this.onItemClick }, element));
                }
                else {
                    return (React.createElement(styled_1.StyledIcon, { key: "more+" + index, type: 'more' }));
                }
            });
        });
        _this.state = {};
        return _this;
    }
    Pagination.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, current = _a.current, total = _a.total, pageSize = _a.pageSize;
        var classes = classnames_1.default('hmly-pagination', className);
        var items = this.renderItems(current, total, pageSize);
        return (React.createElement(styled_1.StyledPagination, { className: classes, style: style },
            React.createElement(styled_1.StyledIcon, { type: 'prev', onClick: this.onPrevClick }),
            items,
            React.createElement(styled_1.StyledIcon, { type: 'next', onClick: this.onNextClick })));
    };
    Pagination.defaultProps = {
        pageSize: 10
    };
    return Pagination;
}(react_1.Component));
exports.default = Pagination;
//# sourceMappingURL=Pagination.js.map
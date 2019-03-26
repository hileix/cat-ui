"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classNames = require("classnames");
var memoize = require('lodash/memoize');
function classnames(_a) {
    var prefix = _a.prefix, theme = _a.theme;
    return memoize(function (suffix, className) {
        var _a;
        return classNames((_a = {},
            _a["" + prefix] = !!prefix && !suffix,
            _a[prefix + "-" + theme] = !!prefix && !suffix && !!theme,
            _a[prefix + "-" + suffix] = !!prefix && !!suffix,
            _a[prefix + "-" + theme + "-" + suffix] = !!prefix && !!suffix && !!theme,
            _a), className);
    });
}
exports.classnames = classnames;
exports.default = classnames;
//# sourceMappingURL=classnames.js.map
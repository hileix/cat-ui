"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classNames = require("classnames");
var memoize = require('lodash/memoize');
function classnames(params) {
    var prefix = params.prefix, suffix = params.suffix, theme = params.theme;
    return memoize(function (value, className) {
        var _a;
        return classNames((_a = {},
            _a["" + prefix] = !!prefix && !value,
            _a[prefix + "-" + suffix] = !!prefix && !value && !!suffix,
            _a[prefix + "-" + theme] = !!prefix && !value && !!theme,
            _a[prefix + "-" + theme + "-" + suffix] = !!prefix && !value && !!theme && !!suffix,
            _a[prefix + "-" + value] = !!prefix && !!value,
            _a[prefix + "-" + value + "-" + suffix] = !!prefix && !!value && !!suffix,
            _a[prefix + "-" + theme + "-" + value] = !!prefix && !!value && !!theme,
            _a[prefix + "-" + theme + "-" + value + "-" + suffix] = !!prefix && !!value && !!theme && !!suffix,
            _a), className);
    });
}
exports.classnames = classnames;
exports.default = classnames;
//# sourceMappingURL=classnames.js.map
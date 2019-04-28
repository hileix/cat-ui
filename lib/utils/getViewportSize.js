"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getViewportSize() {
    var doc = document.documentElement;
    return {
        width: Math.max(doc.clientWidth, window.innerWidth || 0),
        height: Math.max(doc.clientHeight, window.innerHeight || 0),
    };
}
exports.getViewportSize = getViewportSize;
exports.default = getViewportSize;
//# sourceMappingURL=getViewportSize.js.map
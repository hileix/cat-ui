"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function kindOf(MaybeDerive, Base) {
    return (MaybeDerive === Base ||
        (MaybeDerive && MaybeDerive.prototype instanceof Base));
}
exports.default = kindOf;
//# sourceMappingURL=kindOf.js.map
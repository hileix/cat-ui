"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tests whether MaybeDerive is a covariant of Base
 */
function kindOf(MaybeDerive, Base) {
    return (MaybeDerive === Base ||
        (MaybeDerive && MaybeDerive.prototype instanceof Base));
}
exports.default = kindOf;

//// [webpackLibNormalModule.js]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
var C = /*#__PURE__*/ function() {
    "use strict";
    function C(x) {
        _class_call_check(this, C);
        this.x = x;
        this.exports = [
            x
        ];
    }
    var _proto = C.prototype;
    /** @param {number} y */ _proto.m = function m(y) {
        return this.x + y;
    };
    return C;
}();
function exec() {
    var module = new C(12);
    return module.exports; // should be fine because `module` is defined locally
}
function tricky() {
    // (a trickier variant of what webpack does)
    var module = new C(12);
    return function() {
        return module.exports;
    };
}

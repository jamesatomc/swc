//// [genericClassExpressionInFunction.ts]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _inherits from "@swc/helpers/src/_inherits.mjs";
import _create_super from "@swc/helpers/src/_create_super.mjs";
var A = function A() {
    "use strict";
    _class_call_check(this, A);
}, B2 = function B2() {
    "use strict";
    _class_call_check(this, B2), this.anon = function(A) {
        _inherits(_class, A);
        var _super = _create_super(_class);
        function _class() {
            return _class_call_check(this, _class), _super.apply(this, arguments);
        }
        return _class;
    }(A);
}, K = function(_superClass) {
    "use strict";
    _inherits(K, _superClass);
    var _super = _create_super(K);
    function K() {
        return _class_call_check(this, K), _super.apply(this, arguments);
    }
    return K;
}(function(A) {
    "use strict";
    _inherits(_class, A);
    var _super = _create_super(_class);
    function _class() {
        return _class_call_check(this, _class), _super.apply(this, arguments);
    }
    return _class;
}(A)), C = function(_superClass) {
    "use strict";
    _inherits(C, _superClass);
    var _super = _create_super(C);
    function C() {
        return _class_call_check(this, C), _super.apply(this, arguments);
    }
    return C;
}(new B2().anon), b3Number = function(A) {
    "use strict";
    _inherits(Inner, A);
    var _super = _create_super(Inner);
    function Inner() {
        return _class_call_check(this, Inner), _super.apply(this, arguments);
    }
    return Inner;
}(A), S = function(b3Number) {
    "use strict";
    _inherits(S, b3Number);
    var _super = _create_super(S);
    function S() {
        return _class_call_check(this, S), _super.apply(this, arguments);
    }
    return S;
}(b3Number), c = new C(), k = new K(), s = new S();
c.genericVar = 12, k.genericVar = 12, s.genericVar = 12;

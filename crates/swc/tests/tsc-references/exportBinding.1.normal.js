//// [exportConsts.ts]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
export { x };
export { x as xx };
export default x;
var x = "x";
export { Y as Z };
var Y = function Y() {
    "use strict";
    _class_call_check(this, Y);
};
//// [exportVars.ts]
export { y };
export { y as yy };
export default y;
var y = "y";

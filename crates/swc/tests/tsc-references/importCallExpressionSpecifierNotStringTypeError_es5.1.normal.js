// Error specifier is not assignable to string
import(getSpecifier());
var p1 = import(getSpecifier());
var p2 = import(whatToLoad ? getSpecifier() : "defaulPath");
p1.then(function(zero) {
    return zero.foo(); // ok, zero is any
});
var p3 = import([
    "path1",
    "path2"
]);
var p4 = import(function() {
    return "PathToModule";
});
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _getPrototypeOf(o) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    }, _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
    return _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        return o.__proto__ = p, o;
    }, _setPrototypeOf(o, p);
}
var React = require("react");
function Greet(x) {
    return React.createElement("div", null, "Hello, ", x);
}
var BigGreeter = function(_Component) {
    "use strict";
    !function(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                writable: !0,
                configurable: !0
            }
        }), superClass && _setPrototypeOf(subClass, superClass);
    }(BigGreeter, _Component);
    var Constructor, protoProps, staticProps, Derived, hasNativeReflectConstruct, _super = (Derived = BigGreeter, hasNativeReflectConstruct = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (e) {
            return !1;
        }
    }(), function() {
        var obj, self, call, result, Super = _getPrototypeOf(Derived);
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return self = this, (call = result) && ("object" == ((obj = call) && "undefined" != typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj) || "function" == typeof call) ? call : (function(self) {
            if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return self;
        })(self);
    });
    function BigGreeter() {
        return !function(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }(this, BigGreeter), _super.apply(this, arguments);
    }
    return Constructor = BigGreeter, protoProps = [
        {
            key: "render",
            value: function() {
                return React.createElement("div", null);
            }
        }
    ], _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), BigGreeter;
}(React.Component);
React.createElement(Greet, null), React.createElement(Greet, {
    key: "k"
}), React.createElement(Greet, {
    ref: "myRef"
}), React.createElement(BigGreeter, {
    ref: function(x) {
        return x.greeting.substr(10);
    }
}), React.createElement(BigGreeter, {
    ref: function(x) {
        return x.greeting.subtr(10);
    }
}), React.createElement(BigGreeter, {
    ref: function(x) {
        return x.notARealProperty;
    }
}), React.createElement(BigGreeter, {
    key: 100
}), React.createElement("div", {
    ref: function(x) {
        return x.innerText;
    }
}), React.createElement("div", {
    ref: function(x) {
        return x.propertyNotOnHtmlDivElement;
    }
});
export { };
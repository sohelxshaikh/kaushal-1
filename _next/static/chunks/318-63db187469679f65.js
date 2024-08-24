(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [318], {
        3969: function(t, e, n) {
            var r, o, i, u = "[object Map]",
                a = "[object Promise]",
                s = "[object Set]",
                c = "[object WeakMap]",
                l = "[object DataView]",
                p = /^\[object .+?Constructor\]$/,
                f = /^(?:0|[1-9]\d*)$/,
                h = "\ud800-\udfff",
                y = "\\u0300-\\u036f\\ufe20-\\ufe23",
                v = "\\u20d0-\\u20f0",
                d = "\\ufe0e\\ufe0f",
                b = "[" + y + v + "]",
                g = "\ud83c[\udffb-\udfff]",
                m = "[^" + h + "]",
                _ = "(?:\ud83c[\udde6-\uddff]){2}",
                j = "[\ud800-\udbff][\udc00-\udfff]",
                O = "\\u200d",
                P = "(?:" + b + "|" + g + ")?",
                S = "[" + d + "]?",
                w = "(?:" + O + "(?:" + [m, _, j].join("|") + ")" + S + P + ")*",
                E = RegExp(g + "(?=" + g + ")|(?:" + [m + b + "?", b, _, j, "[" + h + "]"].join("|") + ")" + (S + P + w), "g"),
                T = RegExp("[" + O + h + y + v + d + "]"),
                k = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
                x = "object" == typeof self && self && self.Object === Object && self,
                I = k || x || Function("return this")();

            function M(t) {
                var e = -1,
                    n = Array(t.size);
                return t.forEach(function(t, r) {
                    n[++e] = [r, t]
                }), n
            }

            function D(t) {
                var e = -1,
                    n = Array(t.size);
                return t.forEach(function(t) {
                    n[++e] = t
                }), n
            }
            var A = Function.prototype,
                C = Object.prototype,
                R = I["__core-js_shared__"],
                $ = (r = /[^.]+$/.exec(R && R.keys && R.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "",
                F = A.toString,
                L = C.hasOwnProperty,
                W = C.toString,
                N = RegExp("^" + F.call(L).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                U = I.Symbol,
                V = U ? U.iterator : void 0,
                z = C.propertyIsEnumerable,
                B = (o = Object.keys, i = Object, function(t) {
                    return o(i(t))
                }),
                q = te(I, "DataView"),
                G = te(I, "Map"),
                H = te(I, "Promise"),
                Y = te(I, "Set"),
                J = te(I, "WeakMap"),
                K = tr(q),
                Q = tr(G),
                X = tr(H),
                Z = tr(Y),
                tt = tr(J);

            function te(t, e) {
                var n = null == t ? void 0 : t[e];
                return !(!ta(n) || $ && $ in n) && (tu(n) || function(t) {
                    var e = !1;
                    if (null != t && "function" != typeof t.toString) try {
                        e = !!(t + "")
                    } catch (t) {}
                    return e
                }(n) ? N : p).test(tr(n)) ? n : void 0
            }
            var tn = function(t) {
                return W.call(t)
            };

            function tr(t) {
                if (null != t) {
                    try {
                        return F.call(t)
                    } catch (t) {}
                    try {
                        return t + ""
                    } catch (t) {}
                }
                return ""
            }(q && tn(new q(new ArrayBuffer(1))) != l || G && tn(new G) != u || H && tn(H.resolve()) != a || Y && tn(new Y) != s || J && tn(new J) != c) && (tn = function(t) {
                var e = W.call(t),
                    n = "[object Object]" == e ? t.constructor : void 0,
                    r = n ? tr(n) : void 0;
                if (r) switch (r) {
                    case K:
                        return l;
                    case Q:
                        return u;
                    case X:
                        return a;
                    case Z:
                        return s;
                    case tt:
                        return c
                }
                return e
            });
            var to = Array.isArray;

            function ti(t) {
                var e;
                return null != t && "number" == typeof(e = t.length) && e > -1 && e % 1 == 0 && e <= 9007199254740991 && !tu(t)
            }

            function tu(t) {
                var e = ta(t) ? W.call(t) : "";
                return "[object Function]" == e || "[object GeneratorFunction]" == e
            }

            function ta(t) {
                var e = typeof t;
                return !!t && ("object" == e || "function" == e)
            }

            function ts(t) {
                return !!t && "object" == typeof t
            }

            function tc(t) {
                return t ? function(t, e) {
                    for (var n = -1, r = t ? t.length : 0, o = Array(r); ++n < r;) o[n] = e(t[n], n, t);
                    return o
                }(ti(t) ? function(t, e) {
                    var n, r, o = to(t) || ts(t) && ti(t) && L.call(t, "callee") && (!z.call(t, "callee") || "[object Arguments]" == W.call(t)) ? function(t, e) {
                            for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                            return r
                        }(t.length, String) : [],
                        i = o.length,
                        u = !!i;
                    for (var a in t) L.call(t, a) && !(u && ("length" == a || (n = a, (r = null == (r = i) ? 9007199254740991 : r) && ("number" == typeof n || f.test(n)) && n > -1 && n % 1 == 0 && n < r))) && o.push(a);
                    return o
                }(t) : function(t) {
                    if (n = "function" == typeof(e = t && t.constructor) && e.prototype || C, t !== n) return B(t);
                    var e, n, r = [];
                    for (var o in Object(t)) L.call(t, o) && "constructor" != o && r.push(o);
                    return r
                }(t), function(e) {
                    return t[e]
                }) : []
            }
            t.exports = function(t) {
                if (!t) return [];
                if (ti(t)) {
                    var e;
                    return "string" == typeof t || !to(t) && ts(t) && "[object String]" == W.call(t) ? (e = t, T.test(e) ? e.match(E) || [] : e.split("")) : function(t, e) {
                        var n = -1,
                            r = t.length;
                        for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
                        return e
                    }(t)
                }
                if (V && t[V]) return function(t) {
                    for (var e, n = []; !(e = t.next()).done;) n.push(e.value);
                    return n
                }(t[V]());
                var n = tn(t);
                return (n == u ? M : n == s ? D : tc)(t)
            }
        },
        2703: function(t, e, n) {
            "use strict";
            var r = n(414);

            function o() {}

            function i() {}
            i.resetWarningCache = o, t.exports = function() {
                function t(t, e, n, o, i, u) {
                    if (u !== r) {
                        var a = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw a.name = "Invariant Violation", a
                    }
                }

                function e() {
                    return t
                }
                t.isRequired = t;
                var n = {
                    array: t,
                    bigint: t,
                    bool: t,
                    func: t,
                    number: t,
                    object: t,
                    string: t,
                    symbol: t,
                    any: t,
                    arrayOf: e,
                    element: t,
                    elementType: t,
                    instanceOf: e,
                    node: t,
                    objectOf: e,
                    oneOf: e,
                    oneOfType: e,
                    shape: e,
                    exact: e,
                    checkPropTypes: i,
                    resetWarningCache: o
                };
                return n.PropTypes = n, n
            }
        },
        5697: function(t, e, n) {
            t.exports = n(2703)()
        },
        414: function(t) {
            "use strict";
            t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        1318: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                },
                o = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                i = function(t, e, n) {
                    var r = !0;
                    t: for (; r;) {
                        var o = t,
                            i = e,
                            u = n;
                        r = !1, null === o && (o = Function.prototype);
                        var a = Object.getOwnPropertyDescriptor(o, i);
                        if (void 0 === a) {
                            var s = Object.getPrototypeOf(o);
                            if (null === s) return;
                            t = s, e = i, n = u, r = !0, a = s = void 0;
                            continue t
                        }
                        if ("value" in a) return a.value;
                        var c = a.get;
                        if (void 0 === c) return;
                        return c.call(u)
                    }
                },
                u = n(7294),
                a = n(5697),
                s = n(3969),
                c = function(t) {
                    function e(t) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                        }(this, e), i(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t);
                        var n = this.props,
                            r = n.items,
                            o = n.random;
                        this.state = {
                            index: o ? Math.floor(Math.random() * Math.floor(r.length)) : 0,
                            output: "",
                            substrLength: 0
                        }, this.timeouts = []
                    }
                    return ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, t), o(e, [{
                        key: "componentDidMount",
                        value: function() {
                            this._animate.bind(this)()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.timeouts.map(function(t) {
                                return clearTimeout(t)
                            })
                        }
                    }, {
                        key: "_loop",
                        value: function(t, e) {
                            var n = setTimeout(t, e);
                            this.timeouts.push(n), this.timeouts.length > 100 && (clearTimeout(this.timeouts[0]), this.timeouts.shift())
                        }
                    }, {
                        key: "_type",
                        value: function(t, e) {
                            var n = this.state.output,
                                r = this.props.typingInterval,
                                o = this._type.bind(this, t, e),
                                i = s(t);
                            this.setState({
                                output: i.slice(0, s(n).length + 1).join("")
                            }), n.length < i.length ? this._loop(o, r) : ("function" == typeof this.props.onTypingEnd && this.props.onTypingEnd(), e())
                        }
                    }, {
                        key: "_erase",
                        value: function(t) {
                            var e = this.state.output,
                                n = this.props.deletingInterval,
                                r = this._erase.bind(this, t),
                                o = s(e);
                            "function" == typeof this.props.onDeletingStart && this.props.onDeletingStart(), this.setState({
                                output: o.slice(0, o.length - 1).join("")
                            }), 0 !== o.length ? this._loop(r, n) : ("function" == typeof this.props.onDeletingEnd && this.props.onDeletingEnd(), t())
                        }
                    }, {
                        key: "_overwrite",
                        value: function(t, e) {
                            var n = this.state,
                                r = n.output,
                                o = n.substrLength,
                                i = this.props.deletingInterval,
                                u = this._overwrite.bind(this, t, e),
                                a = s(t),
                                c = s(r);
                            this.setState({
                                output: a.slice(0, o).concat(c.slice(o)),
                                substrLength: o + 1
                            }), a.length !== o ? this._loop(u, i) : (this.setState({
                                output: t,
                                substrLength: 0
                            }), e())
                        }
                    }, {
                        key: "_animate",
                        value: function() {
                            var t = this,
                                e = this.state.index,
                                n = this.props,
                                r = n.items,
                                o = n.pause,
                                i = n.emptyPause,
                                u = n.eraseMode,
                                a = n.random,
                                s = this._type,
                                c = this._erase,
                                l = this._overwrite,
                                p = this._animate.bind(this),
                                f = void 0;
                            f = a ? Math.floor(Math.random() * Math.floor(r.length)) : e === r.length - 1 ? 0 : e + 1;
                            var h = function() {
                                t.setState({
                                    index: f
                                }), t._loop(p, i)
                            };
                            "function" == typeof this.props.onTypingStart && this.props.onTypingStart(), s.bind(this)(r[e], function() {
                                "overwrite" === u ? t._loop(l.bind(t, r[f], h), o) : t._loop(c.bind(t, h), o)
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this.props,
                                e = t.color,
                                n = t.cursor;
                            t.deletingInterval, t.emptyPause, t.items, t.pause, t.eraseMode, t.typingInterval, t.random;
                            var o = function(t, e) {
                                var n = {};
                                for (var r in t) !(e.indexOf(r) >= 0) && Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                                return n
                            }(t, ["color", "cursor", "deletingInterval", "emptyPause", "items", "pause", "eraseMode", "typingInterval", "random"]);
                            return u.createElement("span", r({
                                style: {
                                    color: e
                                }
                            }, o), this.state.output, n ? u.createElement("span", {
                                className: "react-rotating-text-cursor"
                            }, "|") : null)
                        }
                    }]), e
                }(u.Component);
            c.propTypes = {
                color: a.string,
                cursor: a.bool,
                deletingInterval: a.number,
                emptyPause: a.number,
                eraseMode: a.string,
                items: a.array,
                pause: a.number,
                typingInterval: a.number,
                random: a.bool,
                onTypingStart: a.func,
                onTypingEnd: a.func,
                onDeletingStart: a.func,
                onDeletingEnd: a.func
            }, c.defaultProps = {
                color: "inherit",
                cursor: !0,
                deletingInterval: 50,
                emptyPause: 1e3,
                eraseMode: "erase",
                items: ["first", "second", "third", "fourth", "fifth"],
                pause: 1500,
                typingInterval: 50,
                random: !1
            }, e.default = c, t.exports = e.default
        }
    }
]);
! function(t) {
    function e(i) {
        if (n[i]) return n[i].exports;
        var o = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(o.exports, o, o.exports, e), o.l = !0, o.exports
    }
    var n = {};
    e.m = t, e.c = n, e.i = function(t) {
        return t
    }, e.d = function(t, n, i) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 7)
}([function(t, e) {}, function(t, e, n) {
    var i = n(3);
    window.jQuery = i, window.$ = i, window.Tether = n(4), n(2), n(5), n(6)
}, function(t, e) {
    if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); + function(t) {
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(jQuery),
    function() {
        function t(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function e(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            o = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            r = function(t) {
                function e(t) {
                    return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
                }

                function n(t) {
                    return (t[0] || t).nodeType
                }

                function i() {
                    return {
                        bindType: s.end,
                        delegateType: s.end,
                        handle: function(e) {
                            if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                        }
                    }
                }

                function o() {
                    if (window.QUnit) return !1;
                    var t = document.createElement("bootstrap");
                    for (var e in a)
                        if (void 0 !== t.style[e]) return {
                            end: a[e]
                        };
                    return !1
                }

                function r(e) {
                    var n = this,
                        i = !1;
                    return t(this).one(l.TRANSITION_END, function() {
                        i = !0
                    }), setTimeout(function() {
                        i || l.triggerTransitionEnd(n)
                    }, e), this
                }
                var s = !1,
                    a = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    },
                    l = {
                        TRANSITION_END: "bsTransitionEnd",
                        getUID: function(t) {
                            do {
                                t += ~~(1e6 * Math.random())
                            } while (document.getElementById(t));
                            return t
                        },
                        getSelectorFromElement: function(t) {
                            var e = t.getAttribute("data-target");
                            return e || (e = t.getAttribute("href") || "", e = /^#[a-z]/i.test(e) ? e : null), e
                        },
                        reflow: function(t) {
                            return t.offsetHeight
                        },
                        triggerTransitionEnd: function(e) {
                            t(e).trigger(s.end)
                        },
                        supportsTransitionEnd: function() {
                            return Boolean(s)
                        },
                        typeCheckConfig: function(t, i, o) {
                            for (var r in o)
                                if (o.hasOwnProperty(r)) {
                                    var s = o[r],
                                        a = i[r],
                                        l = a && n(a) ? "element" : e(a);
                                    if (!new RegExp(s).test(l)) throw new Error(t.toUpperCase() + ': Option "' + r + '" provided type "' + l + '" but expected type "' + s + '".')
                                }
                        }
                    };
                return function() {
                    s = o(), t.fn.emulateTransitionEnd = r, l.supportsTransitionEnd() && (t.event.special[l.TRANSITION_END] = i())
                }(), l
            }(jQuery),
            s = (function(t) {
                var e = "alert",
                    i = t.fn[e],
                    s = {
                        DISMISS: '[data-dismiss="alert"]'
                    },
                    a = {
                        CLOSE: "close.bs.alert",
                        CLOSED: "closed.bs.alert",
                        CLICK_DATA_API: "click.bs.alert.data-api"
                    },
                    l = {
                        ALERT: "alert",
                        FADE: "fade",
                        SHOW: "show"
                    },
                    u = function() {
                        function e(t) {
                            n(this, e), this._element = t
                        }
                        return e.prototype.close = function(t) {
                            t = t || this._element;
                            var e = this._getRootElement(t);
                            this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
                        }, e.prototype.dispose = function() {
                            t.removeData(this._element, "bs.alert"), this._element = null
                        }, e.prototype._getRootElement = function(e) {
                            var n = r.getSelectorFromElement(e),
                                i = !1;
                            return n && (i = t(n)[0]), i || (i = t(e).closest("." + l.ALERT)[0]), i
                        }, e.prototype._triggerCloseEvent = function(e) {
                            var n = t.Event(a.CLOSE);
                            return t(e).trigger(n), n
                        }, e.prototype._removeElement = function(e) {
                            var n = this;
                            if (t(e).removeClass(l.SHOW), !r.supportsTransitionEnd() || !t(e).hasClass(l.FADE)) return void this._destroyElement(e);
                            t(e).one(r.TRANSITION_END, function(t) {
                                return n._destroyElement(e, t)
                            }).emulateTransitionEnd(150)
                        }, e.prototype._destroyElement = function(e) {
                            t(e).detach().trigger(a.CLOSED).remove()
                        }, e._jQueryInterface = function(n) {
                            return this.each(function() {
                                var i = t(this),
                                    o = i.data("bs.alert");
                                o || (o = new e(this), i.data("bs.alert", o)), "close" === n && o[n](this)
                            })
                        }, e._handleDismiss = function(t) {
                            return function(e) {
                                e && e.preventDefault(), t.close(this)
                            }
                        }, o(e, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.0.0-alpha.6"
                            }
                        }]), e
                    }();
                t(document).on(a.CLICK_DATA_API, s.DISMISS, u._handleDismiss(new u)), t.fn[e] = u._jQueryInterface, t.fn[e].Constructor = u, t.fn[e].noConflict = function() {
                    return t.fn[e] = i, u._jQueryInterface
                }
            }(jQuery), function(t) {
                var e = "button",
                    i = t.fn[e],
                    r = {
                        ACTIVE: "active",
                        BUTTON: "btn",
                        FOCUS: "focus"
                    },
                    s = {
                        DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
                        DATA_TOGGLE: '[data-toggle="buttons"]',
                        INPUT: "input",
                        ACTIVE: ".active",
                        BUTTON: ".btn"
                    },
                    a = {
                        CLICK_DATA_API: "click.bs.button.data-api",
                        FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
                    },
                    l = function() {
                        function e(t) {
                            n(this, e), this._element = t
                        }
                        return e.prototype.toggle = function() {
                            var e = !0,
                                n = t(this._element).closest(s.DATA_TOGGLE)[0];
                            if (n) {
                                var i = t(this._element).find(s.INPUT)[0];
                                if (i) {
                                    if ("radio" === i.type)
                                        if (i.checked && t(this._element).hasClass(r.ACTIVE)) e = !1;
                                        else {
                                            var o = t(n).find(s.ACTIVE)[0];
                                            o && t(o).removeClass(r.ACTIVE)
                                        }
                                    e && (i.checked = !t(this._element).hasClass(r.ACTIVE), t(i).trigger("change")), i.focus()
                                }
                            }
                            this._element.setAttribute("aria-pressed", !t(this._element).hasClass(r.ACTIVE)), e && t(this._element).toggleClass(r.ACTIVE)
                        }, e.prototype.dispose = function() {
                            t.removeData(this._element, "bs.button"), this._element = null
                        }, e._jQueryInterface = function(n) {
                            return this.each(function() {
                                var i = t(this).data("bs.button");
                                i || (i = new e(this), t(this).data("bs.button", i)), "toggle" === n && i[n]()
                            })
                        }, o(e, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.0.0-alpha.6"
                            }
                        }]), e
                    }();
                t(document).on(a.CLICK_DATA_API, s.DATA_TOGGLE_CARROT, function(e) {
                    e.preventDefault();
                    var n = e.target;
                    t(n).hasClass(r.BUTTON) || (n = t(n).closest(s.BUTTON)), l._jQueryInterface.call(t(n), "toggle")
                }).on(a.FOCUS_BLUR_DATA_API, s.DATA_TOGGLE_CARROT, function(e) {
                    var n = t(e.target).closest(s.BUTTON)[0];
                    t(n).toggleClass(r.FOCUS, /^focus(in)?$/.test(e.type))
                }), t.fn[e] = l._jQueryInterface, t.fn[e].Constructor = l, t.fn[e].noConflict = function() {
                    return t.fn[e] = i, l._jQueryInterface
                }
            }(jQuery), function(t) {
                var e = "carousel",
                    s = "bs.carousel",
                    a = "." + s,
                    l = t.fn[e],
                    u = {
                        interval: 5e3,
                        keyboard: !0,
                        slide: !1,
                        pause: "hover",
                        wrap: !0
                    },
                    c = {
                        interval: "(number|boolean)",
                        keyboard: "boolean",
                        slide: "(boolean|string)",
                        pause: "(string|boolean)",
                        wrap: "boolean"
                    },
                    f = {
                        NEXT: "next",
                        PREV: "prev",
                        LEFT: "left",
                        RIGHT: "right"
                    },
                    h = {
                        SLIDE: "slide" + a,
                        SLID: "slid" + a,
                        KEYDOWN: "keydown" + a,
                        MOUSEENTER: "mouseenter" + a,
                        MOUSELEAVE: "mouseleave" + a,
                        LOAD_DATA_API: "load.bs.carousel.data-api",
                        CLICK_DATA_API: "click.bs.carousel.data-api"
                    },
                    d = {
                        CAROUSEL: "carousel",
                        ACTIVE: "active",
                        SLIDE: "slide",
                        RIGHT: "carousel-item-right",
                        LEFT: "carousel-item-left",
                        NEXT: "carousel-item-next",
                        PREV: "carousel-item-prev",
                        ITEM: "carousel-item"
                    },
                    p = {
                        ACTIVE: ".active",
                        ACTIVE_ITEM: ".active.carousel-item",
                        ITEM: ".carousel-item",
                        NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                        INDICATORS: ".carousel-indicators",
                        DATA_SLIDE: "[data-slide], [data-slide-to]",
                        DATA_RIDE: '[data-ride="carousel"]'
                    },
                    g = function() {
                        function l(e, i) {
                            n(this, l), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(i), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(p.INDICATORS)[0], this._addEventListeners()
                        }
                        return l.prototype.next = function() {
                            if (this._isSliding) throw new Error("Carousel is sliding");
                            this._slide(f.NEXT)
                        }, l.prototype.nextWhenVisible = function() {
                            document.hidden || this.next()
                        }, l.prototype.prev = function() {
                            if (this._isSliding) throw new Error("Carousel is sliding");
                            this._slide(f.PREVIOUS)
                        }, l.prototype.pause = function(e) {
                            e || (this._isPaused = !0), t(this._element).find(p.NEXT_PREV)[0] && r.supportsTransitionEnd() && (r.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                        }, l.prototype.cycle = function(t) {
                            t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                        }, l.prototype.to = function(e) {
                            var n = this;
                            this._activeElement = t(this._element).find(p.ACTIVE_ITEM)[0];
                            var i = this._getItemIndex(this._activeElement);
                            if (!(e > this._items.length - 1 || e < 0)) {
                                if (this._isSliding) return void t(this._element).one(h.SLID, function() {
                                    return n.to(e)
                                });
                                if (i === e) return this.pause(), void this.cycle();
                                var o = e > i ? f.NEXT : f.PREVIOUS;
                                this._slide(o, this._items[e])
                            }
                        }, l.prototype.dispose = function() {
                            t(this._element).off(a), t.removeData(this._element, s), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                        }, l.prototype._getConfig = function(n) {
                            return n = t.extend({}, u, n), r.typeCheckConfig(e, n, c), n
                        }, l.prototype._addEventListeners = function() {
                            var e = this;
                            this._config.keyboard && t(this._element).on(h.KEYDOWN, function(t) {
                                return e._keydown(t)
                            }), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || t(this._element).on(h.MOUSEENTER, function(t) {
                                return e.pause(t)
                            }).on(h.MOUSELEAVE, function(t) {
                                return e.cycle(t)
                            })
                        }, l.prototype._keydown = function(t) {
                            if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                                case 37:
                                    t.preventDefault(), this.prev();
                                    break;
                                case 39:
                                    t.preventDefault(), this.next();
                                    break;
                                default:
                                    return
                            }
                        }, l.prototype._getItemIndex = function(e) {
                            return this._items = t.makeArray(t(e).parent().find(p.ITEM)), this._items.indexOf(e)
                        }, l.prototype._getItemByDirection = function(t, e) {
                            var n = t === f.NEXT,
                                i = t === f.PREVIOUS,
                                o = this._getItemIndex(e),
                                r = this._items.length - 1;
                            if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
                            var s = t === f.PREVIOUS ? -1 : 1,
                                a = (o + s) % this._items.length;
                            return -1 === a ? this._items[this._items.length - 1] : this._items[a]
                        }, l.prototype._triggerSlideEvent = function(e, n) {
                            var i = t.Event(h.SLIDE, {
                                relatedTarget: e,
                                direction: n
                            });
                            return t(this._element).trigger(i), i
                        }, l.prototype._setActiveIndicatorElement = function(e) {
                            if (this._indicatorsElement) {
                                t(this._indicatorsElement).find(p.ACTIVE).removeClass(d.ACTIVE);
                                var n = this._indicatorsElement.children[this._getItemIndex(e)];
                                n && t(n).addClass(d.ACTIVE)
                            }
                        }, l.prototype._slide = function(e, n) {
                            var i = this,
                                o = t(this._element).find(p.ACTIVE_ITEM)[0],
                                s = n || o && this._getItemByDirection(e, o),
                                a = Boolean(this._interval),
                                l = void 0,
                                u = void 0,
                                c = void 0;
                            if (e === f.NEXT ? (l = d.LEFT, u = d.NEXT, c = f.LEFT) : (l = d.RIGHT, u = d.PREV, c = f.RIGHT), s && t(s).hasClass(d.ACTIVE)) return void(this._isSliding = !1);
                            if (!this._triggerSlideEvent(s, c).isDefaultPrevented() && o && s) {
                                this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(s);
                                var g = t.Event(h.SLID, {
                                    relatedTarget: s,
                                    direction: c
                                });
                                r.supportsTransitionEnd() && t(this._element).hasClass(d.SLIDE) ? (t(s).addClass(u), r.reflow(s), t(o).addClass(l), t(s).addClass(l), t(o).one(r.TRANSITION_END, function() {
                                    t(s).removeClass(l + " " + u).addClass(d.ACTIVE), t(o).removeClass(d.ACTIVE + " " + u + " " + l), i._isSliding = !1, setTimeout(function() {
                                        return t(i._element).trigger(g)
                                    }, 0)
                                }).emulateTransitionEnd(600)) : (t(o).removeClass(d.ACTIVE), t(s).addClass(d.ACTIVE), this._isSliding = !1, t(this._element).trigger(g)), a && this.cycle()
                            }
                        }, l._jQueryInterface = function(e) {
                            return this.each(function() {
                                var n = t(this).data(s),
                                    o = t.extend({}, u, t(this).data());
                                "object" === (void 0 === e ? "undefined" : i(e)) && t.extend(o, e);
                                var r = "string" == typeof e ? e : o.slide;
                                if (n || (n = new l(this, o), t(this).data(s, n)), "number" == typeof e) n.to(e);
                                else if ("string" == typeof r) {
                                    if (void 0 === n[r]) throw new Error('No method named "' + r + '"');
                                    n[r]()
                                } else o.interval && (n.pause(), n.cycle())
                            })
                        }, l._dataApiClickHandler = function(e) {
                            var n = r.getSelectorFromElement(this);
                            if (n) {
                                var i = t(n)[0];
                                if (i && t(i).hasClass(d.CAROUSEL)) {
                                    var o = t.extend({}, t(i).data(), t(this).data()),
                                        a = this.getAttribute("data-slide-to");
                                    a && (o.interval = !1), l._jQueryInterface.call(t(i), o), a && t(i).data(s).to(a), e.preventDefault()
                                }
                            }
                        }, o(l, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.0.0-alpha.6"
                            }
                        }, {
                            key: "Default",
                            get: function() {
                                return u
                            }
                        }]), l
                    }();
                t(document).on(h.CLICK_DATA_API, p.DATA_SLIDE, g._dataApiClickHandler), t(window).on(h.LOAD_DATA_API, function() {
                    t(p.DATA_RIDE).each(function() {
                        var e = t(this);
                        g._jQueryInterface.call(e, e.data())
                    })
                }), t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function() {
                    return t.fn[e] = l, g._jQueryInterface
                }
            }(jQuery), function(t) {
                var e = "collapse",
                    s = "bs.collapse",
                    a = t.fn[e],
                    l = {
                        toggle: !0,
                        parent: ""
                    },
                    u = {
                        toggle: "boolean",
                        parent: "string"
                    },
                    c = {
                        SHOW: "show.bs.collapse",
                        SHOWN: "shown.bs.collapse",
                        HIDE: "hide.bs.collapse",
                        HIDDEN: "hidden.bs.collapse",
                        CLICK_DATA_API: "click.bs.collapse.data-api"
                    },
                    f = {
                        SHOW: "show",
                        COLLAPSE: "collapse",
                        COLLAPSING: "collapsing",
                        COLLAPSED: "collapsed"
                    },
                    h = {
                        WIDTH: "width",
                        HEIGHT: "height"
                    },
                    d = {
                        ACTIVES: ".card > .show, .card > .collapsing",
                        DATA_TOGGLE: '[data-toggle="collapse"]'
                    },
                    p = function() {
                        function a(e, i) {
                            n(this, a), this._isTransitioning = !1, this._element = e, this._config = this._getConfig(i), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                        }
                        return a.prototype.toggle = function() {
                            t(this._element).hasClass(f.SHOW) ? this.hide() : this.show()
                        }, a.prototype.show = function() {
                            var e = this;
                            if (this._isTransitioning) throw new Error("Collapse is transitioning");
                            if (!t(this._element).hasClass(f.SHOW)) {
                                var n = void 0,
                                    i = void 0;
                                if (this._parent && (n = t.makeArray(t(this._parent).find(d.ACTIVES)), n.length || (n = null)), !(n && (i = t(n).data(s)) && i._isTransitioning)) {
                                    var o = t.Event(c.SHOW);
                                    if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                                        n && (a._jQueryInterface.call(t(n), "hide"), i || t(n).data(s, null));
                                        var l = this._getDimension();
                                        t(this._element).removeClass(f.COLLAPSE).addClass(f.COLLAPSING), this._element.style[l] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && t(this._triggerArray).removeClass(f.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                                        var u = function() {
                                            t(e._element).removeClass(f.COLLAPSING).addClass(f.COLLAPSE).addClass(f.SHOW), e._element.style[l] = "", e.setTransitioning(!1), t(e._element).trigger(c.SHOWN)
                                        };
                                        if (!r.supportsTransitionEnd()) return void u();
                                        var h = l[0].toUpperCase() + l.slice(1),
                                            p = "scroll" + h;
                                        t(this._element).one(r.TRANSITION_END, u).emulateTransitionEnd(600), this._element.style[l] = this._element[p] + "px"
                                    }
                                }
                            }
                        }, a.prototype.hide = function() {
                            var e = this;
                            if (this._isTransitioning) throw new Error("Collapse is transitioning");
                            if (t(this._element).hasClass(f.SHOW)) {
                                var n = t.Event(c.HIDE);
                                if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                                    var i = this._getDimension(),
                                        o = i === h.WIDTH ? "offsetWidth" : "offsetHeight";
                                    this._element.style[i] = this._element[o] + "px", r.reflow(this._element), t(this._element).addClass(f.COLLAPSING).removeClass(f.COLLAPSE).removeClass(f.SHOW), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && t(this._triggerArray).addClass(f.COLLAPSED).attr("aria-expanded", !1), this.setTransitioning(!0);
                                    var s = function() {
                                        e.setTransitioning(!1), t(e._element).removeClass(f.COLLAPSING).addClass(f.COLLAPSE).trigger(c.HIDDEN)
                                    };
                                    if (this._element.style[i] = "", !r.supportsTransitionEnd()) return void s();
                                    t(this._element).one(r.TRANSITION_END, s).emulateTransitionEnd(600)
                                }
                            }
                        }, a.prototype.setTransitioning = function(t) {
                            this._isTransitioning = t
                        }, a.prototype.dispose = function() {
                            t.removeData(this._element, s), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                        }, a.prototype._getConfig = function(n) {
                            return n = t.extend({}, l, n), n.toggle = Boolean(n.toggle), r.typeCheckConfig(e, n, u), n
                        }, a.prototype._getDimension = function() {
                            return t(this._element).hasClass(h.WIDTH) ? h.WIDTH : h.HEIGHT
                        }, a.prototype._getParent = function() {
                            var e = this,
                                n = t(this._config.parent)[0],
                                i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                            return t(n).find(i).each(function(t, n) {
                                e._addAriaAndCollapsedClass(a._getTargetFromElement(n), [n])
                            }), n
                        }, a.prototype._addAriaAndCollapsedClass = function(e, n) {
                            if (e) {
                                var i = t(e).hasClass(f.SHOW);
                                e.setAttribute("aria-expanded", i), n.length && t(n).toggleClass(f.COLLAPSED, !i).attr("aria-expanded", i)
                            }
                        }, a._getTargetFromElement = function(e) {
                            var n = r.getSelectorFromElement(e);
                            return n ? t(n)[0] : null
                        }, a._jQueryInterface = function(e) {
                            return this.each(function() {
                                var n = t(this),
                                    o = n.data(s),
                                    r = t.extend({}, l, n.data(), "object" === (void 0 === e ? "undefined" : i(e)) && e);
                                if (!o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || (o = new a(this, r), n.data(s, o)), "string" == typeof e) {
                                    if (void 0 === o[e]) throw new Error('No method named "' + e + '"');
                                    o[e]()
                                }
                            })
                        }, o(a, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.0.0-alpha.6"
                            }
                        }, {
                            key: "Default",
                            get: function() {
                                return l
                            }
                        }]), a
                    }();
                t(document).on(c.CLICK_DATA_API, d.DATA_TOGGLE, function(e) {
                    e.preventDefault();
                    var n = p._getTargetFromElement(this),
                        i = t(n).data(s),
                        o = i ? "toggle" : t(this).data();
                    p._jQueryInterface.call(t(n), o)
                }), t.fn[e] = p._jQueryInterface, t.fn[e].Constructor = p, t.fn[e].noConflict = function() {
                    return t.fn[e] = a, p._jQueryInterface
                }
            }(jQuery), function(t) {
                var e = "dropdown",
                    i = ".bs.dropdown",
                    s = t.fn[e],
                    a = {
                        HIDE: "hide" + i,
                        HIDDEN: "hidden" + i,
                        SHOW: "show" + i,
                        SHOWN: "shown" + i,
                        CLICK: "click" + i,
                        CLICK_DATA_API: "click.bs.dropdown.data-api",
                        FOCUSIN_DATA_API: "focusin.bs.dropdown.data-api",
                        KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api"
                    },
                    l = {
                        BACKDROP: "dropdown-backdrop",
                        DISABLED: "disabled",
                        SHOW: "show"
                    },
                    u = {
                        BACKDROP: ".dropdown-backdrop",
                        DATA_TOGGLE: '[data-toggle="dropdown"]',
                        FORM_CHILD: ".dropdown form",
                        ROLE_MENU: '[role="menu"]',
                        ROLE_LISTBOX: '[role="listbox"]',
                        NAVBAR_NAV: ".navbar-nav",
                        VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'
                    },
                    c = function() {
                        function e(t) {
                            n(this, e), this._element = t, this._addEventListeners()
                        }
                        return e.prototype.toggle = function() {
                            if (this.disabled || t(this).hasClass(l.DISABLED)) return !1;
                            var n = e._getParentFromElement(this),
                                i = t(n).hasClass(l.SHOW);
                            if (e._clearMenus(), i) return !1;
                            if ("ontouchstart" in document.documentElement && !t(n).closest(u.NAVBAR_NAV).length) {
                                var o = document.createElement("div");
                                o.className = l.BACKDROP, t(o).insertBefore(this), t(o).on("click", e._clearMenus)
                            }
                            var r = {
                                    relatedTarget: this
                                },
                                s = t.Event(a.SHOW, r);
                            return t(n).trigger(s), !s.isDefaultPrevented() && (this.focus(), this.setAttribute("aria-expanded", !0), t(n).toggleClass(l.SHOW), t(n).trigger(t.Event(a.SHOWN, r)), !1)
                        }, e.prototype.dispose = function() {
                            t.removeData(this._element, "bs.dropdown"), t(this._element).off(i), this._element = null
                        }, e.prototype._addEventListeners = function() {
                            t(this._element).on(a.CLICK, this.toggle)
                        }, e._jQueryInterface = function(n) {
                            return this.each(function() {
                                var i = t(this).data("bs.dropdown");
                                if (i || (i = new e(this), t(this).data("bs.dropdown", i)), "string" == typeof n) {
                                    if (void 0 === i[n]) throw new Error('No method named "' + n + '"');
                                    i[n].call(this)
                                }
                            })
                        }, e._clearMenus = function(n) {
                            if (!n || 3 !== n.which) {
                                var i = t(u.BACKDROP)[0];
                                i && i.parentNode.removeChild(i);
                                for (var o = t.makeArray(t(u.DATA_TOGGLE)), r = 0; r < o.length; r++) {
                                    var s = e._getParentFromElement(o[r]),
                                        c = {
                                            relatedTarget: o[r]
                                        };
                                    if (t(s).hasClass(l.SHOW) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "focusin" === n.type) && t.contains(s, n.target))) {
                                        var f = t.Event(a.HIDE, c);
                                        t(s).trigger(f), f.isDefaultPrevented() || (o[r].setAttribute("aria-expanded", "false"), t(s).removeClass(l.SHOW).trigger(t.Event(a.HIDDEN, c)))
                                    }
                                }
                            }
                        }, e._getParentFromElement = function(e) {
                            var n = void 0,
                                i = r.getSelectorFromElement(e);
                            return i && (n = t(i)[0]), n || e.parentNode
                        }, e._dataApiKeydownHandler = function(n) {
                            if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !t(this).hasClass(l.DISABLED))) {
                                var i = e._getParentFromElement(this),
                                    o = t(i).hasClass(l.SHOW);
                                if (!o && 27 !== n.which || o && 27 === n.which) {
                                    if (27 === n.which) {
                                        var r = t(i).find(u.DATA_TOGGLE)[0];
                                        t(r).trigger("focus")
                                    }
                                    return void t(this).trigger("click")
                                }
                                var s = t(i).find(u.VISIBLE_ITEMS).get();
                                if (s.length) {
                                    var a = s.indexOf(n.target);
                                    38 === n.which && a > 0 && a--, 40 === n.which && a < s.length - 1 && a++, a < 0 && (a = 0), s[a].focus()
                                }
                            }
                        }, o(e, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.0.0-alpha.6"
                            }
                        }]), e
                    }();
                t(document).on(a.KEYDOWN_DATA_API, u.DATA_TOGGLE, c._dataApiKeydownHandler).on(a.KEYDOWN_DATA_API, u.ROLE_MENU, c._dataApiKeydownHandler).on(a.KEYDOWN_DATA_API, u.ROLE_LISTBOX, c._dataApiKeydownHandler).on(a.CLICK_DATA_API + " " + a.FOCUSIN_DATA_API, c._clearMenus).on(a.CLICK_DATA_API, u.DATA_TOGGLE, c.prototype.toggle).on(a.CLICK_DATA_API, u.FORM_CHILD, function(t) {
                    t.stopPropagation()
                }), t.fn[e] = c._jQueryInterface, t.fn[e].Constructor = c, t.fn[e].noConflict = function() {
                    return t.fn[e] = s, c._jQueryInterface
                }
            }(jQuery), function(t) {
                var e = "modal",
                    s = ".bs.modal",
                    a = t.fn[e],
                    l = {
                        backdrop: !0,
                        keyboard: !0,
                        focus: !0,
                        show: !0
                    },
                    u = {
                        backdrop: "(boolean|string)",
                        keyboard: "boolean",
                        focus: "boolean",
                        show: "boolean"
                    },
                    c = {
                        HIDE: "hide.bs.modal",
                        HIDDEN: "hidden.bs.modal",
                        SHOW: "show.bs.modal",
                        SHOWN: "shown.bs.modal",
                        FOCUSIN: "focusin.bs.modal",
                        RESIZE: "resize.bs.modal",
                        CLICK_DISMISS: "click.dismiss.bs.modal",
                        KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
                        MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
                        MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
                        CLICK_DATA_API: "click.bs.modal.data-api"
                    },
                    f = {
                        SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                        BACKDROP: "modal-backdrop",
                        OPEN: "modal-open",
                        FADE: "fade",
                        SHOW: "show"
                    },
                    h = {
                        DIALOG: ".modal-dialog",
                        DATA_TOGGLE: '[data-toggle="modal"]',
                        DATA_DISMISS: '[data-dismiss="modal"]',
                        FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
                    },
                    d = function() {
                        function a(e, i) {
                            n(this, a), this._config = this._getConfig(i), this._element = e, this._dialog = t(e).find(h.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                        }
                        return a.prototype.toggle = function(t) {
                            return this._isShown ? this.hide() : this.show(t)
                        }, a.prototype.show = function(e) {
                            var n = this;
                            if (this._isTransitioning) throw new Error("Modal is transitioning");
                            r.supportsTransitionEnd() && t(this._element).hasClass(f.FADE) && (this._isTransitioning = !0);
                            var i = t.Event(c.SHOW, {
                                relatedTarget: e
                            });
                            t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), t(document.body).addClass(f.OPEN), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(c.CLICK_DISMISS, h.DATA_DISMISS, function(t) {
                                return n.hide(t)
                            }), t(this._dialog).on(c.MOUSEDOWN_DISMISS, function() {
                                t(n._element).one(c.MOUSEUP_DISMISS, function(e) {
                                    t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                                })
                            }), this._showBackdrop(function() {
                                return n._showElement(e)
                            }))
                        }, a.prototype.hide = function(e) {
                            var n = this;
                            if (e && e.preventDefault(), this._isTransitioning) throw new Error("Modal is transitioning");
                            var i = r.supportsTransitionEnd() && t(this._element).hasClass(f.FADE);
                            i && (this._isTransitioning = !0);
                            var o = t.Event(c.HIDE);
                            t(this._element).trigger(o), this._isShown && !o.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), t(document).off(c.FOCUSIN), t(this._element).removeClass(f.SHOW), t(this._element).off(c.CLICK_DISMISS), t(this._dialog).off(c.MOUSEDOWN_DISMISS), i ? t(this._element).one(r.TRANSITION_END, function(t) {
                                return n._hideModal(t)
                            }).emulateTransitionEnd(300) : this._hideModal())
                        }, a.prototype.dispose = function() {
                            t.removeData(this._element, "bs.modal"), t(window, document, this._element, this._backdrop).off(s), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null
                        }, a.prototype._getConfig = function(n) {
                            return n = t.extend({}, l, n), r.typeCheckConfig(e, n, u), n
                        }, a.prototype._showElement = function(e) {
                            var n = this,
                                i = r.supportsTransitionEnd() && t(this._element).hasClass(f.FADE);
                            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && r.reflow(this._element), t(this._element).addClass(f.SHOW), this._config.focus && this._enforceFocus();
                            var o = t.Event(c.SHOWN, {
                                    relatedTarget: e
                                }),
                                s = function() {
                                    n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(o)
                                };
                            i ? t(this._dialog).one(r.TRANSITION_END, s).emulateTransitionEnd(300) : s()
                        }, a.prototype._enforceFocus = function() {
                            var e = this;
                            t(document).off(c.FOCUSIN).on(c.FOCUSIN, function(n) {
                                document === n.target || e._element === n.target || t(e._element).has(n.target).length || e._element.focus()
                            })
                        }, a.prototype._setEscapeEvent = function() {
                            var e = this;
                            this._isShown && this._config.keyboard ? t(this._element).on(c.KEYDOWN_DISMISS, function(t) {
                                27 === t.which && e.hide()
                            }) : this._isShown || t(this._element).off(c.KEYDOWN_DISMISS)
                        }, a.prototype._setResizeEvent = function() {
                            var e = this;
                            this._isShown ? t(window).on(c.RESIZE, function(t) {
                                return e._handleUpdate(t)
                            }) : t(window).off(c.RESIZE)
                        }, a.prototype._hideModal = function() {
                            var e = this;
                            this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._isTransitioning = !1, this._showBackdrop(function() {
                                t(document.body).removeClass(f.OPEN), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(c.HIDDEN)
                            })
                        }, a.prototype._removeBackdrop = function() {
                            this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
                        }, a.prototype._showBackdrop = function(e) {
                            var n = this,
                                i = t(this._element).hasClass(f.FADE) ? f.FADE : "";
                            if (this._isShown && this._config.backdrop) {
                                var o = r.supportsTransitionEnd() && i;
                                if (this._backdrop = document.createElement("div"), this._backdrop.className = f.BACKDROP, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(c.CLICK_DISMISS, function(t) {
                                        if (n._ignoreBackdropClick) return void(n._ignoreBackdropClick = !1);
                                        t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                                    }), o && r.reflow(this._backdrop), t(this._backdrop).addClass(f.SHOW), !e) return;
                                if (!o) return void e();
                                t(this._backdrop).one(r.TRANSITION_END, e).emulateTransitionEnd(150)
                            } else if (!this._isShown && this._backdrop) {
                                t(this._backdrop).removeClass(f.SHOW);
                                var s = function() {
                                    n._removeBackdrop(), e && e()
                                };
                                r.supportsTransitionEnd() && t(this._element).hasClass(f.FADE) ? t(this._backdrop).one(r.TRANSITION_END, s).emulateTransitionEnd(150) : s()
                            } else e && e()
                        }, a.prototype._handleUpdate = function() {
                            this._adjustDialog()
                        }, a.prototype._adjustDialog = function() {
                            var t = this._element.scrollHeight > document.documentElement.clientHeight;
                            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                        }, a.prototype._resetAdjustments = function() {
                            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                        }, a.prototype._checkScrollbar = function() {
                            this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                        }, a.prototype._setScrollbar = function() {
                            var e = parseInt(t(h.FIXED_CONTENT).css("padding-right") || 0, 10);
                            this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = e + this._scrollbarWidth + "px")
                        }, a.prototype._resetScrollbar = function() {
                            document.body.style.paddingRight = this._originalBodyPadding
                        }, a.prototype._getScrollbarWidth = function() {
                            var t = document.createElement("div");

                            t.className = f.SCROLLBAR_MEASURER, document.body.appendChild(t);
                            var e = t.offsetWidth - t.clientWidth;
                            return document.body.removeChild(t), e
                        }, a._jQueryInterface = function(e, n) {
                            return this.each(function() {
                                var o = t(this).data("bs.modal"),
                                    r = t.extend({}, a.Default, t(this).data(), "object" === (void 0 === e ? "undefined" : i(e)) && e);
                                if (o || (o = new a(this, r), t(this).data("bs.modal", o)), "string" == typeof e) {
                                    if (void 0 === o[e]) throw new Error('No method named "' + e + '"');
                                    o[e](n)
                                } else r.show && o.show(n)
                            })
                        }, o(a, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.0.0-alpha.6"
                            }
                        }, {
                            key: "Default",
                            get: function() {
                                return l
                            }
                        }]), a
                    }();
                t(document).on(c.CLICK_DATA_API, h.DATA_TOGGLE, function(e) {
                    var n = this,
                        i = void 0,
                        o = r.getSelectorFromElement(this);
                    o && (i = t(o)[0]);
                    var s = t(i).data("bs.modal") ? "toggle" : t.extend({}, t(i).data(), t(this).data());
                    "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
                    var a = t(i).one(c.SHOW, function(e) {
                        e.isDefaultPrevented() || a.one(c.HIDDEN, function() {
                            t(n).is(":visible") && n.focus()
                        })
                    });
                    d._jQueryInterface.call(t(i), s, this)
                }), t.fn[e] = d._jQueryInterface, t.fn[e].Constructor = d, t.fn[e].noConflict = function() {
                    return t.fn[e] = a, d._jQueryInterface
                }
            }(jQuery), function(t) {
                var e = "scrollspy",
                    s = t.fn[e],
                    a = {
                        offset: 10,
                        method: "auto",
                        target: ""
                    },
                    l = {
                        offset: "number",
                        method: "string",
                        target: "(string|element)"
                    },
                    u = {
                        ACTIVATE: "activate.bs.scrollspy",
                        SCROLL: "scroll.bs.scrollspy",
                        LOAD_DATA_API: "load.bs.scrollspy.data-api"
                    },
                    c = {
                        DROPDOWN_ITEM: "dropdown-item",
                        DROPDOWN_MENU: "dropdown-menu",
                        NAV_LINK: "nav-link",
                        NAV: "nav",
                        ACTIVE: "active"
                    },
                    f = {
                        DATA_SPY: '[data-spy="scroll"]',
                        ACTIVE: ".active",
                        LIST_ITEM: ".list-item",
                        LI: "li",
                        LI_DROPDOWN: "li.dropdown",
                        NAV_LINKS: ".nav-link",
                        DROPDOWN: ".dropdown",
                        DROPDOWN_ITEMS: ".dropdown-item",
                        DROPDOWN_TOGGLE: ".dropdown-toggle"
                    },
                    h = {
                        OFFSET: "offset",
                        POSITION: "position"
                    },
                    d = function() {
                        function s(e, i) {
                            var o = this;
                            n(this, s), this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(i), this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(u.SCROLL, function(t) {
                                return o._process(t)
                            }), this.refresh(), this._process()
                        }
                        return s.prototype.refresh = function() {
                            var e = this,
                                n = this._scrollElement !== this._scrollElement.window ? h.POSITION : h.OFFSET,
                                i = "auto" === this._config.method ? n : this._config.method,
                                o = i === h.POSITION ? this._getScrollTop() : 0;
                            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map(function(e) {
                                var n = void 0,
                                    s = r.getSelectorFromElement(e);
                                return s && (n = t(s)[0]), n && (n.offsetWidth || n.offsetHeight) ? [t(n)[i]().top + o, s] : null
                            }).filter(function(t) {
                                return t
                            }).sort(function(t, e) {
                                return t[0] - e[0]
                            }).forEach(function(t) {
                                e._offsets.push(t[0]), e._targets.push(t[1])
                            })
                        }, s.prototype.dispose = function() {
                            t.removeData(this._element, "bs.scrollspy"), t(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                        }, s.prototype._getConfig = function(n) {
                            if (n = t.extend({}, a, n), "string" != typeof n.target) {
                                var i = t(n.target).attr("id");
                                i || (i = r.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i
                            }
                            return r.typeCheckConfig(e, n, l), n
                        }, s.prototype._getScrollTop = function() {
                            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                        }, s.prototype._getScrollHeight = function() {
                            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                        }, s.prototype._getOffsetHeight = function() {
                            return this._scrollElement === window ? window.innerHeight : this._scrollElement.offsetHeight
                        }, s.prototype._process = function() {
                            var t = this._getScrollTop() + this._config.offset,
                                e = this._getScrollHeight(),
                                n = this._config.offset + e - this._getOffsetHeight();
                            if (this._scrollHeight !== e && this.refresh(), t >= n) {
                                var i = this._targets[this._targets.length - 1];
                                return void(this._activeTarget !== i && this._activate(i))
                            }
                            if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                            for (var o = this._offsets.length; o--;) {
                                this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                            }
                        }, s.prototype._activate = function(e) {
                            this._activeTarget = e, this._clear();
                            var n = this._selector.split(",");
                            n = n.map(function(t) {
                                return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                            });
                            var i = t(n.join(","));
                            i.hasClass(c.DROPDOWN_ITEM) ? (i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(c.ACTIVE), i.addClass(c.ACTIVE)) : i.parents(f.LI).find("> " + f.NAV_LINKS).addClass(c.ACTIVE), t(this._scrollElement).trigger(u.ACTIVATE, {
                                relatedTarget: e
                            })
                        }, s.prototype._clear = function() {
                            t(this._selector).filter(f.ACTIVE).removeClass(c.ACTIVE)
                        }, s._jQueryInterface = function(e) {
                            return this.each(function() {
                                var n = t(this).data("bs.scrollspy"),
                                    o = "object" === (void 0 === e ? "undefined" : i(e)) && e;
                                if (n || (n = new s(this, o), t(this).data("bs.scrollspy", n)), "string" == typeof e) {
                                    if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
                                    n[e]()
                                }
                            })
                        }, o(s, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.0.0-alpha.6"
                            }
                        }, {
                            key: "Default",
                            get: function() {
                                return a
                            }
                        }]), s
                    }();
                t(window).on(u.LOAD_DATA_API, function() {
                    for (var e = t.makeArray(t(f.DATA_SPY)), n = e.length; n--;) {
                        var i = t(e[n]);
                        d._jQueryInterface.call(i, i.data())
                    }
                }), t.fn[e] = d._jQueryInterface, t.fn[e].Constructor = d, t.fn[e].noConflict = function() {
                    return t.fn[e] = s, d._jQueryInterface
                }
            }(jQuery), function(t) {
                var e = t.fn.tab,
                    i = {
                        HIDE: "hide.bs.tab",
                        HIDDEN: "hidden.bs.tab",
                        SHOW: "show.bs.tab",
                        SHOWN: "shown.bs.tab",
                        CLICK_DATA_API: "click.bs.tab.data-api"
                    },
                    s = {
                        DROPDOWN_MENU: "dropdown-menu",
                        ACTIVE: "active",
                        DISABLED: "disabled",
                        FADE: "fade",
                        SHOW: "show"
                    },
                    a = {
                        A: "a",
                        LI: "li",
                        DROPDOWN: ".dropdown",
                        LIST: "ul:not(.dropdown-menu), ol:not(.dropdown-menu), nav:not(.dropdown-menu)",
                        FADE_CHILD: "> .nav-item .fade, > .fade",
                        ACTIVE: ".active",
                        ACTIVE_CHILD: "> .nav-item > .active, > .active",
                        DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
                        DROPDOWN_TOGGLE: ".dropdown-toggle",
                        DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
                    },
                    l = function() {
                        function e(t) {
                            n(this, e), this._element = t
                        }
                        return e.prototype.show = function() {
                            var e = this;
                            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(s.ACTIVE) || t(this._element).hasClass(s.DISABLED))) {
                                var n = void 0,
                                    o = void 0,
                                    l = t(this._element).closest(a.LIST)[0],
                                    u = r.getSelectorFromElement(this._element);
                                l && (o = t.makeArray(t(l).find(a.ACTIVE)), o = o[o.length - 1]);
                                var c = t.Event(i.HIDE, {
                                        relatedTarget: this._element
                                    }),
                                    f = t.Event(i.SHOW, {
                                        relatedTarget: o
                                    });
                                if (o && t(o).trigger(c), t(this._element).trigger(f), !f.isDefaultPrevented() && !c.isDefaultPrevented()) {
                                    u && (n = t(u)[0]), this._activate(this._element, l);
                                    var h = function() {
                                        var n = t.Event(i.HIDDEN, {
                                                relatedTarget: e._element
                                            }),
                                            r = t.Event(i.SHOWN, {
                                                relatedTarget: o
                                            });
                                        t(o).trigger(n), t(e._element).trigger(r)
                                    };
                                    n ? this._activate(n, n.parentNode, h) : h()
                                }
                            }
                        }, e.prototype.dispose = function() {
                            t.removeClass(this._element, "bs.tab"), this._element = null
                        }, e.prototype._activate = function(e, n, i) {
                            var o = this,
                                l = t(n).find(a.ACTIVE_CHILD)[0],
                                u = i && r.supportsTransitionEnd() && (l && t(l).hasClass(s.FADE) || Boolean(t(n).find(a.FADE_CHILD)[0])),
                                c = function() {
                                    return o._transitionComplete(e, l, u, i)
                                };
                            l && u ? t(l).one(r.TRANSITION_END, c).emulateTransitionEnd(150) : c(), l && t(l).removeClass(s.SHOW)
                        }, e.prototype._transitionComplete = function(e, n, i, o) {
                            if (n) {
                                t(n).removeClass(s.ACTIVE);
                                var l = t(n.parentNode).find(a.DROPDOWN_ACTIVE_CHILD)[0];
                                l && t(l).removeClass(s.ACTIVE), n.setAttribute("aria-expanded", !1)
                            }
                            if (t(e).addClass(s.ACTIVE), e.setAttribute("aria-expanded", !0), i ? (r.reflow(e), t(e).addClass(s.SHOW)) : t(e).removeClass(s.FADE), e.parentNode && t(e.parentNode).hasClass(s.DROPDOWN_MENU)) {
                                var u = t(e).closest(a.DROPDOWN)[0];
                                u && t(u).find(a.DROPDOWN_TOGGLE).addClass(s.ACTIVE), e.setAttribute("aria-expanded", !0)
                            }
                            o && o()
                        }, e._jQueryInterface = function(n) {
                            return this.each(function() {
                                var i = t(this),
                                    o = i.data("bs.tab");
                                if (o || (o = new e(this), i.data("bs.tab", o)), "string" == typeof n) {
                                    if (void 0 === o[n]) throw new Error('No method named "' + n + '"');
                                    o[n]()
                                }
                            })
                        }, o(e, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.0.0-alpha.6"
                            }
                        }]), e
                    }();
                t(document).on(i.CLICK_DATA_API, a.DATA_TOGGLE, function(e) {
                    e.preventDefault(), l._jQueryInterface.call(t(this), "show")
                }), t.fn.tab = l._jQueryInterface, t.fn.tab.Constructor = l, t.fn.tab.noConflict = function() {
                    return t.fn.tab = e, l._jQueryInterface
                }
            }(jQuery), function(t) {
                if ("undefined" == typeof Tether) throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");
                var e = "tooltip",
                    s = ".bs.tooltip",
                    a = t.fn[e],
                    l = {
                        animation: !0,
                        template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
                        trigger: "hover focus",
                        title: "",
                        delay: 0,
                        html: !1,
                        selector: !1,
                        placement: "top",
                        offset: "0 0",
                        constraints: [],
                        container: !1
                    },
                    u = {
                        animation: "boolean",
                        template: "string",
                        title: "(string|element|function)",
                        trigger: "string",
                        delay: "(number|object)",
                        html: "boolean",
                        selector: "(string|boolean)",
                        placement: "(string|function)",
                        offset: "string",
                        constraints: "array",
                        container: "(string|element|boolean)"
                    },
                    c = {
                        TOP: "bottom center",
                        RIGHT: "middle left",
                        BOTTOM: "top center",
                        LEFT: "middle right"
                    },
                    f = {
                        SHOW: "show",
                        OUT: "out"
                    },
                    h = {
                        HIDE: "hide" + s,
                        HIDDEN: "hidden" + s,
                        SHOW: "show" + s,
                        SHOWN: "shown" + s,
                        INSERTED: "inserted" + s,
                        CLICK: "click" + s,
                        FOCUSIN: "focusin" + s,
                        FOCUSOUT: "focusout" + s,
                        MOUSEENTER: "mouseenter" + s,
                        MOUSELEAVE: "mouseleave" + s
                    },
                    d = {
                        FADE: "fade",
                        SHOW: "show"
                    },
                    p = {
                        TOOLTIP: ".tooltip",
                        TOOLTIP_INNER: ".tooltip-inner"
                    },
                    g = {
                        element: !1,
                        enabled: !1
                    },
                    m = {
                        HOVER: "hover",
                        FOCUS: "focus",
                        CLICK: "click",
                        MANUAL: "manual"
                    },
                    v = function() {
                        function a(t, e) {
                            n(this, a), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._isTransitioning = !1, this._tether = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
                        }
                        return a.prototype.enable = function() {
                            this._isEnabled = !0
                        }, a.prototype.disable = function() {
                            this._isEnabled = !1
                        }, a.prototype.toggleEnabled = function() {
                            this._isEnabled = !this._isEnabled
                        }, a.prototype.toggle = function(e) {
                            if (e) {
                                var n = this.constructor.DATA_KEY,
                                    i = t(e.currentTarget).data(n);
                                i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                            } else {
                                if (t(this.getTipElement()).hasClass(d.SHOW)) return void this._leave(null, this);
                                this._enter(null, this)
                            }
                        }, a.prototype.dispose = function() {
                            clearTimeout(this._timeout), this.cleanupTether(), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null
                        }, a.prototype.show = function() {
                            var e = this;
                            if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                            var n = t.Event(this.constructor.Event.SHOW);
                            if (this.isWithContent() && this._isEnabled) {
                                if (this._isTransitioning) throw new Error("Tooltip is transitioning");
                                t(this.element).trigger(n);
                                var i = t.contains(this.element.ownerDocument.documentElement, this.element);
                                if (n.isDefaultPrevented() || !i) return;
                                var o = this.getTipElement(),
                                    s = r.getUID(this.constructor.NAME);
                                o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && t(o).addClass(d.FADE);
                                var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                                    u = this._getAttachment(l),
                                    c = !1 === this.config.container ? document.body : t(this.config.container);
                                t(o).data(this.constructor.DATA_KEY, this).appendTo(c), t(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({
                                    attachment: u,
                                    element: o,
                                    target: this.element,
                                    classes: g,
                                    classPrefix: "bs-tether",
                                    offset: this.config.offset,
                                    constraints: this.config.constraints,
                                    addTargetClasses: !1
                                }), r.reflow(o), this._tether.position(), t(o).addClass(d.SHOW);
                                var h = function() {
                                    var n = e._hoverState;
                                    e._hoverState = null, e._isTransitioning = !1, t(e.element).trigger(e.constructor.Event.SHOWN), n === f.OUT && e._leave(null, e)
                                };
                                if (r.supportsTransitionEnd() && t(this.tip).hasClass(d.FADE)) return this._isTransitioning = !0, void t(this.tip).one(r.TRANSITION_END, h).emulateTransitionEnd(a._TRANSITION_DURATION);
                                h()
                            }
                        }, a.prototype.hide = function(e) {
                            var n = this,
                                i = this.getTipElement(),
                                o = t.Event(this.constructor.Event.HIDE);
                            if (this._isTransitioning) throw new Error("Tooltip is transitioning");
                            var s = function() {
                                n._hoverState !== f.SHOW && i.parentNode && i.parentNode.removeChild(i), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), n._isTransitioning = !1, n.cleanupTether(), e && e()
                            };
                            t(this.element).trigger(o), o.isDefaultPrevented() || (t(i).removeClass(d.SHOW), this._activeTrigger[m.CLICK] = !1, this._activeTrigger[m.FOCUS] = !1, this._activeTrigger[m.HOVER] = !1, r.supportsTransitionEnd() && t(this.tip).hasClass(d.FADE) ? (this._isTransitioning = !0, t(i).one(r.TRANSITION_END, s).emulateTransitionEnd(150)) : s(), this._hoverState = "")
                        }, a.prototype.isWithContent = function() {
                            return Boolean(this.getTitle())
                        }, a.prototype.getTipElement = function() {
                            return this.tip = this.tip || t(this.config.template)[0]
                        }, a.prototype.setContent = function() {
                            var e = t(this.getTipElement());
                            this.setElementContent(e.find(p.TOOLTIP_INNER), this.getTitle()), e.removeClass(d.FADE + " " + d.SHOW), this.cleanupTether()
                        }, a.prototype.setElementContent = function(e, n) {
                            var o = this.config.html;
                            "object" === (void 0 === n ? "undefined" : i(n)) && (n.nodeType || n.jquery) ? o ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()): e[o ? "html" : "text"](n)
                        }, a.prototype.getTitle = function() {
                            var t = this.element.getAttribute("data-original-title");
                            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
                        }, a.prototype.cleanupTether = function() {
                            this._tether && this._tether.destroy()
                        }, a.prototype._getAttachment = function(t) {
                            return c[t.toUpperCase()]
                        }, a.prototype._setListeners = function() {
                            var e = this;
                            this.config.trigger.split(" ").forEach(function(n) {
                                if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                                    return e.toggle(t)
                                });
                                else if (n !== m.MANUAL) {
                                    var i = n === m.HOVER ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                        o = n === m.HOVER ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                                    t(e.element).on(i, e.config.selector, function(t) {
                                        return e._enter(t)
                                    }).on(o, e.config.selector, function(t) {
                                        return e._leave(t)
                                    })
                                }
                                t(e.element).closest(".modal").on("hide.bs.modal", function() {
                                    return e.hide()
                                })
                            }), this.config.selector ? this.config = t.extend({}, this.config, {
                                trigger: "manual",
                                selector: ""
                            }) : this._fixTitle()
                        }, a.prototype._fixTitle = function() {
                            var t = i(this.element.getAttribute("data-original-title"));
                            (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                        }, a.prototype._enter = function(e, n) {
                            var i = this.constructor.DATA_KEY;
                            return n = n || t(e.currentTarget).data(i), n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? m.FOCUS : m.HOVER] = !0), t(n.getTipElement()).hasClass(d.SHOW) || n._hoverState === f.SHOW ? void(n._hoverState = f.SHOW) : (clearTimeout(n._timeout), n._hoverState = f.SHOW, n.config.delay && n.config.delay.show ? void(n._timeout = setTimeout(function() {
                                n._hoverState === f.SHOW && n.show()
                            }, n.config.delay.show)) : void n.show())
                        }, a.prototype._leave = function(e, n) {
                            var i = this.constructor.DATA_KEY;
                            if (n = n || t(e.currentTarget).data(i), n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? m.FOCUS : m.HOVER] = !1), !n._isWithActiveTrigger()) {
                                if (clearTimeout(n._timeout), n._hoverState = f.OUT, !n.config.delay || !n.config.delay.hide) return void n.hide();
                                n._timeout = setTimeout(function() {
                                    n._hoverState === f.OUT && n.hide()
                                }, n.config.delay.hide)
                            }
                        }, a.prototype._isWithActiveTrigger = function() {
                            for (var t in this._activeTrigger)
                                if (this._activeTrigger[t]) return !0;
                            return !1
                        }, a.prototype._getConfig = function(n) {
                            return n = t.extend({}, this.constructor.Default, t(this.element).data(), n), n.delay && "number" == typeof n.delay && (n.delay = {
                                show: n.delay,
                                hide: n.delay
                            }), r.typeCheckConfig(e, n, this.constructor.DefaultType), n
                        }, a.prototype._getDelegateConfig = function() {
                            var t = {};
                            if (this.config)
                                for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                            return t
                        }, a._jQueryInterface = function(e) {
                            return this.each(function() {
                                var n = t(this).data("bs.tooltip"),
                                    o = "object" === (void 0 === e ? "undefined" : i(e)) && e;
                                if ((n || !/dispose|hide/.test(e)) && (n || (n = new a(this, o), t(this).data("bs.tooltip", n)), "string" == typeof e)) {
                                    if (void 0 === n[e]) throw new Error('No method named "' + e + '"');
                                    n[e]()
                                }
                            })
                        }, o(a, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.0.0-alpha.6"
                            }
                        }, {
                            key: "Default",
                            get: function() {
                                return l
                            }
                        }, {
                            key: "NAME",
                            get: function() {
                                return e
                            }
                        }, {
                            key: "DATA_KEY",
                            get: function() {
                                return "bs.tooltip"
                            }
                        }, {
                            key: "Event",
                            get: function() {
                                return h
                            }
                        }, {
                            key: "EVENT_KEY",
                            get: function() {
                                return s
                            }
                        }, {
                            key: "DefaultType",
                            get: function() {
                                return u
                            }
                        }]), a
                    }();
                return t.fn[e] = v._jQueryInterface, t.fn[e].Constructor = v, t.fn[e].noConflict = function() {
                    return t.fn[e] = a, v._jQueryInterface
                }, v
            }(jQuery));
        ! function(r) {
            var a = "popover",
                l = ".bs.popover",
                u = r.fn[a],
                c = r.extend({}, s.Default, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
                }),
                f = r.extend({}, s.DefaultType, {
                    content: "(string|element|function)"
                }),
                h = {
                    FADE: "fade",
                    SHOW: "show"
                },
                d = {
                    TITLE: ".popover-title",
                    CONTENT: ".popover-content"
                },
                p = {
                    HIDE: "hide" + l,
                    HIDDEN: "hidden" + l,
                    SHOW: "show" + l,
                    SHOWN: "shown" + l,
                    INSERTED: "inserted" + l,
                    CLICK: "click" + l,
                    FOCUSIN: "focusin" + l,
                    FOCUSOUT: "focusout" + l,
                    MOUSEENTER: "mouseenter" + l,
                    MOUSELEAVE: "mouseleave" + l
                },
                g = function(s) {
                    function u() {
                        return n(this, u), t(this, s.apply(this, arguments))
                    }
                    return e(u, s), u.prototype.isWithContent = function() {
                        return this.getTitle() || this._getContent()
                    }, u.prototype.getTipElement = function() {
                        return this.tip = this.tip || r(this.config.template)[0]
                    }, u.prototype.setContent = function() {
                        var t = r(this.getTipElement());
                        this.setElementContent(t.find(d.TITLE), this.getTitle()), this.setElementContent(t.find(d.CONTENT), this._getContent()), t.removeClass(h.FADE + " " + h.SHOW), this.cleanupTether()
                    }, u.prototype._getContent = function() {
                        return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
                    }, u._jQueryInterface = function(t) {
                        return this.each(function() {
                            var e = r(this).data("bs.popover"),
                                n = "object" === (void 0 === t ? "undefined" : i(t)) ? t : null;
                            if ((e || !/destroy|hide/.test(t)) && (e || (e = new u(this, n), r(this).data("bs.popover", e)), "string" == typeof t)) {
                                if (void 0 === e[t]) throw new Error('No method named "' + t + '"');
                                e[t]()
                            }
                        })
                    }, o(u, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-alpha.6"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return c
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return a
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return "bs.popover"
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return p
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return l
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return f
                        }
                    }]), u
                }(s);
            r.fn[a] = g._jQueryInterface, r.fn[a].Constructor = g, r.fn[a].noConflict = function() {
                return r.fn[a] = u, g._jQueryInterface
            }
        }(jQuery)
    }()
}, function(t, e, n) {
    var i, o;
    ! function(e, n) {
        "use strict";
        "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return n(t)
        } : n(e)
    }("undefined" != typeof window ? window : this, function(n, r) {
        "use strict";

        function s(t, e) {
            e = e || st;
            var n = e.createElement("script");
            n.text = t, e.head.appendChild(n).parentNode.removeChild(n)
        }

        function a(t) {
            var e = !!t && "length" in t && t.length,
                n = yt.type(t);
            return "function" !== n && !yt.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function l(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }

        function u(t, e, n) {
            return yt.isFunction(e) ? yt.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            }) : e.nodeType ? yt.grep(t, function(t) {
                return t === e !== n
            }) : "string" != typeof e ? yt.grep(t, function(t) {
                return ft.call(e, t) > -1 !== n
            }) : Dt.test(e) ? yt.filter(e, t, n) : (e = yt.filter(e, t), yt.grep(t, function(t) {
                return ft.call(e, t) > -1 !== n && 1 === t.nodeType
            }))
        }

        function c(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function f(t) {
            var e = {};
            return yt.each(t.match(Lt) || [], function(t, n) {
                e[n] = !0
            }), e
        }

        function h(t) {
            return t
        }

        function d(t) {
            throw t
        }

        function p(t, e, n, i) {
            var o;
            try {
                t && yt.isFunction(o = t.promise) ? o.call(t).done(e).fail(n) : t && yt.isFunction(o = t.then) ? o.call(t, e, n) : e.apply(void 0, [t].slice(i))
            } catch (t) {
                n.apply(void 0, [t])
            }
        }

        function g() {
            st.removeEventListener("DOMContentLoaded", g), n.removeEventListener("load", g), yt.ready()
        }

        function m() {
            this.expando = yt.expando + m.uid++
        }

        function v(t) {
            return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Mt.test(t) ? JSON.parse(t) : t)
        }

        function y(t, e, n) {
            var i;
            if (void 0 === n && 1 === t.nodeType)
                if (i = "data-" + e.replace(Bt, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
                    try {
                        n = v(n)
                    } catch (t) {}
                    Ft.set(t, e, n)
                } else n = void 0;
            return n
        }

        function b(t, e, n, i) {
            var o, r = 1,
                s = 20,
                a = i ? function() {
                    return i.cur()
                } : function() {
                    return yt.css(t, e, "")
                },
                l = a(),
                u = n && n[3] || (yt.cssNumber[e] ? "" : "px"),
                c = (yt.cssNumber[e] || "px" !== u && +l) && $t.exec(yt.css(t, e));
            if (c && c[3] !== u) {
                u = u || c[3], n = n || [], c = +l || 1;
                do {
                    r = r || ".5", c /= r, yt.style(t, e, c + u)
                } while (r !== (r = a() / l) && 1 !== r && --s)
            }
            return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = o)), o
        }

        function _(t) {
            var e, n = t.ownerDocument,
                i = t.nodeName,
                o = Qt[i];
            return o || (e = n.body.appendChild(n.createElement(i)), o = yt.css(e, "display"), e.parentNode.removeChild(e), "none" === o && (o = "block"), Qt[i] = o, o)
        }

        function E(t, e) {
            for (var n, i, o = [], r = 0, s = t.length; r < s; r++) i = t[r], i.style && (n = i.style.display, e ? ("none" === n && (o[r] = Wt.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && Ut(i) && (o[r] = _(i))) : "none" !== n && (o[r] = "none", Wt.set(i, "display", n)));
            for (r = 0; r < s; r++) null != o[r] && (t[r].style.display = o[r]);
            return t
        }

        function T(t, e) {
            var n;
            return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && l(t, e) ? yt.merge([t], n) : n
        }

        function C(t, e) {
            for (var n = 0, i = t.length; n < i; n++) Wt.set(t[n], "globalEval", !e || Wt.get(e[n], "globalEval"))
        }

        function w(t, e, n, i, o) {
            for (var r, s, a, l, u, c, f = e.createDocumentFragment(), h = [], d = 0, p = t.length; d < p; d++)
                if ((r = t[d]) || 0 === r)
                    if ("object" === yt.type(r)) yt.merge(h, r.nodeType ? [r] : r);
                    else if (Jt.test(r)) {
                for (s = s || f.appendChild(e.createElement("div")), a = (Xt.exec(r) || ["", ""])[1].toLowerCase(), l = zt[a] || zt._default, s.innerHTML = l[1] + yt.htmlPrefilter(r) + l[2], c = l[0]; c--;) s = s.lastChild;
                yt.merge(h, s.childNodes), s = f.firstChild, s.textContent = ""
            } else h.push(e.createTextNode(r));
            for (f.textContent = "", d = 0; r = h[d++];)
                if (i && yt.inArray(r, i) > -1) o && o.push(r);
                else if (u = yt.contains(r.ownerDocument, r), s = T(f.appendChild(r), "script"), u && C(s), n)
                for (c = 0; r = s[c++];) Yt.test(r.type || "") && n.push(r);
            return f
        }

        function x() {
            return !0
        }

        function A() {
            return !1
        }

        function S() {
            try {
                return st.activeElement
            } catch (t) {}
        }

        function D(t, e, n, i, o, r) {
            var s, a;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (a in e) D(t, a, n, i, e[a], r);
                return t
            }
            if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = A;
            else if (!o) return t;
            return 1 === r && (s = o, o = function(t) {
                return yt().off(t), s.apply(this, arguments)
            }, o.guid = s.guid || (s.guid = yt.guid++)), t.each(function() {
                yt.event.add(this, e, o, i, n)
            })
        }

        function O(t, e) {
            return l(t, "table") && l(11 !== e.nodeType ? e : e.firstChild, "tr") ? yt(">tbody", t)[0] || t : t
        }

        function I(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function N(t) {
            var e = se.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function k(t, e) {
            var n, i, o, r, s, a, l, u;
            if (1 === e.nodeType) {
                if (Wt.hasData(t) && (r = Wt.access(t), s = Wt.set(e, r), u = r.events)) {
                    delete s.handle, s.events = {};
                    for (o in u)
                        for (n = 0, i = u[o].length; n < i; n++) yt.event.add(e, o, u[o][n])
                }
                Ft.hasData(t) && (a = Ft.access(t), l = yt.extend({}, a), Ft.set(e, l))
            }
        }

        function L(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && Kt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }

        function H(t, e, n, i) {
            e = ut.apply([], e);
            var o, r, a, l, u, c, f = 0,
                h = t.length,
                d = h - 1,
                p = e[0],
                g = yt.isFunction(p);
            if (g || h > 1 && "string" == typeof p && !vt.checkClone && re.test(p)) return t.each(function(o) {
                var r = t.eq(o);
                g && (e[0] = p.call(this, o, r.html())), H(r, e, n, i)
            });
            if (h && (o = w(e, t[0].ownerDocument, !1, t, i), r = o.firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
                for (a = yt.map(T(o, "script"), I), l = a.length; f < h; f++) u = o, f !== d && (u = yt.clone(u, !0, !0), l && yt.merge(a, T(u, "script"))), n.call(t[f], u, f);
                if (l)
                    for (c = a[a.length - 1].ownerDocument, yt.map(a, N), f = 0; f < l; f++) u = a[f], Yt.test(u.type || "") && !Wt.access(u, "globalEval") && yt.contains(c, u) && (u.src ? yt._evalUrl && yt._evalUrl(u.src) : s(u.textContent.replace(ae, ""), c))
            }
            return t
        }

        function j(t, e, n) {
            for (var i, o = e ? yt.filter(e, t) : t, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || yt.cleanData(T(i)), i.parentNode && (n && yt.contains(i.ownerDocument, i) && C(T(i, "script")), i.parentNode.removeChild(i));
            return t
        }

        function P(t, e, n) {
            var i, o, r, s, a = t.style;
            return n = n || ce(t), n && (s = n.getPropertyValue(e) || n[e], "" !== s || yt.contains(t.ownerDocument, t) || (s = yt.style(t, e)), !vt.pixelMarginRight() && ue.test(s) && le.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
        }

        function R(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function W(t) {
            if (t in me) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), n = ge.length; n--;)
                if ((t = ge[n] + e) in me) return t
        }

        function F(t) {
            var e = yt.cssProps[t];
            return e || (e = yt.cssProps[t] = W(t) || t), e
        }

        function M(t, e, n) {
            var i = $t.exec(e);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
        }

        function B(t, e, n, i, o) {
            var r, s = 0;
            for (r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0; r < 4; r += 2) "margin" === n && (s += yt.css(t, n + Vt[r], !0, o)), i ? ("content" === n && (s -= yt.css(t, "padding" + Vt[r], !0, o)), "margin" !== n && (s -= yt.css(t, "border" + Vt[r] + "Width", !0, o))) : (s += yt.css(t, "padding" + Vt[r], !0, o), "padding" !== n && (s += yt.css(t, "border" + Vt[r] + "Width", !0, o)));
            return s
        }

        function q(t, e, n) {
            var i, o = ce(t),
                r = P(t, e, o),
                s = "border-box" === yt.css(t, "boxSizing", !1, o);
            return ue.test(r) ? r : (i = s && (vt.boxSizingReliable() || r === t.style[e]), "auto" === r && (r = t["offset" + e[0].toUpperCase() + e.slice(1)]), (r = parseFloat(r) || 0) + B(t, e, n || (s ? "border" : "content"), i, o) + "px")
        }

        function $(t, e, n, i, o) {
            return new $.prototype.init(t, e, n, i, o)
        }

        function V() {
            ye && (!1 === st.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(V) : n.setTimeout(V, yt.fx.interval), yt.fx.tick())
        }

        function U() {
            return n.setTimeout(function() {
                ve = void 0
            }), ve = yt.now()
        }

        function G(t, e) {
            var n, i = 0,
                o = {
                    height: t
                };
            for (e = e ? 1 : 0; i < 4; i += 2 - e) n = Vt[i], o["margin" + n] = o["padding" + n] = t;
            return e && (o.opacity = o.width = t), o
        }

        function Q(t, e, n) {
            for (var i, o = (Y.tweeners[e] || []).concat(Y.tweeners["*"]), r = 0, s = o.length; r < s; r++)
                if (i = o[r].call(n, e, t)) return i
        }

        function K(t, e, n) {
            var i, o, r, s, a, l, u, c, f = "width" in e || "height" in e,
                h = this,
                d = {},
                p = t.style,
                g = t.nodeType && Ut(t),
                m = Wt.get(t, "fxshow");
            n.queue || (s = yt._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                s.unqueued || a()
            }), s.unqueued++, h.always(function() {
                h.always(function() {
                    s.unqueued--, yt.queue(t, "fx").length || s.empty.fire()
                })
            }));
            for (i in e)
                if (o = e[i], be.test(o)) {
                    if (delete e[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[i]) continue;
                        g = !0
                    }
                    d[i] = m && m[i] || yt.style(t, i)
                }
            if ((l = !yt.isEmptyObject(e)) || !yt.isEmptyObject(d)) {
                f && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = m && m.display, null == u && (u = Wt.get(t, "display")), c = yt.css(t, "display"), "none" === c && (u ? c = u : (E([t], !0), u = t.style.display || u, c = yt.css(t, "display"), E([t]))), ("inline" === c || "inline-block" === c && null != u) && "none" === yt.css(t, "float") && (l || (h.done(function() {
                    p.display = u
                }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function() {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                })), l = !1;
                for (i in d) l || (m ? "hidden" in m && (g = m.hidden) : m = Wt.access(t, "fxshow", {
                    display: u
                }), r && (m.hidden = !g), g && E([t], !0), h.done(function() {
                    g || E([t]), Wt.remove(t, "fxshow");
                    for (i in d) yt.style(t, i, d[i])
                })), l = Q(g ? m[i] : 0, i, h), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
            }
        }

        function X(t, e) {
            var n, i, o, r, s;
            for (n in t)
                if (i = yt.camelCase(n), o = e[i], r = t[n], Array.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (s = yt.cssHooks[i]) && "expand" in s) {
                    r = s.expand(r), delete t[i];
                    for (n in r) n in t || (t[n] = r[n], e[n] = o)
                } else e[i] = o
        }

        function Y(t, e, n) {
            var i, o, r = 0,
                s = Y.prefilters.length,
                a = yt.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var e = ve || U(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, r = 1 - i, s = 0, l = u.tweens.length; s < l; s++) u.tweens[s].run(r);
                    return a.notifyWith(t, [u, r, n]), r < 1 && l ? n : (l || a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u]), !1)
                },
                u = a.promise({
                    elem: t,
                    props: yt.extend({}, e),
                    opts: yt.extend(!0, {
                        specialEasing: {},
                        easing: yt.easing._default
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: ve || U(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = yt.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? u.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; n < i; n++) u.tweens[n].run(1);
                        return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
                    }
                }),
                c = u.props;
            for (X(c, u.opts.specialEasing); r < s; r++)
                if (i = Y.prefilters[r].call(u, t, c, u.opts)) return yt.isFunction(i.stop) && (yt._queueHooks(u.elem, u.opts.queue).stop = yt.proxy(i.stop, i)), i;
            return yt.map(c, Q, u), yt.isFunction(u.opts.start) && u.opts.start.call(t, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), yt.fx.timer(yt.extend(l, {
                elem: t,
                anim: u,
                queue: u.opts.queue
            })), u
        }

        function z(t) {
            return (t.match(Lt) || []).join(" ")
        }

        function J(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function Z(t, e, n, i) {
            var o;
            if (Array.isArray(e)) yt.each(e, function(e, o) {
                n || Ie.test(t) ? i(t, o) : Z(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i)
            });
            else if (n || "object" !== yt.type(e)) i(t, e);
            else
                for (o in e) Z(t + "[" + o + "]", e[o], n, i)
        }

        function tt(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, o = 0,
                    r = e.toLowerCase().match(Lt) || [];
                if (yt.isFunction(n))
                    for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function et(t, e, n, i) {
            function o(a) {
                var l;
                return r[a] = !0, yt.each(t[a] || [], function(t, a) {
                    var u = a(e, n, i);
                    return "string" != typeof u || s || r[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), o(u), !1)
                }), l
            }
            var r = {},
                s = t === qe;
            return o(e.dataTypes[0]) || !r["*"] && o("*")
        }

        function nt(t, e) {
            var n, i, o = yt.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
            return i && yt.extend(!0, t, i), t
        }

        function it(t, e, n) {
            for (var i, o, r, s, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
            if (i)
                for (o in a)
                    if (a[o] && a[o].test(i)) {
                        l.unshift(o);
                        break
                    }
            if (l[0] in n) r = l[0];
            else {
                for (o in n) {
                    if (!l[0] || t.converters[o + " " + l[0]]) {
                        r = o;
                        break
                    }
                    s || (s = o)
                }
                r = r || s
            }
            if (r) return r !== l[0] && l.unshift(r), n[r]
        }

        function ot(t, e, n, i) {
            var o, r, s, a, l, u = {},
                c = t.dataTypes.slice();
            if (c[1])
                for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
            for (r = c.shift(); r;)
                if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift())
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                if (!(s = u[l + " " + r] || u["* " + r]))
                    for (o in u)
                        if (a = o.split(" "), a[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                            !0 === s ? s = u[o] : !0 !== u[o] && (r = a[0], c.unshift(a[1]));
                            break
                        }
                if (!0 !== s)
                    if (s && t.throws) e = s(e);
                    else try {
                        e = s(e)
                    } catch (t) {
                        return {
                            state: "parsererror",
                            error: s ? t : "No conversion from " + l + " to " + r
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }
        var rt = [],
            st = n.document,
            at = Object.getPrototypeOf,
            lt = rt.slice,
            ut = rt.concat,
            ct = rt.push,
            ft = rt.indexOf,
            ht = {},
            dt = ht.toString,
            pt = ht.hasOwnProperty,
            gt = pt.toString,
            mt = gt.call(Object),
            vt = {},
            yt = function(t, e) {
                return new yt.fn.init(t, e)
            },
            bt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            _t = /^-ms-/,
            Et = /-([a-z])/g,
            Tt = function(t, e) {
                return e.toUpperCase()
            };
        yt.fn = yt.prototype = {
            jquery: "3.2.1",
            constructor: yt,
            length: 0,
            toArray: function() {
                return lt.call(this)
            },
            get: function(t) {
                return null == t ? lt.call(this) : t < 0 ? this[t + this.length] : this[t]
            },
            pushStack: function(t) {
                var e = yt.merge(this.constructor(), t);
                return e.prevObject = this, e
            },
            each: function(t) {
                return yt.each(this, t)
            },
            map: function(t) {
                return this.pushStack(yt.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(lt.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: ct,
            sort: rt.sort,
            splice: rt.splice
        }, yt.extend = yt.fn.extend = function() {
            var t, e, n, i, o, r, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || yt.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
                if (null != (t = arguments[a]))
                    for (e in t) n = s[e], i = t[e], s !== i && (u && i && (yt.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && yt.isPlainObject(n) ? n : {}, s[e] = yt.extend(u, r, i)) : void 0 !== i && (s[e] = i));
            return s
        }, yt.extend({
            expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === yt.type(t)
            },
            isWindow: function(t) {
                return null != t && t === t.window
            },
            isNumeric: function(t) {
                var e = yt.type(t);
                return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
            },
            isPlainObject: function(t) {
                var e, n;
                return !(!t || "[object Object]" !== dt.call(t)) && (!(e = at(t)) || "function" == typeof(n = pt.call(e, "constructor") && e.constructor) && gt.call(n) === mt)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? ht[dt.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                s(t)
            },
            camelCase: function(t) {
                return t.replace(_t, "ms-").replace(Et, Tt)
            },
            each: function(t, e) {
                var n, i = 0;
                if (a(t))
                    for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
                else
                    for (i in t)
                        if (!1 === e.call(t[i], i, t[i])) break; return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(bt, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (a(Object(t)) ? yt.merge(n, "string" == typeof t ? [t] : t) : ct.call(n, t)), n
            },
            inArray: function(t, e, n) {
                return null == e ? -1 : ft.call(e, t, n)
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, o = t.length; i < n; i++) t[o++] = e[i];
                return t.length = o, t
            },
            grep: function(t, e, n) {
                for (var i = [], o = 0, r = t.length, s = !n; o < r; o++) !e(t[o], o) !== s && i.push(t[o]);
                return i
            },
            map: function(t, e, n) {
                var i, o, r = 0,
                    s = [];
                if (a(t))
                    for (i = t.length; r < i; r++) null != (o = e(t[r], r, n)) && s.push(o);
                else
                    for (r in t) null != (o = e(t[r], r, n)) && s.push(o);
                return ut.apply([], s)
            },
            guid: 1,
            proxy: function(t, e) {
                var n, i, o;
                if ("string" == typeof e && (n = t[e], e = t, t = n), yt.isFunction(t)) return i = lt.call(arguments, 2), o = function() {
                    return t.apply(e || this, i.concat(lt.call(arguments)))
                }, o.guid = t.guid = t.guid || yt.guid++, o
            },
            now: Date.now,
            support: vt
        }), "function" == typeof Symbol && (yt.fn[Symbol.iterator] = rt[Symbol.iterator]), yt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            ht["[object " + e + "]"] = e.toLowerCase()
        });
        var Ct = function(t) {
            function e(t, e, n, i) {
                var o, r, s, a, l, c, h, d = e && e.ownerDocument,
                    p = e ? e.nodeType : 9;
                if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
                if (!i && ((e ? e.ownerDocument || e : F) !== N && I(e), e = e || N, L)) {
                    if (11 !== p && (l = gt.exec(t)))
                        if (o = l[1]) {
                            if (9 === p) {
                                if (!(s = e.getElementById(o))) return n;
                                if (s.id === o) return n.push(s), n
                            } else if (d && (s = d.getElementById(o)) && R(e, s) && s.id === o) return n.push(s), n
                        } else {
                            if (l[2]) return Y.apply(n, e.getElementsByTagName(t)), n;
                            if ((o = l[3]) && _.getElementsByClassName && e.getElementsByClassName) return Y.apply(n, e.getElementsByClassName(o)), n
                        }
                    if (_.qsa && !V[t + " "] && (!H || !H.test(t))) {
                        if (1 !== p) d = e, h = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((a = e.getAttribute("id")) ? a = a.replace(bt, _t) : e.setAttribute("id", a = W), c = w(t), r = c.length; r--;) c[r] = "#" + a + " " + f(c[r]);
                            h = c.join(","), d = mt.test(t) && u(e.parentNode) || e
                        }
                        if (h) try {
                            return Y.apply(n, d.querySelectorAll(h)), n
                        } catch (t) {} finally {
                            a === W && e.removeAttribute("id")
                        }
                    }
                }
                return A(t.replace(rt, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > E.cacheLength && delete t[e.shift()], t[n + " "] = i
                }
                var e = [];
                return t
            }

            function i(t) {
                return t[W] = !0, t
            }

            function o(t) {
                var e = N.createElement("fieldset");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function r(t, e) {
                for (var n = t.split("|"), i = n.length; i--;) E.attrHandle[n[i]] = e
            }

            function s(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function(e) {
                    return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Tt(e) === t : e.disabled === t : "label" in e && e.disabled === t
                }
            }

            function l(t) {
                return i(function(e) {
                    return e = +e, i(function(n, i) {
                        for (var o, r = t([], n.length, e), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function u(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }

            function c() {}

            function f(t) {
                for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                return i
            }

            function h(t, e, n) {
                var i = e.dir,
                    o = e.next,
                    r = o || i,
                    s = n && "parentNode" === r,
                    a = B++;
                return e.first ? function(e, n, o) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || s) return t(e, n, o);
                    return !1
                } : function(e, n, l) {
                    var u, c, f, h = [M, a];
                    if (l) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || s) && t(e, n, l)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || s)
                                if (f = e[W] || (e[W] = {}), c = f[e.uniqueID] || (f[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[i] || e;
                                else {
                                    if ((u = c[r]) && u[0] === M && u[1] === a) return h[2] = u[2];
                                    if (c[r] = h, h[2] = t(e, n, l)) return !0
                                } return !1
                }
            }

            function d(t) {
                return t.length > 1 ? function(e, n, i) {
                    for (var o = t.length; o--;)
                        if (!t[o](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function p(t, n, i) {
                for (var o = 0, r = n.length; o < r; o++) e(t, n[o], i);
                return i
            }

            function g(t, e, n, i, o) {
                for (var r, s = [], a = 0, l = t.length, u = null != e; a < l; a++)(r = t[a]) && (n && !n(r, i, o) || (s.push(r), u && e.push(a)));
                return s
            }

            function m(t, e, n, o, r, s) {
                return o && !o[W] && (o = m(o)), r && !r[W] && (r = m(r, s)), i(function(i, s, a, l) {
                    var u, c, f, h = [],
                        d = [],
                        m = s.length,
                        v = i || p(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !i && e ? v : g(v, h, t, a, l),
                        b = n ? r || (i ? t : m || o) ? [] : s : y;
                    if (n && n(y, b, a, l), o)
                        for (u = g(b, d), o(u, [], a, l), c = u.length; c--;)(f = u[c]) && (b[d[c]] = !(y[d[c]] = f));
                    if (i) {
                        if (r || t) {
                            if (r) {
                                for (u = [], c = b.length; c--;)(f = b[c]) && u.push(y[c] = f);
                                r(null, b = [], u, l)
                            }
                            for (c = b.length; c--;)(f = b[c]) && (u = r ? J(i, f) : h[c]) > -1 && (i[u] = !(s[u] = f))
                        }
                    } else b = g(b === s ? b.splice(m, b.length) : b), r ? r(null, s, b, l) : Y.apply(s, b)
                })
            }

            function v(t) {
                for (var e, n, i, o = t.length, r = E.relative[t[0].type], s = r || E.relative[" "], a = r ? 1 : 0, l = h(function(t) {
                        return t === e
                    }, s, !0), u = h(function(t) {
                        return J(e, t) > -1
                    }, s, !0), c = [function(t, n, i) {
                        var o = !r && (i || n !== S) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
                        return e = null, o
                    }]; a < o; a++)
                    if (n = E.relative[t[a].type]) c = [h(d(c), n)];
                    else {
                        if (n = E.filter[t[a].type].apply(null, t[a].matches), n[W]) {
                            for (i = ++a; i < o && !E.relative[t[i].type]; i++);
                            return m(a > 1 && d(c), a > 1 && f(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(rt, "$1"), n, a < i && v(t.slice(a, i)), i < o && v(t = t.slice(i)), i < o && f(t))
                        }
                        c.push(n)
                    }
                return d(c)
            }

            function y(t, n) {
                var o = n.length > 0,
                    r = t.length > 0,
                    s = function(i, s, a, l, u) {
                        var c, f, h, d = 0,
                            p = "0",
                            m = i && [],
                            v = [],
                            y = S,
                            b = i || r && E.find.TAG("*", u),
                            _ = M += null == y ? 1 : Math.random() || .1,
                            T = b.length;
                        for (u && (S = s === N || s || u); p !== T && null != (c = b[p]); p++) {
                            if (r && c) {
                                for (f = 0, s || c.ownerDocument === N || (I(c), a = !L); h = t[f++];)
                                    if (h(c, s || N, a)) {
                                        l.push(c);
                                        break
                                    }
                                u && (M = _)
                            }
                            o && ((c = !h && c) && d--, i && m.push(c))
                        }
                        if (d += p, o && p !== d) {
                            for (f = 0; h = n[f++];) h(m, v, s, a);
                            if (i) {
                                if (d > 0)
                                    for (; p--;) m[p] || v[p] || (v[p] = K.call(l));
                                v = g(v)
                            }
                            Y.apply(l, v), u && !i && v.length > 0 && d + n.length > 1 && e.uniqueSort(l)
                        }
                        return u && (M = _, S = y), m
                    };
                return o ? i(s) : s
            }
            var b, _, E, T, C, w, x, A, S, D, O, I, N, k, L, H, j, P, R, W = "sizzle" + 1 * new Date,
                F = t.document,
                M = 0,
                B = 0,
                q = n(),
                $ = n(),
                V = n(),
                U = function(t, e) {
                    return t === e && (O = !0), 0
                },
                G = {}.hasOwnProperty,
                Q = [],
                K = Q.pop,
                X = Q.push,
                Y = Q.push,
                z = Q.slice,
                J = function(t, e) {
                    for (var n = 0, i = t.length; n < i; n++)
                        if (t[n] === e) return n;
                    return -1
                },
                Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                tt = "[\\x20\\t\\r\\n\\f]",
                et = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                nt = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]",
                it = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + nt + ")*)|.*)\\)|)",
                ot = new RegExp(tt + "+", "g"),
                rt = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
                st = new RegExp("^" + tt + "*," + tt + "*"),
                at = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
                lt = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
                ut = new RegExp(it),
                ct = new RegExp("^" + et + "$"),
                ft = {
                    ID: new RegExp("^#(" + et + ")"),
                    CLASS: new RegExp("^\\.(" + et + ")"),
                    TAG: new RegExp("^(" + et + "|[*])"),
                    ATTR: new RegExp("^" + nt),
                    PSEUDO: new RegExp("^" + it),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + Z + ")$", "i"),
                    needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
                },
                ht = /^(?:input|select|textarea|button)$/i,
                dt = /^h\d$/i,
                pt = /^[^{]+\{\s*\[native \w/,
                gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                mt = /[+~]/,
                vt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"),
                yt = function(t, e, n) {
                    var i = "0x" + e - 65536;
                    return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                bt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                _t = function(t, e) {
                    return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                },
                Et = function() {
                    I()
                },
                Tt = h(function(t) {
                    return !0 === t.disabled && ("form" in t || "label" in t)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                Y.apply(Q = z.call(F.childNodes), F.childNodes), Q[F.childNodes.length].nodeType
            } catch (t) {
                Y = {
                    apply: Q.length ? function(t, e) {
                        X.apply(t, z.call(e))
                    } : function(t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            _ = e.support = {}, C = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, I = e.setDocument = function(t) {
                var e, n, i = t ? t.ownerDocument || t : F;
                return i !== N && 9 === i.nodeType && i.documentElement ? (N = i, k = N.documentElement, L = !C(N), F !== N && (n = N.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Et, !1) : n.attachEvent && n.attachEvent("onunload", Et)), _.attributes = o(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), _.getElementsByTagName = o(function(t) {
                    return t.appendChild(N.createComment("")), !t.getElementsByTagName("*").length
                }), _.getElementsByClassName = pt.test(N.getElementsByClassName), _.getById = o(function(t) {
                    return k.appendChild(t).id = W, !N.getElementsByName || !N.getElementsByName(W).length
                }), _.getById ? (E.filter.ID = function(t) {
                    var e = t.replace(vt, yt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }, E.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && L) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }) : (E.filter.ID = function(t) {
                    var e = t.replace(vt, yt);
                    return function(t) {
                        var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }, E.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && L) {
                        var n, i, o, r = e.getElementById(t);
                        if (r) {
                            if ((n = r.getAttributeNode("id")) && n.value === t) return [r];
                            for (o = e.getElementsByName(t), i = 0; r = o[i++];)
                                if ((n = r.getAttributeNode("id")) && n.value === t) return [r]
                        }
                        return []
                    }
                }), E.find.TAG = _.getElementsByTagName ? function(t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : _.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var n, i = [],
                        o = 0,
                        r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, E.find.CLASS = _.getElementsByClassName && function(t, e) {
                    if (void 0 !== e.getElementsByClassName && L) return e.getElementsByClassName(t)
                }, j = [], H = [], (_.qsa = pt.test(N.querySelectorAll)) && (o(function(t) {
                    k.appendChild(t).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || H.push("\\[" + tt + "*(?:value|" + Z + ")"), t.querySelectorAll("[id~=" + W + "-]").length || H.push("~="), t.querySelectorAll(":checked").length || H.push(":checked"), t.querySelectorAll("a#" + W + "+*").length || H.push(".#.+[+~]")
                }), o(function(t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = N.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && H.push("name" + tt + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && H.push(":enabled", ":disabled"), k.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && H.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), H.push(",.*:")
                })), (_.matchesSelector = pt.test(P = k.matches || k.webkitMatchesSelector || k.mozMatchesSelector || k.oMatchesSelector || k.msMatchesSelector)) && o(function(t) {
                    _.disconnectedMatch = P.call(t, "*"), P.call(t, "[s!='']:x"), j.push("!=", it)
                }), H = H.length && new RegExp(H.join("|")), j = j.length && new RegExp(j.join("|")), e = pt.test(k.compareDocumentPosition), R = e || pt.test(k.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, U = e ? function(t, e) {
                    if (t === e) return O = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n || (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !_.sortDetached && e.compareDocumentPosition(t) === n ? t === N || t.ownerDocument === F && R(F, t) ? -1 : e === N || e.ownerDocument === F && R(F, e) ? 1 : D ? J(D, t) - J(D, e) : 0 : 4 & n ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return O = !0, 0;
                    var n, i = 0,
                        o = t.parentNode,
                        r = e.parentNode,
                        a = [t],
                        l = [e];
                    if (!o || !r) return t === N ? -1 : e === N ? 1 : o ? -1 : r ? 1 : D ? J(D, t) - J(D, e) : 0;
                    if (o === r) return s(t, e);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (; a[i] === l[i];) i++;
                    return i ? s(a[i], l[i]) : a[i] === F ? -1 : l[i] === F ? 1 : 0
                }, N) : N
            }, e.matches = function(t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function(t, n) {
                if ((t.ownerDocument || t) !== N && I(t), n = n.replace(lt, "='$1']"), _.matchesSelector && L && !V[n + " "] && (!j || !j.test(n)) && (!H || !H.test(n))) try {
                    var i = P.call(t, n);
                    if (i || _.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (t) {}
                return e(n, N, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== N && I(t), R(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== N && I(t);
                var n = E.attrHandle[e.toLowerCase()],
                    i = n && G.call(E.attrHandle, e.toLowerCase()) ? n(t, e, !L) : void 0;
                return void 0 !== i ? i : _.attributes || !L ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.escape = function(t) {
                return (t + "").replace(bt, _t)
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, n = [],
                    i = 0,
                    o = 0;
                if (O = !_.detectDuplicates, D = !_.sortStable && t.slice(0), t.sort(U), O) {
                    for (; e = t[o++];) e === t[o] && (i = n.push(o));
                    for (; i--;) t.splice(n[i], 1)
                }
                return D = null, t
            }, T = e.getText = function(t) {
                var e, n = "",
                    i = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += T(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else

                    for (; e = t[i++];) n += T(e);
                return n
            }, E = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: ft,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(vt, yt), t[3] = (t[3] || t[4] || t[5] || "").replace(vt, yt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ut.test(n) && (e = w(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(vt, yt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = q[t + " "];
                        return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && q(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, i) {
                        return function(o) {
                            var r = e.attr(o, t);
                            return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(ot, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(t, e, n, i, o) {
                        var r = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === i && 0 === o ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, l) {
                            var u, c, f, h, d, p, g = r !== s ? "nextSibling" : "previousSibling",
                                m = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1;
                            if (m) {
                                if (r) {
                                    for (; g;) {
                                        for (h = e; h = h[g];)
                                            if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                        p = g = "only" === t && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [s ? m.firstChild : m.lastChild], s && y) {
                                    for (h = m, f = h[W] || (h[W] = {}), c = f[h.uniqueID] || (f[h.uniqueID] = {}), u = c[t] || [], d = u[0] === M && u[1], b = d && u[2], h = d && m.childNodes[d]; h = ++d && h && h[g] || (b = d = 0) || p.pop();)
                                        if (1 === h.nodeType && ++b && h === e) {
                                            c[t] = [M, d, b];
                                            break
                                        }
                                } else if (y && (h = e, f = h[W] || (h[W] = {}), c = f[h.uniqueID] || (f[h.uniqueID] = {}), u = c[t] || [], d = u[0] === M && u[1], b = d), !1 === b)
                                    for (;
                                        (h = ++d && h && h[g] || (b = d = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && (f = h[W] || (h[W] = {}), c = f[h.uniqueID] || (f[h.uniqueID] = {}), c[t] = [M, b]), h !== e)););
                                return (b -= o) === i || b % i == 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, n) {
                        var o, r = E.pseudos[t] || E.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return r[W] ? r(n) : r.length > 1 ? (o = [t, t, "", n], E.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                            for (var i, o = r(t, n), s = o.length; s--;) i = J(t, o[s]), t[i] = !(e[i] = o[s])
                        }) : function(t) {
                            return r(t, 0, o)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function(t) {
                        var e = [],
                            n = [],
                            o = x(t.replace(rt, "$1"));
                        return o[W] ? i(function(t, e, n, i) {
                            for (var r, s = o(t, null, i, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                        }) : function(t, i, r) {
                            return e[0] = t, o(e, null, r, n), e[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(t) {
                        return function(n) {
                            return e(t, n).length > 0
                        }
                    }),
                    contains: i(function(t) {
                        return t = t.replace(vt, yt),
                            function(e) {
                                return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                            }
                    }),
                    lang: i(function(t) {
                        return ct.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(vt, yt).toLowerCase(),
                            function(e) {
                                var n;
                                do {
                                    if (n = L ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === k
                    },
                    focus: function(t) {
                        return t === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: a(!1),
                    disabled: a(!0),
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !E.pseudos.empty(t)
                    },
                    header: function(t) {
                        return dt.test(t.nodeName)
                    },
                    input: function(t) {
                        return ht.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: l(function() {
                        return [0]
                    }),
                    last: l(function(t, e) {
                        return [e - 1]
                    }),
                    eq: l(function(t, e, n) {
                        return [n < 0 ? n + e : n]
                    }),
                    even: l(function(t, e) {
                        for (var n = 0; n < e; n += 2) t.push(n);
                        return t
                    }),
                    odd: l(function(t, e) {
                        for (var n = 1; n < e; n += 2) t.push(n);
                        return t
                    }),
                    lt: l(function(t, e, n) {
                        for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: l(function(t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }, E.pseudos.nth = E.pseudos.eq;
            for (b in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) E.pseudos[b] = function(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(b);
            for (b in {
                    submit: !0,
                    reset: !0
                }) E.pseudos[b] = function(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }(b);
            return c.prototype = E.filters = E.pseudos, E.setFilters = new c, w = e.tokenize = function(t, n) {
                var i, o, r, s, a, l, u, c = $[t + " "];
                if (c) return n ? 0 : c.slice(0);
                for (a = t, l = [], u = E.preFilter; a;) {
                    i && !(o = st.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = at.exec(a)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(rt, " ")
                    }), a = a.slice(i.length));
                    for (s in E.filter) !(o = ft[s].exec(a)) || u[s] && !(o = u[s](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: s,
                        matches: o
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return n ? a.length : a ? e.error(t) : $(t, l).slice(0)
            }, x = e.compile = function(t, e) {
                var n, i = [],
                    o = [],
                    r = V[t + " "];
                if (!r) {
                    for (e || (e = w(t)), n = e.length; n--;) r = v(e[n]), r[W] ? i.push(r) : o.push(r);
                    r = V(t, y(o, i)), r.selector = t
                }
                return r
            }, A = e.select = function(t, e, n, i) {
                var o, r, s, a, l, c = "function" == typeof t && t,
                    h = !i && w(t = c.selector || t);
                if (n = n || [], 1 === h.length) {
                    if (r = h[0] = h[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && 9 === e.nodeType && L && E.relative[r[1].type]) {
                        if (!(e = (E.find.ID(s.matches[0].replace(vt, yt), e) || [])[0])) return n;
                        c && (e = e.parentNode), t = t.slice(r.shift().value.length)
                    }
                    for (o = ft.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !E.relative[a = s.type]);)
                        if ((l = E.find[a]) && (i = l(s.matches[0].replace(vt, yt), mt.test(r[0].type) && u(e.parentNode) || e))) {
                            if (r.splice(o, 1), !(t = i.length && f(r))) return Y.apply(n, i), n;
                            break
                        }
                }
                return (c || x(t, h))(i, e, !L, n, !e || mt.test(t) && u(e.parentNode) || e), n
            }, _.sortStable = W.split("").sort(U).join("") === W, _.detectDuplicates = !!O, I(), _.sortDetached = o(function(t) {
                return 1 & t.compareDocumentPosition(N.createElement("fieldset"))
            }), o(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function(t, e, n) {
                if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), _.attributes && o(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || r("value", function(t, e, n) {
                if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
            }), o(function(t) {
                return null == t.getAttribute("disabled")
            }) || r(Z, function(t, e, n) {
                var i;
                if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(n);
        yt.find = Ct, yt.expr = Ct.selectors, yt.expr[":"] = yt.expr.pseudos, yt.uniqueSort = yt.unique = Ct.uniqueSort, yt.text = Ct.getText, yt.isXMLDoc = Ct.isXML, yt.contains = Ct.contains, yt.escapeSelector = Ct.escape;
        var wt = function(t, e, n) {
                for (var i = [], o = void 0 !== n;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (o && yt(t).is(n)) break;
                        i.push(t)
                    }
                return i
            },
            xt = function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            },
            At = yt.expr.match.needsContext,
            St = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            Dt = /^.[^:#\[\.,]*$/;
        yt.filter = function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? yt.find.matchesSelector(i, t) ? [i] : [] : yt.find.matches(t, yt.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, yt.fn.extend({
            find: function(t) {
                var e, n, i = this.length,
                    o = this;
                if ("string" != typeof t) return this.pushStack(yt(t).filter(function() {
                    for (e = 0; e < i; e++)
                        if (yt.contains(o[e], this)) return !0
                }));
                for (n = this.pushStack([]), e = 0; e < i; e++) yt.find(t, o[e], n);
                return i > 1 ? yt.uniqueSort(n) : n
            },
            filter: function(t) {
                return this.pushStack(u(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(u(this, t || [], !0))
            },
            is: function(t) {
                return !!u(this, "string" == typeof t && At.test(t) ? yt(t) : t || [], !1).length
            }
        });
        var Ot, It = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (yt.fn.init = function(t, e, n) {
            var i, o;
            if (!t) return this;
            if (n = n || Ot, "string" == typeof t) {
                if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : It.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof yt ? e[0] : e, yt.merge(this, yt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : st, !0)), St.test(i[1]) && yt.isPlainObject(e))
                        for (i in e) yt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return o = st.getElementById(i[2]), o && (this[0] = o, this.length = 1), this
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : yt.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(yt) : yt.makeArray(t, this)
        }).prototype = yt.fn, Ot = yt(st);
        var Nt = /^(?:parents|prev(?:Until|All))/,
            kt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        yt.fn.extend({
            has: function(t) {
                var e = yt(t, this),
                    n = e.length;
                return this.filter(function() {
                    for (var t = 0; t < n; t++)
                        if (yt.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                var n, i = 0,
                    o = this.length,
                    r = [],
                    s = "string" != typeof t && yt(t);
                if (!At.test(t))
                    for (; i < o; i++)
                        for (n = this[i]; n && n !== e; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && yt.find.matchesSelector(n, t))) {
                                r.push(n);
                                break
                            }
                return this.pushStack(r.length > 1 ? yt.uniqueSort(r) : r)
            },
            index: function(t) {
                return t ? "string" == typeof t ? ft.call(yt(t), this[0]) : ft.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(yt.uniqueSort(yt.merge(this.get(), yt(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), yt.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return wt(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return wt(t, "parentNode", n)
            },
            next: function(t) {
                return c(t, "nextSibling")
            },
            prev: function(t) {
                return c(t, "previousSibling")
            },
            nextAll: function(t) {
                return wt(t, "nextSibling")
            },
            prevAll: function(t) {
                return wt(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return wt(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return wt(t, "previousSibling", n)
            },
            siblings: function(t) {
                return xt((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return xt(t.firstChild)
            },
            contents: function(t) {
                return l(t, "iframe") ? t.contentDocument : (l(t, "template") && (t = t.content || t), yt.merge([], t.childNodes))
            }
        }, function(t, e) {
            yt.fn[t] = function(n, i) {
                var o = yt.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = yt.filter(i, o)), this.length > 1 && (kt[t] || yt.uniqueSort(o), Nt.test(t) && o.reverse()), this.pushStack(o)
            }
        });
        var Lt = /[^\x20\t\r\n\f]+/g;
        yt.Callbacks = function(t) {
            t = "string" == typeof t ? f(t) : yt.extend({}, t);
            var e, n, i, o, r = [],
                s = [],
                a = -1,
                l = function() {
                    for (o = o || t.once, i = e = !0; s.length; a = -1)
                        for (n = s.shift(); ++a < r.length;) !1 === r[a].apply(n[0], n[1]) && t.stopOnFalse && (a = r.length, n = !1);
                    t.memory || (n = !1), e = !1, o && (r = n ? [] : "")
                },
                u = {
                    add: function() {
                        return r && (n && !e && (a = r.length - 1, s.push(n)), function e(n) {
                            yt.each(n, function(n, i) {
                                yt.isFunction(i) ? t.unique && u.has(i) || r.push(i) : i && i.length && "string" !== yt.type(i) && e(i)
                            })
                        }(arguments), n && !e && l()), this
                    },
                    remove: function() {
                        return yt.each(arguments, function(t, e) {
                            for (var n;
                                (n = yt.inArray(e, r, n)) > -1;) r.splice(n, 1), n <= a && a--
                        }), this
                    },
                    has: function(t) {
                        return t ? yt.inArray(t, r) > -1 : r.length > 0
                    },
                    empty: function() {
                        return r && (r = []), this
                    },
                    disable: function() {
                        return o = s = [], r = n = "", this
                    },
                    disabled: function() {
                        return !r
                    },
                    lock: function() {
                        return o = s = [], n || e || (r = n = ""), this
                    },
                    locked: function() {
                        return !!o
                    },
                    fireWith: function(t, n) {
                        return o || (n = n || [], n = [t, n.slice ? n.slice() : n], s.push(n), e || l()), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return u
        }, yt.extend({
            Deferred: function(t) {
                var e = [
                        ["notify", "progress", yt.Callbacks("memory"), yt.Callbacks("memory"), 2],
                        ["resolve", "done", yt.Callbacks("once memory"), yt.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", yt.Callbacks("once memory"), yt.Callbacks("once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    o = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        catch: function(t) {
                            return o.then(null, t)
                        },
                        pipe: function() {
                            var t = arguments;
                            return yt.Deferred(function(n) {
                                yt.each(e, function(e, i) {
                                    var o = yt.isFunction(t[i[4]]) && t[i[4]];
                                    r[i[1]](function() {
                                        var t = o && o.apply(this, arguments);
                                        t && yt.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, o ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        then: function(t, i, o) {
                            function r(t, e, i, o) {
                                return function() {
                                    var a = this,
                                        l = arguments,
                                        u = function() {
                                            var n, u;
                                            if (!(t < s)) {
                                                if ((n = i.apply(a, l)) === e.promise()) throw new TypeError("Thenable self-resolution");
                                                u = n && ("object" == typeof n || "function" == typeof n) && n.then, yt.isFunction(u) ? o ? u.call(n, r(s, e, h, o), r(s, e, d, o)) : (s++, u.call(n, r(s, e, h, o), r(s, e, d, o), r(s, e, h, e.notifyWith))) : (i !== h && (a = void 0, l = [n]), (o || e.resolveWith)(a, l))
                                            }
                                        },
                                        c = o ? u : function() {
                                            try {
                                                u()
                                            } catch (n) {
                                                yt.Deferred.exceptionHook && yt.Deferred.exceptionHook(n, c.stackTrace), t + 1 >= s && (i !== d && (a = void 0, l = [n]), e.rejectWith(a, l))
                                            }
                                        };
                                    t ? c() : (yt.Deferred.getStackHook && (c.stackTrace = yt.Deferred.getStackHook()), n.setTimeout(c))
                                }
                            }
                            var s = 0;
                            return yt.Deferred(function(n) {
                                e[0][3].add(r(0, n, yt.isFunction(o) ? o : h, n.notifyWith)), e[1][3].add(r(0, n, yt.isFunction(t) ? t : h)), e[2][3].add(r(0, n, yt.isFunction(i) ? i : d))
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? yt.extend(t, o) : o
                        }
                    },
                    r = {};
                return yt.each(e, function(t, n) {
                    var s = n[2],
                        a = n[5];
                    o[n[1]] = s.add, a && s.add(function() {
                        i = a
                    }, e[3 - t][2].disable, e[0][2].lock), s.add(n[3].fire), r[n[0]] = function() {
                        return r[n[0] + "With"](this === r ? void 0 : this, arguments), this
                    }, r[n[0] + "With"] = s.fireWith
                }), o.promise(r), t && t.call(r, r), r
            },
            when: function(t) {
                var e = arguments.length,
                    n = e,
                    i = Array(n),
                    o = lt.call(arguments),
                    r = yt.Deferred(),
                    s = function(t) {
                        return function(n) {
                            i[t] = this, o[t] = arguments.length > 1 ? lt.call(arguments) : n, --e || r.resolveWith(i, o)
                        }
                    };
                if (e <= 1 && (p(t, r.done(s(n)).resolve, r.reject, !e), "pending" === r.state() || yt.isFunction(o[n] && o[n].then))) return r.then();
                for (; n--;) p(o[n], s(n), r.reject);
                return r.promise()
            }
        });
        var Ht = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        yt.Deferred.exceptionHook = function(t, e) {
            n.console && n.console.warn && t && Ht.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
        }, yt.readyException = function(t) {
            n.setTimeout(function() {
                throw t
            })
        };
        var jt = yt.Deferred();
        yt.fn.ready = function(t) {
            return jt.then(t).catch(function(t) {
                yt.readyException(t)
            }), this
        }, yt.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(t) {
                (!0 === t ? --yt.readyWait : yt.isReady) || (yt.isReady = !0, !0 !== t && --yt.readyWait > 0 || jt.resolveWith(st, [yt]))
            }
        }), yt.ready.then = jt.then, "complete" === st.readyState || "loading" !== st.readyState && !st.documentElement.doScroll ? n.setTimeout(yt.ready) : (st.addEventListener("DOMContentLoaded", g), n.addEventListener("load", g));
        var Pt = function(t, e, n, i, o, r, s) {
                var a = 0,
                    l = t.length,
                    u = null == n;
                if ("object" === yt.type(n)) {
                    o = !0;
                    for (a in n) Pt(t, e, a, n[a], !0, r, s)
                } else if (void 0 !== i && (o = !0, yt.isFunction(i) || (s = !0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
                        return u.call(yt(t), n)
                    })), e))
                    for (; a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
                return o ? t : u ? e.call(t) : l ? e(t[0], n) : r
            },
            Rt = function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };
        m.uid = 1, m.prototype = {
            cache: function(t) {
                var e = t[this.expando];
                return e || (e = {}, Rt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function(t, e, n) {
                var i, o = this.cache(t);
                if ("string" == typeof e) o[yt.camelCase(e)] = n;
                else
                    for (i in e) o[yt.camelCase(i)] = e[i];
                return o
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][yt.camelCase(e)]
            },
            access: function(t, e, n) {
                return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
            },
            remove: function(t, e) {
                var n, i = t[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== e) {
                        Array.isArray(e) ? e = e.map(yt.camelCase) : (e = yt.camelCase(e), e = e in i ? [e] : e.match(Lt) || []), n = e.length;
                        for (; n--;) delete i[e[n]]
                    }(void 0 === e || yt.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !yt.isEmptyObject(e)
            }
        };
        var Wt = new m,
            Ft = new m,
            Mt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Bt = /[A-Z]/g;
        yt.extend({
            hasData: function(t) {
                return Ft.hasData(t) || Wt.hasData(t)
            },
            data: function(t, e, n) {
                return Ft.access(t, e, n)
            },
            removeData: function(t, e) {
                Ft.remove(t, e)
            },
            _data: function(t, e, n) {
                return Wt.access(t, e, n)
            },
            _removeData: function(t, e) {
                Wt.remove(t, e)
            }
        }), yt.fn.extend({
            data: function(t, e) {
                var n, i, o, r = this[0],
                    s = r && r.attributes;
                if (void 0 === t) {
                    if (this.length && (o = Ft.get(r), 1 === r.nodeType && !Wt.get(r, "hasDataAttrs"))) {
                        for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = yt.camelCase(i.slice(5)), y(r, i, o[i])));
                        Wt.set(r, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function() {
                    Ft.set(this, t)
                }) : Pt(this, function(e) {
                    var n;
                    if (r && void 0 === e) {
                        if (void 0 !== (n = Ft.get(r, t))) return n;
                        if (void 0 !== (n = y(r, t))) return n
                    } else this.each(function() {
                        Ft.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    Ft.remove(this, t)
                })
            }
        }), yt.extend({
            queue: function(t, e, n) {
                var i;
                if (t) return e = (e || "fx") + "queue", i = Wt.get(t, e), n && (!i || Array.isArray(n) ? i = Wt.access(t, e, yt.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = yt.queue(t, e),
                    i = n.length,
                    o = n.shift(),
                    r = yt._queueHooks(t, e),
                    s = function() {
                        yt.dequeue(t, e)
                    };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return Wt.get(t, n) || Wt.access(t, n, {
                    empty: yt.Callbacks("once memory").add(function() {
                        Wt.remove(t, [e + "queue", n])
                    })
                })
            }
        }), yt.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? yt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = yt.queue(this, t, e);
                    yt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && yt.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    yt.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1,
                    o = yt.Deferred(),
                    r = this,
                    s = this.length,
                    a = function() {
                        --i || o.resolveWith(r, [r])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(n = Wt.get(r[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                return a(), o.promise(e)
            }
        });
        var qt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            $t = new RegExp("^(?:([+-])=|)(" + qt + ")([a-z%]*)$", "i"),
            Vt = ["Top", "Right", "Bottom", "Left"],
            Ut = function(t, e) {
                return t = e || t, "none" === t.style.display || "" === t.style.display && yt.contains(t.ownerDocument, t) && "none" === yt.css(t, "display")
            },
            Gt = function(t, e, n, i) {
                var o, r, s = {};
                for (r in e) s[r] = t.style[r], t.style[r] = e[r];
                o = n.apply(t, i || []);
                for (r in e) t.style[r] = s[r];
                return o
            },
            Qt = {};
        yt.fn.extend({
            show: function() {
                return E(this, !0)
            },
            hide: function() {
                return E(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    Ut(this) ? yt(this).show() : yt(this).hide()
                })
            }
        });
        var Kt = /^(?:checkbox|radio)$/i,
            Xt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            Yt = /^$|\/(?:java|ecma)script/i,
            zt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        zt.optgroup = zt.option, zt.tbody = zt.tfoot = zt.colgroup = zt.caption = zt.thead, zt.th = zt.td;
        var Jt = /<|&#?\w+;/;
        ! function() {
            var t = st.createDocumentFragment(),
                e = t.appendChild(st.createElement("div")),
                n = st.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), vt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", vt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var Zt = st.documentElement,
            te = /^key/,
            ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            ne = /^([^.]*)(?:\.(.+)|)/;
        yt.event = {
            global: {},
            add: function(t, e, n, i, o) {
                var r, s, a, l, u, c, f, h, d, p, g, m = Wt.get(t);
                if (m)
                    for (n.handler && (r = n, n = r.handler, o = r.selector), o && yt.find.matchesSelector(Zt, o), n.guid || (n.guid = yt.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(e) {
                            return void 0 !== yt && yt.event.triggered !== e.type ? yt.event.dispatch.apply(t, arguments) : void 0
                        }), e = (e || "").match(Lt) || [""], u = e.length; u--;) a = ne.exec(e[u]) || [], d = g = a[1], p = (a[2] || "").split(".").sort(), d && (f = yt.event.special[d] || {}, d = (o ? f.delegateType : f.bindType) || d, f = yt.event.special[d] || {}, c = yt.extend({
                        type: d,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && yt.expr.match.needsContext.test(o),
                        namespace: p.join(".")
                    }, r), (h = l[d]) || (h = l[d] = [], h.delegateCount = 0, f.setup && !1 !== f.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(d, s)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, c) : h.push(c), yt.event.global[d] = !0)
            },
            remove: function(t, e, n, i, o) {
                var r, s, a, l, u, c, f, h, d, p, g, m = Wt.hasData(t) && Wt.get(t);
                if (m && (l = m.events)) {
                    for (e = (e || "").match(Lt) || [""], u = e.length; u--;)
                        if (a = ne.exec(e[u]) || [], d = g = a[1], p = (a[2] || "").split(".").sort(), d) {
                            for (f = yt.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, h = l[d] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = h.length; r--;) c = h[r], !o && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(r, 1), c.selector && h.delegateCount--, f.remove && f.remove.call(t, c));
                            s && !h.length && (f.teardown && !1 !== f.teardown.call(t, p, m.handle) || yt.removeEvent(t, d, m.handle), delete l[d])
                        } else
                            for (d in l) yt.event.remove(t, d + e[u], n, i, !0);
                    yt.isEmptyObject(l) && Wt.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                var e, n, i, o, r, s, a = yt.event.fix(t),
                    l = new Array(arguments.length),
                    u = (Wt.get(this, "events") || {})[a.type] || [],
                    c = yt.event.special[a.type] || {};
                for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
                if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                    for (s = yt.event.handlers.call(this, a, u), e = 0;
                        (o = s[e++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = o.elem, n = 0;
                            (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (i = ((yt.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(t, e) {
                var n, i, o, r, s, a = [],
                    l = e.delegateCount,
                    u = t.target;
                if (l && u.nodeType && !("click" === t.type && t.button >= 1))
                    for (; u !== this; u = u.parentNode || this)
                        if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
                            for (r = [], s = {}, n = 0; n < l; n++) i = e[n], o = i.selector + " ", void 0 === s[o] && (s[o] = i.needsContext ? yt(o, this).index(u) > -1 : yt.find(o, this, null, [u]).length), s[o] && r.push(i);
                            r.length && a.push({
                                elem: u,
                                handlers: r
                            })
                        }
                return u = this, l < e.length && a.push({
                    elem: u,
                    handlers: e.slice(l)
                }), a
            },
            addProp: function(t, e) {
                Object.defineProperty(yt.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: yt.isFunction(e) ? function() {
                        if (this.originalEvent) return e(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[t]
                    },
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function(t) {
                return t[yt.expando] ? t : new yt.Event(t)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== S() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === S() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && l(this, "input")) return this.click(), !1
                    },
                    _default: function(t) {
                        return l(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, yt.removeEvent = function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }, yt.Event = function(t, e) {
            if (!(this instanceof yt.Event)) return new yt.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? x : A, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && yt.extend(this, e), this.timeStamp = t && t.timeStamp || yt.now(), this[yt.expando] = !0
        }, yt.Event.prototype = {
            constructor: yt.Event,
            isDefaultPrevented: A,
            isPropagationStopped: A,
            isImmediatePropagationStopped: A,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = x, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = x, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = x, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, yt.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(t) {
                var e = t.button;
                return null == t.which && te.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && ee.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, yt.event.addProp), yt.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            yt.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this,
                        o = t.relatedTarget,
                        r = t.handleObj;
                    return o && (o === i || yt.contains(i, o)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), yt.fn.extend({
            on: function(t, e, n, i) {
                return D(this, t, e, n, i)
            },
            one: function(t, e, n, i) {
                return D(this, t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, o;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, yt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = A), this.each(function() {
                    yt.event.remove(this, t, n, e)
                })
            }
        });
        var ie = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            oe = /<script|<style|<link/i,
            re = /checked\s*(?:[^=]|=\s*.checked.)/i,
            se = /^true\/(.*)/,
            ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        yt.extend({
            htmlPrefilter: function(t) {
                return t.replace(ie, "<$1></$2>")
            },
            clone: function(t, e, n) {
                var i, o, r, s, a = t.cloneNode(!0),
                    l = yt.contains(t.ownerDocument, t);
                if (!(vt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || yt.isXMLDoc(t)))
                    for (s = T(a), r = T(t), i = 0, o = r.length; i < o; i++) L(r[i], s[i]);
                if (e)
                    if (n)
                        for (r = r || T(t), s = s || T(a), i = 0, o = r.length; i < o; i++) k(r[i], s[i]);
                    else k(t, a);
                return s = T(a, "script"), s.length > 0 && C(s, !l && T(t, "script")), a
            },
            cleanData: function(t) {
                for (var e, n, i, o = yt.event.special, r = 0; void 0 !== (n = t[r]); r++)
                    if (Rt(n)) {
                        if (e = n[Wt.expando]) {
                            if (e.events)
                                for (i in e.events) o[i] ? yt.event.remove(n, i) : yt.removeEvent(n, i, e.handle);
                            n[Wt.expando] = void 0
                        }
                        n[Ft.expando] && (n[Ft.expando] = void 0)
                    }
            }
        }), yt.fn.extend({
            detach: function(t) {
                return j(this, t, !0)
            },
            remove: function(t) {
                return j(this, t)
            },
            text: function(t) {
                return Pt(this, function(t) {
                    return void 0 === t ? yt.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return H(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        O(this, t).appendChild(t)
                    }
                })
            },
            prepend: function() {
                return H(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = O(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return H(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return H(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (yt.cleanData(T(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return yt.clone(this, t, e)
                })
            },
            html: function(t) {
                return Pt(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !oe.test(t) && !zt[(Xt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = yt.htmlPrefilter(t);
                        try {
                            for (; n < i; n++) e = this[n] || {}, 1 === e.nodeType && (yt.cleanData(T(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return H(this, arguments, function(e) {
                    var n = this.parentNode;
                    yt.inArray(this, t) < 0 && (yt.cleanData(T(this)), n && n.replaceChild(e, this))
                }, t)
            }
        }), yt.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            yt.fn[t] = function(t) {
                for (var n, i = [], o = yt(t), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), yt(o[s])[e](n), ct.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var le = /^margin/,
            ue = new RegExp("^(" + qt + ")(?!px)[a-z%]+$", "i"),
            ce = function(t) {
                var e = t.ownerDocument.defaultView;
                return e && e.opener || (e = n), e.getComputedStyle(t)
            };
        ! function() {
            function t() {
                if (a) {
                    a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Zt.appendChild(s);
                    var t = n.getComputedStyle(a);
                    e = "1%" !== t.top, r = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", o = "4px" === t.marginRight, Zt.removeChild(s), a = null
                }
            }
            var e, i, o, r, s = st.createElement("div"),
                a = st.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", vt.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), yt.extend(vt, {
                pixelPosition: function() {
                    return t(), e
                },
                boxSizingReliable: function() {
                    return t(), i
                },
                pixelMarginRight: function() {
                    return t(), o
                },
                reliableMarginLeft: function() {
                    return t(), r
                }
            }))
        }();
        var fe = /^(none|table(?!-c[ea]).+)/,
            he = /^--/,
            de = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            pe = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            ge = ["Webkit", "Moz", "ms"],
            me = st.createElement("div").style;
        yt.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = P(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, r, s, a = yt.camelCase(e),
                        l = he.test(e),
                        u = t.style;
                    if (l || (e = F(a)), s = yt.cssHooks[e] || yt.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : u[e];
                    r = typeof n, "string" === r && (o = $t.exec(n)) && o[1] && (n = b(t, e, o), r = "number"), null != n && n === n && ("number" === r && (n += o && o[3] || (yt.cssNumber[a] ? "" : "px")), vt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l ? u.setProperty(e, n) : u[e] = n))
                }
            },
            css: function(t, e, n, i) {
                var o, r, s, a = yt.camelCase(e);
                return he.test(e) || (e = F(a)), s = yt.cssHooks[e] || yt.cssHooks[a], s && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = P(t, e, i)), "normal" === o && e in pe && (o = pe[e]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
            }
        }), yt.each(["height", "width"], function(t, e) {
            yt.cssHooks[e] = {
                get: function(t, n, i) {
                    if (n) return !fe.test(yt.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? q(t, e, i) : Gt(t, de, function() {
                        return q(t, e, i)
                    })
                },
                set: function(t, n, i) {
                    var o, r = i && ce(t),
                        s = i && B(t, e, i, "border-box" === yt.css(t, "boxSizing", !1, r), r);
                    return s && (o = $t.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n, n = yt.css(t, e)), M(t, n, s)
                }
            }
        }), yt.cssHooks.marginLeft = R(vt.reliableMarginLeft, function(t, e) {
            if (e) return (parseFloat(P(t, "marginLeft")) || t.getBoundingClientRect().left - Gt(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px"
        }), yt.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            yt.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[t + Vt[i] + e] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, le.test(t) || (yt.cssHooks[t + e].set = M)
        }), yt.fn.extend({
            css: function(t, e) {
                return Pt(this, function(t, e, n) {
                    var i, o, r = {},
                        s = 0;
                    if (Array.isArray(e)) {
                        for (i = ce(t), o = e.length; s < o; s++) r[e[s]] = yt.css(t, e[s], !1, i);
                        return r
                    }
                    return void 0 !== n ? yt.style(t, e, n) : yt.css(t, e)
                }, t, e, arguments.length > 1)
            }
        }), yt.Tween = $, $.prototype = {
            constructor: $,
            init: function(t, e, n, i, o, r) {
                this.elem = t, this.prop = n, this.easing = o || yt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (yt.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = $.propHooks[this.prop];
                return t && t.get ? t.get(this) : $.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = $.propHooks[this.prop];
                return this.options.duration ? this.pos = e = yt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this
            }
        }, $.prototype.init.prototype = $.prototype, $.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = yt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                },
                set: function(t) {
                    yt.fx.step[t.prop] ? yt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[yt.cssProps[t.prop]] && !yt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : yt.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, yt.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, yt.fx = $.prototype.init, yt.fx.step = {};
        var ve, ye, be = /^(?:toggle|show|hide)$/,
            _e = /queueHooks$/;
        yt.Animation = yt.extend(Y, {
                tweeners: {
                    "*": [function(t, e) {
                        var n = this.createTween(t, e);
                        return b(n.elem, t, $t.exec(e), n), n
                    }]
                },
                tweener: function(t, e) {
                    yt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Lt);
                    for (var n, i = 0, o = t.length; i < o; i++) n = t[i], Y.tweeners[n] = Y.tweeners[n] || [], Y.tweeners[n].unshift(e)
                },
                prefilters: [K],
                prefilter: function(t, e) {
                    e ? Y.prefilters.unshift(t) : Y.prefilters.push(t)
                }
            }), yt.speed = function(t, e, n) {
                var i = t && "object" == typeof t ? yt.extend({}, t) : {
                    complete: n || !n && e || yt.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !yt.isFunction(e) && e
                };
                return yt.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in yt.fx.speeds ? i.duration = yt.fx.speeds[i.duration] : i.duration = yt.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    yt.isFunction(i.old) && i.old.call(this), i.queue && yt.dequeue(this, i.queue)
                }, i
            }, yt.fn.extend({
                fadeTo: function(t, e, n, i) {
                    return this.filter(Ut).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function(t, e, n, i) {
                    var o = yt.isEmptyObject(t),
                        r = yt.speed(e, n, i),
                        s = function() {
                            var e = Y(this, yt.extend({}, t), r);
                            (o || Wt.get(this, "finish")) && e.stop(!0)
                        };
                    return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
                },
                stop: function(t, e, n) {
                    var i = function(t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            o = null != t && t + "queueHooks",
                            r = yt.timers,
                            s = Wt.get(this);
                        if (o) s[o] && s[o].stop && i(s[o]);
                        else
                            for (o in s) s[o] && s[o].stop && _e.test(o) && i(s[o]);
                        for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                        !e && n || yt.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return !1 !== t && (t = t || "fx"), this.each(function() {
                        var e, n = Wt.get(this),
                            i = n[t + "queue"],
                            o = n[t + "queueHooks"],
                            r = yt.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, yt.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                        for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), yt.each(["toggle", "show", "hide"], function(t, e) {
                var n = yt.fn[e];
                yt.fn[e] = function(t, i, o) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(G(e, !0), t, i, o)
                }
            }), yt.each({
                slideDown: G("show"),
                slideUp: G("hide"),
                slideToggle: G("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                yt.fn[t] = function(t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), yt.timers = [], yt.fx.tick = function() {
                var t, e = 0,
                    n = yt.timers;
                for (ve = yt.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
                n.length || yt.fx.stop(), ve = void 0
            }, yt.fx.timer = function(t) {
                yt.timers.push(t), yt.fx.start()
            }, yt.fx.interval = 13, yt.fx.start = function() {
                ye || (ye = !0, V())
            }, yt.fx.stop = function() {
                ye = null
            }, yt.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, yt.fn.delay = function(t, e) {
                return t = yt.fx ? yt.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                    var o = n.setTimeout(e, t);
                    i.stop = function() {
                        n.clearTimeout(o)
                    }
                })
            },
            function() {
                var t = st.createElement("input"),
                    e = st.createElement("select"),
                    n = e.appendChild(st.createElement("option"));
                t.type = "checkbox", vt.checkOn = "" !== t.value, vt.optSelected = n.selected, t = st.createElement("input"), t.value = "t", t.type = "radio", vt.radioValue = "t" === t.value
            }();
        var Ee, Te = yt.expr.attrHandle;
        yt.fn.extend({
            attr: function(t, e) {
                return Pt(this, yt.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    yt.removeAttr(this, t)
                })
            }
        }), yt.extend({
            attr: function(t, e, n) {
                var i, o, r = t.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? yt.prop(t, e, n) : (1 === r && yt.isXMLDoc(t) || (o = yt.attrHooks[e.toLowerCase()] || (yt.expr.match.bool.test(e) ? Ee : void 0)), void 0 !== n ? null === n ? void yt.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : (i = yt.find.attr(t, e), null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!vt.radioValue && "radio" === e && l(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var n, i = 0,
                    o = e && e.match(Lt);
                if (o && 1 === t.nodeType)
                    for (; n = o[i++];) t.removeAttribute(n)
            }
        }), Ee = {
            set: function(t, e, n) {
                return !1 === e ? yt.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, yt.each(yt.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = Te[e] || yt.find.attr;
            Te[e] = function(t, e, i) {
                var o, r, s = e.toLowerCase();
                return i || (r = Te[s], Te[s] = o, o = null != n(t, e, i) ? s : null, Te[s] = r), o
            }
        });
        var Ce = /^(?:input|select|textarea|button)$/i,
            we = /^(?:a|area)$/i;
        yt.fn.extend({
            prop: function(t, e) {
                return Pt(this, yt.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[yt.propFix[t] || t]
                })
            }
        }), yt.extend({
            prop: function(t, e, n) {
                var i, o, r = t.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return 1 === r && yt.isXMLDoc(t) || (e = yt.propFix[e] || e, o = yt.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = yt.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : Ce.test(t.nodeName) || we.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), vt.optSelected || (yt.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), yt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            yt.propFix[this.toLowerCase()] = this
        }), yt.fn.extend({
            addClass: function(t) {
                var e, n, i, o, r, s, a, l = 0;
                if (yt.isFunction(t)) return this.each(function(e) {
                    yt(this).addClass(t.call(this, e, J(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match(Lt) || []; n = this[l++];)
                        if (o = J(n), i = 1 === n.nodeType && " " + z(o) + " ") {
                            for (s = 0; r = e[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            a = z(i), o !== a && n.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, o, r, s, a, l = 0;
                if (yt.isFunction(t)) return this.each(function(e) {
                    yt(this).removeClass(t.call(this, e, J(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(Lt) || []; n = this[l++];)
                        if (o = J(n), i = 1 === n.nodeType && " " + z(o) + " ") {
                            for (s = 0; r = e[s++];)
                                for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                            a = z(i), o !== a && n.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : yt.isFunction(t) ? this.each(function(n) {
                    yt(this).toggleClass(t.call(this, n, J(this), e), e)
                }) : this.each(function() {
                    var e, i, o, r;
                    if ("string" === n)
                        for (i = 0, o = yt(this), r = t.match(Lt) || []; e = r[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else void 0 !== t && "boolean" !== n || (e = J(this), e && Wt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Wt.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + z(J(n)) + " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var xe = /\r/g;
        yt.fn.extend({
            val: function(t) {
                var e, n, i, o = this[0]; {
                    if (arguments.length) return i = yt.isFunction(t), this.each(function(n) {
                        var o;
                        1 === this.nodeType && (o = i ? t.call(this, n, yt(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = yt.map(o, function(t) {
                            return null == t ? "" : t + ""
                        })), (e = yt.valHooks[this.type] || yt.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                    });
                    if (o) return (e = yt.valHooks[o.type] || yt.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(xe, "") : null == n ? "" : n)
                }
            }
        }), yt.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = yt.find.attr(t, "value");
                        return null != e ? e : z(yt.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        var e, n, i, o = t.options,
                            r = t.selectedIndex,
                            s = "select-one" === t.type,
                            a = s ? null : [],
                            u = s ? r + 1 : o.length;
                        for (i = r < 0 ? u : s ? r : 0; i < u; i++)
                            if (n = o[i], (n.selected || i === r) && !n.disabled && (!n.parentNode.disabled || !l(n.parentNode, "optgroup"))) {
                                if (e = yt(n).val(), s) return e;
                                a.push(e)
                            }
                        return a
                    },
                    set: function(t, e) {
                        for (var n, i, o = t.options, r = yt.makeArray(e), s = o.length; s--;) i = o[s], (i.selected = yt.inArray(yt.valHooks.option.get(i), r) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1), r
                    }
                }
            }
        }), yt.each(["radio", "checkbox"], function() {
            yt.valHooks[this] = {
                set: function(t, e) {
                    if (Array.isArray(e)) return t.checked = yt.inArray(yt(t).val(), e) > -1
                }
            }, vt.checkOn || (yt.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var Ae = /^(?:focusinfocus|focusoutblur)$/;
        yt.extend(yt.event, {
            trigger: function(t, e, i, o) {
                var r, s, a, l, u, c, f, h = [i || st],
                    d = pt.call(t, "type") ? t.type : t,
                    p = pt.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = a = i = i || st, 3 !== i.nodeType && 8 !== i.nodeType && !Ae.test(d + yt.event.triggered) && (d.indexOf(".") > -1 && (p = d.split("."), d = p.shift(), p.sort()), u = d.indexOf(":") < 0 && "on" + d, t = t[yt.expando] ? t : new yt.Event(d, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : yt.makeArray(e, [t]), f = yt.event.special[d] || {}, o || !f.trigger || !1 !== f.trigger.apply(i, e))) {
                    if (!o && !f.noBubble && !yt.isWindow(i)) {
                        for (l = f.delegateType || d, Ae.test(l + d) || (s = s.parentNode); s; s = s.parentNode) h.push(s), a = s;
                        a === (i.ownerDocument || st) && h.push(a.defaultView || a.parentWindow || n)
                    }
                    for (r = 0;
                        (s = h[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : f.bindType || d, c = (Wt.get(s, "events") || {})[t.type] && Wt.get(s, "handle"), c && c.apply(s, e), (c = u && s[u]) && c.apply && Rt(s) && (t.result = c.apply(s, e), !1 === t.result && t.preventDefault());
                    return t.type = d, o || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(h.pop(), e) || !Rt(i) || u && yt.isFunction(i[d]) && !yt.isWindow(i) && (a = i[u], a && (i[u] = null), yt.event.triggered = d, i[d](), yt.event.triggered = void 0, a && (i[u] = a)), t.result
                }
            },
            simulate: function(t, e, n) {
                var i = yt.extend(new yt.Event, n, {
                    type: t,
                    isSimulated: !0
                });
                yt.event.trigger(i, null, e)
            }
        }), yt.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    yt.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                if (n) return yt.event.trigger(t, e, n, !0)
            }
        }), yt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
            yt.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), yt.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), vt.focusin = "onfocusin" in n, vt.focusin || yt.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                yt.event.simulate(e, t.target, yt.event.fix(t))
            };
            yt.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        o = Wt.access(i, e);
                    o || i.addEventListener(t, n, !0), Wt.access(i, e, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        o = Wt.access(i, e) - 1;
                    o ? Wt.access(i, e, o) : (i.removeEventListener(t, n, !0), Wt.remove(i, e))
                }
            }
        });
        var Se = n.location,
            De = yt.now(),
            Oe = /\?/;
        yt.parseXML = function(t) {
            var e;
            if (!t || "string" != typeof t) return null;
            try {
                e = (new n.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || yt.error("Invalid XML: " + t), e
        };
        var Ie = /\[\]$/,
            Ne = /\r?\n/g,
            ke = /^(?:submit|button|image|reset|file)$/i,
            Le = /^(?:input|select|textarea|keygen)/i;
        yt.param = function(t, e) {
            var n, i = [],
                o = function(t, e) {
                    var n = yt.isFunction(e) ? e() : e;
                    i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (Array.isArray(t) || t.jquery && !yt.isPlainObject(t)) yt.each(t, function() {
                o(this.name, this.value)
            });
            else
                for (n in t) Z(n, t[n], e, o);
            return i.join("&")
        }, yt.fn.extend({
            serialize: function() {
                return yt.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = yt.prop(this, "elements");
                    return t ? yt.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !yt(this).is(":disabled") && Le.test(this.nodeName) && !ke.test(t) && (this.checked || !Kt.test(t))
                }).map(function(t, e) {
                    var n = yt(this).val();
                    return null == n ? null : Array.isArray(n) ? yt.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Ne, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(Ne, "\r\n")
                    }
                }).get()
            }
        });
        var He = /%20/g,
            je = /#.*$/,
            Pe = /([?&])_=[^&]*/,
            Re = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            We = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Fe = /^(?:GET|HEAD)$/,
            Me = /^\/\//,
            Be = {},
            qe = {},
            $e = "*/".concat("*"),
            Ve = st.createElement("a");
        Ve.href = Se.href, yt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Se.href,
                type: "GET",
                isLocal: We.test(Se.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": $e,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": yt.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? nt(nt(t, yt.ajaxSettings), e) : nt(yt.ajaxSettings, t)
            },
            ajaxPrefilter: tt(Be),
            ajaxTransport: tt(qe),
            ajax: function(t, e) {
                function i(t, e, i, a) {
                    var u, h, d, _, E, T = e;
                    c || (c = !0, l && n.clearTimeout(l), o = void 0, s = a || "", C.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, i && (_ = it(p, C, i)), _ = ot(p, _, C, u), u ? (p.ifModified && (E = C.getResponseHeader("Last-Modified"), E && (yt.lastModified[r] = E), (E = C.getResponseHeader("etag")) && (yt.etag[r] = E)), 204 === t || "HEAD" === p.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = _.state, h = _.data, d = _.error, u = !d)) : (d = T, !t && T || (T = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (e || T) + "", u ? v.resolveWith(g, [h, T, C]) : v.rejectWith(g, [C, T, d]), C.statusCode(b), b = void 0, f && m.trigger(u ? "ajaxSuccess" : "ajaxError", [C, p, u ? h : d]), y.fireWith(g, [C, T]), f && (m.trigger("ajaxComplete", [C, p]), --yt.active || yt.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var o, r, s, a, l, u, c, f, h, d, p = yt.ajaxSetup({}, e),
                    g = p.context || p,
                    m = p.context && (g.nodeType || g.jquery) ? yt(g) : yt.event,
                    v = yt.Deferred(),
                    y = yt.Callbacks("once memory"),
                    b = p.statusCode || {},
                    _ = {},
                    E = {},
                    T = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (c) {
                                if (!a)
                                    for (a = {}; e = Re.exec(s);) a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return c ? s : null
                        },
                        setRequestHeader: function(t, e) {
                            return null == c && (t = E[t.toLowerCase()] = E[t.toLowerCase()] || t, _[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return null == c && (p.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (c) C.always(t[C.status]);
                                else
                                    for (e in t) b[e] = [b[e], t[e]];
                            return this
                        },
                        abort: function(t) {
                            var e = t || T;
                            return o && o.abort(e), i(0, e), this
                        }
                    };
                if (v.promise(C), p.url = ((t || p.url || Se.href) + "").replace(Me, Se.protocol + "//"), p.type = e.method || e.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(Lt) || [""], null == p.crossDomain) {
                    u = st.createElement("a");
                    try {
                        u.href = p.url, u.href = u.href, p.crossDomain = Ve.protocol + "//" + Ve.host != u.protocol + "//" + u.host
                    } catch (t) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = yt.param(p.data, p.traditional)), et(Be, p, e, C), c) return C;
                f = yt.event && p.global, f && 0 == yt.active++ && yt.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Fe.test(p.type), r = p.url.replace(je, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(He, "+")) : (d = p.url.slice(r.length), p.data && (r += (Oe.test(r) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (r = r.replace(Pe, "$1"), d = (Oe.test(r) ? "&" : "?") + "_=" + De++ + d), p.url = r + d), p.ifModified && (yt.lastModified[r] && C.setRequestHeader("If-Modified-Since", yt.lastModified[r]), yt.etag[r] && C.setRequestHeader("If-None-Match", yt.etag[r])), (p.data && p.hasContent && !1 !== p.contentType || e.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + $e + "; q=0.01" : "") : p.accepts["*"]);
                for (h in p.headers) C.setRequestHeader(h, p.headers[h]);
                if (p.beforeSend && (!1 === p.beforeSend.call(g, C, p) || c)) return C.abort();
                if (T = "abort", y.add(p.complete), C.done(p.success), C.fail(p.error), o = et(qe, p, e, C)) {
                    if (C.readyState = 1, f && m.trigger("ajaxSend", [C, p]), c) return C;
                    p.async && p.timeout > 0 && (l = n.setTimeout(function() {
                        C.abort("timeout")
                    }, p.timeout));
                    try {
                        c = !1, o.send(_, i)
                    } catch (t) {
                        if (c) throw t;
                        i(-1, t)
                    }
                } else i(-1, "No Transport");
                return C
            },
            getJSON: function(t, e, n) {
                return yt.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return yt.get(t, void 0, e, "script")
            }
        }), yt.each(["get", "post"], function(t, e) {
            yt[e] = function(t, n, i, o) {
                return yt.isFunction(n) && (o = o || i, i = n, n = void 0), yt.ajax(yt.extend({
                    url: t,
                    type: e,
                    dataType: o,
                    data: n,
                    success: i
                }, yt.isPlainObject(t) && t))
            }
        }), yt._evalUrl = function(t) {
            return yt.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, yt.fn.extend({
            wrapAll: function(t) {
                var e;
                return this[0] && (yt.isFunction(t) && (t = t.call(this[0])), e = yt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this
            },
            wrapInner: function(t) {
                return yt.isFunction(t) ? this.each(function(e) {
                    yt(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = yt(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = yt.isFunction(t);
                return this.each(function(n) {
                    yt(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function(t) {
                return this.parent(t).not("body").each(function() {
                    yt(this).replaceWith(this.childNodes)
                }), this
            }
        }), yt.expr.pseudos.hidden = function(t) {
            return !yt.expr.pseudos.visible(t)
        }, yt.expr.pseudos.visible = function(t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }, yt.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (t) {}
        };
        var Ue = {
                0: 200,
                1223: 204
            },
            Ge = yt.ajaxSettings.xhr();
        vt.cors = !!Ge && "withCredentials" in Ge, vt.ajax = Ge = !!Ge, yt.ajaxTransport(function(t) {
            var e, i;
            if (vt.cors || Ge && !t.crossDomain) return {
                send: function(o, r) {
                    var s, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (s in t.xhrFields) a[s] = t.xhrFields[s];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    for (s in o) a.setRequestHeader(s, o[s]);
                    e = function(t) {
                        return function() {
                            e && (e = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Ue[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = e(), i = a.onerror = e("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                        4 === a.readyState && n.setTimeout(function() {
                            e && i()
                        })
                    }, e = e("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (t) {
                        if (e) throw t
                    }
                },
                abort: function() {
                    e && e()
                }
            }
        }), yt.ajaxPrefilter(function(t) {
            t.crossDomain && (t.contents.script = !1)
        }), yt.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return yt.globalEval(t), t
                }
            }
        }), yt.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), yt.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, n;
                return {
                    send: function(i, o) {
                        e = yt("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function(t) {
                            e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type)
                        }), st.head.appendChild(e[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Qe = [],
            Ke = /(=)\?(?=&|$)|\?\?/;
        yt.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Qe.pop() || yt.expando + "_" + De++;
                return this[t] = !0, t
            }
        }), yt.ajaxPrefilter("json jsonp", function(t, e, i) {
            var o, r, s, a = !1 !== t.jsonp && (Ke.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ke.test(t.data) && "data");
            if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = yt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ke, "$1" + o) : !1 !== t.jsonp && (t.url += (Oe.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
                return s || yt.error(o + " was not called"), s[0]
            }, t.dataTypes[0] = "json", r = n[o], n[o] = function() {
                s = arguments
            }, i.always(function() {
                void 0 === r ? yt(n).removeProp(o) : n[o] = r, t[o] && (t.jsonpCallback = e.jsonpCallback, Qe.push(o)), s && yt.isFunction(r) && r(s[0]), s = r = void 0
            }), "script"
        }), vt.createHTMLDocument = function() {
            var t = st.implementation.createHTMLDocument("").body;
            return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
        }(), yt.parseHTML = function(t, e, n) {
            if ("string" != typeof t) return [];
            "boolean" == typeof e && (n = e, e = !1);
            var i, o, r;
            return e || (vt.createHTMLDocument ? (e = st.implementation.createHTMLDocument(""), i = e.createElement("base"), i.href = st.location.href, e.head.appendChild(i)) : e = st), o = St.exec(t), r = !n && [], o ? [e.createElement(o[1])] : (o = w([t], e, r), r && r.length && yt(r).remove(), yt.merge([], o.childNodes))
        }, yt.fn.load = function(t, e, n) {
            var i, o, r, s = this,
                a = t.indexOf(" ");
            return a > -1 && (i = z(t.slice(a)), t = t.slice(0, a)), yt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && yt.ajax({
                url: t,
                type: o || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                r = arguments, s.html(i ? yt("<div>").append(yt.parseHTML(t)).find(i) : t)
            }).always(n && function(t, e) {
                s.each(function() {
                    n.apply(this, r || [t.responseText, e, t])
                })
            }), this
        }, yt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            yt.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), yt.expr.pseudos.animated = function(t) {
            return yt.grep(yt.timers, function(e) {
                return t === e.elem
            }).length
        }, yt.offset = {
            setOffset: function(t, e, n) {
                var i, o, r, s, a, l, u, c = yt.css(t, "position"),
                    f = yt(t),
                    h = {};
                "static" === c && (t.style.position = "relative"), a = f.offset(), r = yt.css(t, "top"), l = yt.css(t, "left"), u = ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1, u ? (i = f.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), yt.isFunction(e) && (e = e.call(t, n, yt.extend({}, a))), null != e.top && (h.top = e.top - a.top + s), null != e.left && (h.left = e.left - a.left + o), "using" in e ? e.using.call(t, h) : f.css(h)
            }
        }, yt.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    yt.offset.setOffset(this, t, e)
                });
                var e, n, i, o, r = this[0];
                if (r) return r.getClientRects().length ? (i = r.getBoundingClientRect(), e = r.ownerDocument, n = e.documentElement, o = e.defaultView, {
                    top: i.top + o.pageYOffset - n.clientTop,
                    left: i.left + o.pageXOffset - n.clientLeft
                }) : {
                    top: 0,
                    left: 0
                }
            },
            position: function() {
                if (this[0]) {
                    var t, e, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === yt.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), l(t[0], "html") || (i = t.offset()), i = {
                        top: i.top + yt.css(t[0], "borderTopWidth", !0),
                        left: i.left + yt.css(t[0], "borderLeftWidth", !0)
                    }), {
                        top: e.top - i.top - yt.css(n, "marginTop", !0),
                        left: e.left - i.left - yt.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === yt.css(t, "position");) t = t.offsetParent;
                    return t || Zt
                })
            }
        }), yt.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var n = "pageYOffset" === e;
            yt.fn[t] = function(i) {
                return Pt(this, function(t, i, o) {
                    var r;
                    if (yt.isWindow(t) ? r = t : 9 === t.nodeType && (r = t.defaultView), void 0 === o) return r ? r[e] : t[i];
                    r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : t[i] = o
                }, t, i, arguments.length)
            }
        }), yt.each(["top", "left"], function(t, e) {
            yt.cssHooks[e] = R(vt.pixelPosition, function(t, n) {
                if (n) return n = P(t, e), ue.test(n) ? yt(t).position()[e] + "px" : n
            })
        }), yt.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            yt.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, i) {
                yt.fn[i] = function(o, r) {
                    var s = arguments.length && (n || "boolean" != typeof o),
                        a = n || (!0 === o || !0 === r ? "margin" : "border");
                    return Pt(this, function(e, n, o) {
                        var r;
                        return yt.isWindow(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === o ? yt.css(e, n, a) : yt.style(e, n, o, a)
                    }, e, s ? o : void 0, s)
                }
            })
        }), yt.fn.extend({
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        }), yt.holdReady = function(t) {
            t ? yt.readyWait++ : yt.ready(!0)
        }, yt.isArray = Array.isArray, yt.parseJSON = JSON.parse, yt.nodeName = l, i = [], void 0 !== (o = function() {
            return yt
        }.apply(e, i)) && (t.exports = o);
        var Xe = n.jQuery,
            Ye = n.$;
        return yt.noConflict = function(t) {
            return n.$ === yt && (n.$ = Ye), t && n.jQuery === yt && (n.jQuery = Xe), yt
        }, r || (n.jQuery = n.$ = yt), yt
    })
}, function(t, e, n) {
    var i, o;
    ! function(r, s) {
        i = s, void 0 !== (o = "function" == typeof i ? i.call(e, n, e, t) : i) && (t.exports = o)
    }(0, function(t, e, n) {
        "use strict";

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t) {
            var e = t.getBoundingClientRect(),
                n = {};
            for (var i in e) n[i] = e[i];
            if (t.ownerDocument !== document) {
                var r = t.ownerDocument.defaultView.frameElement;
                if (r) {
                    var s = o(r);
                    n.top += s.top, n.bottom += s.top, n.left += s.left, n.right += s.left
                }
            }
            return n
        }

        function r(t) {
            var e = getComputedStyle(t) || {},
                n = e.position,
                i = [];
            if ("fixed" === n) return [t];
            for (var o = t;
                (o = o.parentNode) && o && 1 === o.nodeType;) {
                var r = void 0;
                try {
                    r = getComputedStyle(o)
                } catch (t) {}
                if (void 0 === r || null === r) return i.push(o), i;
                var s = r,
                    a = s.overflow,
                    l = s.overflowX;
                /(auto|scroll)/.test(a + s.overflowY + l) && ("absolute" !== n || ["relative", "absolute", "fixed"].indexOf(r.position) >= 0) && i.push(o)
            }
            return i.push(t.ownerDocument.body), t.ownerDocument !== document && i.push(t.ownerDocument.defaultView), i
        }

        function s() {
            x && document.body.removeChild(x), x = null
        }

        function a(t) {
            var e = void 0;
            t === document ? (e = document, t = document.documentElement) : e = t.ownerDocument;
            var n = e.documentElement,
                i = o(t),
                r = D();
            return i.top -= r.top, i.left -= r.left, void 0 === i.width && (i.width = document.body.scrollWidth - i.left - i.right), void 0 === i.height && (i.height = document.body.scrollHeight - i.top - i.bottom), i.top = i.top - n.clientTop, i.left = i.left - n.clientLeft, i.right = e.body.clientWidth - i.width - i.left, i.bottom = e.body.clientHeight - i.height - i.top, i
        }

        function l(t) {
            return t.offsetParent || document.documentElement
        }

        function u() {
            if (O) return O;
            var t = document.createElement("div");
            t.style.width = "100%", t.style.height = "200px";
            var e = document.createElement("div");
            c(e.style, {
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "none",
                visibility: "hidden",
                width: "200px",
                height: "150px",
                overflow: "hidden"
            }), e.appendChild(t), document.body.appendChild(e);
            var n = t.offsetWidth;
            e.style.overflow = "scroll";
            var i = t.offsetWidth;
            n === i && (i = e.clientWidth), document.body.removeChild(e);
            var o = n - i;
            return O = {
                width: o,
                height: o
            }
        }

        function c() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                e = [];
            return Array.prototype.push.apply(e, arguments), e.slice(1).forEach(function(e) {
                if (e)
                    for (var n in e)({}).hasOwnProperty.call(e, n) && (t[n] = e[n])
            }), t
        }

        function f(t, e) {
            if (void 0 !== t.classList) e.split(" ").forEach(function(e) {
                e.trim() && t.classList.remove(e)
            });
            else {
                var n = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"),
                    i = p(t).replace(n, " ");
                g(t, i)
            }
        }

        function h(t, e) {
            if (void 0 !== t.classList) e.split(" ").forEach(function(e) {
                e.trim() && t.classList.add(e)
            });
            else {
                f(t, e);
                var n = p(t) + " " + e;
                g(t, n)
            }
        }

        function d(t, e) {
            if (void 0 !== t.classList) return t.classList.contains(e);
            var n = p(t);
            return new RegExp("(^| )" + e + "( |$)", "gi").test(n)
        }

        function p(t) {
            return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString ? t.className.baseVal : t.className
        }

        function g(t, e) {
            t.setAttribute("class", e)
        }

        function m(t, e, n) {
            n.forEach(function(n) {
                -1 === e.indexOf(n) && d(t, n) && f(t, n)
            }), e.forEach(function(e) {
                d(t, e) || h(t, e)
            })
        }

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function v(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function y(t, e) {
            var n = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
            return t + n >= e && e >= t - n
        }

        function b() {
            return "undefined" != typeof performance && void 0 !== performance.now ? performance.now() : +new Date
        }

        function _() {
            for (var t = {
                    top: 0,
                    left: 0
                }, e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
            return n.forEach(function(e) {
                var n = e.top,
                    i = e.left;
                "string" == typeof n && (n = parseFloat(n, 10)), "string" == typeof i && (i = parseFloat(i, 10)), t.top += n, t.left += i
            }), t
        }

        function E(t, e) {
            return "string" == typeof t.left && -1 !== t.left.indexOf("%") && (t.left = parseFloat(t.left, 10) / 100 * e.width), "string" == typeof t.top && -1 !== t.top.indexOf("%") && (t.top = parseFloat(t.top, 10) / 100 * e.height), t
        }

        function T(t, e) {
            return "scrollParent" === e ? e = t.scrollParents[0] : "window" === e && (e = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), e === document && (e = e.documentElement), void 0 !== e.nodeType && function() {
                var t = e,
                    n = a(e),
                    i = n,
                    o = getComputedStyle(e);
                if (e = [i.left, i.top, n.width + i.left, n.height + i.top], t.ownerDocument !== document) {
                    var r = t.ownerDocument.defaultView;
                    e[0] += r.pageXOffset, e[1] += r.pageYOffset, e[2] += r.pageXOffset, e[3] += r.pageYOffset
                }
                X.forEach(function(t, n) {
                    t = t[0].toUpperCase() + t.substr(1), "Top" === t || "Left" === t ? e[n] += parseFloat(o["border" + t + "Width"]) : e[n] -= parseFloat(o["border" + t + "Width"])
                })
            }(), e
        }
        var C = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            w = void 0;
        void 0 === w && (w = {
            modules: []
        });
        var x = null,
            A = function() {
                var t = 0;
                return function() {
                    return ++t
                }
            }(),
            S = {},
            D = function() {
                var t = x;
                t && document.body.contains(t) || (t = document.createElement("div"), t.setAttribute("data-tether-id", A()), c(t.style, {
                    top: 0,
                    left: 0,
                    position: "absolute"
                }), document.body.appendChild(t), x = t);
                var e = t.getAttribute("data-tether-id");
                return void 0 === S[e] && (S[e] = o(t), N(function() {
                    delete S[e]
                })), S[e]
            },
            O = null,
            I = [],
            N = function(t) {
                I.push(t)
            },
            k = function() {
                for (var t = void 0; t = I.pop();) t()
            },
            L = function() {
                function t() {
                    i(this, t)
                }
                return C(t, [{
                    key: "on",
                    value: function(t, e, n) {
                        var i = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];
                        void 0 === this.bindings && (this.bindings = {}), void 0 === this.bindings[t] && (this.bindings[t] = []), this.bindings[t].push({
                            handler: e,
                            ctx: n,
                            once: i
                        })
                    }
                }, {
                    key: "once",
                    value: function(t, e, n) {
                        this.on(t, e, n, !0)
                    }
                }, {
                    key: "off",
                    value: function(t, e) {
                        if (void 0 !== this.bindings && void 0 !== this.bindings[t])
                            if (void 0 === e) delete this.bindings[t];
                            else
                                for (var n = 0; n < this.bindings[t].length;) this.bindings[t][n].handler === e ? this.bindings[t].splice(n, 1) : ++n
                    }
                }, {
                    key: "trigger",
                    value: function(t) {
                        if (void 0 !== this.bindings && this.bindings[t]) {
                            for (var e = 0, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                            for (; e < this.bindings[t].length;) {
                                var r = this.bindings[t][e],
                                    s = r.handler,
                                    a = r.ctx,
                                    l = r.once,
                                    u = a;
                                void 0 === u && (u = this), s.apply(u, i), l ? this.bindings[t].splice(e, 1) : ++e
                            }
                        }
                    }
                }]), t
            }();
        w.Utils = {
            getActualBoundingClientRect: o,
            getScrollParents: r,
            getBounds: a,
            getOffsetParent: l,
            extend: c,
            addClass: h,
            removeClass: f,
            hasClass: d,
            updateClasses: m,
            defer: N,
            flush: k,
            uniqueId: A,
            Evented: L,
            getScrollBarSize: u,
            removeUtilElements: s
        };
        var H = function() {
                function t(t, e) {
                    var n = [],
                        i = !0,
                        o = !1,
                        r = void 0;
                    try {
                        for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); i = !0);
                    } catch (t) {
                        o = !0, r = t
                    } finally {
                        try {
                            !i && a.return && a.return()
                        } finally {
                            if (o) throw r
                        }
                    }
                    return n
                }
                return function(e, n) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return t(e, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            C = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            j = function(t, e, n) {
                for (var i = !0; i;) {
                    var o = t,
                        r = e,
                        s = n;
                    i = !1, null === o && (o = Function.prototype);
                    var a = Object.getOwnPropertyDescriptor(o, r);
                    if (void 0 !== a) {
                        if ("value" in a) return a.value;
                        var l = a.get;
                        if (void 0 === l) return;
                        return l.call(s)
                    }
                    var u = Object.getPrototypeOf(o);
                    if (null === u) return;
                    t = u, e = r, n = s, i = !0, a = u = void 0
                }
            };
        if (void 0 === w) throw new Error("You must include the utils.js file before tether.js");
        var P = w.Utils,
            r = P.getScrollParents,
            a = P.getBounds,
            l = P.getOffsetParent,
            c = P.extend,
            h = P.addClass,
            f = P.removeClass,
            m = P.updateClasses,
            N = P.defer,
            k = P.flush,
            u = P.getScrollBarSize,
            s = P.removeUtilElements,
            R = function() {
                if ("undefined" == typeof document) return "";
                for (var t = document.createElement("div"), e = ["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"], n = 0; n < e.length; ++n) {
                    var i = e[n];
                    if (void 0 !== t.style[i]) return i
                }
            }(),
            W = [],
            F = function() {
                W.forEach(function(t) {
                    t.position(!1)
                }), k()
            };
        ! function() {
            var t = null,
                e = null,
                n = null,
                i = function i() {
                    if (void 0 !== e && e > 16) return e = Math.min(e - 16, 250), void(n = setTimeout(i, 250));
                    void 0 !== t && b() - t < 10 || (null != n && (clearTimeout(n), n = null), t = b(), F(), e = b() - t)
                };
            "undefined" != typeof window && void 0 !== window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function(t) {
                window.addEventListener(t, i)
            })
        }();
        var M = {
                center: "center",
                left: "right",
                right: "left"
            },
            B = {
                middle: "middle",
                top: "bottom",
                bottom: "top"
            },
            q = {
                top: 0,
                left: 0,
                middle: "50%",
                center: "50%",
                bottom: "100%",
                right: "100%"
            },
            $ = function(t, e) {
                var n = t.left,
                    i = t.top;
                return "auto" === n && (n = M[e.left]), "auto" === i && (i = B[e.top]), {
                    left: n,
                    top: i
                }
            },
            V = function(t) {
                var e = t.left,
                    n = t.top;
                return void 0 !== q[t.left] && (e = q[t.left]), void 0 !== q[t.top] && (n = q[t.top]), {
                    left: e,
                    top: n
                }
            },
            U = function(t) {
                var e = t.split(" "),
                    n = H(e, 2);
                return {
                    top: n[0],
                    left: n[1]
                }
            },
            G = U,
            Q = function(t) {
                function e(t) {
                    var n = this;
                    i(this, e), j(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.position = this.position.bind(this), W.push(this), this.history = [], this.setOptions(t, !1), w.modules.forEach(function(t) {
                        void 0 !== t.initialize && t.initialize.call(n)
                    }), this.position()
                }
                return v(e, t), C(e, [{
                    key: "getClass",
                    value: function() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
                            e = this.options.classes;
                        return void 0 !== e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t
                    }
                }, {
                    key: "setOptions",
                    value: function(t) {
                        var e = this,
                            n = arguments.length <= 1 || void 0 === arguments[1] || arguments[1],
                            i = {
                                offset: "0 0",
                                targetOffset: "0 0",
                                targetAttachment: "auto auto",
                                classPrefix: "tether"
                            };
                        this.options = c(i, t);
                        var o = this.options,
                            s = o.element,
                            a = o.target,
                            l = o.targetModifier;
                        if (this.element = s, this.target = a, this.targetModifier = l, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function(t) {
                                if (void 0 === e[t]) throw new Error("Tether Error: Both element and target must be defined");
                                void 0 !== e[t].jquery ? e[t] = e[t][0] : "string" == typeof e[t] && (e[t] = document.querySelector(e[t]))
                            }), h(this.element, this.getClass("element")), !1 !== this.options.addTargetClasses && h(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");
                        this.targetAttachment = G(this.options.targetAttachment), this.attachment = G(this.options.attachment), this.offset = U(this.options.offset), this.targetOffset = U(this.options.targetOffset), void 0 !== this.scrollParents && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParents = [this.target] : this.scrollParents = r(this.target), !1 !== this.options.enabled && this.enable(n)
                    }
                }, {
                    key: "getTargetBounds",
                    value: function() {
                        if (void 0 === this.targetModifier) return a(this.target);
                        if ("visible" === this.targetModifier) {
                            if (this.target === document.body) return {
                                top: pageYOffset,
                                left: pageXOffset,
                                height: innerHeight,
                                width: innerWidth
                            };
                            var t = a(this.target),
                                e = {
                                    height: t.height,
                                    width: t.width,
                                    top: t.top,
                                    left: t.left
                                };
                            return e.height = Math.min(e.height, t.height - (pageYOffset - t.top)), e.height = Math.min(e.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))), e.height = Math.min(innerHeight, e.height), e.height -= 2, e.width = Math.min(e.width, t.width - (pageXOffset - t.left)), e.width = Math.min(e.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))), e.width = Math.min(innerWidth, e.width), e.width -= 2, e.top < pageYOffset && (e.top = pageYOffset), e.left < pageXOffset && (e.left = pageXOffset), e
                        }
                        if ("scroll-handle" === this.targetModifier) {
                            var t = void 0,
                                n = this.target;
                            n === document.body ? (n = document.documentElement, t = {
                                left: pageXOffset,
                                top: pageYOffset,
                                height: innerHeight,
                                width: innerWidth
                            }) : t = a(n);
                            var i = getComputedStyle(n),
                                o = n.scrollWidth > n.clientWidth || [i.overflow, i.overflowX].indexOf("scroll") >= 0 || this.target !== document.body,
                                r = 0;
                            o && (r = 15);
                            var s = t.height - parseFloat(i.borderTopWidth) - parseFloat(i.borderBottomWidth) - r,
                                e = {
                                    width: 15,
                                    height: .975 * s * (s / n.scrollHeight),
                                    left: t.left + t.width - parseFloat(i.borderLeftWidth) - 15
                                },
                                l = 0;
                            s < 408 && this.target === document.body && (l = -11e-5 * Math.pow(s, 2) - .00727 * s + 22.58), this.target !== document.body && (e.height = Math.max(e.height, 24));
                            var u = this.target.scrollTop / (n.scrollHeight - s);
                            return e.top = u * (s - e.height - l) + t.top + parseFloat(i.borderTopWidth), this.target === document.body && (e.height = Math.max(e.height, 24)), e
                        }
                    }
                }, {
                    key: "clearCache",
                    value: function() {
                        this._cache = {}
                    }
                }, {
                    key: "cache",
                    value: function(t, e) {
                        return void 0 === this._cache && (this._cache = {}), void 0 === this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t]
                    }
                }, {
                    key: "enable",
                    value: function() {
                        var t = this,
                            e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                        !1 !== this.options.addTargetClasses && h(this.target, this.getClass("enabled")), h(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParents.forEach(function(e) {
                            e !== t.target.ownerDocument && e.addEventListener("scroll", t.position)
                        }), e && this.position()
                    }
                }, {
                    key: "disable",
                    value: function() {
                        var t = this;
                        f(this.target, this.getClass("enabled")), f(this.element, this.getClass("enabled")), this.enabled = !1, void 0 !== this.scrollParents && this.scrollParents.forEach(function(e) {
                            e.removeEventListener("scroll", t.position)
                        })
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var t = this;
                        this.disable(), W.forEach(function(e, n) {
                            e === t && W.splice(n, 1)
                        }), 0 === W.length && s()
                    }
                }, {
                    key: "updateAttachClasses",
                    value: function(t, e) {
                        var n = this;
                        t = t || this.attachment, e = e || this.targetAttachment;
                        var i = ["left", "top", "bottom", "right", "middle", "center"];
                        void 0 !== this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), void 0 === this._addAttachClasses && (this._addAttachClasses = []);
                        var o = this._addAttachClasses;
                        t.top && o.push(this.getClass("element-attached") + "-" + t.top), t.left && o.push(this.getClass("element-attached") + "-" + t.left), e.top && o.push(this.getClass("target-attached") + "-" + e.top), e.left && o.push(this.getClass("target-attached") + "-" + e.left);
                        var r = [];
                        i.forEach(function(t) {
                            r.push(n.getClass("element-attached") + "-" + t), r.push(n.getClass("target-attached") + "-" + t)
                        }), N(function() {
                            void 0 !== n._addAttachClasses && (m(n.element, n._addAttachClasses, r), !1 !== n.options.addTargetClasses && m(n.target, n._addAttachClasses, r), delete n._addAttachClasses)
                        })
                    }
                }, {
                    key: "position",
                    value: function() {
                        var t = this,
                            e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                        if (this.enabled) {
                            this.clearCache();
                            var n = $(this.targetAttachment, this.attachment);
                            this.updateAttachClasses(this.attachment, n);
                            var i = this.cache("element-bounds", function() {
                                    return a(t.element)
                                }),
                                o = i.width,
                                r = i.height;
                            if (0 === o && 0 === r && void 0 !== this.lastSize) {
                                var s = this.lastSize;
                                o = s.width, r = s.height
                            } else this.lastSize = {
                                width: o,
                                height: r
                            };
                            var c = this.cache("target-bounds", function() {
                                    return t.getTargetBounds()
                                }),
                                f = c,
                                h = E(V(this.attachment), {
                                    width: o,
                                    height: r
                                }),
                                d = E(V(n), f),
                                p = E(this.offset, {
                                    width: o,
                                    height: r
                                }),
                                g = E(this.targetOffset, f);
                            h = _(h, p), d = _(d, g);
                            for (var m = c.left + d.left - h.left, v = c.top + d.top - h.top, y = 0; y < w.modules.length; ++y) {
                                var b = w.modules[y],
                                    T = b.position.call(this, {
                                        left: m,
                                        top: v,
                                        targetAttachment: n,
                                        targetPos: c,
                                        elementPos: i,
                                        offset: h,
                                        targetOffset: d,
                                        manualOffset: p,
                                        manualTargetOffset: g,
                                        scrollbarSize: S,
                                        attachment: this.attachment
                                    });
                                if (!1 === T) return !1;
                                void 0 !== T && "object" == typeof T && (v = T.top, m = T.left)
                            }
                            var C = {
                                    page: {
                                        top: v,
                                        left: m
                                    },
                                    viewport: {
                                        top: v - pageYOffset,
                                        bottom: pageYOffset - v - r + innerHeight,
                                        left: m - pageXOffset,
                                        right: pageXOffset - m - o + innerWidth
                                    }
                                },
                                x = this.target.ownerDocument,
                                A = x.defaultView,
                                S = void 0;
                            return A.innerHeight > x.documentElement.clientHeight && (S = this.cache("scrollbar-size", u), C.viewport.bottom -= S.height), A.innerWidth > x.documentElement.clientWidth && (S = this.cache("scrollbar-size", u), C.viewport.right -= S.width), -1 !== ["", "static"].indexOf(x.body.style.position) && -1 !== ["", "static"].indexOf(x.body.parentElement.style.position) || (C.page.bottom = x.body.scrollHeight - v - r, C.page.right = x.body.scrollWidth - m - o), void 0 !== this.options.optimizations && !1 !== this.options.optimizations.moveElement && void 0 === this.targetModifier && function() {
                                var e = t.cache("target-offsetparent", function() {
                                        return l(t.target)
                                    }),
                                    n = t.cache("target-offsetparent-bounds", function() {
                                        return a(e)
                                    }),
                                    i = getComputedStyle(e),
                                    o = n,
                                    r = {};
                                if (["Top", "Left", "Bottom", "Right"].forEach(function(t) {
                                        r[t.toLowerCase()] = parseFloat(i["border" + t + "Width"])
                                    }), n.right = x.body.scrollWidth - n.left - o.width + r.right, n.bottom = x.body.scrollHeight - n.top - o.height + r.bottom, C.page.top >= n.top + r.top && C.page.bottom >= n.bottom && C.page.left >= n.left + r.left && C.page.right >= n.right) {
                                    var s = e.scrollTop,
                                        u = e.scrollLeft;
                                    C.offset = {
                                        top: C.page.top - n.top + s - r.top,
                                        left: C.page.left - n.left + u - r.left
                                    }
                                }
                            }(), this.move(C), this.history.unshift(C), this.history.length > 3 && this.history.pop(), e && k(), !0
                        }
                    }
                }, {
                    key: "move",
                    value: function(t) {
                        var e = this;
                        if (void 0 !== this.element.parentNode) {
                            var n = {};
                            for (var i in t) {
                                n[i] = {};
                                for (var o in t[i]) {
                                    for (var r = !1, s = 0; s < this.history.length; ++s) {
                                        var a = this.history[s];
                                        if (void 0 !== a[i] && !y(a[i][o], t[i][o])) {
                                            r = !0;
                                            break
                                        }
                                    }
                                    r || (n[i][o] = !0)
                                }
                            }
                            var u = {
                                    top: "",
                                    left: "",
                                    right: "",
                                    bottom: ""
                                },
                                f = function(t, n) {
                                    if (!1 !== (void 0 !== e.options.optimizations ? e.options.optimizations.gpu : null)) {
                                        var i = void 0,
                                            o = void 0;
                                        t.top ? (u.top = 0, i = n.top) : (u.bottom = 0, i = -n.bottom), t.left ? (u.left = 0, o = n.left) : (u.right = 0, o = -n.right), window.matchMedia && (window.matchMedia("only screen and (min-resolution: 1.3dppx)").matches || window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches || (o = Math.round(o), i = Math.round(i))), u[R] = "translateX(" + o + "px) translateY(" + i + "px)", "msTransform" !== R && (u[R] += " translateZ(0)")
                                    } else t.top ? u.top = n.top + "px" : u.bottom = n.bottom + "px", t.left ? u.left = n.left + "px" : u.right = n.right + "px"
                                },
                                h = !1;
                            if ((n.page.top || n.page.bottom) && (n.page.left || n.page.right) ? (u.position = "absolute", f(n.page, t.page)) : (n.viewport.top || n.viewport.bottom) && (n.viewport.left || n.viewport.right) ? (u.position = "fixed", f(n.viewport, t.viewport)) : void 0 !== n.offset && n.offset.top && n.offset.left ? function() {
                                    u.position = "absolute";
                                    var i = e.cache("target-offsetparent", function() {
                                        return l(e.target)
                                    });
                                    l(e.element) !== i && N(function() {
                                        e.element.parentNode.removeChild(e.element), i.appendChild(e.element)
                                    }), f(n.offset, t.offset), h = !0
                                }() : (u.position = "absolute", f({
                                    top: !0,
                                    left: !0
                                }, t.page)), !h)
                                if (this.options.bodyElement) this.options.bodyElement.appendChild(this.element);
                                else {
                                    for (var d = !0, p = this.element.parentNode; p && 1 === p.nodeType && "BODY" !== p.tagName;) {
                                        if ("static" !== getComputedStyle(p).position) {
                                            d = !1;
                                            break
                                        }
                                        p = p.parentNode
                                    }
                                    d || (this.element.parentNode.removeChild(this.element), this.element.ownerDocument.body.appendChild(this.element))
                                }
                            var g = {},
                                m = !1;
                            for (var o in u) {
                                var v = u[o];
                                this.element.style[o] !== v && (m = !0, g[o] = v)
                            }
                            m && N(function() {
                                c(e.element.style, g), e.trigger("repositioned")
                            })
                        }
                    }
                }]), e
            }(L);
        Q.modules = [], w.position = F;
        var K = c(Q, w),
            H = function() {
                function t(t, e) {
                    var n = [],
                        i = !0,
                        o = !1,
                        r = void 0;
                    try {
                        for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); i = !0);
                    } catch (t) {
                        o = !0, r = t
                    } finally {
                        try {
                            !i && a.return && a.return()
                        } finally {
                            if (o) throw r
                        }
                    }
                    return n
                }
                return function(e, n) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return t(e, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            P = w.Utils,
            a = P.getBounds,
            c = P.extend,
            m = P.updateClasses,
            N = P.defer,
            X = ["left", "top", "right", "bottom"];
        w.modules.push({
            position: function(t) {
                var e = this,
                    n = t.top,
                    i = t.left,
                    o = t.targetAttachment;
                if (!this.options.constraints) return !0;
                var r = this.cache("element-bounds", function() {
                        return a(e.element)
                    }),
                    s = r.height,
                    l = r.width;
                if (0 === l && 0 === s && void 0 !== this.lastSize) {
                    var u = this.lastSize;
                    l = u.width, s = u.height
                }
                var f = this.cache("target-bounds", function() {
                        return e.getTargetBounds()
                    }),
                    h = f.height,
                    d = f.width,
                    p = [this.getClass("pinned"), this.getClass("out-of-bounds")];
                this.options.constraints.forEach(function(t) {
                    var e = t.outOfBoundsClass,
                        n = t.pinnedClass;
                    e && p.push(e), n && p.push(n)
                }), p.forEach(function(t) {
                    ["left", "top", "right", "bottom"].forEach(function(e) {
                        p.push(t + "-" + e)
                    })
                });
                var g = [],
                    v = c({}, o),
                    y = c({}, this.attachment);
                return this.options.constraints.forEach(function(t) {
                    var r = t.to,
                        a = t.attachment,
                        u = t.pin;
                    void 0 === a && (a = "");
                    var c = void 0,
                        f = void 0;
                    if (a.indexOf(" ") >= 0) {
                        var p = a.split(" "),
                            m = H(p, 2);
                        f = m[0], c = m[1]
                    } else c = f = a;
                    var b = T(e, r);
                    "target" !== f && "both" !== f || (n < b[1] && "top" === v.top && (n += h, v.top = "bottom"), n + s > b[3] && "bottom" === v.top && (n -= h, v.top = "top")), "together" === f && ("top" === v.top && ("bottom" === y.top && n < b[1] ? (n += h, v.top = "bottom", n += s, y.top = "top") : "top" === y.top && n + s > b[3] && n - (s - h) >= b[1] && (n -= s - h, v.top = "bottom", y.top = "bottom")), "bottom" === v.top && ("top" === y.top && n + s > b[3] ? (n -= h, v.top = "top", n -= s, y.top = "bottom") : "bottom" === y.top && n < b[1] && n + (2 * s - h) <= b[3] && (n += s - h, v.top = "top", y.top = "top")), "middle" === v.top && (n + s > b[3] && "top" === y.top ? (n -= s, y.top = "bottom") : n < b[1] && "bottom" === y.top && (n += s, y.top = "top"))), "target" !== c && "both" !== c || (i < b[0] && "left" === v.left && (i += d, v.left = "right"), i + l > b[2] && "right" === v.left && (i -= d, v.left = "left")), "together" === c && (i < b[0] && "left" === v.left ? "right" === y.left ? (i += d, v.left = "right", i += l, y.left = "left") : "left" === y.left && (i += d, v.left = "right", i -= l, y.left = "right") : i + l > b[2] && "right" === v.left ? "left" === y.left ? (i -= d, v.left = "left", i -= l, y.left = "right") : "right" === y.left && (i -= d, v.left = "left", i += l, y.left = "left") : "center" === v.left && (i + l > b[2] && "left" === y.left ? (i -= l, y.left = "right") : i < b[0] && "right" === y.left && (i += l, y.left = "left"))), "element" !== f && "both" !== f || (n < b[1] && "bottom" === y.top && (n += s, y.top = "top"), n + s > b[3] && "top" === y.top && (n -= s, y.top = "bottom")), "element" !== c && "both" !== c || (i < b[0] && ("right" === y.left ? (i += l, y.left = "left") : "center" === y.left && (i += l / 2, y.left = "left")), i + l > b[2] && ("left" === y.left ? (i -= l, y.left = "right") : "center" === y.left && (i -= l / 2, y.left = "right"))), "string" == typeof u ? u = u.split(",").map(function(t) {
                        return t.trim()
                    }) : !0 === u && (u = ["top", "left", "right", "bottom"]), u = u || [];
                    var _ = [],
                        E = [];
                    n < b[1] && (u.indexOf("top") >= 0 ? (n = b[1], _.push("top")) : E.push("top")), n + s > b[3] && (u.indexOf("bottom") >= 0 ? (n = b[3] - s, _.push("bottom")) : E.push("bottom")), i < b[0] && (u.indexOf("left") >= 0 ? (i = b[0], _.push("left")) : E.push("left")), i + l > b[2] && (u.indexOf("right") >= 0 ? (i = b[2] - l, _.push("right")) : E.push("right")), _.length && function() {
                        var t = void 0;
                        t = void 0 !== e.options.pinnedClass ? e.options.pinnedClass : e.getClass("pinned"), g.push(t), _.forEach(function(e) {
                            g.push(t + "-" + e)
                        })
                    }(), E.length && function() {
                        var t = void 0;
                        t = void 0 !== e.options.outOfBoundsClass ? e.options.outOfBoundsClass : e.getClass("out-of-bounds"), g.push(t), E.forEach(function(e) {
                            g.push(t + "-" + e)
                        })
                    }(), (_.indexOf("left") >= 0 || _.indexOf("right") >= 0) && (y.left = v.left = !1), (_.indexOf("top") >= 0 || _.indexOf("bottom") >= 0) && (y.top = v.top = !1), v.top === o.top && v.left === o.left && y.top === e.attachment.top && y.left === e.attachment.left || (e.updateAttachClasses(y, v), e.trigger("update", {
                        attachment: y,
                        targetAttachment: v
                    }))
                }), N(function() {
                    !1 !== e.options.addTargetClasses && m(e.target, g, p), m(e.element, g, p)
                }), {
                    top: n,
                    left: i
                }
            }
        });
        var P = w.Utils,
            a = P.getBounds,
            m = P.updateClasses,
            N = P.defer;
        w.modules.push({
            position: function(t) {
                var e = this,
                    n = t.top,
                    i = t.left,
                    o = this.cache("element-bounds", function() {
                        return a(e.element)
                    }),
                    r = o.height,
                    s = o.width,
                    l = this.getTargetBounds(),
                    u = n + r,
                    c = i + s,
                    f = [];
                n <= l.bottom && u >= l.top && ["left", "right"].forEach(function(t) {
                    var e = l[t];
                    e !== i && e !== c || f.push(t)
                }), i <= l.right && c >= l.left && ["top", "bottom"].forEach(function(t) {
                    var e = l[t];
                    e !== n && e !== u || f.push(t)
                });
                var h = [],
                    d = [],
                    p = ["left", "top", "right", "bottom"];
                return h.push(this.getClass("abutted")), p.forEach(function(t) {
                    h.push(e.getClass("abutted") + "-" + t)
                }), f.length && d.push(this.getClass("abutted")), f.forEach(function(t) {
                    d.push(e.getClass("abutted") + "-" + t)
                }), N(function() {
                    !1 !== e.options.addTargetClasses && m(e.target, d, h), m(e.element, d, h)
                }), !0
            }
        });
        var H = function() {
            function t(t, e) {
                var n = [],
                    i = !0,
                    o = !1,
                    r = void 0;
                try {
                    for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); i = !0);
                } catch (t) {
                    o = !0, r = t
                } finally {
                    try {
                        !i && a.return && a.return()
                    } finally {
                        if (o) throw r
                    }
                }
                return n
            }
            return function(e, n) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return t(e, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        return w.modules.push({
            position: function(t) {
                var e = t.top,
                    n = t.left;
                if (this.options.shift) {
                    var i = this.options.shift;
                    "function" == typeof this.options.shift && (i = this.options.shift.call(this, {
                        top: e,
                        left: n
                    }));
                    var o = void 0,
                        r = void 0;
                    if ("string" == typeof i) {
                        i = i.split(" "), i[1] = i[1] || i[0];
                        var s = i,
                            a = H(s, 2);
                        o = a[0], r = a[1], o = parseFloat(o, 10), r = parseFloat(r, 10)
                    } else o = i.top, r = i.left;
                    return e += o, n += r, {
                        top: e,
                        left: n
                    }
                }
            }
        }), K
    })
}, function(t, e) {
    function n(t) {
        var e = null;
        if (document.cookie && "" != document.cookie)
            for (var n = document.cookie.split(";"), i = 0; i < n.length; i++) {
                var o = jQuery.trim(n[i]);
                if (o.substring(0, t.length + 1) == t + "=") {
                    e = decodeURIComponent(o.substring(t.length + 1));
                    break
                }
            }
        return e
    }

    function i(t) {
        return /^(GET|HEAD|OPTIONS|TRACE)$/.test(t)
    }

    function o(t, e) {
        $(".notify").append('<div id="notif-messages" class="alert alert-' + e + '"><span class="icon-circle-' + r(e) + ' mr-2"></span><button type="button" class="close">×</button>' + t + "</div>"), $("#notif-messages").delay("slow").fadeIn(), $("#notif-messages").delay(2e3).fadeOut()
    }

    function r(t) {
        return "success" == t ? "check" : "info" == t ? "info" : "cancel"
    }
    $(function() {
        $("body").on("click", '[data-toggle="modal"]', function() {
            $($(this).data("target") + " .modal-content").load($(this).data("remote"))
        })
    }), $(function() {
        $("#CustomLoginEmp").hide(), $("#CustomLoginBlock a").click(function(t) {
            if (t.preventDefault(), "#employer" == $(this).attr("href")) {
                $("#CustomLoginEmp").show(), $("#CustomLoginJs").hide();
                var e = $(this).data("loginurl");
                $("#CustomLoginForm").attr("action", e)
            } else {
                $("#CustomLoginEmp").hide(), $("#CustomLoginJs").show();
                var e = $(this).data("loginurl");
                $("#CustomLoginForm").attr("action", e)
            }
        })
    }), $.ajaxSetup({
        async: !0,
        beforeSend: function(t, e) {
            i(e.type) || this.crossDomain || t.setRequestHeader("X-CSRFToken", n("csrftoken"))
        }
    });
    var s = function(t, e, n) {
        var i = t.outerHeight(),
            o = e.offset().top;
        n.scrollTop() >= o ? (e.height(i), t.addClass("is-sticky")) : (t.removeClass("is-sticky"), e.height("auto"))
    };
    if ($('[data-toggle="sticky-onscroll"]').each(function() {
            var t = $(this),
                e = $("<div>").addClass("sticky-wrapper");
            t.before(e), t.addClass("sticky"), $(window).on("scroll.sticky-onscroll resize.sticky-onscroll", function() {
                s(t, e, $(this))
            }), s(t, e, $(window))
        }), $(window).scroll(function() {
            $(this).scrollTop() > 50 ? $("#back-to-top").fadeIn() : $("#back-to-top").fadeOut()
        }), $("#back-to-top").click(function() {
            return $("#back-to-top").tooltip("hide"), $("body,html").animate({
                scrollTop: 0
            }, 800), !1
        }), $("#back-to-top").is(":visible") && $("#back-to-top").tooltip("show"), $(document).on("click", ".close", function() {
            $(this).parent().hide()
        }), window.notify = o, navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var a = document.createElement("style");
        a.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")), document.head.appendChild(a)
    }
}, function(t, e) {
    $(function() {
        $("#id_display_picture,#id_logo").change(function() {
            if (this.files && this.files[0]) {
                $(".img-preview").toggle(), $("#cropper-image").removeClass("hidden-xs-up");
                var t = new FileReader;
                t.onload = function(t) {
                    $("#cropper-image").attr("src", t.target.result);
                    var e = $("#cropper-image").cropper({
                        aspectRatio: 1
                    });
                    $("#id_x").val(e.x), $("#id_y").val(e.y), $("#id_height").val(e.height), $("#id_width").val(e.width)
                }, t.readAsDataURL(this.files[0])
            }
        }), $("#btn-crop").click(function() {
            if ($("#cropper-image").attr("src")) {
                var t = $("#cropper-image").cropper("getData");
                $("#id_x").val(t.x), $("#id_y").val(t.y), $("#id_height").val(t.height), $("#id_width").val(t.width)
            }
            $("#profile-picture-form").submit()
        }), $("#job-basic-button").click(function(t) {
            if (t.preventDefault(), $("#cropper-image").attr("src")) {
                var e = $("#cropper-image").cropper("getData");
                $("#id_x").val(e.x), $("#id_y").val(e.y), $("#id_height").val(e.height), $("#id_width").val(e.width)
            }
            $("#job-basic-form").submit()
        })
    })
}, function(t, e, n) {
    n(1), t.exports = n(0)
}]);

(function () {
  (function (n) {
    var A = this || (0, eval)("this"),
        x = A.document,
        O = A.navigator,
        w = A.jQuery,
        F = A.JSON;(function (n) {
      "function" === typeof define && define.amd ? define(["exports", "require"], n) : "object" === typeof exports && "object" === typeof module ? n(module.exports || exports) : n(A.ko = {});
    })(function (P, Q) {
      function K(a, c) {
        return null === a || typeof a in U ? a === c : !1;
      }function V(b, c) {
        var d;return function () {
          d || (d = a.a.setTimeout(function () {
            d = n;b();
          }, c));
        };
      }function W(b, c) {
        var d;return function () {
          clearTimeout(d);d = a.a.setTimeout(b, c);
        };
      }function X(a, c) {
        c && "change" !== c ? "beforeChange" === c ? this.gc(a) : this.$a(a, c) : this.hc(a);
      }function Y(a, c) {
        null !== c && c.m && c.m();
      }function Z(a, c) {
        var d = this.nd,
            e = d[u];e.pa || (this.Jb && this.ib[c] ? (d.mc(c, a, this.ib[c]), this.ib[c] = null, --this.Jb) : e.F[c] || d.mc(c, a, e.K ? { ha: a } : d.Wc(a)), a.Ia && a.fd());
      }function M(b, c, d) {
        a.f[b] = { init: function (b, f, g, h, l) {
            var k,
                m = g.get("as"),
                q = !c || m && !a.options.createChildContextWithAs,
                p = q && a.s(function () {
              return !d !== !a.a.c(f());
            }, null, { j: b });a.s(function () {
              var d = !q && a.a.c(f()),
                  v = q ? p() : !!d,
                  g = !k;g && a.ja.Ea() && (k = a.a.Aa(a.h.childNodes(b), !0));v ? (g || a.h.ta(b, a.a.Aa(k)), a.Na(c ? l.createChildContext("function" == typeof d ? d : f, m) : p.fa() ? l.extend(function () {
                p();return null;
              }) : l, b)) : a.h.Ca(b);
            }, null, { j: b });return { controlsDescendantBindings: !0 };
          } };a.l.Qa[b] = !1;a.h.ca[b] = !0;
      }var a = "undefined" !== typeof P ? P : {};a.b = function (b, c) {
        for (var d = b.split("."), e = a, f = 0; f < d.length - 1; f++) e = e[d[f]];e[d[d.length - 1]] = c;
      };a.I = function (a, c, d) {
        a[c] = d;
      };a.version = "3.5.0-beta";a.b("version", a.version);a.options = { deferUpdates: !1, useOnlyNativeEvents: !1,
        createChildContextWithAs: !1, foreachHidesDestroyed: !1 };a.a = function () {
        function b(a, b) {
          for (var c in a) f.call(a, c) && b(c, a[c]);
        }function c(a, b) {
          if (b) for (var c in b) f.call(b, c) && (a[c] = b[c]);return a;
        }function d(a, b) {
          a.__proto__ = b;return a;
        }function e(b, c, d, e) {
          var m = b[c].match(p) || [];a.a.B(d.match(p), function (b) {
            a.a.Ma(m, b, e);
          });b[c] = m.join(" ");
        }var f = Object.prototype.hasOwnProperty,
            g = { __proto__: [] } instanceof Array,
            h = "function" === typeof Symbol,
            l = {},
            k = {};l[O && /Firefox\/2/i.test(O.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"];l.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");b(l, function (a, b) {
          if (b.length) for (var c = 0, d = b.length; c < d; c++) k[b[c]] = a;
        });var m = { propertychange: !0 },
            q = x && function () {
          for (var a = 3, b = x.createElement("div"), c = b.getElementsByTagName("i"); b.innerHTML = "\x3c!--[if gt IE " + ++a + "]><i></i><![endif]--\x3e", c[0];);return 4 < a ? a : n;
        }(),
            p = /\S+/g,
            r;return { Dc: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
          B: function (a, b, c) {
            if (a) if ("function" == typeof a.forEach) a.forEach(b, c);else for (var d = 0, e = a.length; d < e; d++) b.call(c, a[d], d, a);
          }, D: function (a, b) {
            if (a) {
              if ("function" == typeof a.indexOf) return a.indexOf(b);for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
            }return -1;
          }, pc: function (a, b, c) {
            if (a) {
              if ("function" == typeof a.find) return a.find(b, c);for (var d = 0, e = a.length; d < e; d++) if (b.call(c, a[d], d, a)) return a[d];
            }return n;
          }, Oa: function (b, c) {
            var d = a.a.D(b, c);0 < d ? b.splice(d, 1) : 0 === d && b.shift();
          }, qc: function (b) {
            var c = [];b && a.a.B(b, function (b) {
              0 > a.a.D(c, b) && c.push(b);
            });return c;
          }, Gb: function (a, b, c) {
            if (a && "function" == typeof a.map) return a.map(b, c);var d = [];if (a) for (var e = 0, m = a.length; e < m; e++) d.push(b.call(c, a[e], e));return d;
          }, cb: function (a, b, c) {
            if (a && "function" == typeof a.filter) return a.filter(b, c);var d = [];if (a) for (var e = 0, m = a.length; e < m; e++) b.call(c, a[e], e) && d.push(a[e]);return d;
          }, eb: function (a, b) {
            if (b instanceof Array) a.push.apply(a, b);else for (var c = 0, d = b.length; c < d; c++) a.push(b[c]);return a;
          }, Ma: function (b, c, d) {
            var e = a.a.D(a.a.Sb(b), c);0 > e ? d && b.push(c) : d || b.splice(e, 1);
          }, za: g, extend: c, setPrototypeOf: d, wb: g ? d : c, N: b, Fa: function (a, b, c) {
            if (!a) return a;var d = {},
                e;for (e in a) f.call(a, e) && (d[e] = b.call(c, a[e], e, a));return d;
          }, Mb: function (b) {
            for (; b.firstChild;) a.removeNode(b.firstChild);
          }, Pb: function (b) {
            b = a.a.la(b);for (var c = (b[0] && b[0].ownerDocument || x).createElement("div"), d = 0, e = b.length; d < e; d++) c.appendChild(a.oa(b[d]));return c;
          }, Aa: function (b, c) {
            for (var d = 0, e = b.length, m = []; d < e; d++) {
              var f = b[d].cloneNode(!0);m.push(c ? a.oa(f) : f);
            }return m;
          }, ta: function (b, c) {
            a.a.Mb(b);if (c) for (var d = 0, e = c.length; d < e; d++) b.appendChild(c[d]);
          }, Tc: function (b, c) {
            var d = b.nodeType ? [b] : b;if (0 < d.length) {
              for (var e = d[0], m = e.parentNode, f = 0, g = c.length; f < g; f++) m.insertBefore(c[f], e);f = 0;for (g = d.length; f < g; f++) a.removeNode(d[f]);
            }
          }, Ta: function (a, b) {
            if (a.length) {
              for (b = 8 === b.nodeType && b.parentNode || b; a.length && a[0].parentNode !== b;) a.splice(0, 1);for (; 1 < a.length && a[a.length - 1].parentNode !== b;) a.length--;if (1 < a.length) {
                var c = a[0],
                    d = a[a.length - 1];for (a.length = 0; c !== d;) a.push(c), c = c.nextSibling;a.push(d);
              }
            }return a;
          }, Vc: function (a, b) {
            7 > q ? a.setAttribute("selected", b) : a.selected = b;
          }, yb: function (a) {
            return null === a || a === n ? "" : a.trim ? a.trim() : a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
          }, Ud: function (a, b) {
            a = a || "";return b.length > a.length ? !1 : a.substring(0, b.length) === b;
          }, ud: function (a, b) {
            if (a === b) return !0;if (11 === a.nodeType) return !1;if (b.contains) return b.contains(1 !== a.nodeType ? a.parentNode : a);if (b.compareDocumentPosition) return 16 == (b.compareDocumentPosition(a) & 16);for (; a && a != b;) a = a.parentNode;return !!a;
          }, Lb: function (b) {
            return a.a.ud(b, b.ownerDocument.documentElement);
          }, nc: function (b) {
            return !!a.a.pc(b, a.a.Lb);
          }, O: function (a) {
            return a && a.tagName && a.tagName.toLowerCase();
          }, tc: function (b) {
            return a.onError ? function () {
              try {
                return b.apply(this, arguments);
              } catch (c) {
                throw a.onError && a.onError(c), c;
              }
            } : b;
          }, setTimeout: function (b, c) {
            return setTimeout(a.a.tc(b), c);
          }, zc: function (b) {
            setTimeout(function () {
              a.onError && a.onError(b);throw b;
            }, 0);
          }, H: function (b, c, d) {
            var e = a.a.tc(d);
            d = m[c];if (a.options.useOnlyNativeEvents || d || !w) {
              if (d || "function" != typeof b.addEventListener) {
                if ("undefined" != typeof b.attachEvent) {
                  var f = function (a) {
                    e.call(b, a);
                  },
                      g = "on" + c;b.attachEvent(g, f);a.a.G.na(b, function () {
                    b.detachEvent(g, f);
                  });
                } else throw Error("Browser doesn't support addEventListener or attachEvent");
              } else b.addEventListener(c, e, !1);
            } else r || (r = "function" == typeof w(b).on ? "on" : "bind"), w(b)[r](c, e);
          }, Bb: function (b, c) {
            if (!b || !b.nodeType) throw Error("element must be a DOM node when calling triggerEvent");
            var d;"input" === a.a.O(b) && b.type && "click" == c.toLowerCase() ? (d = b.type, d = "checkbox" == d || "radio" == d) : d = !1;if (a.options.useOnlyNativeEvents || !w || d) {
              if ("function" == typeof x.createEvent) {
                if ("function" == typeof b.dispatchEvent) d = x.createEvent(k[c] || "HTMLEvents"), d.initEvent(c, !0, !0, A, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, b), b.dispatchEvent(d);else throw Error("The supplied element doesn't support dispatchEvent");
              } else if (d && b.click) b.click();else if ("undefined" != typeof b.fireEvent) b.fireEvent("on" + c);else throw Error("Browser doesn't support triggering events");
            } else w(b).trigger(c);
          }, c: function (b) {
            return a.M(b) ? b() : b;
          }, Sb: function (b) {
            return a.M(b) ? b.w() : b;
          }, Ab: function (b, c, d) {
            var m;c && ("object" === typeof b.classList ? (m = b.classList[d ? "add" : "remove"], a.a.B(c.match(p), function (a) {
              m.call(b.classList, a);
            })) : "string" === typeof b.className.baseVal ? e(b.className, "baseVal", c, d) : e(b, "className", c, d));
          }, xb: function (b, c) {
            var d = a.a.c(c);if (null === d || d === n) d = "";var e = a.h.firstChild(b);!e || 3 != e.nodeType || a.h.nextSibling(e) ? a.h.ta(b, [b.ownerDocument.createTextNode(d)]) : e.data = d;a.a.zd(b);
          }, Uc: function (a, b) {
            a.name = b;if (7 >= q) try {
              a.mergeAttributes(x.createElement("<input name='" + a.name + "'/>"), !1);
            } catch (c) {}
          }, zd: function (a) {
            9 <= q && (a = 1 == a.nodeType ? a : a.parentNode, a.style && (a.style.zoom = a.style.zoom));
          }, vd: function (a) {
            if (q) {
              var b = a.style.width;a.style.width = 0;a.style.width = b;
            }
          }, Od: function (b, c) {
            b = a.a.c(b);c = a.a.c(c);for (var d = [], e = b; e <= c; e++) d.push(e);return d;
          }, la: function (a) {
            for (var b = [], c = 0, d = a.length; c < d; c++) b.push(a[c]);return b;
          }, Ra: function (a) {
            return h ? Symbol(a) : a;
          }, Yd: 6 === q, Zd: 7 === q, U: q, Fc: function (b, c) {
            for (var d = a.a.la(b.getElementsByTagName("input")).concat(a.a.la(b.getElementsByTagName("textarea"))), e = "string" == typeof c ? function (a) {
              return a.name === c;
            } : function (a) {
              return c.test(a.name);
            }, m = [], f = d.length - 1; 0 <= f; f--) e(d[f]) && m.push(d[f]);return m;
          }, Md: function (b) {
            return "string" == typeof b && (b = a.a.yb(b)) ? F && F.parse ? F.parse(b) : new Function("return " + b)() : null;
          }, Zb: function (b, c, d) {
            if (!F || !F.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
            return F.stringify(a.a.c(b), c, d);
          }, Nd: function (c, d, e) {
            e = e || {};var m = e.params || {},
                f = e.includeFields || this.Dc,
                g = c;if ("object" == typeof c && "form" === a.a.O(c)) for (var g = c.action, k = f.length - 1; 0 <= k; k--) for (var l = a.a.Fc(c, f[k]), q = l.length - 1; 0 <= q; q--) m[l[q].name] = l[q].value;d = a.a.c(d);var h = x.createElement("form");h.style.display = "none";h.action = g;h.method = "post";for (var p in d) c = x.createElement("input"), c.type = "hidden", c.name = p, c.value = a.a.Zb(a.a.c(d[p])), h.appendChild(c);b(m, function (a, b) {
              var c = x.createElement("input");
              c.type = "hidden";c.name = a;c.value = b;h.appendChild(c);
            });x.body.appendChild(h);e.submitter ? e.submitter(h) : h.submit();setTimeout(function () {
              h.parentNode.removeChild(h);
            }, 0);
          } };
      }();a.b("utils", a.a);a.b("utils.arrayForEach", a.a.B);a.b("utils.arrayFirst", a.a.pc);a.b("utils.arrayFilter", a.a.cb);a.b("utils.arrayGetDistinctValues", a.a.qc);a.b("utils.arrayIndexOf", a.a.D);a.b("utils.arrayMap", a.a.Gb);a.b("utils.arrayPushAll", a.a.eb);a.b("utils.arrayRemoveItem", a.a.Oa);a.b("utils.cloneNodes", a.a.Aa);a.b("utils.createSymbolOrString", a.a.Ra);a.b("utils.extend", a.a.extend);a.b("utils.fieldsIncludedWithJsonPost", a.a.Dc);a.b("utils.getFormFields", a.a.Fc);a.b("utils.objectMap", a.a.Fa);a.b("utils.peekObservable", a.a.Sb);a.b("utils.postJson", a.a.Nd);a.b("utils.parseJson", a.a.Md);a.b("utils.registerEventHandler", a.a.H);a.b("utils.stringifyJson", a.a.Zb);a.b("utils.range", a.a.Od);a.b("utils.toggleDomNodeCssClass", a.a.Ab);a.b("utils.triggerEvent", a.a.Bb);a.b("utils.unwrapObservable", a.a.c);a.b("utils.objectForEach", a.a.N);a.b("utils.addOrRemoveItem", a.a.Ma);a.b("utils.setTextContent", a.a.xb);a.b("unwrap", a.a.c);Function.prototype.bind || (Function.prototype.bind = function (a) {
        var c = this;if (1 === arguments.length) return function () {
          return c.apply(a, arguments);
        };var d = Array.prototype.slice.call(arguments, 1);return function () {
          var e = d.slice(0);e.push.apply(e, arguments);return c.apply(a, e);
        };
      });a.a.g = new function () {
        var b = 0,
            c = "__ko__" + new Date().getTime(),
            d = {},
            e,
            f;a.a.U ? (e = function (a, e) {
          var f = a[c];if (!f || "null" === f || !d[f]) {
            if (!e) return n;f = a[c] = "ko" + b++;d[f] = {};
          }return d[f];
        }, f = function (a) {
          var b = a[c];return b ? (delete d[b], a[c] = null, !0) : !1;
        }) : (e = function (a, b) {
          var d = a[c];!d && b && (d = a[c] = {});return d;
        }, f = function (a) {
          return a[c] ? (delete a[c], !0) : !1;
        });return { get: function (a, b) {
            var c = e(a, !1);return c && c[b];
          }, set: function (a, b, c) {
            (a = e(a, c !== n)) && (a[b] = c);
          }, Gc: function (a, b, c) {
            a = e(a, !0);return a[b] || (a[b] = c);
          }, clear: f, W: function () {
            return b++ + c;
          } };
      }();a.b("utils.domData", a.a.g);a.b("utils.domData.clear", a.a.g.clear);a.a.G = new function () {
        function b(b, c) {
          var e = a.a.g.get(b, d);
          e === n && c && (e = [], a.a.g.set(b, d, e));return e;
        }function c(d) {
          var e = b(d, !1);if (e) for (var e = e.slice(0), l = 0; l < e.length; l++) e[l](d);a.a.g.clear(d);a.a.G.cleanExternalData(d);if (f[d.nodeType]) for (d = d.childNodes, l = 0; l < d.length; l++) if (8 === d[l].nodeType && (c(e = d[l]), d[l] !== e)) throw Error("ko.cleanNode: An already cleaned node was removed from the document");
        }var d = a.a.g.W(),
            e = { 1: !0, 8: !0, 9: !0 },
            f = { 1: !0, 9: !0 };return { na: function (a, c) {
            if ("function" != typeof c) throw Error("Callback must be a function");b(a, !0).push(c);
          },
          ub: function (c, e) {
            var f = b(c, !1);f && (a.a.Oa(f, e), 0 == f.length && a.a.g.set(c, d, n));
          }, oa: function (a) {
            if (e[a.nodeType] && (c(a), f[a.nodeType])) for (var b = a.getElementsByTagName("*"), d, k = 0; k < b.length; k++) if (c(d = b[k]), b[k] !== d) throw Error("ko.cleanNode: An already cleaned node was removed from the document");return a;
          }, removeNode: function (b) {
            a.oa(b);b.parentNode && b.parentNode.removeChild(b);
          }, cleanExternalData: function (a) {
            w && "function" == typeof w.cleanData && w.cleanData([a]);
          } };
      }();a.oa = a.a.G.oa;a.removeNode = a.a.G.removeNode;
      a.b("cleanNode", a.oa);a.b("removeNode", a.removeNode);a.b("utils.domNodeDisposal", a.a.G);a.b("utils.domNodeDisposal.addDisposeCallback", a.a.G.na);a.b("utils.domNodeDisposal.removeDisposeCallback", a.a.G.ub);(function () {
        var b = [0, "", ""],
            c = [1, "<table>", "</table>"],
            d = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            e = [1, "<select multiple='multiple'>", "</select>"],
            f = { thead: c, tbody: c, tfoot: c, tr: [2, "<table><tbody>", "</tbody></table>"], td: d, th: d, option: e, optgroup: e },
            g = 8 >= a.a.U;a.a.sa = function (c, d) {
          var e;if (w) {
            if (w.parseHTML) e = w.parseHTML(c, d) || [];else {
              if ((e = w.clean([c], d)) && e[0]) {
                for (var m = e[0]; m.parentNode && 11 !== m.parentNode.nodeType;) m = m.parentNode;m.parentNode && m.parentNode.removeChild(m);
              }
            }
          } else {
            (e = d) || (e = x);var m = e.parentWindow || e.defaultView || A,
                q = a.a.yb(c).toLowerCase(),
                p = e.createElement("div"),
                r;r = (q = q.match(/^<([a-z]+)[ >]/)) && f[q[1]] || b;q = r[0];r = "ignored<div>" + r[1] + c + r[2] + "</div>";"function" == typeof m.innerShiv ? p.appendChild(m.innerShiv(r)) : (g && e.body.appendChild(p), p.innerHTML = r, g && p.parentNode.removeChild(p));
            for (; q--;) p = p.lastChild;e = a.a.la(p.lastChild.childNodes);
          }return e;
        };a.a.Ld = function (b, c) {
          var d = a.a.sa(b, c);return d.length && d[0].parentElement || a.a.Pb(d);
        };a.a.Xb = function (b, c) {
          a.a.Mb(b);c = a.a.c(c);if (null !== c && c !== n) if ("string" != typeof c && (c = c.toString()), w) w(b).html(c);else for (var d = a.a.sa(c, b.ownerDocument), e = 0; e < d.length; e++) b.appendChild(d[e]);
        };
      })();a.b("utils.parseHtmlFragment", a.a.sa);a.b("utils.setHtml", a.a.Xb);a.$ = function () {
        function b(c, e) {
          if (c) if (8 == c.nodeType) {
            var f = a.$.Qc(c.nodeValue);
            null != f && e.push({ sd: c, Jd: f });
          } else if (1 == c.nodeType) for (var f = 0, g = c.childNodes, h = g.length; f < h; f++) b(g[f], e);
        }var c = {};return { Ob: function (a) {
            if ("function" != typeof a) throw Error("You can only pass a function to ko.memoization.memoize()");var b = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);c[b] = a;return "\x3c!--[ko_memo:" + b + "]--\x3e";
          }, Yc: function (a, b) {
            var f = c[a];if (f === n) throw Error("Couldn't find any memo with ID " + a + ". Perhaps it's already been unmemoized.");
            try {
              return f.apply(null, b || []), !0;
            } finally {
              delete c[a];
            }
          }, Zc: function (c, e) {
            var f = [];b(c, f);for (var g = 0, h = f.length; g < h; g++) {
              var l = f[g].sd,
                  k = [l];e && a.a.eb(k, e);a.$.Yc(f[g].Jd, k);l.nodeValue = "";l.parentNode && l.parentNode.removeChild(l);
            }
          }, Qc: function (a) {
            return (a = a.match(/^\[ko_memo\:(.*?)\]$/)) ? a[1] : null;
          } };
      }();a.b("memoization", a.$);a.b("memoization.memoize", a.$.Ob);a.b("memoization.unmemoize", a.$.Yc);a.b("memoization.parseMemoText", a.$.Qc);a.b("memoization.unmemoizeDomNodeAndDescendants", a.$.Zc);a.ma = function () {
        function b() {
          if (f) for (var b = f, c = 0, d; h < f;) if (d = e[h++]) {
            if (h > b) {
              if (5E3 <= ++c) {
                h = f;a.a.zc(Error("'Too much recursion' after processing " + c + " task groups."));break;
              }b = f;
            }try {
              d();
            } catch (q) {
              a.a.zc(q);
            }
          }
        }function c() {
          b();h = f = e.length = 0;
        }var d,
            e = [],
            f = 0,
            g = 1,
            h = 0;A.MutationObserver ? d = function (a) {
          var b = x.createElement("div");new MutationObserver(a).observe(b, { attributes: !0 });return function () {
            b.classList.toggle("foo");
          };
        }(c) : d = x && "onreadystatechange" in x.createElement("script") ? function (a) {
          var b = x.createElement("script");b.onreadystatechange = function () {
            b.onreadystatechange = null;x.documentElement.removeChild(b);b = null;a();
          };x.documentElement.appendChild(b);
        } : function (a) {
          setTimeout(a, 0);
        };return { scheduler: d, vb: function (b) {
            f || a.ma.scheduler(c);e[f++] = b;return g++;
          }, cancel: function (a) {
            a = a - (g - f);a >= h && a < f && (e[a] = null);
          }, resetForTesting: function () {
            var a = f - h;h = f = e.length = 0;return a;
          }, Rd: b };
      }();a.b("tasks", a.ma);a.b("tasks.schedule", a.ma.vb);a.b("tasks.runEarly", a.ma.Rd);a.Sa = { throttle: function (b, c) {
          b.throttleEvaluation = c;var d = null;return a.T({ read: b,
            write: function (e) {
              clearTimeout(d);d = a.a.setTimeout(function () {
                b(e);
              }, c);
            } });
        }, rateLimit: function (a, c) {
          var d, e, f;"number" == typeof c ? d = c : (d = c.timeout, e = c.method);a.Db = !1;f = "notifyWhenChangesStop" == e ? W : V;a.rb(function (a) {
            return f(a, d);
          });
        }, deferred: function (b, c) {
          if (!0 !== c) throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");b.Db || (b.Db = !0, b.rb(function (c) {
            var e,
                f = !1;return function () {
              if (!f) {
                a.ma.cancel(e);e = a.ma.vb(c);try {
                  f = !0, b.notifySubscribers(n, "dirty");
                } finally {
                  f = !1;
                }
              }
            };
          }));
        }, notify: function (a, c) {
          a.equalityComparer = "always" == c ? null : K;
        } };var U = { undefined: 1, "boolean": 1, number: 1, string: 1 };a.b("extenders", a.Sa);a.$b = function (b, c, d) {
        this.ha = b;this.bd = c;this.dd = d;this.fc = !1;this.Eb = this.ic = null;a.I(this, "dispose", this.m);a.I(this, "disposeWhenNodeIsRemoved", this.j);
      };a.$b.prototype.m = function () {
        this.Eb && a.a.G.ub(this.ic, this.Eb);this.fc = !0;this.dd();
      };a.$b.prototype.j = function (b) {
        this.ic = b;a.a.G.na(b, this.Eb = this.m.bind(this));
      };
      a.R = function () {
        a.a.wb(this, D);D.mb(this);
      };var D = { mb: function (a) {
          a.S = { change: [] };a.kc = 1;
        }, subscribe: function (b, c, d) {
          var e = this;d = d || "change";var f = new a.$b(e, c ? b.bind(c) : b, function () {
            a.a.Oa(e.S[d], f);e.ab && e.ab(d);
          });e.Pa && e.Pa(d);e.S[d] || (e.S[d] = []);e.S[d].push(f);return f;
        }, notifySubscribers: function (b, c) {
          c = c || "change";"change" === c && this.Cb();if (this.Ua(c)) {
            var d = "change" === c && this.cd || this.S[c].slice(0);try {
              a.u.rc();for (var e = 0, f; f = d[e]; ++e) f.fc || f.bd(b);
            } finally {
              a.u.end();
            }
          }
        }, lb: function () {
          return this.kc;
        },
        Cd: function (a) {
          return this.lb() !== a;
        }, Cb: function () {
          ++this.kc;
        }, rb: function (b) {
          var c = this,
              d = a.M(c),
              e,
              f,
              g,
              h,
              l;c.$a || (c.$a = c.notifySubscribers, c.notifySubscribers = X);var k = b(function () {
            c.Ia = !1;d && h === c && (h = c.dc ? c.dc() : c());var a = f || l && c.ob(g, h);l = f = e = !1;a && c.$a(g = h);
          });c.hc = function (a, b) {
            b && c.Ia || (l = !b);c.cd = c.S.change.slice(0);c.Ia = e = !0;h = a;k();
          };c.gc = function (a) {
            e || (g = a, c.$a(a, "beforeChange"));
          };c.jc = function () {
            l = !0;
          };c.fd = function () {
            c.ob(g, c.w(!0)) && (f = !0);
          };
        }, Ua: function (a) {
          return this.S[a] && this.S[a].length;
        },
        Ad: function (b) {
          if (b) return this.S[b] && this.S[b].length || 0;var c = 0;a.a.N(this.S, function (a, b) {
            "dirty" !== a && (c += b.length);
          });return c;
        }, ob: function (a, c) {
          return !this.equalityComparer || !this.equalityComparer(a, c);
        }, toString: function () {
          return "[object Object]";
        }, extend: function (b) {
          var c = this;b && a.a.N(b, function (b, e) {
            var f = a.Sa[b];"function" == typeof f && (c = f(c, e) || c);
          });return c;
        } };a.I(D, "init", D.mb);a.I(D, "subscribe", D.subscribe);a.I(D, "extend", D.extend);a.I(D, "getSubscriptionsCount", D.Ad);a.a.za && a.a.setPrototypeOf(D, Function.prototype);a.R.fn = D;a.Mc = function (a) {
        return null != a && "function" == typeof a.subscribe && "function" == typeof a.notifySubscribers;
      };a.b("subscribable", a.R);a.b("isSubscribable", a.Mc);a.ja = a.u = function () {
        function b(a) {
          d.push(e);e = a;
        }function c() {
          e = d.pop();
        }var d = [],
            e,
            f = 0;return { rc: b, end: c, Ub: function (b) {
            if (e) {
              if (!a.Mc(b)) throw Error("Only subscribable things can act as dependencies");e.ld.call(e.md, b, b.ed || (b.ed = ++f));
            }
          }, J: function (a, d, e) {
            try {
              return b(), a.apply(d, e || []);
            } finally {
              c();
            }
          }, Ea: function () {
            if (e) return e.s.Ea();
          },
          kb: function () {
            if (e) return e.s.kb();
          }, pb: function () {
            if (e) return e.pb;
          } };
      }();a.b("computedContext", a.ja);a.b("computedContext.getDependenciesCount", a.ja.Ea);a.b("computedContext.getDependencies", a.ja.kb);a.b("computedContext.isInitial", a.ja.pb);a.b("computedContext.registerDependency", a.ja.Ub);a.b("ignoreDependencies", a.Xd = a.u.J);var H = a.a.Ra("_latestValue");a.ga = function (b) {
        function c() {
          if (0 < arguments.length) return c.ob(c[H], arguments[0]) && (c.wa(), c[H] = arguments[0], c.va()), this;a.u.Ub(c);return c[H];
        }
        c[H] = b;a.a.za || a.a.extend(c, a.R.fn);a.R.fn.mb(c);a.a.wb(c, E);a.options.deferUpdates && a.Sa.deferred(c, !0);return c;
      };var E = { equalityComparer: K, w: function () {
          return this[H];
        }, va: function () {
          this.notifySubscribers(this[H], "spectate");this.notifySubscribers(this[H]);
        }, wa: function () {
          this.notifySubscribers(this[H], "beforeChange");
        } };a.a.za && a.a.setPrototypeOf(E, a.R.fn);var J = a.ga.La = "__ko_proto__";E[J] = a.ga;a.M = function (b) {
        if ((b = "function" == typeof b && b[J]) && b !== a.ga && b !== a.s) throw Error("Invalid object that looks like an observable; possibly from another Knockout instance");
        return !!b;
      };a.Wa = function (b) {
        return "function" == typeof b && (b[J] === a.ga || b[J] === a.s && b.Ic);
      };a.b("observable", a.ga);a.b("isObservable", a.M);a.b("isWriteableObservable", a.Wa);a.b("isWritableObservable", a.Wa);a.b("observable.fn", E);a.I(E, "peek", E.w);a.I(E, "valueHasMutated", E.va);a.I(E, "valueWillMutate", E.wa);a.Ga = function (b) {
        b = b || [];if ("object" != typeof b || !("length" in b)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");b = a.ga(b);a.a.wb(b, a.Ga.fn);return b.extend({ trackArrayChanges: !0 });
      };a.Ga.fn = { remove: function (b) {
          for (var c = this.w(), d = [], e = "function" != typeof b || a.M(b) ? function (a) {
            return a === b;
          } : b, f = 0; f < c.length; f++) {
            var g = c[f];if (e(g)) {
              0 === d.length && this.wa();if (c[f] !== g) throw Error("Array modified during remove; cannot remove item");d.push(g);c.splice(f, 1);f--;
            }
          }d.length && this.va();return d;
        }, removeAll: function (b) {
          if (b === n) {
            var c = this.w(),
                d = c.slice(0);this.wa();c.splice(0, c.length);this.va();return d;
          }return b ? this.remove(function (c) {
            return 0 <= a.a.D(b, c);
          }) : [];
        }, destroy: function (b) {
          var c = this.w(),
              d = "function" != typeof b || a.M(b) ? function (a) {
            return a === b;
          } : b;this.wa();for (var e = c.length - 1; 0 <= e; e--) {
            var f = c[e];d(f) && (f._destroy = !0);
          }this.va();
        }, destroyAll: function (b) {
          return b === n ? this.destroy(function () {
            return !0;
          }) : b ? this.destroy(function (c) {
            return 0 <= a.a.D(b, c);
          }) : [];
        }, indexOf: function (b) {
          var c = this();return a.a.D(c, b);
        }, replace: function (a, c) {
          var d = this.indexOf(a);0 <= d && (this.wa(), this.w()[d] = c, this.va());
        }, sorted: function (a) {
          var c = this().slice(0);
          return a ? c.sort(a) : c.sort();
        }, reversed: function () {
          return this().slice(0).reverse();
        } };a.a.za && a.a.setPrototypeOf(a.Ga.fn, a.ga.fn);a.a.B("pop push reverse shift sort splice unshift".split(" "), function (b) {
        a.Ga.fn[b] = function () {
          var a = this.w();this.wa();this.sc(a, b, arguments);var d = a[b].apply(a, arguments);this.va();return d === a ? this : d;
        };
      });a.a.B(["slice"], function (b) {
        a.Ga.fn[b] = function () {
          var a = this();return a[b].apply(a, arguments);
        };
      });a.Lc = function (b) {
        return a.M(b) && "function" == typeof b.remove && "function" == typeof b.push;
      };a.b("observableArray", a.Ga);a.b("isObservableArray", a.Lc);a.Sa.trackArrayChanges = function (b, c) {
        function d() {
          if (!e) {
            e = !0;l = b.notifySubscribers;b.notifySubscribers = function (a, b) {
              b && "change" !== b || ++h;return l.apply(this, arguments);
            };var c = [].concat(b.w() || []);f = null;g = b.subscribe(function (d) {
              d = [].concat(d || []);if (b.Ua("arrayChange")) {
                var e;if (!f || 1 < h) f = a.a.Ib(c, d, b.Hb);e = f;
              }c = d;f = null;h = 0;e && e.length && b.notifySubscribers(e, "arrayChange");
            });
          }
        }b.Hb = {};c && "object" == typeof c && a.a.extend(b.Hb, c);b.Hb.sparse = !0;if (!b.sc) {
          var e = !1,
              f = null,
              g,
              h = 0,
              l,
              k = b.Pa,
              m = b.ab;b.Pa = function (a) {
            k && k.call(b, a);"arrayChange" === a && d();
          };b.ab = function (a) {
            m && m.call(b, a);"arrayChange" !== a || b.Ua("arrayChange") || (l && (b.notifySubscribers = l, l = n), g && g.m(), g = null, e = !1);
          };b.sc = function (b, c, d) {
            function m(a, b, c) {
              return k[k.length] = { status: a, value: b, index: c };
            }if (e && !h) {
              var k = [],
                  g = b.length,
                  l = d.length,
                  I = 0;switch (c) {case "push":
                  I = g;case "unshift":
                  for (c = 0; c < l; c++) m("added", d[c], I + c);break;case "pop":
                  I = g - 1;case "shift":
                  g && m("deleted", b[I], I);break;case "splice":
                  c = Math.min(Math.max(0, 0 > d[0] ? g + d[0] : d[0]), g);for (var g = 1 === l ? g : Math.min(c + (d[1] || 0), g), l = c + l - 2, I = Math.max(g, l), R = [], L = [], n = 2; c < I; ++c, ++n) c < g && L.push(m("deleted", b[c], c)), c < l && R.push(m("added", d[n], c));a.a.Ec(L, R);break;default:
                  return;}f = k;
            }
          };
        }
      };var u = a.a.Ra("_state");a.s = a.T = function (b, c, d) {
        function e() {
          if (0 < arguments.length) {
            if ("function" === typeof f) f.apply(g.jb, arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
            return this;
          }g.pa || a.u.Ub(e);(g.ka || g.K && e.Va()) && e.ea();return g.V;
        }"object" === typeof b ? d = b : (d = d || {}, b && (d.read = b));if ("function" != typeof d.read) throw Error("Pass a function that returns the value of the ko.computed");var f = d.write,
            g = { V: n, qa: !0, ka: !0, nb: !1, ac: !1, pa: !1, tb: !1, K: !1, Sc: d.read, jb: c || d.owner, j: d.disposeWhenNodeIsRemoved || d.j || null, Ba: d.disposeWhen || d.Ba, Kb: null, F: {}, Z: 0, Cc: null };e[u] = g;e.Ic = "function" === typeof f;a.a.za || a.a.extend(e, a.R.fn);a.R.fn.mb(e);a.a.wb(e, B);d.pure ? (g.tb = !0, g.K = !0, a.a.extend(e, aa)) : d.deferEvaluation && a.a.extend(e, ba);a.options.deferUpdates && a.Sa.deferred(e, !0);g.j && (g.ac = !0, g.j.nodeType || (g.j = null));g.K || d.deferEvaluation || e.ea();g.j && e.fa() && a.a.G.na(g.j, g.Kb = function () {
          e.m();
        });return e;
      };var B = { equalityComparer: K, Ea: function () {
          return this[u].Z;
        }, kb: function () {
          var b = [];a.a.N(this[u].F, function (a, d) {
            b[d.Ja] = d.ha;
          });return b;
        }, mc: function (a, c, d) {
          if (this[u].tb && c === this) throw Error("A 'pure' computed must not be called recursively");this[u].F[a] = d;d.Ja = this[u].Z++;
          d.Ka = c.lb();
        }, Va: function () {
          var a,
              c,
              d = this[u].F;for (a in d) if (Object.prototype.hasOwnProperty.call(d, a) && (c = d[a], this.Ha && c.ha.Ia || c.ha.Cd(c.Ka))) return !0;
        }, Id: function () {
          this.Ha && !this[u].nb && this.Ha(!1);
        }, fa: function () {
          var a = this[u];return a.ka || 0 < a.Z;
        }, Qd: function () {
          this.Ia ? this[u].ka && (this[u].qa = !0) : this.Bc();
        }, Wc: function (a) {
          if (a.Db) {
            var c = a.subscribe(this.Id, this, "dirty"),
                d = a.subscribe(this.Qd, this);return { ha: a, m: function () {
                c.m();d.m();
              } };
          }return a.subscribe(this.Bc, this);
        }, Bc: function () {
          var b = this,
              c = b.throttleEvaluation;c && 0 <= c ? (clearTimeout(this[u].Cc), this[u].Cc = a.a.setTimeout(function () {
            b.ea(!0);
          }, c)) : b.Ha ? b.Ha(!0) : b.ea(!0);
        }, ea: function (b) {
          var c = this[u],
              d = c.Ba,
              e = !1;if (!c.nb && !c.pa) {
            if (c.j && !a.a.Lb(c.j) || d && d()) {
              if (!c.ac) {
                this.m();return;
              }
            } else c.ac = !1;c.nb = !0;try {
              e = this.yd(b);
            } finally {
              c.nb = !1;
            }return e;
          }
        }, yd: function (b) {
          var c = this[u],
              d = !1,
              e = c.tb ? n : !c.Z,
              d = { nd: this, ib: c.F, Jb: c.Z };a.u.rc({ md: d, ld: Z, s: this, pb: e });c.F = {};c.Z = 0;var f = this.xd(c, d);c.Z ? d = this.ob(c.V, f) : (this.m(), d = !0);d && (c.K ? this.Cb() : this.notifySubscribers(c.V, "beforeChange"), c.V = f, this.notifySubscribers(c.V, "spectate"), !c.K && b && this.notifySubscribers(c.V), this.jc && this.jc());e && this.notifySubscribers(c.V, "awake");return d;
        }, xd: function (b, c) {
          try {
            var d = b.Sc;return b.jb ? d.call(b.jb) : d();
          } finally {
            a.u.end(), c.Jb && !b.K && a.a.N(c.ib, Y), b.qa = b.ka = !1;
          }
        }, w: function (a) {
          var c = this[u];(c.ka && (a || !c.Z) || c.K && this.Va()) && this.ea();return c.V;
        }, rb: function (b) {
          a.R.fn.rb.call(this, b);this.dc = function () {
            this[u].qa ? this.ea() : this[u].ka = !1;return this[u].V;
          };
          this.Ha = function (a) {
            this.gc(this[u].V);this[u].ka = !0;a && (this[u].qa = !0);this.hc(this, !a);
          };
        }, m: function () {
          var b = this[u];!b.K && b.F && a.a.N(b.F, function (a, b) {
            b.m && b.m();
          });b.j && b.Kb && a.a.G.ub(b.j, b.Kb);b.F = n;b.Z = 0;b.pa = !0;b.qa = !1;b.ka = !1;b.K = !1;b.j = n;b.Ba = n;b.Sc = n;this.Ic || (b.jb = n);
        } },
          aa = { Pa: function (b) {
          var c = this,
              d = c[u];if (!d.pa && d.K && "change" == b) {
            d.K = !1;if (d.qa || c.Va()) d.F = null, d.Z = 0, c.ea() && c.Cb();else {
              var e = [];a.a.N(d.F, function (a, b) {
                e[b.Ja] = a;
              });a.a.B(e, function (a, b) {
                var e = d.F[a],
                    l = c.Wc(e.ha);l.Ja = b;
                l.Ka = e.Ka;d.F[a] = l;
              });c.Va() && c.ea() && c.Cb();
            }d.pa || c.notifySubscribers(d.V, "awake");
          }
        }, ab: function (b) {
          var c = this[u];c.pa || "change" != b || this.Ua("change") || (a.a.N(c.F, function (a, b) {
            b.m && (c.F[a] = { ha: b.ha, Ja: b.Ja, Ka: b.Ka }, b.m());
          }), c.K = !0, this.notifySubscribers(n, "asleep"));
        }, lb: function () {
          var b = this[u];b.K && (b.qa || this.Va()) && this.ea();return a.R.fn.lb.call(this);
        } },
          ba = { Pa: function (a) {
          "change" != a && "beforeChange" != a || this.w();
        } };a.a.za && a.a.setPrototypeOf(B, a.R.fn);var S = a.ga.La;B[S] = a.s;a.Kc = function (b) {
        return "function" == typeof b && b[S] === a.s;
      };a.Ed = function (b) {
        return a.Kc(b) && b[u] && b[u].tb;
      };a.b("computed", a.s);a.b("dependentObservable", a.s);a.b("isComputed", a.Kc);a.b("isPureComputed", a.Ed);a.b("computed.fn", B);a.I(B, "peek", B.w);a.I(B, "dispose", B.m);a.I(B, "isActive", B.fa);a.I(B, "getDependenciesCount", B.Ea);a.I(B, "getDependencies", B.kb);a.Tb = function (b, c) {
        if ("function" === typeof b) return a.s(b, c, { pure: !0 });b = a.a.extend({}, b);b.pure = !0;return a.s(b, c);
      };a.b("pureComputed", a.Tb);(function () {
        function b(a, f, g) {
          g = g || new d();
          a = f(a);if ("object" != typeof a || null === a || a === n || a instanceof RegExp || a instanceof Date || a instanceof String || a instanceof Number || a instanceof Boolean) return a;var h = a instanceof Array ? [] : {};g.save(a, h);c(a, function (c) {
            var d = f(a[c]);switch (typeof d) {case "boolean":case "number":case "string":case "function":
                h[c] = d;break;case "object":case "undefined":
                var m = g.get(d);h[c] = m !== n ? m : b(d, f, g);}
          });return h;
        }function c(a, b) {
          if (a instanceof Array) {
            for (var c = 0; c < a.length; c++) b(c);"function" == typeof a.toJSON && b("toJSON");
          } else for (c in a) b(c);
        }function d() {
          this.keys = [];this.values = [];
        }a.Xc = function (c) {
          if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert.");return b(c, function (b) {
            for (var c = 0; a.M(b) && 10 > c; c++) b = b();return b;
          });
        };a.toJSON = function (b, c, d) {
          b = a.Xc(b);return a.a.Zb(b, c, d);
        };d.prototype = { constructor: d, save: function (b, c) {
            var d = a.a.D(this.keys, b);0 <= d ? this.values[d] = c : (this.keys.push(b), this.values.push(c));
          }, get: function (b) {
            b = a.a.D(this.keys, b);return 0 <= b ? this.values[b] : n;
          } };
      })();a.b("toJS", a.Xc);a.b("toJSON", a.toJSON);a.Wd = function (b, c, d) {
        b = a.Tb(b).extend({ Ya: "always" });var e = b.subscribe(function (a) {
          a && (e.m(), c.call(d));
        });b.notifySubscribers(b.w());return e;
      };a.b("when", a.Wd);(function () {
        a.o = { L: function (b) {
            switch (a.a.O(b)) {case "option":
                return !0 === b.__ko__hasDomDataOptionValue__ ? a.a.g.get(b, a.f.options.Qb) : 7 >= a.a.U ? b.getAttributeNode("value") && b.getAttributeNode("value").specified ? b.value : b.text : b.value;case "select":
                return 0 <= b.selectedIndex ? a.o.L(b.options[b.selectedIndex]) : n;default:
                return b.value;}
          }, xa: function (b, c, d) {
            switch (a.a.O(b)) {case "option":
                "string" === typeof c ? (a.a.g.set(b, a.f.options.Qb, n), "__ko__hasDomDataOptionValue__" in b && delete b.__ko__hasDomDataOptionValue__, b.value = c) : (a.a.g.set(b, a.f.options.Qb, c), b.__ko__hasDomDataOptionValue__ = !0, b.value = "number" === typeof c ? c : "");break;case "select":
                if ("" === c || null === c) c = n;for (var e = -1, f = 0, g = b.options.length, h; f < g; ++f) if (h = a.o.L(b.options[f]), h == c || "" === h && c === n) {
                  e = f;break;
                }if (d || 0 <= e || c === n && 1 < b.size) b.selectedIndex = e, 6 === a.a.U && a.a.setTimeout(function () {
                  b.selectedIndex = e;
                }, 0);break;default:
                if (null === c || c === n) c = "";b.value = c;}
          } };
      })();a.b("selectExtensions", a.o);a.b("selectExtensions.readValue", a.o.L);a.b("selectExtensions.writeValue", a.o.xa);a.l = function () {
        function b(b) {
          b = a.a.yb(b);123 === b.charCodeAt(0) && (b = b.slice(1, -1));b += "\n,";var c = [],
              d = b.match(e),
              q,
              p = [],
              h = 0;if (1 < d.length) for (var v = 0, y; y = d[v]; ++v) {
            var t = y.charCodeAt(0);if (44 === t) {
              if (0 >= h) {
                c.push(q && p.length ? { key: q, value: p.join("") } : { unknown: q || p.join("") });
                q = h = 0;p = [];continue;
              }
            } else if (58 === t) {
              if (!h && !q && 1 === p.length) {
                q = p.pop();continue;
              }
            } else if (47 === t && 1 < y.length && (47 === y.charCodeAt(1) || 42 === y.charCodeAt(1))) continue;else 47 === t && v && 1 < y.length ? (t = d[v - 1].match(f)) && !g[t[0]] && (b = b.substr(b.indexOf(y) + 1), d = b.match(e), v = -1, y = "/") : 40 === t || 123 === t || 91 === t ? ++h : 41 === t || 125 === t || 93 === t ? --h : q || p.length || 34 !== t && 39 !== t || (y = y.slice(1, -1));p.push(y);
          }return c;
        }var c = ["true", "false", "null", "undefined"],
            d = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
            e = RegExp("\"(?:\\\\.|[^\"])*\"|'(?:\\\\.|[^'])*'|`(?:\\\\.|[^`])*`|/\\*(?:[^*]|\\*+[^*/])*\\*+/|//.*\n|/(?:\\\\.|[^/])+/w*|[^\\s:,/][^,\"'`{}()/:[\\]]*[^\\s,\"'`{}()/:[\\]]|[^\\s]", "g"),
            f = /[\])"'A-Za-z0-9_$]+$/,
            g = { "in": 1, "return": 1, "typeof": 1 },
            h = {};return { Qa: [], ua: h, Rb: b, sb: function (e, f) {
            function m(b, e) {
              var f;if (!v) {
                var k = a.getBindingHandler(b);if (k && k.preprocess && !(e = k.preprocess(e, b, m))) return;if (k = h[b]) f = e, 0 <= a.a.D(c, f) ? f = !1 : (k = f.match(d), f = null === k ? !1 : k[1] ? "Object(" + k[1] + ")" + k[2] : f), k = f;k && g.push("'" + ("string" == typeof h[b] ? h[b] : b) + "':function(_z){" + f + "=_z}");
              }r && (e = "function(){return " + e + " }");q.push("'" + b + "':" + e);
            }f = f || {};var q = [],
                g = [],
                r = f.valueAccessors,
                v = f.bindingParams,
                y = "string" === typeof e ? b(e) : e;a.a.B(y, function (a) {
              m(a.key || a.unknown, a.value);
            });g.length && m("_ko_property_writers", "{" + g.join(",") + " }");return q.join(",");
          }, Hd: function (a, b) {
            for (var c = 0; c < a.length; c++) if (a[c].key == b) return !0;return !1;
          }, Za: function (b, c, d, e, f) {
            if (b && a.M(b)) !a.Wa(b) || f && b.w() === e || b(e);else if ((b = c.get("_ko_property_writers")) && b[d]) b[d](e);
          } };
      }();a.b("expressionRewriting", a.l);a.b("expressionRewriting.bindingRewriteValidators", a.l.Qa);a.b("expressionRewriting.parseObjectLiteral", a.l.Rb);
      a.b("expressionRewriting.preProcessBindings", a.l.sb);a.b("expressionRewriting._twoWayBindings", a.l.ua);a.b("jsonExpressionRewriting", a.l);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", a.l.sb);(function () {
        function b(a) {
          return 8 == a.nodeType && g.test(f ? a.text : a.nodeValue);
        }function c(a) {
          return 8 == a.nodeType && h.test(f ? a.text : a.nodeValue);
        }function d(d, e) {
          for (var f = d, g = 1, h = []; f = f.nextSibling;) {
            if (c(f) && (a.a.g.set(f, k, !0), g--, 0 === g)) return h;h.push(f);b(f) && g++;
          }if (!e) throw Error("Cannot find closing comment tag to match: " + d.nodeValue);return null;
        }function e(a, b) {
          var c = d(a, b);return c ? 0 < c.length ? c[c.length - 1].nextSibling : a.nextSibling : null;
        }var f = x && "\x3c!--test--\x3e" === x.createComment("test").text,
            g = f ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/,
            h = f ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/,
            l = { ul: !0, ol: !0 },
            k = "__ko_matchedEndComment__";a.h = { ca: {}, childNodes: function (a) {
            return b(a) ? d(a) : a.childNodes;
          }, Ca: function (c) {
            if (b(c)) {
              c = a.h.childNodes(c);for (var d = 0, e = c.length; d < e; d++) a.removeNode(c[d]);
            } else a.a.Mb(c);
          },
          ta: function (c, d) {
            if (b(c)) {
              a.h.Ca(c);for (var e = c.nextSibling, f = 0, k = d.length; f < k; f++) e.parentNode.insertBefore(d[f], e);
            } else a.a.ta(c, d);
          }, Rc: function (a, c) {
            b(a) ? a.parentNode.insertBefore(c, a.nextSibling) : a.firstChild ? a.insertBefore(c, a.firstChild) : a.appendChild(c);
          }, Jc: function (c, d, e) {
            e ? b(c) ? c.parentNode.insertBefore(d, e.nextSibling) : e.nextSibling ? c.insertBefore(d, e.nextSibling) : c.appendChild(d) : a.h.Rc(c, d);
          }, firstChild: function (a) {
            if (b(a)) return !a.nextSibling || c(a.nextSibling) ? null : a.nextSibling;if (a.firstChild && c(a.firstChild)) throw Error("Found invalid end comment, as the first child of " + a);return a.firstChild;
          }, nextSibling: function (d) {
            b(d) && (d = e(d));if (d.nextSibling && c(d.nextSibling)) {
              var f = d.nextSibling;if (c(f) && !a.a.g.get(f, k)) throw Error("Found end comment without a matching opening comment, as child of " + d);return null;
            }return d.nextSibling;
          }, Bd: b, Vd: function (a) {
            return (a = (f ? a.text : a.nodeValue).match(g)) ? a[1] : null;
          }, Oc: function (d) {
            if (l[a.a.O(d)]) {
              var f = d.firstChild;if (f) {
                do if (1 === f.nodeType) {
                  var k;k = f.firstChild;var g = null;if (k) {
                    do if (g) g.push(k);else if (b(k)) {
                      var h = e(k, !0);h ? k = h : g = [k];
                    } else c(k) && (g = [k]); while (k = k.nextSibling);
                  }if (k = g) for (g = f.nextSibling, h = 0; h < k.length; h++) g ? d.insertBefore(k[h], g) : d.appendChild(k[h]);
                } while (f = f.nextSibling);
              }
            }
          } };
      })();a.b("virtualElements", a.h);a.b("virtualElements.allowedBindings", a.h.ca);a.b("virtualElements.emptyNode", a.h.Ca);a.b("virtualElements.insertAfter", a.h.Jc);a.b("virtualElements.prepend", a.h.Rc);a.b("virtualElements.setDomNodeChildren", a.h.ta);(function () {
        a.da = function () {
          this.kd = {};
        };a.a.extend(a.da.prototype, { nodeHasBindings: function (b) {
            switch (b.nodeType) {case 1:
                return null != b.getAttribute("data-bind") || a.i.getComponentNameForNode(b);case 8:
                return a.h.Bd(b);default:
                return !1;}
          }, getBindings: function (b, c) {
            var d = this.getBindingsString(b, c),
                d = d ? this.parseBindingsString(d, c, b) : null;return a.i.lc(d, b, c, !1);
          }, getBindingAccessors: function (b, c) {
            var d = this.getBindingsString(b, c),
                d = d ? this.parseBindingsString(d, c, b, { valueAccessors: !0 }) : null;return a.i.lc(d, b, c, !0);
          }, getBindingsString: function (b) {
            switch (b.nodeType) {case 1:
                return b.getAttribute("data-bind");
              case 8:
                return a.h.Vd(b);default:
                return null;}
          }, parseBindingsString: function (b, c, d, e) {
            try {
              var f = this.kd,
                  g = b + (e && e.valueAccessors || ""),
                  h;if (!(h = f[g])) {
                var l,
                    k = "with($context){with($data||{}){return{" + a.l.sb(b, e) + "}}}";l = new Function("$context", "$element", k);h = f[g] = l;
              }return h(c, d);
            } catch (m) {
              throw m.message = "Unable to parse bindings.\nBindings value: " + b + "\nMessage: " + m.message, m;
            }
          } });a.da.instance = new a.da();
      })();a.b("bindingProvider", a.da);(function () {
        function b(b) {
          var c = (b = a.a.g.get(b, C)) && b.P;c && (b.P = n, c.Pc());
        }function c(c, d, e) {
          this.node = c;this.gb = d;this.fb = [];this.Y = !1;d.P || a.a.G.na(c, b);e && e.P && (e.P.fb.push(c), this.Fb = e);
        }function d(a) {
          return function () {
            return a;
          };
        }function e(a) {
          return a();
        }function f(b) {
          return a.a.Fa(a.u.J(b), function (a, c) {
            return function () {
              return b()[c];
            };
          });
        }function g(b, c, e) {
          return "function" === typeof b ? f(b.bind(null, c, e)) : a.a.Fa(b, d);
        }function h(a, b) {
          return f(this.getBindings.bind(this, a, b));
        }function l(b, c) {
          var d = a.h.firstChild(c);if (d) {
            var e,
                f = a.da.instance,
                m = f.preprocessNode;
            if (m) {
              for (; e = d;) d = a.h.nextSibling(e), m.call(f, e);d = a.h.firstChild(c);
            }for (; e = d;) d = a.h.nextSibling(e), k(b, e);a.v.Ya(c, a.v.Y);
          }
        }function k(b, c) {
          var d = !0,
              e = 1 === c.nodeType;e && a.h.Oc(c);if (e || a.da.instance.nodeHasBindings(c)) d = q(c, null, b).shouldBindDescendants;d && !y[a.a.O(c)] && l(b, c);
        }function m(b) {
          var c = [],
              d = {},
              e = [];a.a.N(b, function z(f) {
            if (!d[f]) {
              var k = a.getBindingHandler(f);k && (k.after && (e.push(f), a.a.B(k.after, function (c) {
                if (b[c]) {
                  if (-1 !== a.a.D(e, c)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + e.join(", "));z(c);
                }
              }), e.length--), c.push({ key: f, Hc: k }));d[f] = !0;
            }
          });return c;
        }function q(b, c, d) {
          if (!c) {
            var f = a.a.g.Gc(b, C, {});if (f.context) throw Error("You cannot apply bindings multiple times to the same element.");f.context = d;d[r] && d[r].$c(b);
          }var k;if (c && "function" !== typeof c) k = c;else {
            var g = a.da.instance,
                q = g.getBindingAccessors || h,
                p = a.T(function () {
              if ((k = c ? c(d, b) : q.call(g, b, d)) && d[r]) d[r]();return k;
            }, null, { j: b });k && p.fa() || (p = null);
          }var l;if (k) {
            var v = function () {
              return a.a.Fa(p ? p() : k, e);
            },
                t = p ? function (a) {
              return function () {
                return e(p()[a]);
              };
            } : function (a) {
              return k[a];
            };v.get = function (a) {
              return k[a] && e(t(a));
            };v.has = function (a) {
              return a in k;
            };a.v.Y in k && a.v.subscribe(b, a.v.Y, function () {
              var c = (0, k[a.v.Y])();if (c) {
                var d = a.h.childNodes(b);d.length && c(d, a.xc(d[0]));
              }
            });f = m(k);a.a.B(f, function (c) {
              var e = c.Hc.init,
                  f = c.Hc.update,
                  m = c.key;if (8 === b.nodeType && !a.h.ca[m]) throw Error("The binding '" + m + "' cannot be used with virtual elements");try {
                "function" == typeof e && a.u.J(function () {
                  var a = e(b, t(m), v, d.$data, d);if (a && a.controlsDescendantBindings) {
                    if (l !== n) throw Error("Multiple bindings (" + l + " and " + m + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");l = m;
                  }
                }), "function" == typeof f && a.T(function () {
                  f(b, t(m), v, d.$data, d);
                }, null, { j: b });
              } catch (g) {
                throw g.message = 'Unable to process binding "' + m + ": " + k[m] + '"\nMessage: ' + g.message, g;
              }
            });
          }return { shouldBindDescendants: l === n };
        }function p(b, c) {
          return b && b instanceof a.X ? b : new a.X(b, n, n, c);
        }var r = a.a.Ra("_subscribable"),
            v = a.a.Ra("_ancestorBindingInfo");
        a.f = {};var y = { script: !0, textarea: !0, template: !0 };a.getBindingHandler = function (b) {
          return a.f[b];
        };var t = {};a.X = function (b, c, d, e, f) {
          function k() {
            var b = p ? q() : q,
                f = a.a.c(b);if (c) {
              if (c[r]) c[r]();a.a.extend(g, c);v in c && (g[v] = c[v]);g[r] = y;
            } else g.$parents = [], g.$root = f, g.ko = a;h ? f = g.$data : (g.$rawData = b, g.$data = f);d && (g[d] = f);e && e(g, c, f);return g.$data;
          }function m() {
            return l && !a.a.nc(l);
          }var g = this,
              h = b === t,
              q = h ? n : b,
              p = "function" == typeof q && !a.M(q),
              l,
              y;f && f.exportDependencies ? k() : (y = a.T(k, null, { Ba: m, j: !0 }), y.fa() && (g[r] = y, y.equalityComparer = null, l = [], y.$c = function (b) {
            l.push(b);a.a.G.na(b, function (b) {
              a.a.Oa(l, b);l.length || (y.m(), g[r] = y = n);
            });
          }));
        };a.X.prototype.createChildContext = function (b, c, d, e) {
          if (c && !a.options.createChildContextWithAs) {
            var f = "function" == typeof b && !a.M(b);return new a.X(t, this, null, function (a) {
              d && d(a);a[c] = f ? b() : b;
            });
          }return new a.X(b, this, c, function (a, b) {
            a.$parentContext = b;a.$parent = b.$data;a.$parents = (b.$parents || []).slice(0);a.$parents.unshift(a.$parent);d && d(a);
          }, e);
        };a.X.prototype.extend = function (b) {
          return new a.X(t, this, null, function (c) {
            a.a.extend(c, "function" == typeof b ? b() : b);
          });
        };a.X.prototype.pd = function (a, b) {
          return this.createChildContext(a, b, null, { exportDependencies: !0 });
        };var C = a.a.g.W();c.prototype.Pc = function () {
          this.Fb && this.Fb.P && this.Fb.P.rd(this.node);
        };c.prototype.rd = function (b) {
          a.a.Oa(this.fb, b);!this.fb.length && this.Y && this.vc();
        };c.prototype.vc = function () {
          this.Y = !0;this.gb.P && !this.fb.length && (this.gb.P = n, a.a.G.ub(this.node, b), a.v.Ya(this.node, a.v.Ac), this.Pc());
        };c.prototype.od = function (a, b, c) {
          var d = this;return this.gb.context.createChildContext(a, b, function (a) {
            c(a);a[v] = d.gb;
          }, void 0);
        };a.v = { Y: "childrenComplete", Ac: "descendantsComplete", subscribe: function (b, c, d, e) {
            b = a.a.g.Gc(b, C, {});b.Da || (b.Da = new a.R());return b.Da.subscribe(d, e, c);
          }, Ya: function (b, c) {
            var d = a.a.g.get(b, C);if (d && (d.Da && d.Da.notifySubscribers(b, c), c == a.v.Y)) if (d.P) d.P.vc();else if (d.Da && d.Da.Ua(a.v.Ac)) throw Error("descendantsComplete event not supported for bindings on this node");
          }, Sd: function (b) {
            var d = a.a.g.get(b, C);if (d) return d.P || (d.P = new c(b, d, d.context[v]));
          } };a.Td = function (b) {
          return (b = a.a.g.get(b, C)) && b.context;
        };a.bb = function (b, c, d) {
          1 === b.nodeType && a.h.Oc(b);return q(b, c, p(d));
        };a.hd = function (b, c, d) {
          d = p(d);return a.bb(b, g(c, d, b), d);
        };a.Na = function (a, b) {
          1 !== b.nodeType && 8 !== b.nodeType || l(p(a), b);
        };a.oc = function (a, b, c) {
          !w && A.jQuery && (w = A.jQuery);if (!b) {
            if (b = A.document.body, !b) throw Error("ko.applyBindings: could not find window.document.body; has the document been loaded?");
          } else if (1 !== b.nodeType && 8 !== b.nodeType) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
          k(p(a, c), b);
        };a.wc = function (b) {
          return !b || 1 !== b.nodeType && 8 !== b.nodeType ? n : a.Td(b);
        };a.xc = function (b) {
          return (b = a.wc(b)) ? b.$data : n;
        };a.b("bindingHandlers", a.f);a.b("bindingEvent", a.v);a.b("bindingEvent.subscribe", a.v.subscribe);a.b("applyBindings", a.oc);a.b("applyBindingsToDescendants", a.Na);a.b("applyBindingAccessorsToNode", a.bb);a.b("applyBindingsToNode", a.hd);a.b("contextFor", a.wc);a.b("dataFor", a.xc);
      })();(function (b) {
        function c(c, e) {
          var k = Object.prototype.hasOwnProperty.call(f, c) ? f[c] : b,
              m;k ? k.subscribe(e) : (k = f[c] = new a.R(), k.subscribe(e), d(c, function (b, d) {
            var e = !(!d || !d.synchronous);g[c] = { definition: b, Fd: e };delete f[c];m || e ? k.notifySubscribers(b) : a.ma.vb(function () {
              k.notifySubscribers(b);
            });
          }), m = !0);
        }function d(a, b) {
          e("getConfig", [a], function (c) {
            c ? e("loadComponent", [a, c], function (a) {
              b(a, c);
            }) : b(null, null);
          });
        }function e(c, d, f, g) {
          g || (g = a.i.loaders.slice(0));var q = g.shift();if (q) {
            var p = q[c];if (p) {
              var r = !1;if (p.apply(q, d.concat(function (a) {
                r ? f(null) : null !== a ? f(a) : e(c, d, f, g);
              })) !== b && (r = !0, !q.suppressLoaderExceptions)) throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
            } else e(c, d, f, g);
          } else f(null);
        }var f = {},
            g = {};a.i = { get: function (d, e) {
            var f = Object.prototype.hasOwnProperty.call(g, d) ? g[d] : b;f ? f.Fd ? a.u.J(function () {
              e(f.definition);
            }) : a.ma.vb(function () {
              e(f.definition);
            }) : c(d, e);
          }, uc: function (a) {
            delete g[a];
          }, ec: e };a.i.loaders = [];a.b("components", a.i);a.b("components.get", a.i.get);a.b("components.clearCachedDefinition", a.i.uc);
      })();(function () {
        function b(b, c, d, e) {
          function g() {
            0 === --y && e(h);
          }var h = {},
              y = 2,
              t = d.template;d = d.viewModel;t ? f(c, t, function (c) {
            a.i.ec("loadTemplate", [b, c], function (a) {
              h.template = a;g();
            });
          }) : g();d ? f(c, d, function (c) {
            a.i.ec("loadViewModel", [b, c], function (a) {
              h[l] = a;g();
            });
          }) : g();
        }function c(a, b, d) {
          if ("function" === typeof b) d(function (a) {
            return new b(a);
          });else if ("function" === typeof b[l]) d(b[l]);else if ("instance" in b) {
            var e = b.instance;d(function () {
              return e;
            });
          } else "viewModel" in b ? c(a, b.viewModel, d) : a("Unknown viewModel value: " + b);
        }function d(b) {
          switch (a.a.O(b)) {case "script":
              return a.a.sa(b.text);case "textarea":
              return a.a.sa(b.value);case "template":
              if (e(b.content)) return a.a.Aa(b.content.childNodes);}return a.a.Aa(b.childNodes);
        }
        function e(a) {
          return A.DocumentFragment ? a instanceof DocumentFragment : a && 11 === a.nodeType;
        }function f(a, b, c) {
          "string" === typeof b.require ? Q || A.require ? (Q || A.require)([b.require], c) : a("Uses require, but no AMD loader is present") : c(b);
        }function g(a) {
          return function (b) {
            throw Error("Component '" + a + "': " + b);
          };
        }var h = {};a.i.register = function (b, c) {
          if (!c) throw Error("Invalid configuration for " + b);if (a.i.qb(b)) throw Error("Component " + b + " is already registered");h[b] = c;
        };a.i.qb = function (a) {
          return Object.prototype.hasOwnProperty.call(h, a);
        };a.i.unregister = function (b) {
          delete h[b];a.i.uc(b);
        };a.i.yc = { getConfig: function (b, c) {
            c(a.i.qb(b) ? h[b] : null);
          }, loadComponent: function (a, c, d) {
            var e = g(a);f(e, c, function (c) {
              b(a, e, c, d);
            });
          }, loadTemplate: function (b, c, f) {
            b = g(b);if ("string" === typeof c) f(a.a.sa(c));else if (c instanceof Array) f(c);else if (e(c)) f(a.a.la(c.childNodes));else if (c.element) {
              if (c = c.element, A.HTMLElement ? c instanceof HTMLElement : c && c.tagName && 1 === c.nodeType) f(d(c));else if ("string" === typeof c) {
                var h = x.getElementById(c);h ? f(d(h)) : b("Cannot find element with ID " + c);
              } else b("Unknown element type: " + c);
            } else b("Unknown template value: " + c);
          }, loadViewModel: function (a, b, d) {
            c(g(a), b, d);
          } };var l = "createViewModel";a.b("components.register", a.i.register);a.b("components.isRegistered", a.i.qb);a.b("components.unregister", a.i.unregister);a.b("components.defaultLoader", a.i.yc);a.i.loaders.push(a.i.yc);a.i.ad = h;
      })();(function () {
        function b(b, e) {
          var f = b.getAttribute("params");if (f) {
            var f = c.parseBindingsString(f, e, b, { valueAccessors: !0, bindingParams: !0 }),
                f = a.a.Fa(f, function (c) {
              return a.s(c, null, { j: b });
            }),
                g = a.a.Fa(f, function (c) {
              var e = c.w();return c.fa() ? a.s({ read: function () {
                  return a.a.c(c());
                }, write: a.Wa(e) && function (a) {
                  c()(a);
                }, j: b }) : e;
            });Object.prototype.hasOwnProperty.call(g, "$raw") || (g.$raw = f);return g;
          }return { $raw: {} };
        }a.i.getComponentNameForNode = function (b) {
          var c = a.a.O(b);if (a.i.qb(c) && (-1 != c.indexOf("-") || "[object HTMLUnknownElement]" == "" + b || 8 >= a.a.U && b.tagName === c)) return c;
        };a.i.lc = function (c, e, f, g) {
          if (1 === e.nodeType) {
            var h = a.i.getComponentNameForNode(e);if (h) {
              c = c || {};if (c.component) throw Error('Cannot use the "component" binding on a custom element matching a component');
              var l = { name: h, params: b(e, f) };c.component = g ? function () {
                return l;
              } : l;
            }
          }return c;
        };var c = new a.da();9 > a.a.U && (a.i.register = function (a) {
          return function (b) {
            return a.apply(this, arguments);
          };
        }(a.i.register), x.createDocumentFragment = function (b) {
          return function () {
            var c = b(),
                f = a.i.ad,
                g;for (g in f);return c;
          };
        }(x.createDocumentFragment));
      })();(function (b) {
        function c(b, c, d) {
          c = c.template;if (!c) throw Error("Component '" + b + "' has no template");b = a.a.Aa(c);a.h.ta(d, b);
        }function d(a, b, c) {
          var d = a.createViewModel;return d ? d.call(a, b, c) : b;
        }var e = 0;a.f.component = { init: function (f, g) {
            function h() {
              var a = l && l.dispose;"function" === typeof a && a.call(l);m && m.m();k = l = m = null;
            }var l,
                k,
                m,
                q = a.a.la(a.h.childNodes(f));a.h.Ca(f);a.a.G.na(f, h);a.s(function () {
              var p = a.a.c(g()),
                  r,
                  v;"string" === typeof p ? r = p : (r = a.a.c(p.name), v = a.a.c(p.params));if (!r) throw Error("No component name specified");var y = a.v.Sd(f),
                  t = k = ++e;a.i.get(r, function (e) {
                if (k === t) {
                  h();if (!e) throw Error("Unknown component '" + r + "'");c(r, e, f);var g = d(e, v, { element: f, templateNodes: q });e = y.od(g, b, function (a) {
                    a.$component = g;a.$componentTemplateNodes = q;
                  });g && g.koDescendantsComplete && (m = a.v.subscribe(f, "descendantsComplete", g.koDescendantsComplete, g));l = g;a.Na(e, f);
                }
              });
            }, null, { j: f });return { controlsDescendantBindings: !0 };
          } };a.h.ca.component = !0;
      })();var T = { "class": "className", "for": "htmlFor" };a.f.attr = { update: function (b, c) {
          var d = a.a.c(c()) || {};a.a.N(d, function (c, d) {
            d = a.a.c(d);var g = c.indexOf(":"),
                g = "lookupNamespaceURI" in b && 0 < g && b.lookupNamespaceURI(c.substr(0, g)),
                h = !1 === d || null === d || d === n;h ? g ? b.removeAttributeNS(g, c) : b.removeAttribute(c) : d = d.toString();8 >= a.a.U && c in T ? (c = T[c], h ? b.removeAttribute(c) : b[c] = d) : h || (g ? b.setAttributeNS(g, c, d) : b.setAttribute(c, d));"name" === c && a.a.Uc(b, h ? "" : d);
          });
        } };(function () {
        a.f.checked = { after: ["value", "attr"], init: function (b, c, d) {
            function e() {
              var e = b.checked,
                  f = g();if (!a.ja.pb() && (e || !l && !a.ja.Ea())) {
                var k = a.u.J(c);if (m) {
                  var p = q ? k.w() : k,
                      I = r;r = f;I !== f ? e && (a.a.Ma(p, f, !0), a.a.Ma(p, I, !1)) : a.a.Ma(p, f, e);q && a.Wa(k) && k(p);
                } else h && (f === n ? f = e : e || (f = n)), a.l.Za(k, d, "checked", f, !0);
              }
            }function f() {
              var d = a.a.c(c()),
                  e = g();m ? (b.checked = 0 <= a.a.D(d, e), r = e) : b.checked = h && e === n ? !!d : g() === d;
            }var g = a.Tb(function () {
              if (d.has("checkedValue")) return a.a.c(d.get("checkedValue"));if (p) return d.has("value") ? a.a.c(d.get("value")) : b.value;
            }),
                h = "checkbox" == b.type,
                l = "radio" == b.type;if (h || l) {
              var k = c(),
                  m = h && a.a.c(k) instanceof Array,
                  q = !(m && k.push && k.splice),
                  p = l || m,
                  r = m ? g() : n;l && !b.name && a.f.uniqueName.init(b, function () {
                return !0;
              });a.s(e, null, { j: b });a.a.H(b, "click", e);a.s(f, null, { j: b });k = n;
            }
          } };a.l.ua.checked = !0;a.f.checkedValue = { update: function (b, c) {
            b.value = a.a.c(c());
          } };
      })();a.f["class"] = { update: function (b, c) {
          var d = a.a.yb(a.a.c(c()));a.a.Ab(b, b.__ko__cssValue, !1);b.__ko__cssValue = d;a.a.Ab(b, d, !0);
        } };a.f.css = { update: function (b, c) {
          var d = a.a.c(c());null !== d && "object" == typeof d ? a.a.N(d, function (c, d) {
            d = a.a.c(d);a.a.Ab(b, c, d);
          }) : a.f["class"].update(b, c);
        } };a.f.enable = { update: function (b, c) {
          var d = a.a.c(c());d && b.disabled ? b.removeAttribute("disabled") : d || b.disabled || (b.disabled = !0);
        } };a.f.disable = { update: function (b, c) {
          a.f.enable.update(b, function () {
            return !a.a.c(c());
          });
        } };a.f.event = { init: function (b, c, d, e, f) {
          var g = c() || {};a.a.N(g, function (g) {
            "string" == typeof g && a.a.H(b, g, function (b) {
              var k,
                  m = c()[g];if (m) {
                try {
                  var q = a.a.la(arguments);e = f.$data;q.unshift(e);k = m.apply(e, q);
                } finally {
                  !0 !== k && (b.preventDefault ? b.preventDefault() : b.returnValue = !1);
                }!1 === d.get(g + "Bubble") && (b.cancelBubble = !0, b.stopPropagation && b.stopPropagation());
              }
            });
          });
        } };a.f.foreach = { Nc: function (b) {
          return function () {
            var c = b(),
                d = a.a.Sb(c);if (!d || "number" == typeof d.length) return { foreach: c,
              templateEngine: a.aa.La };a.a.c(c);return { foreach: d.data, as: d.as, includeDestroyed: d.includeDestroyed, afterAdd: d.afterAdd, beforeRemove: d.beforeRemove, afterRender: d.afterRender, beforeMove: d.beforeMove, afterMove: d.afterMove, templateEngine: a.aa.La };
          };
        }, init: function (b, c) {
          return a.f.template.init(b, a.f.foreach.Nc(c));
        }, update: function (b, c, d, e, f) {
          return a.f.template.update(b, a.f.foreach.Nc(c), d, e, f);
        } };a.l.Qa.foreach = !1;a.h.ca.foreach = !0;a.f.hasfocus = { init: function (b, c, d) {
          function e(e) {
            b.__ko_hasfocusUpdating = !0;var f = b.ownerDocument;if ("activeElement" in f) {
              var g;try {
                g = f.activeElement;
              } catch (m) {
                g = f.body;
              }e = g === b;
            }f = c();a.l.Za(f, d, "hasfocus", e, !0);b.__ko_hasfocusLastValue = e;b.__ko_hasfocusUpdating = !1;
          }var f = e.bind(null, !0),
              g = e.bind(null, !1);a.a.H(b, "focus", f);a.a.H(b, "focusin", f);a.a.H(b, "blur", g);a.a.H(b, "focusout", g);b.__ko_hasfocusLastValue = !1;
        }, update: function (b, c) {
          var d = !!a.a.c(c());b.__ko_hasfocusUpdating || b.__ko_hasfocusLastValue === d || (d ? b.focus() : b.blur(), !d && b.__ko_hasfocusLastValue && b.ownerDocument.body.focus(), a.u.J(a.a.Bb, null, [b, d ? "focusin" : "focusout"]));
        } };a.l.ua.hasfocus = !0;a.f.hasFocus = a.f.hasfocus;a.l.ua.hasFocus = "hasfocus";a.f.html = { init: function () {
          return { controlsDescendantBindings: !0 };
        }, update: function (b, c) {
          a.a.Xb(b, c());
        } };M("if");M("ifnot", !1, !0);M("with", !0);a.f.let = { init: function (b, c, d, e, f) {
          c = f.extend(c);a.Na(c, b);return { controlsDescendantBindings: !0 };
        } };a.h.ca.let = !0;var N = {};a.f.options = { init: function (b) {
          if ("select" !== a.a.O(b)) throw Error("options binding applies only to SELECT elements");for (; 0 < b.length;) b.remove(0);return { controlsDescendantBindings: !0 };
        }, update: function (b, c, d) {
          function e() {
            return a.a.cb(b.options, function (a) {
              return a.selected;
            });
          }function f(a, b, c) {
            var d = typeof b;return "function" == d ? b(a) : "string" == d ? a[b] : c;
          }function g(c, e) {
            if (v && m) a.o.xa(b, a.a.c(d.get("value")), !0);else if (r.length) {
              var f = 0 <= a.a.D(r, a.o.L(e[0]));a.a.Vc(e[0], f);v && !f && a.u.J(a.a.Bb, null, [b, "change"]);
            }
          }var h = b.multiple,
              l = 0 != b.length && h ? b.scrollTop : null,
              k = a.a.c(c()),
              m = d.get("valueAllowUnset") && d.has("value"),
              q = d.get("optionsIncludeDestroyed");c = {};var p,
              r = [];m || (h ? r = a.a.Gb(e(), a.o.L) : 0 <= b.selectedIndex && r.push(a.o.L(b.options[b.selectedIndex])));k && ("undefined" == typeof k.length && (k = [k]), p = a.a.cb(k, function (b) {
            return q || b === n || null === b || !a.a.c(b._destroy);
          }), d.has("optionsCaption") && (k = a.a.c(d.get("optionsCaption")), null !== k && k !== n && p.unshift(N)));var v = !1;c.beforeRemove = function (a) {
            b.removeChild(a);
          };k = g;d.has("optionsAfterRender") && "function" == typeof d.get("optionsAfterRender") && (k = function (b, c) {
            g(0, c);
            a.u.J(d.get("optionsAfterRender"), null, [c[0], b !== N ? b : n]);
          });a.a.Wb(b, p, function (c, e, g) {
            g.length && (r = !m && g[0].selected ? [a.o.L(g[0])] : [], v = !0);e = b.ownerDocument.createElement("option");c === N ? (a.a.xb(e, d.get("optionsCaption")), a.o.xa(e, n)) : (g = f(c, d.get("optionsValue"), c), a.o.xa(e, a.a.c(g)), c = f(c, d.get("optionsText"), g), a.a.xb(e, c));return [e];
          }, c, k);a.u.J(function () {
            if (m) a.o.xa(b, a.a.c(d.get("value")), !0);else {
              var c;h ? c = r.length && e().length < r.length : c = r.length && 0 <= b.selectedIndex ? a.o.L(b.options[b.selectedIndex]) !== r[0] : r.length || 0 <= b.selectedIndex;c && a.a.Bb(b, "change");
            }
          });a.a.vd(b);l && 20 < Math.abs(l - b.scrollTop) && (b.scrollTop = l);
        } };a.f.options.Qb = a.a.g.W();a.f.selectedOptions = { after: ["options", "foreach"], init: function (b, c, d) {
          a.a.H(b, "change", function () {
            var e = c(),
                f = [];a.a.B(b.getElementsByTagName("option"), function (b) {
              b.selected && f.push(a.o.L(b));
            });a.l.Za(e, d, "selectedOptions", f);
          });
        }, update: function (b, c) {
          if ("select" != a.a.O(b)) throw Error("values binding applies only to SELECT elements");var d = a.a.c(c()),
              e = b.scrollTop;
          d && "number" == typeof d.length && a.a.B(b.getElementsByTagName("option"), function (b) {
            var c = 0 <= a.a.D(d, a.o.L(b));b.selected != c && a.a.Vc(b, c);
          });b.scrollTop = e;
        } };a.l.ua.selectedOptions = !0;a.f.style = { update: function (b, c) {
          var d = a.a.c(c() || {});a.a.N(d, function (c, d) {
            d = a.a.c(d);if (null === d || d === n || !1 === d) d = "";w ? w(b).css(c, d) : (c = c.replace(/-(\w)/g, function (a, b) {
              return b.toUpperCase();
            }), b.style[c] = d, "" === d || "" != b.style[c] || isNaN(d) || (b.style[c] = d + "px"));
          });
        } };a.f.submit = { init: function (b, c, d, e, f) {
          if ("function" != typeof c()) throw Error("The value for a submit binding must be a function");
          a.a.H(b, "submit", function (a) {
            var d,
                e = c();try {
              d = e.call(f.$data, b);
            } finally {
              !0 !== d && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
            }
          });
        } };a.f.text = { init: function () {
          return { controlsDescendantBindings: !0 };
        }, update: function (b, c) {
          a.a.xb(b, c());
        } };a.h.ca.text = !0;(function () {
        if (A && A.navigator) {
          var b = function (a) {
            if (a) return parseFloat(a[1]);
          },
              c = A.navigator.userAgent,
              d,
              e,
              f,
              g;(d = A.opera && A.opera.version && parseInt(A.opera.version())) || b(c.match(/Chrome\/([^ ]+)/)) || (e = b(c.match(/Version\/([^ ]+) Safari/))) || (f = b(c.match(/Firefox\/([^ ]+)/))) || (g = a.a.U || b(c.match(/MSIE ([^ ]+)/))) || (g = b(c.match(/rv:([^ )]+)/)));
        }if (8 <= g && 10 > g) var h = a.a.g.W(),
            l = a.a.g.W(),
            k = function (b) {
          var c = this.activeElement;(c = c && a.a.g.get(c, l)) && c(b);
        },
            m = function (b, c) {
          var d = b.ownerDocument;a.a.g.get(d, h) || (a.a.g.set(d, h, !0), a.a.H(d, "selectionchange", k));a.a.g.set(b, l, c);
        };a.f.textInput = { init: function (b, c, k) {
            function h(c, d) {
              a.a.H(b, c, d);
            }function l() {
              var d = a.a.c(c());if (null === d || d === n) d = "";L !== n && d === L ? a.a.setTimeout(l, 4) : b.value !== d && (A = !0, b.value = d, A = !1, u = b.value);
            }function t() {
              w || (L = b.value, w = a.a.setTimeout(C, 4));
            }function C() {
              clearTimeout(w);L = w = n;var d = b.value;u !== d && (u = d, a.l.Za(c(), k, "textInput", d));
            }var u = b.value,
                w,
                L,
                x = 9 == a.a.U ? t : C,
                A = !1;g && h("keypress", C);11 > g && h("propertychange", function (a) {
              A || "value" !== a.propertyName || x(a);
            });8 == g && (h("keyup", C), h("keydown", C));m && (m(b, x), h("dragend", t));(!g || 9 <= g) && h("input", x);5 > e && "textarea" === a.a.O(b) ? (h("keydown", t), h("paste", t), h("cut", t)) : 11 > d ? h("keydown", t) : 4 > f && (h("DOMAutoComplete", C), h("dragdrop", C), h("drop", C));h("change", C);h("blur", C);a.s(l, null, { j: b });
          } };a.l.ua.textInput = !0;a.f.textinput = { preprocess: function (a, b, c) {
            c("textInput", a);
          } };
      })();a.f.uniqueName = { init: function (b, c) {
          if (c()) {
            var d = "ko_unique_" + ++a.f.uniqueName.qd;a.a.Uc(b, d);
          }
        } };a.f.uniqueName.qd = 0;a.f.using = { init: function (b, c, d, e, f) {
          c = f.createChildContext(c);a.Na(c, b);return { controlsDescendantBindings: !0 };
        } };a.h.ca.using = !0;a.f.value = { after: ["options", "foreach"], init: function (b, c, d) {
          var e = a.a.O(b),
              f = "input" == e;if (!f || "checkbox" != b.type && "radio" != b.type) {
            var g = ["change"],
                h = d.get("valueUpdate"),
                l = !1,
                k = null;h && ("string" == typeof h && (h = [h]), a.a.eb(g, h), g = a.a.qc(g));var m = function () {
              k = null;l = !1;var e = c(),
                  f = a.o.L(b);a.l.Za(e, d, "value", f);
            };!a.a.U || !f || "text" != b.type || "off" == b.autocomplete || b.form && "off" == b.form.autocomplete || -1 != a.a.D(g, "propertychange") || (a.a.H(b, "propertychange", function () {
              l = !0;
            }), a.a.H(b, "focus", function () {
              l = !1;
            }), a.a.H(b, "blur", function () {
              l && m();
            }));a.a.B(g, function (c) {
              var d = m;a.a.Ud(c, "after") && (d = function () {
                k = a.o.L(b);a.a.setTimeout(m, 0);
              }, c = c.substring(5));a.a.H(b, c, d);
            });var q;q = f && "file" == b.type ? function () {
              var d = a.a.c(c());null === d || d === n || "" === d ? b.value = "" : a.u.J(m);
            } : function () {
              var f = a.a.c(c()),
                  g = a.o.L(b);if (null !== k && f === k) a.a.setTimeout(q, 0);else if (f !== g || g === n) "select" === e ? (g = d.get("valueAllowUnset"), a.o.xa(b, f, g), g || f === a.o.L(b) || a.u.J(m)) : a.o.xa(b, f);
            };a.s(q, null, { j: b });
          } else a.bb(b, { checkedValue: c });
        }, update: function () {} };a.l.ua.value = !0;a.f.visible = { update: function (b, c) {
          var d = a.a.c(c()),
              e = "none" != b.style.display;d && !e ? b.style.display = "" : !d && e && (b.style.display = "none");
        } };a.f.hidden = { update: function (b, c) {
          a.f.visible.update(b, function () {
            return !a.a.c(c());
          });
        } };(function (b) {
        a.f[b] = { init: function (c, d, e, f, g) {
            return a.f.event.init.call(this, c, function () {
              var a = {};a[b] = d();return a;
            }, e, f, g);
          } };
      })("click");a.ba = function () {};a.ba.prototype.renderTemplateSource = function () {
        throw Error("Override renderTemplateSource");
      };a.ba.prototype.createJavaScriptEvaluatorBlock = function () {
        throw Error("Override createJavaScriptEvaluatorBlock");
      };a.ba.prototype.makeTemplateSource = function (b, c) {
        if ("string" == typeof b) {
          c = c || x;var d = c.getElementById(b);if (!d) throw Error("Cannot find template with ID " + b);return new a.A.C(d);
        }if (1 == b.nodeType || 8 == b.nodeType) return new a.A.ia(b);throw Error("Unknown template type: " + b);
      };a.ba.prototype.renderTemplate = function (a, c, d, e) {
        a = this.makeTemplateSource(a, e);return this.renderTemplateSource(a, c, d, e);
      };a.ba.prototype.isTemplateRewritten = function (a, c) {
        return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(a, c).data("isRewritten");
      };a.ba.prototype.rewriteTemplate = function (a, c, d) {
        a = this.makeTemplateSource(a, d);c = c(a.text());a.text(c);a.data("isRewritten", !0);
      };a.b("templateEngine", a.ba);a.bc = function () {
        function b(b, c, d, h) {
          b = a.l.Rb(b);for (var l = a.l.Qa, k = 0; k < b.length; k++) {
            var m = b[k].key;if (Object.prototype.hasOwnProperty.call(l, m)) {
              var q = l[m];if ("function" === typeof q) {
                if (m = q(b[k].value)) throw Error(m);
              } else if (!q) throw Error("This template engine does not support the '" + m + "' binding within its templates");
            }
          }d = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + a.l.sb(b, { valueAccessors: !0 }) + " } })()},'" + d.toLowerCase() + "')";return h.createJavaScriptEvaluatorBlock(d) + c;
        }var c = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
            d = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;return { wd: function (b, c, d) {
            c.isTemplateRewritten(b, d) || c.rewriteTemplate(b, function (b) {
              return a.bc.Kd(b, c);
            }, d);
          }, Kd: function (a, f) {
            return a.replace(c, function (a, c, d, e, m) {
              return b(m, c, d, f);
            }).replace(d, function (a, c) {
              return b(c, "\x3c!-- ko --\x3e", "#comment", f);
            });
          }, jd: function (b, c) {
            return a.$.Ob(function (d, h) {
              var l = d.nextSibling;l && l.nodeName.toLowerCase() === c && a.bb(l, b, h);
            });
          } };
      }();a.b("__tr_ambtns", a.bc.jd);(function () {
        a.A = {};a.A.C = function (b) {
          if (this.C = b) {
            var c = a.a.O(b);this.zb = "script" === c ? 1 : "textarea" === c ? 2 : "template" == c && b.content && 11 === b.content.nodeType ? 3 : 4;
          }
        };a.A.C.prototype.text = function () {
          var b = 1 === this.zb ? "text" : 2 === this.zb ? "value" : "innerHTML";
          if (0 == arguments.length) return this.C[b];var c = arguments[0];"innerHTML" === b ? a.a.Xb(this.C, c) : this.C[b] = c;
        };var b = a.a.g.W() + "_";a.A.C.prototype.data = function (c) {
          if (1 === arguments.length) return a.a.g.get(this.C, b + c);a.a.g.set(this.C, b + c, arguments[1]);
        };var c = a.a.g.W();a.A.C.prototype.nodes = function () {
          var b = this.C;if (0 == arguments.length) {
            var e = a.a.g.get(b, c) || {},
                f = e.hb || (3 === this.zb ? b.content : 4 === this.zb ? b : n);if (!f || e.gd) if (e = this.text()) f = a.a.Ld(e, b.ownerDocument), this.text(""), a.a.g.set(b, c, { hb: f, gd: !0 });
            return f;
          }a.a.g.set(b, c, { hb: arguments[0] });
        };a.A.ia = function (a) {
          this.C = a;
        };a.A.ia.prototype = new a.A.C();a.A.ia.prototype.constructor = a.A.ia;a.A.ia.prototype.text = function () {
          if (0 == arguments.length) {
            var b = a.a.g.get(this.C, c) || {};b.cc === n && b.hb && (b.cc = b.hb.innerHTML);return b.cc;
          }a.a.g.set(this.C, c, { cc: arguments[0] });
        };a.b("templateSources", a.A);a.b("templateSources.domElement", a.A.C);a.b("templateSources.anonymousTemplate", a.A.ia);
      })();(function () {
        function b(b, c, d) {
          var e;for (c = a.h.nextSibling(c); b && (e = b) !== c;) b = a.h.nextSibling(e), d(e, b);
        }function c(c, d) {
          if (c.length) {
            var e = c[0],
                f = c[c.length - 1],
                g = e.parentNode,
                h = a.da.instance,
                l = h.preprocessNode;if (l) {
              b(e, f, function (a, b) {
                var c = a.previousSibling,
                    d = l.call(h, a);d && (a === e && (e = d[0] || b), a === f && (f = d[d.length - 1] || c));
              });c.length = 0;if (!e) return;e === f ? c.push(e) : (c.push(e, f), a.a.Ta(c, g));
            }b(e, f, function (b) {
              1 !== b.nodeType && 8 !== b.nodeType || a.oc(d, b);
            });b(e, f, function (b) {
              1 !== b.nodeType && 8 !== b.nodeType || a.$.Zc(b, [d]);
            });a.a.Ta(c, g);
          }
        }function d(a) {
          return a.nodeType ? a : 0 < a.length ? a[0] : null;
        }function e(b, e, f, h, l) {
          l = l || {};var n = (b && d(b) || f || {}).ownerDocument,
              y = l.templateEngine || g;a.bc.wd(f, y, n);f = y.renderTemplate(f, h, l, n);if ("number" != typeof f.length || 0 < f.length && "number" != typeof f[0].nodeType) throw Error("Template engine must return an array of DOM nodes");n = !1;switch (e) {case "replaceChildren":
              a.h.ta(b, f);n = !0;break;case "replaceNode":
              a.a.Tc(b, f);n = !0;break;case "ignoreTargetNode":
              break;default:
              throw Error("Unknown renderMode: " + e);}n && (c(f, h), l.afterRender && a.u.J(l.afterRender, null, [f, h.$data]), "replaceChildren" == e && a.v.Ya(b, a.v.Y));return f;
        }function f(b, c, d) {
          return a.M(b) ? b() : "function" === typeof b ? b(c, d) : b;
        }var g;a.Yb = function (b) {
          if (b != n && !(b instanceof a.ba)) throw Error("templateEngine must inherit from ko.templateEngine");g = b;
        };a.Vb = function (b, c, h, l, r) {
          h = h || {};if ((h.templateEngine || g) == n) throw Error("Set a template engine before calling renderTemplate");r = r || "replaceChildren";if (l) {
            var v = d(l);return a.T(function () {
              var g = c && c instanceof a.X ? c : new a.X(c, null, null, null, { exportDependencies: !0 }),
                  n = f(b, g.$data, g),
                  g = e(l, r, n, g, h);"replaceNode" == r && (l = g, v = d(l));
            }, null, { Ba: function () {
                return !v || !a.a.Lb(v);
              }, j: v && "replaceNode" == r ? v.parentNode : v });
          }return a.$.Ob(function (d) {
            a.Vb(b, c, h, d, "replaceNode");
          });
        };a.Pd = function (b, d, g, h, l) {
          function v(b, c) {
            a.u.J(a.a.Wb, null, [h, b, t, g, y, c]);a.v.Ya(h, a.v.Y);
          }function y(a, b) {
            c(b, u);g.afterRender && g.afterRender(b, a);u = null;
          }function t(a, c) {
            u = l.createChildContext(a, g.as, function (a) {
              a.$index = c;
            });var d = f(b, a, u);return e(h, "ignoreTargetNode", d, u, g);
          }var u,
              w = !1 === g.includeDestroyed || a.options.foreachHidesDestroyed && !g.includeDestroyed;if (w || g.beforeRemove || !a.Lc(d)) return a.T(function () {
            var b = a.a.c(d) || [];"undefined" == typeof b.length && (b = [b]);w && (b = a.a.cb(b, function (b) {
              return b === n || null === b || !a.a.c(b._destroy);
            }));v(b);
          }, null, { j: h });v(d.w());var x = d.subscribe(function (a) {
            v(d(), a);
          }, null, "arrayChange");x.j(h);return x;
        };var h = a.a.g.W(),
            l = a.a.g.W();a.f.template = { init: function (b, c) {
            var d = a.a.c(c());if ("string" == typeof d || d.name) a.h.Ca(b);else if ("nodes" in d) {
              d = d.nodes || [];if (a.M(d)) throw Error('The "nodes" option must be a plain, non-observable array.');
              var e = d[0] && d[0].parentNode;e && a.a.g.get(e, l) || (e = a.a.Pb(d), a.a.g.set(e, l, !0));new a.A.ia(b).nodes(e);
            } else if (d = a.h.childNodes(b), 0 < d.length) e = a.a.Pb(d), new a.A.ia(b).nodes(e);else throw Error("Anonymous template defined, but no template content was provided");return { controlsDescendantBindings: !0 };
          }, update: function (b, c, d, e, f) {
            var g = c();c = a.a.c(g);d = !0;e = null;"string" == typeof c ? c = {} : (g = c.name, "if" in c && (d = a.a.c(c["if"])), d && "ifnot" in c && (d = !a.a.c(c.ifnot)));"foreach" in c ? e = a.Pd(g || b, d && c.foreach || [], c, b, f) : d ? (f = "data" in c ? f.pd(c.data, c.as) : f, e = a.Vb(g || b, f, c, b)) : a.h.Ca(b);f = e;(c = a.a.g.get(b, h)) && "function" == typeof c.m && c.m();a.a.g.set(b, h, !f || f.fa && !f.fa() ? n : f);
          } };a.l.Qa.template = function (b) {
          b = a.l.Rb(b);return 1 == b.length && b[0].unknown || a.l.Hd(b, "name") ? null : "This template engine does not support anonymous templates nested within its templates";
        };a.h.ca.template = !0;
      })();a.b("setTemplateEngine", a.Yb);a.b("renderTemplate", a.Vb);a.a.Ec = function (a, c, d) {
        if (a.length && c.length) {
          var e, f, g, h, l;for (e = f = 0; (!d || e < d) && (h = a[f]); ++f) {
            for (g = 0; l = c[g]; ++g) if (h.value === l.value) {
              h.moved = l.index;l.moved = h.index;c.splice(g, 1);e = g = 0;break;
            }e += g;
          }
        }
      };a.a.Ib = function () {
        function b(b, d, e, f, g) {
          var h = Math.min,
              l = Math.max,
              k = [],
              m,
              n = b.length,
              p,
              r = d.length,
              v = r - n || 1,
              y = n + r + 1,
              t,
              u,
              w;for (m = 0; m <= n; m++) for (u = t, k.push(t = []), w = h(r, m + v), p = l(0, m - 1); p <= w; p++) t[p] = p ? m ? b[m - 1] === d[p - 1] ? u[p - 1] : h(u[p] || y, t[p - 1] || y) + 1 : p + 1 : m + 1;h = [];l = [];v = [];m = n;for (p = r; m || p;) r = k[m][p] - 1, p && r === k[m][p - 1] ? l.push(h[h.length] = { status: e, value: d[--p], index: p }) : m && r === k[m - 1][p] ? v.push(h[h.length] = { status: f, value: b[--m], index: m }) : (--p, --m, g.sparse || h.push({ status: "retained", value: d[p] }));a.a.Ec(v, l, !g.dontLimitMoves && 10 * n);return h.reverse();
        }return function (a, d, e) {
          e = "boolean" === typeof e ? { dontLimitMoves: e } : e || {};a = a || [];d = d || [];return a.length < d.length ? b(a, d, "added", "deleted", e) : b(d, a, "deleted", "added", e);
        };
      }();a.b("utils.compareArrays", a.a.Ib);(function () {
        function b(b, c, d, h, l) {
          var k = [],
              m = a.T(function () {
            var m = c(d, l, a.a.Ta(k, b)) || [];0 < k.length && (a.a.Tc(k, m), h && a.u.J(h, null, [d, m, l]));k.length = 0;a.a.eb(k, m);
          }, null, { j: b, Ba: function () {
              return !a.a.nc(k);
            } });return { ra: k, T: m.fa() ? m : n };
        }var c = a.a.g.W(),
            d = a.a.g.W();a.a.Wb = function (e, f, g, h, l, k) {
          function m(b) {
            z = { ya: b, Nb: a.ga(w++) };u.push(z);A.push(z);v || E.push(z);
          }function q(b) {
            z = r[b];w !== b && D.push(z);z.Nb(w++);a.a.Ta(z.ra, e);u.push(z);A.push(z);
          }function p(b, c) {
            if (b) for (var d = 0, e = c.length; d < e; d++) a.a.B(c[d].ra, function (a) {
              b(a, d, c[d].ya);
            });
          }f = f || [];"undefined" == typeof f.length && (f = [f]);h = h || {};var r = a.a.g.get(e, c),
              v = !r,
              u = [],
              t = 0,
              w = 0,
              x = [],
              A = [],
              B = [],
              D = [],
              E = [],
              z,
              H = 0;if (v) a.a.B(f, m);else {
            if (!k || r && r._countWaitingForRemove) {
              var G = v ? [] : a.a.Gb(r, function (a) {
                return a.ya;
              });k = a.a.Ib(G, f, { dontLimitMoves: h.dontLimitMoves, sparse: !0 });
            }for (var G = 0, F, J, K; F = k[G]; G++) switch (J = F.moved, K = F.index, F.status) {case "deleted":
                for (; t < K;) q(t++);J === n && (z = r[t], z.T && (z.T.m(), z.T = n), a.a.Ta(z.ra, e).length && (h.beforeRemove && (u.push(z), A.push(z), H++, z.ya === d ? z = null : B.push(z)), z && x.push.apply(x, z.ra)));t++;break;case "added":
                for (; w < K;) q(t++);J !== n ? q(J) : m(F.value);}for (; w < f.length;) q(t++);u._countWaitingForRemove = H;
          }a.a.g.set(e, c, u);p(h.beforeMove, D);a.a.B(x, h.beforeRemove ? a.oa : a.removeNode);G = 0;f = a.h.firstChild(e);for (var M; z = A[G]; G++) {
            z.ra || a.a.extend(z, b(e, g, z.ya, l, z.Nb));for (x = 0; t = z.ra[x]; f = t.nextSibling, M = t, x++) t !== f && a.h.Jc(e, t, M);!z.Dd && l && (l(z.ya, z.ra, z.Nb), z.Dd = !0);
          }p(h.beforeRemove, B);for (G = 0; G < B.length; ++G) B[G].ya = d;p(h.afterMove, D);p(h.afterAdd, E);
        };
      })();a.b("utils.setDomNodeChildrenFromArrayMapping", a.a.Wb);a.aa = function () {
        this.allowTemplateRewriting = !1;
      };a.aa.prototype = new a.ba();a.aa.prototype.constructor = a.aa;a.aa.prototype.renderTemplateSource = function (b, c, d, e) {
        if (c = (9 > a.a.U ? 0 : b.nodes) ? b.nodes() : null) return a.a.la(c.cloneNode(!0).childNodes);b = b.text();return a.a.sa(b, e);
      };a.aa.La = new a.aa();a.Yb(a.aa.La);a.b("nativeTemplateEngine", a.aa);(function () {
        a.Xa = function () {
          var a = this.Gd = function () {
            if (!w || !w.tmpl) return 0;try {
              if (0 <= w.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2;
            } catch (a) {}return 1;
          }();this.renderTemplateSource = function (b, e, f, g) {
            g = g || x;f = f || {};if (2 > a) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");var h = b.data("precompiled");h || (h = b.text() || "", h = w.template(null, "{{ko_with $item.koBindingContext}}" + h + "{{/ko_with}}"), b.data("precompiled", h));b = [e.$data];e = w.extend({ koBindingContext: e }, f.templateOptions);e = w.tmpl(h, b, e);e.appendTo(g.createElement("div"));w.fragments = {};return e;
          };this.createJavaScriptEvaluatorBlock = function (a) {
            return "{{ko_code ((function() { return " + a + " })()) }}";
          };
          this.addTemplate = function (a, b) {
            x.write("<script type='text/html' id='" + a + "'>" + b + "\x3c/script>");
          };0 < a && (w.tmpl.tag.ko_code = { open: "__.push($1 || '');" }, w.tmpl.tag.ko_with = { open: "with($1) {", close: "} " });
        };a.Xa.prototype = new a.ba();a.Xa.prototype.constructor = a.Xa;var b = new a.Xa();0 < b.Gd && a.Yb(b);a.b("jqueryTmplTemplateEngine", a.Xa);
      })();
    });
  })();
})();
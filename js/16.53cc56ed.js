(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    [16], {
        "15e0": function(t, a, e) {},
        "262b": function(t, a, e) {},
        "2ec4": function(t, a, e) {
            "use strict";
            e("15e0")
        },
        "393e": function(t, a, e) {},
        "6a66": function(t, a, e) {
            "use strict";
            e("262b")
        },
        "77a2": function(t, a, e) {},
        "92b5": function(t, a, e) {
            "use strict";
            e.r(a);
            var o = function() {
                    var t = this,
                        a = t.$createElement,
                        e = t._self._c || a;
                    return e("q-page", { staticClass: "hero-font" }, [e("home-header"), e("div", { staticClass: "row justify-center q-py-md" }, [e("div", { staticClass: "container-box" }, [e("div", { staticClass: "row justify-center" }, [e("div", { staticClass: "col-auto text-weight-bold q-mb-md fontrussel", class: t.$q.screen.gt.sm ? "text-h4" : "text-h5" }, [t._v("\n          " + t._s(t.$t("Current Offers and Promotions")) + "\n        ")])]), e("div", { staticClass: "row q-col-gutter-xl justify-center q-my-md" }, [t._l(t.GitbookPromtion, (function(a, o) { return [e("div", { key: o, staticClass: "col-auto" }, [e("q-btn", { staticClass: "button_effect button_effect1", attrs: { align: "left", dense: "", type: "a", unelevated: "", label: t.shortString(a.title) }, on: { click: function(e) { return t.handleScroll(a.id) } } })], 1)] }))], 2)])]), e("div", { staticClass: "row justify-center" }, [t.arrExpanded != [] ? e("div", { staticClass: "container-box fontGrotesk" }, [t._l(t.GitbookPromtion, (function(a, o) { return [e("div", { key: o }, [e("div", { staticClass: "row q-col-gutter-lg q-my-sm", attrs: { id: a.id } }, o % 2 == 0 ? [e("div", { staticClass: "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12" }, ["video" == a.type.split("/")[0] ? e("video", { attrs: { width: "100%", poster: "", autoplay: "", loop: "", muted: "" }, domProps: { muted: !0 } }, [e("source", { attrs: { type: a.type, src: a.media } })]) : e("q-img", { staticClass: "rounded-borders", attrs: { src: a.media } })], 1), e("div", { staticClass: "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12" }, [e("q-card", { staticClass: "grow-box", attrs: { flat: "" } }, [e("q-card-section", [e("div", { staticClass: "text-h4" }, [e("p", [t._v("\n                            " + t._s(a.title) + "\n                        ")])]), e("div", [e("p", [t._v("\n                            " + t._s(a.desc) + "\n                        ")])])]), e("q-card-actions", { directives: [{ name: "show", rawName: "v-show", value: !t.arrExpanded[o].data, expression: "!arrExpanded[index].data" }] }, [e("q-btn", { attrs: { flat: "", color: "white", label: t.$t("Read more") }, on: { click: function(a) { t.arrExpanded[o].data = !t.arrExpanded[o].data } } }), e("q-space"), e("q-btn", { attrs: { color: "grey", round: "", flat: "", dense: "", icon: t.expanded || t.arrExpanded[o].data ? "keyboard_arrow_up" : "keyboard_arrow_down" }, on: { click: function(a) { t.arrExpanded[o].data = !t.arrExpanded[o].data } } })], 1), e("q-slide-transition", [e("div", { directives: [{ name: "show", rawName: "v-show", value: t.arrExpanded[o].data, expression: "arrExpanded[index].data" }] }, [e("q-card-section", { staticClass: "text-subitle2", domProps: { innerHTML: t._s(a.content) } })], 1)]), e("q-card-actions", { directives: [{ name: "show", rawName: "v-show", value: t.arrExpanded[o].data, expression: "arrExpanded[index].data" }] }, [e("q-btn", { attrs: { flat: "", color: "white", label: t.$t("Close") }, on: { click: function(a) { t.arrExpanded[o].data = !t.arrExpanded[o].data } } }), e("q-space"), e("q-btn", { attrs: { color: "grey", round: "", flat: "", dense: "", icon: t.expanded || t.arrExpanded[o].data ? "keyboard_arrow_up" : "keyboard_arrow_down" }, on: { click: function(a) { t.arrExpanded[o].data = !t.arrExpanded[o].data } } })], 1)], 1)], 1)] : [e("div", { staticClass: "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12", class: t.$q.screen.lt.md ? "order-last" : "" }, [e("q-card", { staticClass: "grow-box", attrs: { flat: "" } }, [e("q-card-section", [e("div", { staticClass: "text-h4" }, [e("p", [t._v("\n                            " + t._s(a.title) + "\n                        ")])]), e("div", [e("p", [t._v("\n                            " + t._s(a.desc) + "\n                        ")])])]), e("q-card-actions", { directives: [{ name: "show", rawName: "v-show", value: !t.arrExpanded[o].data, expression: "!arrExpanded[index].data" }] }, [e("q-btn", { attrs: { flat: "", color: "white", label: t.$t("Read more") }, on: { click: function(a) { t.arrExpanded[o].data = !t.arrExpanded[o].data } } }), e("q-space"), e("q-btn", { attrs: { color: "grey", round: "", flat: "", dense: "", icon: t.expanded || t.arrExpanded[o].data ? "keyboard_arrow_up" : "keyboard_arrow_down" }, on: { click: function(a) { t.arrExpanded[o].data = !t.arrExpanded[o].data } } })], 1), e("q-slide-transition", [e("div", { directives: [{ name: "show", rawName: "v-show", value: t.arrExpanded[o].data, expression: "arrExpanded[index].data" }] }, [e("q-card-section", { staticClass: "text-subitle2", domProps: { innerHTML: t._s(a.content) } })], 1)]), e("q-card-actions", { directives: [{ name: "show", rawName: "v-show", value: t.arrExpanded[o].data, expression: "arrExpanded[index].data" }] }, [e("q-btn", { attrs: { flat: "", color: "white", label: t.$t("Close") }, on: { click: function(a) { t.arrExpanded[o].data = !t.arrExpanded[o].data } } }), e("q-space"), e("q-btn", { attrs: { color: "grey", round: "", flat: "", dense: "", icon: t.expanded || t.arrExpanded[o].data ? "keyboard_arrow_up" : "keyboard_arrow_down" }, on: { click: function(a) { t.arrExpanded[o].data = !t.arrExpanded[o].data } } })], 1)], 1)], 1), e("div", { staticClass: "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12", class: t.$q.screen.lt.md ? "order-first" : "" }, ["video" == a.type.split("/")[0] ? e("video", { attrs: { width: "100%", poster: "", autoplay: "", loop: "", muted: "" }, domProps: { muted: !0 } }, [e("source", { attrs: { type: "video/mp4", src: a.media } })]) : e("q-img", { staticClass: "rounded-borders", attrs: { src: a.media } })], 1)])])] }))], 2) : t._e()]), e("index-find-us"), e("index-part9")], 1)
                },
                n = [],
                r = (e("e9c4"), e("a6ab")),
                s = function() {
                    var t = this,
                        a = t.$createElement,
                        e = t._self._c || a;
                    return e("div", { staticClass: "col-12" }, [e("q-card", { staticClass: "grow-box", attrs: { flat: "" } }, [e("q-card-section", [e("div", { staticClass: "text-h4" }, [e("p", [t._v("\n                    " + t._s(t.$t("FEFE BANK Affiliate Program")) + "\n                ")])]), e("div", [e("p", [t._v("\n                    " + t._s(t.$t("promotion1_t1"))), e("br")]), e("p", [t._v("\n                    " + t._s(t.$t("promotion1_t2"))), e("br"), t._v("\n                    " + t._s(t.$t("promotion1_t3")) + "\n                ")])])]), e("q-card-actions", { directives: [{ name: "show", rawName: "v-show", value: !t.expanded, expression: "!expanded" }] }, [e("q-btn", { attrs: { flat: "", color: "white", label: t.$t("Read more") }, on: { click: function(a) { t.expanded = !t.expanded } } }), e("q-space"), e("q-btn", { attrs: { color: "grey", round: "", flat: "", dense: "", icon: t.expanded ? "keyboard_arrow_up" : "keyboard_arrow_down" }, on: { click: function(a) { t.expanded = !t.expanded } } })], 1), e("q-slide-transition", [e("div", { directives: [{ name: "show", rawName: "v-show", value: t.expanded, expression: "expanded" }] }, [e("q-card-section", { staticClass: "text-subitle2" }, [e("p", [e("span", { staticClass: "text-bold" }, [t._v(t._s(t.$t("promotion1_t4")))]), e("br"), t._v("\n                        " + t._s(t.$t("promotion1_t5"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion1_t6"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion1_t7"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion1_t8"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion1_t9"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion1_t10")) + "\n                    ")]), e("p", [e("span", { staticClass: "text-bold" }, [t._v(t._s(t.$t("promotion1_t11")))]), e("br"), t._v("\n                        " + t._s(t.$t("promotion1_t12"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion1_t13"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion1_t14"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion1_t15"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion1_t16")) + "\n                    ")]), e("p", [e("span", { staticClass: "text-bold" }, [t._v(t._s(t.$t("promotion1_t17")))]), e("br"), t._v("\n                        " + t._s(t.$t("promotion1_t18"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion1_t19"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion1_t20"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion1_t21")) + "\n                    ")]), e("p", [t._v("\n                        " + t._s(t.$t("promotion1_t22"))), e("br")]), e("p", [t._v("\n                        " + t._s(t.$t("promotion1_t23"))), e("br")]), e("p", [t._v("\n                        " + t._s(t.$t("promotion1_t24"))), e("a", { attrs: { href: t.$t("fefe-bank") } }, [t._v(t._s(t.$t("fefe-bank")))]), t._v(t._s(t.$t("promotion1_t25"))), e("br")])])], 1)]), e("q-card-actions", { directives: [{ name: "show", rawName: "v-show", value: t.expanded, expression: "expanded" }] }, [e("q-btn", { attrs: { flat: "", color: "white", label: t.$t("Close") }, on: { click: function(a) { t.expanded = !t.expanded } } }), e("q-space"), e("q-btn", { attrs: { color: "grey", round: "", flat: "", dense: "", icon: t.expanded ? "keyboard_arrow_up" : "keyboard_arrow_down" }, on: { click: function(a) { t.expanded = !t.expanded } } })], 1)], 1)], 1)
                },
                d = [],
                i = { data() { return { expanded: !1, flag: !0 } } },
                c = i,
                _ = (e("de2f"), e("2877")),
                p = e("f09f"),
                l = e("a370"),
                b = e("4b7e"),
                v = e("9c40"),
                m = e("2c91"),
                x = e("e9c1"),
                u = e("eebe"),
                w = e.n(u),
                f = Object(_["a"])(c, s, d, !1, null, "720a226b", null),
                $ = f.exports;
            w()(f, "components", { QCard: p["a"], QCardSection: l["a"], QCardActions: b["a"], QBtn: v["a"], QSpace: m["a"], QSlideTransition: x["a"] });
            var h = function() {
                    var t = this,
                        a = t.$createElement,
                        e = t._self._c || a;
                    return e("div", { staticClass: "col-12" }, [e("q-card", { staticClass: "grow-box", attrs: { flat: "" } }, [e("q-card-section", [e("div", { staticClass: "text-h4" }, [e("p", [t._v("\n                    " + t._s(t.$t("FEFE BANK Affiliate Promoter Contest")) + "\n                ")])]), e("div", [e("p", [t._v("\n                    " + t._s(t.$t("promotion2_t1"))), e("br")]), e("p", [e("span", { staticClass: "text-bold" }, [t._v(t._s(t.$t("promotion2_t2")))]), e("br"), t._v("\n                    " + t._s(t.$t("promotion2_t3"))), e("a", { attrs: { href: t.$t("fefe-bank") } }, [t._v(t._s(t.$t("fefe-bank")))]), t._v(t._s(t.$t("promotion2_t4"))), e("br"), t._v("\n                    " + t._s(t.$t("promotion2_t5")) + "\n                ")])])]), e("q-card-actions", { directives: [{ name: "show", rawName: "v-show", value: !t.expanded, expression: "!expanded" }] }, [e("q-btn", { attrs: { flat: "", color: "white", label: t.$t("Read more") }, on: { click: function(a) { t.expanded = !t.expanded } } }), e("q-space"), e("q-btn", { attrs: { color: "grey", round: "", flat: "", dense: "", icon: t.expanded ? "keyboard_arrow_up" : "keyboard_arrow_down" }, on: { click: function(a) { t.expanded = !t.expanded } } })], 1), e("q-slide-transition", [e("div", { directives: [{ name: "show", rawName: "v-show", value: t.expanded, expression: "expanded" }] }, [e("q-card-section", { staticClass: "text-subitle2" }, [e("p", [e("span", { staticClass: "text-bold" }, [t._v(t._s(t.$t("promotion2_t6")))]), e("br"), t._v("\n                        " + t._s(t.$t("promotion2_t7"))), e("a", { attrs: { href: t.$t("fefe-bank") } }, [t._v(t._s(t.$t("fefe-bank")))]), e("br"), t._v("\n                        " + t._s(t.$t("promotion2_t8"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion2_t9"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion2_t10"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion2_t11"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion2_t12"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion2_t13")) + "\n                    ")]), e("p", [e("span", { staticClass: "text-bold" }, [t._v(t._s(t.$t("promotion2_t14")))]), e("br"), t._v("\n                        " + t._s(t.$t("promotion2_t15"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion2_t16"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion2_t17"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion2_t18"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion2_t19"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion2_t20")) + "\n                    ")])])], 1)]), e("q-card-actions", { directives: [{ name: "show", rawName: "v-show", value: t.expanded, expression: "expanded" }] }, [e("q-btn", { attrs: { flat: "", color: "white", label: t.$t("Close") }, on: { click: function(a) { t.expanded = !t.expanded } } }), e("q-space"), e("q-btn", { attrs: { color: "grey", round: "", flat: "", dense: "", icon: t.expanded ? "keyboard_arrow_up" : "keyboard_arrow_down" }, on: { click: function(a) { t.expanded = !t.expanded } } })], 1)], 1)], 1)
                },
                q = [],
                k = { data() { return { expanded: !1, flag: !0 } } },
                C = k,
                g = (e("6a66"), Object(_["a"])(C, h, q, !1, null, "51c27e19", null)),
                y = g.exports;
            w()(g, "components", { QCard: p["a"], QCardSection: l["a"], QCardActions: b["a"], QBtn: v["a"], QSpace: m["a"], QSlideTransition: x["a"] });
            var S = function() {
                    var t = this,
                        a = t.$createElement,
                        e = t._self._c || a;
                    return e("div", { staticClass: "col-12" }, [e("q-card", { staticClass: "grow-box", attrs: { flat: "" } }, [e("q-card-section", [e("div", { staticClass: "text-h4" }, [e("p", [t._v("\n                    " + t._s(t.$t("FEFE BANK Show your Rewards Contest")) + "\n                ")])]), e("div", [e("p", [t._v("\n                    " + t._s(t.$t("promotion3_t1"))), e("br")]), e("p", [e("span", { staticClass: "text-bold" }, [t._v(t._s(t.$t("promotion3_t18")))]), e("br"), t._v("\n                    " + t._s(t.$t("promotion3_t2"))), e("a", { attrs: { href: t.$t("fefe-bank") } }, [t._v(t._s(t.$t("fefe-bank")))]), e("br"), t._v("\n                    " + t._s(t.$t("promotion3_t3"))), e("a", { attrs: { href: t.$t("promotion3_t4") } }, [t._v(t._s(t.shortUrl(t.$t("promotion3_t4"))))]), e("br"), t._v("\n                    " + t._s(t.$t("promotion3_t5"))), e("br")])])]), e("q-card-actions", { directives: [{ name: "show", rawName: "v-show", value: !t.expanded, expression: "!expanded" }] }, [e("q-btn", { attrs: { flat: "", color: "white", label: t.$t("Read more") }, on: { click: function(a) { t.expanded = !t.expanded } } }), e("q-space"), e("q-btn", { attrs: { color: "grey", round: "", flat: "", dense: "", icon: t.expanded ? "keyboard_arrow_up" : "keyboard_arrow_down" }, on: { click: function(a) { t.expanded = !t.expanded } } })], 1), e("q-slide-transition", [e("div", { directives: [{ name: "show", rawName: "v-show", value: t.expanded, expression: "expanded" }] }, [e("q-card-section", { staticClass: "text-subitle2" }, [e("p", [t._v("\n                        " + t._s(t.$t("promotion3_t6"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion3_t7"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion3_t8"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion3_t9"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion3_t10"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion3_t11")) + "\n                    ")]), e("q-img", { staticClass: "rounded-borders", attrs: { src: t.$t("promotion3_t12") } }), e("p", [t._v("\n                        " + t._s(t.$t("promotion3_t13"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion2_t14"))), e("br"), e("a", { attrs: { href: t.$t("promotion3_t15") } }, [t._v(t._s(t.shortUrl(t.$t("promotion3_t15"))))]), e("br"), t._v("\n                        " + t._s(t.$t("promotion2_t16"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion2_t17")) + "\n                    ")])], 1)], 1)]), e("q-card-actions", { directives: [{ name: "show", rawName: "v-show", value: t.expanded, expression: "expanded" }] }, [e("q-btn", { attrs: { flat: "", color: "white", label: t.$t("Close") }, on: { click: function(a) { t.expanded = !t.expanded } } }), e("q-space"), e("q-btn", { attrs: { color: "grey", round: "", flat: "", dense: "", icon: t.expanded ? "keyboard_arrow_up" : "keyboard_arrow_down" }, on: { click: function(a) { t.expanded = !t.expanded } } })], 1)], 1)], 1)
                },
                E = [],
                N = { data() { return { expanded: !1, flag: !0 } } },
                Q = N,
                T = (e("2ec4"), e("068f")),
                O = Object(_["a"])(Q, S, E, !1, null, "96e6dbc2", null),
                P = O.exports;
            w()(O, "components", { QCard: p["a"], QCardSection: l["a"], QCardActions: b["a"], QBtn: v["a"], QSpace: m["a"], QSlideTransition: x["a"], QImg: T["a"] });
            var A = function() {
                    var t = this,
                        a = t.$createElement,
                        e = t._self._c || a;
                    return e("div", { staticClass: "col-12" }, [e("q-card", { staticClass: "grow-box", attrs: { flat: "" } }, [e("q-card-section", [e("div", { staticClass: "text-h4" }, [e("p", [t._v("\n                    " + t._s(t.$t("promotion4_t1")) + "\n                ")])]), e("div", [e("p", [t._v("\n                    " + t._s(t.$t("promotion4_t2"))), e("br")]), e("p", [t._v("\n                    " + t._s(t.$t("promotion4_t3"))), e("br")])])]), e("q-card-actions", { directives: [{ name: "show", rawName: "v-show", value: !t.expanded, expression: "!expanded" }] }, [e("q-btn", { attrs: { flat: "", color: "white", label: t.$t("Read more") }, on: { click: function(a) { t.expanded = !t.expanded } } }), e("q-space"), e("q-btn", { attrs: { color: "grey", round: "", flat: "", dense: "", icon: t.expanded ? "keyboard_arrow_up" : "keyboard_arrow_down" }, on: { click: function(a) { t.expanded = !t.expanded } } })], 1), e("q-slide-transition", [e("div", { directives: [{ name: "show", rawName: "v-show", value: t.expanded, expression: "expanded" }] }, [e("q-card-section", { staticClass: "text-subitle2" }, [e("p", [e("span", { staticClass: "text-bold" }, [t._v(t._s(t.$t("promotion4_t4")))]), e("br"), t._v("\n                        " + t._s(t.$t("promotion4_t5"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion4_t6"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion4_t7")) + "\n                    ")]), e("p", [e("span", { staticClass: "text-bold" }, [t._v(t._s(t.$t("promotion4_t8")))]), e("br"), t._v("\n                        " + t._s(t.$t("promotion4_t9")) + "\n                    ")]), e("p", [e("span", { staticClass: "text-bold" }, [t._v(t._s(t.$t("promotion4_t10")))]), e("br"), t._v("\n                        " + t._s(t.$t("promotion4_t11"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion4_t12"))), e("br"), t._v("\n                        👉"), e("a", { attrs: { href: t.$t("fefe-bank") } }, [t._v(t._s(t.$t("fefe-bank")))])])])], 1)]), e("q-card-actions", { directives: [{ name: "show", rawName: "v-show", value: t.expanded, expression: "expanded" }] }, [e("q-btn", { attrs: { flat: "", color: "white", label: t.$t("Close") }, on: { click: function(a) { t.expanded = !t.expanded } } }), e("q-space"), e("q-btn", { attrs: { color: "grey", round: "", flat: "", dense: "", icon: t.expanded ? "keyboard_arrow_up" : "keyboard_arrow_down" }, on: { click: function(a) { t.expanded = !t.expanded } } })], 1)], 1)], 1)
                },
                Y = [],
                R = { data() { return { expanded: !1, flag: !0 } } },
                B = R,
                j = (e("a047"), Object(_["a"])(B, A, Y, !1, null, "a5b90fb4", null)),
                I = j.exports;
            w()(j, "components", { QCard: p["a"], QCardSection: l["a"], QCardActions: b["a"], QBtn: v["a"], QSpace: m["a"], QSlideTransition: x["a"] });
            var L = function() {
                    var t = this,
                        a = t.$createElement,
                        e = t._self._c || a;
                    return e("div", { staticClass: "col-12" }, [e("q-card", { staticClass: "grow-box", attrs: { flat: "" } }, [e("q-card-section", [e("div", { staticClass: "text-h4" }, [e("p", [t._v("\n                    " + t._s(t.$t("With FEFE, when Lambo?")) + "\n                ")])]), e("div", [e("p", [t._v("\n                    " + t._s(t.$t("promotion5_t1"))), e("br")]), e("p", [t._v("\n                    " + t._s(t.$t("promotion5_t2"))), e("b", [t._v(t._s(t.$t("promotion5_t3")))]), e("br")])])]), e("q-card-actions", { directives: [{ name: "show", rawName: "v-show", value: !t.expanded, expression: "!expanded" }] }, [e("q-btn", { attrs: { flat: "", color: "white", label: t.$t("Read more") }, on: { click: function(a) { t.expanded = !t.expanded } } }), e("q-space"), e("q-btn", { attrs: { color: "grey", round: "", flat: "", dense: "", icon: t.expanded ? "keyboard_arrow_up" : "keyboard_arrow_down" }, on: { click: function(a) { t.expanded = !t.expanded } } })], 1), e("q-slide-transition", [e("div", { directives: [{ name: "show", rawName: "v-show", value: t.expanded, expression: "expanded" }] }, [e("q-card-section", { staticClass: "text-subitle2" }, [e("p", [e("span", { staticClass: "text-bold" }, [t._v(t._s(t.$t("promotion5_t4")))]), e("br"), t._v("\n                        " + t._s(t.$t("promotion5_t5")) + "\n                    ")]), e("p", [e("span", { staticClass: "text-bold" }, [t._v(t._s(t.$t("promotion5_t6")))]), e("br"), t._v("\n                        " + t._s(t.$t("promotion5_t7"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion5_t8"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion5_t9")) + "\n                    ")]), e("p", [e("span", { staticClass: "text-bold" }, [t._v(t._s(t.$t("promotion5_t10")))]), e("br"), t._v("\n                        " + t._s(t.$t("promotion5_t11"))), e("a", { attrs: { href: t.$t("promotion5_t12") } }, [t._v(t._s(t.shortUrl(t.$t("promotion5_t12"))))]), e("br"), t._v("\n                        " + t._s(t.$t("promotion5_t13"))), e("a", { attrs: { href: t.$t("promotion5_t14") } }, [t._v(t._s(t.$t("promotion5_t14")))]), e("br"), t._v("\n                        " + t._s(t.$t("promotion5_t15"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion5_t16"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion5_t17"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion5_t18"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion5_t19"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion5_t20"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion5_t21"))), e("a", { attrs: { href: t.$t("promotion5_t22") } }, [t._v(t._s(t.$t("promotion5_t22")))]), e("br"), t._v("\n                        " + t._s(t.$t("promotion5_t23"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion5_t24"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion5_t25"))), e("br")]), e("q-img", { staticClass: "rounded-borders", attrs: { src: t.$t("promotion5_t26") } })], 1)], 1)]), e("q-card-actions", { directives: [{ name: "show", rawName: "v-show", value: t.expanded, expression: "expanded" }] }, [e("q-btn", { attrs: { flat: "", color: "white", label: t.$t("Close") }, on: { click: function(a) { t.expanded = !t.expanded } } }), e("q-space"), e("q-btn", { attrs: { color: "grey", round: "", flat: "", dense: "", icon: t.expanded ? "keyboard_arrow_up" : "keyboard_arrow_down" }, on: { click: function(a) { t.expanded = !t.expanded } } })], 1)], 1)], 1)
                },
                H = [],
                J = { data() { return { expanded: !1, flag: !0 } } },
                U = J,
                G = (e("a013"), Object(_["a"])(U, L, H, !1, null, "d2af32d6", null)),
                F = G.exports;
            w()(G, "components", { QCard: p["a"], QCardSection: l["a"], QCardActions: b["a"], QBtn: v["a"], QSpace: m["a"], QSlideTransition: x["a"], QImg: T["a"] });
            var D = e("6064"),
                M = e("f0ed"),
                W = e("0831"),
                Z = function() {
                    var t = this,
                        a = t.$createElement,
                        e = t._self._c || a;
                    return e("div", { staticClass: "col-12" }, [e("q-card", { staticClass: "grow-box", attrs: { flat: "" } }, [e("q-card-section", [e("div", { staticClass: "text-h4" }, [e("p", [t._v("\n                    " + t._s(t.$t("NewsYorkTimesSquare_p1")) + "\n                ")])]), e("div", [e("p", [t._v("\n                    " + t._s(t.$t("NewsYorkTimesSquare_p2"))), e("br")]), e("p", [e("span", { staticClass: "text-bold" }, [t._v(t._s(t.$t("NewsYorkTimesSquare_p3")))]), e("br")])])]), e("q-card-actions", { directives: [{ name: "show", rawName: "v-show", value: !t.expanded, expression: "!expanded" }] }, [e("q-btn", { attrs: { flat: "", color: "white", label: t.$t("Read more") }, on: { click: function(a) { t.expanded = !t.expanded } } }), e("q-space"), e("q-btn", { attrs: { color: "grey", round: "", flat: "", dense: "", icon: t.expanded ? "keyboard_arrow_up" : "keyboard_arrow_down" }, on: { click: function(a) { t.expanded = !t.expanded } } })], 1), e("q-slide-transition", [e("div", { directives: [{ name: "show", rawName: "v-show", value: t.expanded, expression: "expanded" }] }, [e("q-card-section", { staticClass: "text-subitle2" }, [e("p", [t._v("\n                        " + t._s(t.$t("FinancialFreedomWish_p1")) + "\n                    ")]), e("p", [t._v("\n                        " + t._s(t.$t("NewsYorkTimesSquare_p4"))), e("br"), t._v("\n                        " + t._s(t.$t("NewsYorkTimesSquare_p5")) + "\n                    ")]), e("p", [e("span", { staticClass: "text-bold" }, [t._v(t._s(t.$t("NewsYorkTimesSquare_p6")))]), e("br"), t._v("\n                        " + t._s(t.$t("NewsYorkTimesSquare_p7"))), e("br"), t._v("\n                        " + t._s(t.$t("NewsYorkTimesSquare_p8"))), e("a", { attrs: { target: "_blank", href: t.$t("promotion5_t14") } }, [t._v(t._s(t.$t("promotion5_t14")))]), e("br"), t._v("\n                        " + t._s(t.$t("NewsYorkTimesSquare_p9"))), e("a", { attrs: { target: "_blank", href: "https://twitter.com/" } }, [t._v(t._s(t.shortUrl("https://twitter.com/")))]), e("br"), t._v("\n                        " + t._s(t.$t("NewsYorkTimesSquare_p10"))), e("br"), t._v("\n                        " + t._s(t.$t("NewsYorkTimesSquare_p11"))), e("br"), t._v("\n                        " + t._s(t.$t("NewsYorkTimesSquare_p12"))), e("br"), t._v("\n                        " + t._s(t.$t("NewsYorkTimesSquare_p13"))), e("br"), t._v("\n                        " + t._s(t.$t("NewsYorkTimesSquare_p11"))), e("br"), e("a", { attrs: { target: "_blank", href: "https://docs.google.com/forms/d/1b843ZQl2OATHiHTNvoesMJV75PS5u7eJcAOk1ygRZOU/edit" } }, [t._v(t._s(t.shortUrl("https://docs.google.com/forms/d/1b843ZQl2OATHiHTNvoesMJV75PS5u7eJcAOk1ygRZOU/edit")))]), e("br")]), e("p", [t._v("\n                        " + t._s(t.$t("NewsYorkTimesSquare_p15"))), e("br")]), e("p", [t._v("\n                        " + t._s(t.$t("NewsYorkTimesSquare_p16"))), e("br")]), e("p", [t._v("\n                        " + t._s(t.$t("NewsYorkTimesSquare_p17"))), e("br")])])], 1)]), e("q-card-actions", { directives: [{ name: "show", rawName: "v-show", value: t.expanded, expression: "expanded" }] }, [e("q-btn", { attrs: { flat: "", color: "white", label: t.$t("Close") }, on: { click: function(a) { t.expanded = !t.expanded } } }), e("q-space"), e("q-btn", { attrs: { color: "grey", round: "", flat: "", dense: "", icon: t.expanded ? "keyboard_arrow_up" : "keyboard_arrow_down" }, on: { click: function(a) { t.expanded = !t.expanded } } })], 1)], 1)], 1)
                },
                K = [],
                V = { data() { return { expanded: !1, flag: !0 } } },
                z = V,
                X = (e("bdba"), Object(_["a"])(z, Z, K, !1, null, "ba599756", null)),
                tt = X.exports;
            w()(X, "components", { QCard: p["a"], QCardSection: l["a"], QCardActions: b["a"], QBtn: v["a"], QSpace: m["a"], QSlideTransition: x["a"] });
            var at = e("2f62");
            const { getScrollTarget: et, setScrollPosition: ot } = W["a"];
            var nt = {
                    components: { HomeHeader: r["a"], WishContest: tt, AffiliateProgram: $, AffiliatePromoter: y, RewardsContest: P, Airdropohk: I, WhenLambo: F, IndexFindUs: D["a"], IndexPart9: M["a"] },
                    data() { return { expanded: !1, flag: !0, arrExpanded: [] } },
                    computed: {...Object(at["b"])({ getGitbookPromotion: "farm/getGitbookPromotion" }), GitbookPromtion() { let t = JSON.parse(JSON.stringify(this.getGitbookPromotion)); return t.forEach((t => { this.arrExpanded.push({ data: !1 }) })), t } },
                    methods: {
                        shortString(t) {
                            let a = t.split(" "),
                                e = "";
                            for (let o = 0; o < 5; o++) e += a[o] + " ";
                            return e += "...", e
                        },
                        handleScroll(t) {
                            const a = document.getElementById(t),
                                e = et(a),
                                o = a.offsetTop,
                                n = 1e3;
                            ot(e, o, n)
                        },
                        fetchData() { this.$store.dispatch("farm/fetchgitbookPromotion") }
                    },
                    mounted() { this.fetchData(), this.interval = setInterval(this.fetchData, 3e4) },
                    beforeDestroy() { this.interval && clearInterval(this.interval) }
                },
                rt = nt,
                st = (e("d10b"), e("9989")),
                dt = Object(_["a"])(rt, o, n, !1, null, "7a7c86d6", null);
            a["default"] = dt.exports;
            w()(dt, "components", { QPage: st["a"], QBtn: v["a"], QImg: T["a"], QCard: p["a"], QCardSection: l["a"], QCardActions: b["a"], QSpace: m["a"], QSlideTransition: x["a"] })
        },
        a013: function(t, a, e) {
            "use strict";
            e("77a2")
        },
        a047: function(t, a, e) {
            "use strict";
            e("a5a5")
        },
        a5a5: function(t, a, e) {},
        bdba: function(t, a, e) {
            "use strict";
            e("cea3")
        },
        cea3: function(t, a, e) {},
        d10b: function(t, a, e) {
            "use strict";
            e("ec79")
        },
        de2f: function(t, a, e) {
            "use strict";
            e("393e")
        },
        ec79: function(t, a, e) {}
    }
]);
[16], {
    "15e0": function(t, a, e) {},
    "262b": function(t, a, e) {},
    "2ec4": function(t, a, e) {
        "use strict";
        e("15e0")
    },
    "393e": function(t, a, e) {},
    "6a66": function(t, a, e) {
        "use strict";
        e("262b")
    },
    "77a2": function(t, a, e) {},
    "92b5": function(t, a, e) {
        "use strict";
        e.r(a);
        var o = function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("q-page", { staticClass: "hero-font" }, [e("home-header"), e("div", { staticClass: "row justify-center q-py-md" }, [e("div", { staticClass: "container-box" }, [e("div", { staticClass: "row justify-center" }, [e("div", { staticClass: "col-auto text-weight-bold q-mb-md fontrussel", class: t.$q.screen.gt.sm ? "text-h4" : "text-h5" }, [t._v("\n          " + t._s(t.$t("Current Offers and Promotions")) + "\n        ")])]), e("div", { staticClass: "row q-col-gutter-xl justify-center q-my-md" }, [t._l(t.GitbookPromtion, (function(a, o) { return [e("div", { key: o, staticClass: "col-auto" }, [e("q-btn", { staticClass: "button_effect button_effect1", attrs: { align: "left", dense: "", type: "a", unelevated: "", label: t.shortString(a.title) }, on: { click: function(e) { return t.handleScroll(a.id) } } })], 1)] }))], 2)])]), e("div", { staticClass: "row justify-center" }, [t.arrExpanded != [] ? e("div", { staticClass: "container-box fontGrotesk" }, [t._l(t.GitbookPromtion, (function(a, o) { return [e("div", { key: o }, [e("div", { staticClass: "row q-col-gutter-lg q-my-sm", attrs: { id: a.id } }, o % 2 == 0 ? [e("div", { staticClass: "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12" }, ["video" == a.type.split("/")[0] ? e("video", { attrs: { width: "100%", poster: "", autoplay: "", loop: "", muted: "" }, domProps: { muted: !0 } }, [e("source", { attrs: { type: a.type, src: a.media } })]) : e("q-img", { staticClass: "rounded-borders", attrs: { src: a.media } })], 1), e("div", { staticClass: "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12" }, [e("q-card", { staticClass: "grow-box", attrs: { flat: "" } }, [e("q-card-section", [e("div", { staticClass: "text-h4" }, [e("p", [t._v("\n                            " + t._s(a.title) + "\n                        ")])]), e("div", [e("p", [t._v("\n                            " + t._s(a.desc) + "\n                        ")])])]), e("q-card-actions", { directives: [{ name: "show", rawName: "v-show", value: !t.arrExpanded[o].data, expression: "!arrExpanded[index].data" }] }, [e("q-btn", { attrs: { flat: "", color: "white", label: t.$t("Read more") }, on: { click: function(a) { t.arrExpanded[o].data = !t.arrExpanded[o].data } } }), e("q-space"), e("q-btn", { attrs: { color: "grey", round: "", flat: "", dense: "", icon: t.expanded || t.arrExpanded[o].data ? "keyboard_arrow_up" : "keyboard_arrow_down" }, on: { click: function(a) { t.arrExpanded[o].data = !t.arrExpanded[o].data } } })], 1), e("q-slide-transition", [e("div", { directives: [{ name: "show", rawName: "v-show", value: t.arrExpanded[o].data, expression: "arrExpanded[index].data" }] }, [e("q-card-section", { staticClass: "text-subitle2", domProps: { innerHTML: t._s(a.content) } })], 1)]), e("q-card-actions", { directives: [{ name: "show", rawName: "v-show", value: t.arrExpanded[o].data, expression: "arrExpanded[index].data" }] }, [e("q-btn", { attrs: { flat: "", color: "white", label: t.$t("Close") }, on: { click: function(a) { t.arrExpanded[o].data = !t.arrExpanded[o].data } } }), e("q-space"), e("q-btn", { attrs: { color: "grey", round: "", flat: "", dense: "", icon: t.expanded || t.arrExpanded[o].data ? "keyboard_arrow_up" : "keyboard_arrow_down" }, on: { click: function(a) { t.arrExpanded[o].data = !t.arrExpanded[o].data } } })], 1)], 1)], 1)] : [e("div", { staticClass: "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12", class: t.$q.screen.lt.md ? "order-last" : "" }, [e("q-card", { staticClass: "grow-box", attrs: { flat: "" } }, [e("q-card-section", [e("div", { staticClass: "text-h4" }, [e("p", [t._v("\n                            " + t._s(a.title) + "\n                        ")])]), e("div", [e("p", [t._v("\n                            " + t._s(a.desc) + "\n                        ")])])]), e("q-card-actions", { directives: [{ name: "show", rawName: "v-show", value: !t.arrExpanded[o].data, expression: "!arrExpanded[index].data" }] }, [e("q-btn", { attrs: { flat: "", color: "white", label: t.$t("Read more") }, on: { click: function(a) { t.arrExpanded[o].data = !t.arrExpanded[o].data } } }), e("q-space"), e("q-btn", { attrs: { color: "grey", round: "", flat: "", dense: "", icon: t.expanded || t.arrExpanded[o].data ? "keyboard_arrow_up" : "keyboard_arrow_down" }, on: { click: function(a) { t.arrExpanded[o].data = !t.arrExpanded[o].data } } })], 1), e("q-slide-transition", [e("div", { directives: [{ name: "show", rawName: "v-show", value: t.arrExpanded[o].data, expression: "arrExpanded[index].data" }] }, [e("q-card-section", { staticClass: "text-subitle2", domProps: { innerHTML: t._s(a.content) } })], 1)]), e("q-card-actions", { directives: [{ name: "show", rawName: "v-show", value: t.arrExpanded[o].data, expression: "arrExpanded[index].data" }] }, [e("q-btn", { attrs: { flat: "", color: "white", label: t.$t("Close") }, on: { click: function(a) { t.arrExpanded[o].data = !t.arrExpanded[o].data } } }), e("q-space"), e("q-btn", { attrs: { color: "grey", round: "", flat: "", dense: "", icon: t.expanded || t.arrExpanded[o].data ? "keyboard_arrow_up" : "keyboard_arrow_down" }, on: { click: function(a) { t.arrExpanded[o].data = !t.arrExpanded[o].data } } })], 1)], 1)], 1), e("div", { staticClass: "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12", class: t.$q.screen.lt.md ? "order-first" : "" }, ["video" == a.type.split("/")[0] ? e("video", { attrs: { width: "100%", poster: "", autoplay: "", loop: "", muted: "" }, domProps: { muted: !0 } }, [e("source", { attrs: { type: "video/mp4", src: a.media } })]) : e("q-img", { staticClass: "rounded-borders", attrs: { src: a.media } })], 1)])])] }))], 2) : t._e()]), e("index-find-us"), e("index-part9")], 1)
            },
            n = [],
            r = (e("e9c4"), e("a6ab")),
            s = function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", { staticClass: "col-12" }, [e("q-card", { staticClass: "grow-box", attrs: { flat: "" } }, [e("q-card-section", [e("div", { staticClass: "text-h4" }, [e("p", [t._v("\n                    " + t._s(t.$t("FEFE BANK Affiliate Program")) + "\n                ")])]), e("div", [e("p", [t._v("\n                    " + t._s(t.$t("promotion1_t1"))), e("br")]), e("p", [t._v("\n                    " + t._s(t.$t("promotion1_t2"))), e("br"), t._v("\n                    " + t._s(t.$t("promotion1_t3")) + "\n                ")])])]), e("q-card-actions", { directives: [{ name: "show", rawName: "v-show", value: !t.expanded, expression: "!expanded" }] }, [e("q-btn", { attrs: { flat: "", color: "white", label: t.$t("Read more") }, on: { click: function(a) { t.expanded = !t.expanded } } }), e("q-space"), e("q-btn", { attrs: { color: "grey", round: "", flat: "", dense: "", icon: t.expanded ? "keyboard_arrow_up" : "keyboard_arrow_down" }, on: { click: function(a) { t.expanded = !t.expanded } } })], 1), e("q-slide-transition", [e("div", { directives: [{ name: "show", rawName: "v-show", value: t.expanded, expression: "expanded" }] }, [e("q-card-section", { staticClass: "text-subitle2" }, [e("p", [e("span", { staticClass: "text-bold" }, [t._v(t._s(t.$t("promotion1_t4")))]), e("br"), t._v("\n                        " + t._s(t.$t("promotion1_t5"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion1_t6"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion1_t7"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion1_t8"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion1_t9"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion1_t10")) + "\n                    ")]), e("p", [e("span", { staticClass: "text-bold" }, [t._v(t._s(t.$t("promotion1_t11")))]), e("br"), t._v("\n                        " + t._s(t.$t("promotion1_t12"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion1_t13"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion1_t14"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion1_t15"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion1_t16")) + "\n                    ")]), e("p", [e("span", { staticClass: "text-bold" }, [t._v(t._s(t.$t("promotion1_t17")))]), e("br"), t._v("\n                        " + t._s(t.$t("promotion1_t18"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion1_t19"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion1_t20"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion1_t21")) + "\n                    ")]), e("p", [t._v("\n                        " + t._s(t.$t("promotion1_t22"))), e("br")]), e("p", [t._v("\n                        " + t._s(t.$t("promotion1_t23"))), e("br")]), e("p", [t._v("\n                        " + t._s(t.$t("promotion1_t24"))), e("a", { attrs: { href: t.$t("fefe-bank") } }, [t._v(t._s(t.$t("fefe-bank")))]), t._v(t._s(t.$t("promotion1_t25"))), e("br")])])], 1)]), e("q-card-actions", { directives: [{ name: "show", rawName: "v-show", value: t.expanded, expression: "expanded" }] }, [e("q-btn", { attrs: { flat: "", color: "white", label: t.$t("Close") }, on: { click: function(a) { t.expanded = !t.expanded } } }), e("q-space"), e("q-btn", { attrs: { color: "grey", round: "", flat: "", dense: "", icon: t.expanded ? "keyboard_arrow_up" : "keyboard_arrow_down" }, on: { click: function(a) { t.expanded = !t.expanded } } })], 1)], 1)], 1)
            },
            d = [],
            i = { data() { return { expanded: !1, flag: !0 } } },
            c = i,
            _ = (e("de2f"), e("2877")),
            p = e("f09f"),
            l = e("a370"),
            b = e("4b7e"),
            v = e("9c40"),
            m = e("2c91"),
            x = e("e9c1"),
            u = e("eebe"),
            w = e.n(u),
            f = Object(_["a"])(c, s, d, !1, null, "720a226b", null),
            $ = f.exports;
        w()(f, "components", { QCard: p["a"], QCardSection: l["a"], QCardActions: b["a"], QBtn: v["a"], QSpace: m["a"], QSlideTransition: x["a"] });
        var h = function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", { staticClass: "col-12" }, [e("q-card", { staticClass: "grow-box", attrs: { flat: "" } }, [e("q-card-section", [e("div", { staticClass: "text-h4" }, [e("p", [t._v("\n                    " + t._s(t.$t("FEFE BANK Affiliate Promoter Contest")) + "\n                ")])]), e("div", [e("p", [t._v("\n                    " + t._s(t.$t("promotion2_t1"))), e("br")]), e("p", [e("span", { staticClass: "text-bold" }, [t._v(t._s(t.$t("promotion2_t2")))]), e("br"), t._v("\n                    " + t._s(t.$t("promotion2_t3"))), e("a", { attrs: { href: t.$t("fefe-bank") } }, [t._v(t._s(t.$t("fefe-bank")))]), t._v(t._s(t.$t("promotion2_t4"))), e("br"), t._v("\n                    " + t._s(t.$t("promotion2_t5")) + "\n                ")])])]), e("q-card-actions", { directives: [{ name: "show", rawName: "v-show", value: !t.expanded, expression: "!expanded" }] }, [e("q-btn", { attrs: { flat: "", color: "white", label: t.$t("Read more") }, on: { click: function(a) { t.expanded = !t.expanded } } }), e("q-space"), e("q-btn", { attrs: { color: "grey", round: "", flat: "", dense: "", icon: t.expanded ? "keyboard_arrow_up" : "keyboard_arrow_down" }, on: { click: function(a) { t.expanded = !t.expanded } } })], 1), e("q-slide-transition", [e("div", { directives: [{ name: "show", rawName: "v-show", value: t.expanded, expression: "expanded" }] }, [e("q-card-section", { staticClass: "text-subitle2" }, [e("p", [e("span", { staticClass: "text-bold" }, [t._v(t._s(t.$t("promotion2_t6")))]), e("br"), t._v("\n                        " + t._s(t.$t("promotion2_t7"))), e("a", { attrs: { href: t.$t("fefe-bank") } }, [t._v(t._s(t.$t("fefe-bank")))]), e("br"), t._v("\n                        " + t._s(t.$t("promotion2_t8"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion2_t9"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion2_t10"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion2_t11"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion2_t12"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion2_t13")) + "\n                    ")]), e("p", [e("span", { staticClass: "text-bold" }, [t._v(t._s(t.$t("promotion2_t14")))]), e("br"), t._v("\n                        " + t._s(t.$t("promotion2_t15"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion2_t16"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion2_t17"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion2_t18"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion2_t19"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion2_t20")) + "\n                    ")])])], 1)]), e("q-card-actions", { directives: [{ name: "show", rawName: "v-show", value: t.expanded, expression: "expanded" }] }, [e("q-btn", { attrs: { flat: "", color: "white", label: t.$t("Close") }, on: { click: function(a) { t.expanded = !t.expanded } } }), e("q-space"), e("q-btn", { attrs: { color: "grey", round: "", flat: "", dense: "", icon: t.expanded ? "keyboard_arrow_up" : "keyboard_arrow_down" }, on: { click: function(a) { t.expanded = !t.expanded } } })], 1)], 1)], 1)
            },
            q = [],
            k = { data() { return { expanded: !1, flag: !0 } } },
            C = k,
            g = (e("6a66"), Object(_["a"])(C, h, q, !1, null, "51c27e19", null)),
            y = g.exports;
        w()(g, "components", { QCard: p["a"], QCardSection: l["a"], QCardActions: b["a"], QBtn: v["a"], QSpace: m["a"], QSlideTransition: x["a"] });
        var S = function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", { staticClass: "col-12" }, [e("q-card", { staticClass: "grow-box", attrs: { flat: "" } }, [e("q-card-section", [e("div", { staticClass: "text-h4" }, [e("p", [t._v("\n                    " + t._s(t.$t("FEFE BANK Show your Rewards Contest")) + "\n                ")])]), e("div", [e("p", [t._v("\n                    " + t._s(t.$t("promotion3_t1"))), e("br")]), e("p", [e("span", { staticClass: "text-bold" }, [t._v(t._s(t.$t("promotion3_t18")))]), e("br"), t._v("\n                    " + t._s(t.$t("promotion3_t2"))), e("a", { attrs: { href: t.$t("fefe-bank") } }, [t._v(t._s(t.$t("fefe-bank")))]), e("br"), t._v("\n                    " + t._s(t.$t("promotion3_t3"))), e("a", { attrs: { href: t.$t("promotion3_t4") } }, [t._v(t._s(t.shortUrl(t.$t("promotion3_t4"))))]), e("br"), t._v("\n                    " + t._s(t.$t("promotion3_t5"))), e("br")])])]), e("q-card-actions", { directives: [{ name: "show", rawName: "v-show", value: !t.expanded, expression: "!expanded" }] }, [e("q-btn", { attrs: { flat: "", color: "white", label: t.$t("Read more") }, on: { click: function(a) { t.expanded = !t.expanded } } }), e("q-space"), e("q-btn", { attrs: { color: "grey", round: "", flat: "", dense: "", icon: t.expanded ? "keyboard_arrow_up" : "keyboard_arrow_down" }, on: { click: function(a) { t.expanded = !t.expanded } } })], 1), e("q-slide-transition", [e("div", { directives: [{ name: "show", rawName: "v-show", value: t.expanded, expression: "expanded" }] }, [e("q-card-section", { staticClass: "text-subitle2" }, [e("p", [t._v("\n                        " + t._s(t.$t("promotion3_t6"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion3_t7"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion3_t8"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion3_t9"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion3_t10"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion3_t11")) + "\n                    ")]), e("q-img", { staticClass: "rounded-borders", attrs: { src: t.$t("promotion3_t12") } }), e("p", [t._v("\n                        " + t._s(t.$t("promotion3_t13"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion2_t14"))), e("br"), e("a", { attrs: { href: t.$t("promotion3_t15") } }, [t._v(t._s(t.shortUrl(t.$t("promotion3_t15"))))]), e("br"), t._v("\n                        " + t._s(t.$t("promotion2_t16"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion2_t17")) + "\n                    ")])], 1)], 1)]), e("q-card-actions", { directives: [{ name: "show", rawName: "v-show", value: t.expanded, expression: "expanded" }] }, [e("q-btn", { attrs: { flat: "", color: "white", label: t.$t("Close") }, on: { click: function(a) { t.expanded = !t.expanded } } }), e("q-space"), e("q-btn", { attrs: { color: "grey", round: "", flat: "", dense: "", icon: t.expanded ? "keyboard_arrow_up" : "keyboard_arrow_down" }, on: { click: function(a) { t.expanded = !t.expanded } } })], 1)], 1)], 1)
            },
            E = [],
            N = { data() { return { expanded: !1, flag: !0 } } },
            Q = N,
            T = (e("2ec4"), e("068f")),
            O = Object(_["a"])(Q, S, E, !1, null, "96e6dbc2", null),
            P = O.exports;
        w()(O, "components", { QCard: p["a"], QCardSection: l["a"], QCardActions: b["a"], QBtn: v["a"], QSpace: m["a"], QSlideTransition: x["a"], QImg: T["a"] });
        var A = function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", { staticClass: "col-12" }, [e("q-card", { staticClass: "grow-box", attrs: { flat: "" } }, [e("q-card-section", [e("div", { staticClass: "text-h4" }, [e("p", [t._v("\n                    " + t._s(t.$t("promotion4_t1")) + "\n                ")])]), e("div", [e("p", [t._v("\n                    " + t._s(t.$t("promotion4_t2"))), e("br")]), e("p", [t._v("\n                    " + t._s(t.$t("promotion4_t3"))), e("br")])])]), e("q-card-actions", { directives: [{ name: "show", rawName: "v-show", value: !t.expanded, expression: "!expanded" }] }, [e("q-btn", { attrs: { flat: "", color: "white", label: t.$t("Read more") }, on: { click: function(a) { t.expanded = !t.expanded } } }), e("q-space"), e("q-btn", { attrs: { color: "grey", round: "", flat: "", dense: "", icon: t.expanded ? "keyboard_arrow_up" : "keyboard_arrow_down" }, on: { click: function(a) { t.expanded = !t.expanded } } })], 1), e("q-slide-transition", [e("div", { directives: [{ name: "show", rawName: "v-show", value: t.expanded, expression: "expanded" }] }, [e("q-card-section", { staticClass: "text-subitle2" }, [e("p", [e("span", { staticClass: "text-bold" }, [t._v(t._s(t.$t("promotion4_t4")))]), e("br"), t._v("\n                        " + t._s(t.$t("promotion4_t5"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion4_t6"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion4_t7")) + "\n                    ")]), e("p", [e("span", { staticClass: "text-bold" }, [t._v(t._s(t.$t("promotion4_t8")))]), e("br"), t._v("\n                        " + t._s(t.$t("promotion4_t9")) + "\n                    ")]), e("p", [e("span", { staticClass: "text-bold" }, [t._v(t._s(t.$t("promotion4_t10")))]), e("br"), t._v("\n                        " + t._s(t.$t("promotion4_t11"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion4_t12"))), e("br"), t._v("\n                        👉"), e("a", { attrs: { href: t.$t("fefe-bank") } }, [t._v(t._s(t.$t("fefe-bank")))])])])], 1)]), e("q-card-actions", { directives: [{ name: "show", rawName: "v-show", value: t.expanded, expression: "expanded" }] }, [e("q-btn", { attrs: { flat: "", color: "white", label: t.$t("Close") }, on: { click: function(a) { t.expanded = !t.expanded } } }), e("q-space"), e("q-btn", { attrs: { color: "grey", round: "", flat: "", dense: "", icon: t.expanded ? "keyboard_arrow_up" : "keyboard_arrow_down" }, on: { click: function(a) { t.expanded = !t.expanded } } })], 1)], 1)], 1)
            },
            Y = [],
            R = { data() { return { expanded: !1, flag: !0 } } },
            B = R,
            j = (e("a047"), Object(_["a"])(B, A, Y, !1, null, "a5b90fb4", null)),
            I = j.exports;
        w()(j, "components", { QCard: p["a"], QCardSection: l["a"], QCardActions: b["a"], QBtn: v["a"], QSpace: m["a"], QSlideTransition: x["a"] });
        var L = function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", { staticClass: "col-12" }, [e("q-card", { staticClass: "grow-box", attrs: { flat: "" } }, [e("q-card-section", [e("div", { staticClass: "text-h4" }, [e("p", [t._v("\n                    " + t._s(t.$t("With FEFE, when Lambo?")) + "\n                ")])]), e("div", [e("p", [t._v("\n                    " + t._s(t.$t("promotion5_t1"))), e("br")]), e("p", [t._v("\n                    " + t._s(t.$t("promotion5_t2"))), e("b", [t._v(t._s(t.$t("promotion5_t3")))]), e("br")])])]), e("q-card-actions", { directives: [{ name: "show", rawName: "v-show", value: !t.expanded, expression: "!expanded" }] }, [e("q-btn", { attrs: { flat: "", color: "white", label: t.$t("Read more") }, on: { click: function(a) { t.expanded = !t.expanded } } }), e("q-space"), e("q-btn", { attrs: { color: "grey", round: "", flat: "", dense: "", icon: t.expanded ? "keyboard_arrow_up" : "keyboard_arrow_down" }, on: { click: function(a) { t.expanded = !t.expanded } } })], 1), e("q-slide-transition", [e("div", { directives: [{ name: "show", rawName: "v-show", value: t.expanded, expression: "expanded" }] }, [e("q-card-section", { staticClass: "text-subitle2" }, [e("p", [e("span", { staticClass: "text-bold" }, [t._v(t._s(t.$t("promotion5_t4")))]), e("br"), t._v("\n                        " + t._s(t.$t("promotion5_t5")) + "\n                    ")]), e("p", [e("span", { staticClass: "text-bold" }, [t._v(t._s(t.$t("promotion5_t6")))]), e("br"), t._v("\n                        " + t._s(t.$t("promotion5_t7"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion5_t8"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion5_t9")) + "\n                    ")]), e("p", [e("span", { staticClass: "text-bold" }, [t._v(t._s(t.$t("promotion5_t10")))]), e("br"), t._v("\n                        " + t._s(t.$t("promotion5_t11"))), e("a", { attrs: { href: t.$t("promotion5_t12") } }, [t._v(t._s(t.shortUrl(t.$t("promotion5_t12"))))]), e("br"), t._v("\n                        " + t._s(t.$t("promotion5_t13"))), e("a", { attrs: { href: t.$t("promotion5_t14") } }, [t._v(t._s(t.$t("promotion5_t14")))]), e("br"), t._v("\n                        " + t._s(t.$t("promotion5_t15"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion5_t16"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion5_t17"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion5_t18"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion5_t19"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion5_t20"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion5_t21"))), e("a", { attrs: { href: t.$t("promotion5_t22") } }, [t._v(t._s(t.$t("promotion5_t22")))]), e("br"), t._v("\n                        " + t._s(t.$t("promotion5_t23"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion5_t24"))), e("br"), t._v("\n                        " + t._s(t.$t("promotion5_t25"))), e("br")]), e("q-img", { staticClass: "rounded-borders", attrs: { src: t.$t("promotion5_t26") } })], 1)], 1)]), e("q-card-actions", { directives: [{ name: "show", rawName: "v-show", value: t.expanded, expression: "expanded" }] }, [e("q-btn", { attrs: { flat: "", color: "white", label: t.$t("Close") }, on: { click: function(a) { t.expanded = !t.expanded } } }), e("q-space"), e("q-btn", { attrs: { color: "grey", round: "", flat: "", dense: "", icon: t.expanded ? "keyboard_arrow_up" : "keyboard_arrow_down" }, on: { click: function(a) { t.expanded = !t.expanded } } })], 1)], 1)], 1)
            },
            H = [],
            J = { data() { return { expanded: !1, flag: !0 } } },
            U = J,
            G = (e("a013"), Object(_["a"])(U, L, H, !1, null, "d2af32d6", null)),
            F = G.exports;
        w()(G, "components", { QCard: p["a"], QCardSection: l["a"], QCardActions: b["a"], QBtn: v["a"], QSpace: m["a"], QSlideTransition: x["a"], QImg: T["a"] });
        var D = e("6064"),
            M = e("f0ed"),
            W = e("0831"),
            Z = function() {
                var t = this,
                    a = t.$createElement,
                    e = t._self._c || a;
                return e("div", { staticClass: "col-12" }, [e("q-card", { staticClass: "grow-box", attrs: { flat: "" } }, [e("q-card-section", [e("div", { staticClass: "text-h4" }, [e("p", [t._v("\n                    " + t._s(t.$t("NewsYorkTimesSquare_p1")) + "\n                ")])]), e("div", [e("p", [t._v("\n                    " + t._s(t.$t("NewsYorkTimesSquare_p2"))), e("br")]), e("p", [e("span", { staticClass: "text-bold" }, [t._v(t._s(t.$t("NewsYorkTimesSquare_p3")))]), e("br")])])]), e("q-card-actions", { directives: [{ name: "show", rawName: "v-show", value: !t.expanded, expression: "!expanded" }] }, [e("q-btn", { attrs: { flat: "", color: "white", label: t.$t("Read more") }, on: { click: function(a) { t.expanded = !t.expanded } } }), e("q-space"), e("q-btn", { attrs: { color: "grey", round: "", flat: "", dense: "", icon: t.expanded ? "keyboard_arrow_up" : "keyboard_arrow_down" }, on: { click: function(a) { t.expanded = !t.expanded } } })], 1), e("q-slide-transition", [e("div", { directives: [{ name: "show", rawName: "v-show", value: t.expanded, expression: "expanded" }] }, [e("q-card-section", { staticClass: "text-subitle2" }, [e("p", [t._v("\n                        " + t._s(t.$t("FinancialFreedomWish_p1")) + "\n                    ")]), e("p", [t._v("\n                        " + t._s(t.$t("NewsYorkTimesSquare_p4"))), e("br"), t._v("\n                        " + t._s(t.$t("NewsYorkTimesSquare_p5")) + "\n                    ")]), e("p", [e("span", { staticClass: "text-bold" }, [t._v(t._s(t.$t("NewsYorkTimesSquare_p6")))]), e("br"), t._v("\n                        " + t._s(t.$t("NewsYorkTimesSquare_p7"))), e("br"), t._v("\n                        " + t._s(t.$t("NewsYorkTimesSquare_p8"))), e("a", { attrs: { target: "_blank", href: t.$t("promotion5_t14") } }, [t._v(t._s(t.$t("promotion5_t14")))]), e("br"), t._v("\n                        " + t._s(t.$t("NewsYorkTimesSquare_p9"))), e("a", { attrs: { target: "_blank", href: "https://twitter.com/" } }, [t._v(t._s(t.shortUrl("https://twitter.com/")))]), e("br"), t._v("\n                        " + t._s(t.$t("NewsYorkTimesSquare_p10"))), e("br"), t._v("\n                        " + t._s(t.$t("NewsYorkTimesSquare_p11"))), e("br"), t._v("\n                        " + t._s(t.$t("NewsYorkTimesSquare_p12"))), e("br"), t._v("\n                        " + t._s(t.$t("NewsYorkTimesSquare_p13"))), e("br"), t._v("\n                        " + t._s(t.$t("NewsYorkTimesSquare_p11"))), e("br"), e("a", { attrs: { target: "_blank", href: "https://docs.google.com/forms/d/1b843ZQl2OATHiHTNvoesMJV75PS5u7eJcAOk1ygRZOU/edit" } }, [t._v(t._s(t.shortUrl("https://docs.google.com/forms/d/1b843ZQl2OATHiHTNvoesMJV75PS5u7eJcAOk1ygRZOU/edit")))]), e("br")]), e("p", [t._v("\n                        " + t._s(t.$t("NewsYorkTimesSquare_p15"))), e("br")]), e("p", [t._v("\n                        " + t._s(t.$t("NewsYorkTimesSquare_p16"))), e("br")]), e("p", [t._v("\n                        " + t._s(t.$t("NewsYorkTimesSquare_p17"))), e("br")])])], 1)]), e("q-card-actions", { directives: [{ name: "show", rawName: "v-show", value: t.expanded, expression: "expanded" }] }, [e("q-btn", { attrs: { flat: "", color: "white", label: t.$t("Close") }, on: { click: function(a) { t.expanded = !t.expanded } } }), e("q-space"), e("q-btn", { attrs: { color: "grey", round: "", flat: "", dense: "", icon: t.expanded ? "keyboard_arrow_up" : "keyboard_arrow_down" }, on: { click: function(a) { t.expanded = !t.expanded } } })], 1)], 1)], 1)
            },
            K = [],
            V = { data() { return { expanded: !1, flag: !0 } } },
            z = V,
            X = (e("bdba"), Object(_["a"])(z, Z, K, !1, null, "ba599756", null)),
            tt = X.exports;
        w()(X, "components", { QCard: p["a"], QCardSection: l["a"], QCardActions: b["a"], QBtn: v["a"], QSpace: m["a"], QSlideTransition: x["a"] });
        var at = e("2f62");
        const { getScrollTarget: et, setScrollPosition: ot } = W["a"];
        var nt = {
                components: { HomeHeader: r["a"], WishContest: tt, AffiliateProgram: $, AffiliatePromoter: y, RewardsContest: P, Airdropohk: I, WhenLambo: F, IndexFindUs: D["a"], IndexPart9: M["a"] },
                data() { return { expanded: !1, flag: !0, arrExpanded: [] } },
                computed: {...Object(at["b"])({ getGitbookPromotion: "farm/getGitbookPromotion" }), GitbookPromtion() { let t = JSON.parse(JSON.stringify(this.getGitbookPromotion)); return t.forEach((t => { this.arrExpanded.push({ data: !1 }) })), t } },
                methods: {
                    shortString(t) {
                        let a = t.split(" "),
                            e = "";
                        for (let o = 0; o < 5; o++) e += a[o] + " ";
                        return e += "...", e
                    },
                    handleScroll(t) {
                        const a = document.getElementById(t),
                            e = et(a),
                            o = a.offsetTop,
                            n = 1e3;
                        ot(e, o, n)
                    },
                    fetchData() { this.$store.dispatch("farm/fetchgitbookPromotion") }
                },
                mounted() { this.fetchData(), this.interval = setInterval(this.fetchData, 3e4) },
                beforeDestroy() { this.interval && clearInterval(this.interval) }
            },
            rt = nt,
            st = (e("d10b"), e("9989")),
            dt = Object(_["a"])(rt, o, n, !1, null, "7a7c86d6", null);
        a["default"] = dt.exports;
        w()(dt, "components", { QPage: st["a"], QBtn: v["a"], QImg: T["a"], QCard: p["a"], QCardSection: l["a"], QCardActions: b["a"], QSpace: m["a"], QSlideTransition: x["a"] })
    },
    a013: function(t, a, e) {
        "use strict";
        e("77a2")
    },
    a047: function(t, a, e) {
        "use strict";
        e("a5a5")
    },
    a5a5: function(t, a, e) {},
    bdba: function(t, a, e) {
        "use strict";
        e("cea3")
    },
    cea3: function(t, a, e) {},
    d10b: function(t, a, e) {
        "use strict";
        e("ec79")
    },
    de2f: function(t, a, e) {
        "use strict";
        e("393e")
    },
    ec79: function(t, a, e) {}
}
]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    [24], {
        "12f5": function(t, a, s) {
            "use strict";
            s.r(a);
            var e = function() {
                    var t = this,
                        a = t.$createElement,
                        s = t._self._c || a;
                    return s("q-page", { attrs: { padding: "" } }, [s("div", { staticClass: "row justify-center items-stretch" }, [s("div", { staticClass: "container-box" }, [s("div", { staticClass: "row q-col-gutter-md q-mb-md" }, [s("div", { staticClass: "col-xs-12 col-sm-6" }, [s("q-card", { staticClass: "fit", attrs: { flat: "" } }, [s("q-card-section", [s("div", { staticClass: "text-h6 q-mb-md text-grey-7" }, [t._v(t._s(t.$t("Total Buybacks")))]), t.totalBuybacks ? [s("div", { staticClass: "text-h4" }, [t._v("$" + t._s(parseFloat(t.totalBuybacks.toFixed(2)).toLocaleString()))])] : t._e()], 2), s("q-card-section", [s("div", { staticClass: "text-h6 q-mb-md text-grey-7" }, [t._v(t._s(t.$t("Total burned")))]), t.tokenInfo.totalBurnedFiat ? [s("div", { staticClass: "text-h4" }, [t._v("$" + t._s(parseFloat(t.tokenInfo.totalBurnedFiat.toFixed(2)).toLocaleString()))])] : t._e()], 2), s("q-card-section", [s("div", { staticClass: "text-h6 q-mb-md text-grey-7" }, [t._v(t._s(t.$t("No. of Buyback & Burn")))]), s("div", { staticClass: "text-h4" }, [t._v(t._s(t.countBuyback))])])], 1)], 1), s("div", { staticClass: "col-xs-12 col-sm-6" }, [s("card-burn-program")], 1)]), s("q-markup-table", { staticClass: "q-mb-md", attrs: { flat: "" } }, [s("thead", [s("tr", [s("th", { staticClass: "text-left" }, [t._v(t._s(t.$t("Txn Hash")))]), s("th", { staticClass: "text-left" }, [t._v(t._s(t.$t("Method")))]), s("th", { staticClass: "text-left" }, [t._v(t._s(t.$t("Block")))]), s("th", { staticClass: "text-left" }, [t._v(t._s(t.$t("Date")))]), s("th", { staticClass: "text-right" }, [t._v(t._s(t.$t("Value")))]), s("th", { staticClass: "text-right" }, [t._v(t._s(t.$t("Value")))])])]), s("tbody", t._l(t.buybacks, (function(a, e) { return s("tr", { key: e }, [s("td", [s("a", { staticClass: "text-blue", attrs: { href: t.getTxLink(a["txHash"]), target: "_blank" } }, [t._v("\n              " + t._s(t.shortAddress(a["txHash"])) + "\n            ")])]), s("td", [t._v(t._s(a["method"]))]), s("td", [t._v(t._s(a["blockNumber"]))]), s("td", [t._v(t._s(a["timestamp"]))]), s("td", { staticClass: "text-right" }, [t._v("$" + t._s(Math.round(parseFloat(a["valueFiat"])).toLocaleString()))]), s("td", { staticClass: "text-right" }, [t._v(t._s(a["valueText"]))])]) })), 0)])], 1)])])
                },
                r = [],
                i = (s("e9c4"), s("a79d"), s("2f62")),
                c = s("3c0d6"),
                l = { components: { CardBurnProgram: c["a"] }, data() { return { isLoaded: !1 } }, computed: {...Object(i["b"])({ getTokenInfo: "farm/getTokenInfo", getBuybacks: "farm/getBuyBacks" }), tokenInfo() { return JSON.parse(JSON.stringify(this.getTokenInfo)) }, buybacks() { return JSON.parse(JSON.stringify(this.getBuybacks)) }, countBuyback() { return this.buybacks.length }, totalBuybacks() { return this.buybacks.length ? this.buybacks.filter((t => "Buyback" === t.method)).map((t => t["valueFiat"])).reduce(((t, a) => t + a)) : 0 } }, methods: { fetchData() { this.$store.dispatch("farm/fetchBuybacks").finally((() => { this.isLoaded = !0 })) } }, mounted() { this.fetchData(), this.interval = setInterval(this.fetchData, 3e4) }, beforeDestroy() { this.interval && clearInterval(this.interval) } },
                o = l,
                n = s("2877"),
                d = s("9989"),
                u = s("f09f"),
                h = s("a370"),
                b = s("2bb1"),
                _ = s("eebe"),
                v = s.n(_),
                f = Object(n["a"])(o, e, r, !1, null, null, null);
            a["default"] = f.exports;
            v()(f, "components", { QPage: d["a"], QCard: u["a"], QCardSection: h["a"], QMarkupTable: b["a"] })
        }
    }
]);
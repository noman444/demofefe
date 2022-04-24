(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    [28], { dd40: function(t, a, e) { "use strict";
            e.r(a); var s = function() { var t = this,
                        a = t.$createElement,
                        e = t._self._c || a; return e("q-page", { attrs: { padding: "" } }, [t.networkData ? e("div", { staticClass: "row justify-center items-stretch" }, [e("div", { staticClass: "container-box" }, [e("div", { staticClass: "row justify-between items-center q-mb-md q-col-gutter-sm" }, [e("div", { staticClass: "col-grow" }, [e("div", { staticClass: "row items-center q-col-gutter-x-md" }, [e("div", { staticClass: "col-auto" }, [e("q-avatar", { attrs: { square: "", size: "40px" } }, [e("q-img", { attrs: { src: t.networkData.logo } })], 1)], 1), e("div", { staticClass: "col text-h5 text-weight-bold text-no-wrap" }, [t._v("\n              " + t._s(t.networkData.name) + " " + t._s(t.$t("RFV Wallet")) + "\n            ")])])]), e("div", { staticClass: "col-grow text-right text-h6" }, [e("a", { staticClass: "text-white", attrs: { href: t.farmingWalletScan, target: "_blank" } }, [t._v("\n            " + t._s(t.$t("Address")) + " " + t._s(t.farmingWalletText) + "\n            "), e("q-icon", { staticClass: "q-mb-xs", attrs: { name: "launch" } })], 1)])]), e("q-card", { staticClass: "q-mb-md", attrs: { flat: "" } }, [e("q-card-section", [e("div", { staticClass: "text-h5" }, [t._v("Gross Value")]), e("div", { staticClass: "text-h5 text-green text-weight-bold" }, [t._v("$" + t._s(t.networkData.value ? parseFloat(parseFloat(t.networkData.value).toFixed(2)).toLocaleString() : "NA"))])])], 1), e("q-card", { staticClass: "q-mb-md q-mt-md", attrs: { flat: "" } }, [e("q-card-section", [e("chart-data", { attrs: { cData: t.networkData.data } })], 1)], 1)], 1)]) : t._e()]) },
                r = [],
                n = (e("e9c4"), e("2f62")),
                i = e("7367"),
                o = { components: { ChartData: i["a"] }, computed: {...Object(n["b"])({ getTokenInfo: "farm/getTokenInfo", getChainFarmingInfo: "farm/getChainFarmingInfo" }), mainToken() { return JSON.parse(JSON.stringify(this.getTokenInfo)) }, ChainFarmingInfo() { return JSON.parse(JSON.stringify(this.getChainFarmingInfo)) }, networkData() { return this.ChainFarmingInfo.find((t => t.name.toLowerCase() === this.$route.params.network)) }, farmingWalletScan() { return this.networkData.scanUrl + "/address/" + this.$contracts.mainToken.treasuryWallet }, farmingWalletText() { return this.$q.screen.gt.sm ? this.$contracts.mainToken.treasuryWallet : this.shortAddress(this.$contracts.mainToken.treasuryWallet) } }, methods: { fetchData() { this.$store.dispatch("farm/fetchChainFarmingInfo") } }, mounted() { this.fetchData(), this.interval = setInterval(this.fetchData, 3e4) }, beforeDestroy() { this.interval && clearInterval(this.interval) } },
                c = o,
                l = e("2877"),
                d = e("9989"),
                h = e("cb32"),
                m = e("068f"),
                f = e("0016"),
                g = e("f09f"),
                u = e("a370"),
                w = e("eebe"),
                v = e.n(w),
                C = Object(l["a"])(c, s, r, !1, null, null, null);
            a["default"] = C.exports;
            v()(C, "components", { QPage: d["a"], QAvatar: h["a"], QImg: m["a"], QIcon: f["a"], QCard: g["a"], QCardSection: u["a"] }) } }
]);
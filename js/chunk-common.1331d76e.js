(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    [1], {
        1924: function(t, e, a) {
            "use strict";
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("q-btn", { attrs: { unelevated: "", dense: "", "no-caps": "" } }, [a("q-icon", { attrs: { name: "img:" + t.currentLang.icon, size: "22px" } }), t.showLabel ? a("span", { staticClass: "q-ml-xs" }, [t._v(t._s(t.currentLang.label))]) : t._e(), a("q-menu", { attrs: { "auto-close": "", "max-width": "350px" } }, [a("q-card", { attrs: { flat: "" } }, [a("q-card-section", { staticClass: "q-pa-sm" }, [a("div", { staticClass: "row items-stretch q-col-gutter-x-md" }, t._l(t.languages, (function(e, s) { return a("div", { staticClass: "col-6" }, [a("q-item", { key: s, staticClass: "rounded-borders", attrs: { clickable: "" }, on: { click: function(a) { return t.switchLanguage(e) } } }, [a("q-item-section", { attrs: { thumbnail: "" } }, [a("q-avatar", { staticClass: "q-ml-sm", attrs: { square: "", size: "18px" } }, [a("q-img", { attrs: { src: e.icon } })], 1)], 1), a("q-item-section", [a("q-item-label", [t._v(t._s(e.label))])], 1)], 1)], 1) })), 0)])], 1)], 1)], 1)
                },
                i = [],
                r = (a("ddb0"), a("5319"), {
                    props: { showLabel: { type: Boolean, default: !1 } },
                    computed: { languages() { return [{ label: "English", value: "en", icon: "https://storage.googleapis.com/libero-cdn/public/flags/us.svg" }, { label: "Filipino", value: "ph", icon: "https://storage.googleapis.com/libero-cdn/public/flags/ph.svg" }, { label: "Türkçe", value: "tr", icon: "https://storage.googleapis.com/libero-cdn/public/flags/tr.svg" }, { label: "简体中文", value: "zh", icon: "https://storage.googleapis.com/libero-cdn/public/flags/cn.svg" }, { label: "Bahasa Indonesia", value: "id", icon: "https://storage.googleapis.com/libero-cdn/public/flags/id.svg" }, { label: "Português", value: "pt", icon: "https://storage.googleapis.com/libero-cdn/public/flags/pt.svg" }, { label: "Русский", value: "ru", icon: "https://storage.googleapis.com/libero-cdn/public/flags/ru.svg" }, { label: "Tiếng Việt", value: "vn", icon: "https://storage.googleapis.com/libero-cdn/public/flags/vn.svg" }, { label: "Español", value: "es", icon: "https://storage.googleapis.com/libero-cdn/public/flags/es.svg" }, { label: "Deutsch", value: "gr", icon: "https://storage.googleapis.com/libero-cdn/public/flags/de.svg" }, { label: "Nederlands", value: "nl", icon: "https://storage.googleapis.com/libero-cdn/public/flags/nl.svg" }, { label: "हिन्दी", value: "in", icon: "https://storage.googleapis.com/libero-cdn/public/flags/in.svg" }, { label: "Français", value: "fr", icon: "https://storage.googleapis.com/libero-cdn/public/flags/fr.svg" }] }, currentLang() { return this.languages.find((t => t.value === this.current)) } },
                    data() { return { current: this.$i18n.locale } },
                    watch: {
                        current: function(t) {
                            let e;
                            switch (t) {
                                case "tr":
                                    e = "tr-tr";
                                    break;
                                case "ph":
                                    e = "ph-ph";
                                    break;
                                case "zh":
                                    e = "zh-cn";
                                    break;
                                case "id":
                                    e = "id-id";
                                    break;
                                case "pt":
                                    e = "pt-pt";
                                    break;
                                case "ru":
                                    e = "ru-ru";
                                    break;
                                case "vn":
                                    e = "vi-vn";
                                    break;
                                case "es":
                                    e = "sn-sn";
                                    break;
                                case "gr":
                                    e = "gr-gr";
                                    break;
                                case "nl":
                                    e = "dc-dc";
                                    break;
                                case "in":
                                    e = "in-in";
                                    break;
                                case "fr":
                                    e = "fr-fr";
                                    break;
                                default:
                                    e = "en-us"
                            }
                            a("2e98")("./" + e).then((e => {
                                this.$i18n.locale = t, this.$i18n.setLocaleMessage(t, e.default), this.$q.cookies.set("lang", t.split("-")[0], { expires: 30 }), this.$root.$emit("fetchConfig");
                                const a = {...this.$route.query, lang: t };
                                this.$router.replace({ query: a })
                            }))
                        }
                    },
                    methods: { switchLanguage(t) { this.current = t.value } },
                    mounted() {
                        let t;
                        this.$route.query.lang ? t = this.languages.find((t => t.value.split("-")[0] === this.$route.query.lang)) : this.$q.cookies.has("lang") && (t = this.languages.find((t => t.value.split("-")[0] === this.$q.cookies.get("lang").toString()))), t && (this.current = t.value)
                    }
                }),
                o = r,
                n = a("2877"),
                l = a("9c40"),
                c = a("0016"),
                d = a("4e73"),
                u = a("f09f"),
                g = a("a370"),
                f = a("66e5"),
                h = a("4074"),
                m = a("cb32"),
                p = a("068f"),
                b = a("0170"),
                v = a("eebe"),
                w = a.n(v),
                x = Object(n["a"])(o, s, i, !1, null, null, null);
            e["a"] = x.exports;
            w()(x, "components", { QBtn: l["a"], QIcon: c["a"], QMenu: d["a"], QCard: u["a"], QCardSection: g["a"], QItem: f["a"], QItemSection: h["a"], QAvatar: m["a"], QImg: p["a"], QItemLabel: b["a"] })
        },
        "1eea": function(t, e, a) {},
        "25da": function(t, e, a) {
            "use strict";
            a("e932")
        },
        "2e98": function(t, e, a) {
            var s = { "./": ["12cb"], "./dc-dc": ["a773", 2], "./dc-dc/": ["a773", 2], "./dc-dc/index": ["a773", 2], "./dc-dc/index.js": ["a773", 2], "./en-us": ["923f"], "./en-us/": ["923f"], "./en-us/index": ["923f"], "./en-us/index.js": ["923f"], "./fr-fr": ["542d", 3], "./fr-fr/": ["542d", 3], "./fr-fr/index": ["542d", 3], "./fr-fr/index.js": ["542d", 3], "./gr-gr": ["f347", 4], "./gr-gr/": ["f347", 4], "./gr-gr/index": ["f347", 4], "./gr-gr/index.js": ["f347", 4], "./id-id": ["c8e1", 5], "./id-id/": ["c8e1", 5], "./id-id/index": ["c8e1", 5], "./id-id/index.js": ["c8e1", 5], "./in-in": ["8697", 6], "./in-in/": ["8697", 6], "./in-in/index": ["8697", 6], "./in-in/index.js": ["8697", 6], "./index": ["12cb"], "./index.js": ["12cb"], "./ph-ph": ["1c42", 7], "./ph-ph/": ["1c42", 7], "./ph-ph/index": ["1c42", 7], "./ph-ph/index.js": ["1c42", 7], "./pt-pt": ["a484", 8], "./pt-pt/": ["a484", 8], "./pt-pt/index": ["a484", 8], "./pt-pt/index.js": ["a484", 8], "./ru-ru": ["0b67", 9], "./ru-ru/": ["0b67", 9], "./ru-ru/index": ["0b67", 9], "./ru-ru/index.js": ["0b67", 9], "./sn-sn": ["e89b", 10], "./sn-sn/": ["e89b", 10], "./sn-sn/index": ["e89b", 10], "./sn-sn/index.js": ["e89b", 10], "./tr-tr": ["34b6", 11], "./tr-tr/": ["34b6", 11], "./tr-tr/index": ["34b6", 11], "./tr-tr/index.js": ["34b6", 11], "./vi-vn": ["1306", 12], "./vi-vn/": ["1306", 12], "./vi-vn/index": ["1306", 12], "./vi-vn/index.js": ["1306", 12], "./zh-cn": ["63d9", 13], "./zh-cn/": ["63d9", 13], "./zh-cn/index": ["63d9", 13], "./zh-cn/index.js": ["63d9", 13] };

            function i(t) {
                if (!a.o(s, t)) return Promise.resolve().then((function() { var e = new Error("Cannot find module '" + t + "'"); throw e.code = "MODULE_NOT_FOUND", e }));
                var e = s[t],
                    i = e[0];
                return Promise.all(e.slice(1).map(a.e)).then((function() { return a(i) }))
            }
            i.keys = function() { return Object.keys(s) }, i.id = "2e98", t.exports = i
        },
        3940: function(t, e, a) {},
        "3c0d6": function(t, e, a) {
            "use strict";
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("q-card", t._b({ staticClass: "box-burn" }, "q-card", t.$attrs, !1), [a("q-toolbar", [a("q-toolbar-title", [a("div", { staticClass: "text-h6" }, [t._v(t._s(t.$t("Automatic Hyper Burn")))])]), a("q-btn", { attrs: { round: "", dense: "", icon: "help", type: "a", href: "https://docs.libero.financial/automatic-hyper-burn", target: "_blank" } })], 1), a("q-card-section", [a("q-list", { staticClass: "rounded-borders bg-blue-grey-10 q-mb-sm" }, [a("q-item", [a("q-item-section", [a("q-item-label", [t._v(t._s(t.$t("Total burned")))])], 1), a("q-item-section", { staticClass: "text-right text-white", attrs: { side: "" } }, [t.tokenInfo.totalBurned ? [a("q-item-label", { staticClass: "text-green text-h5" }, [t._v("$" + t._s(parseFloat(t.tokenInfo.totalBurnedFiat.toFixed(2)).toLocaleString()) + " ")]), a("q-item-label", { staticClass: "text-grey-5", attrs: { lines: "2" } }, [t._v("( " + t._s(parseFloat(t.tokenInfo.totalBurned.toFixed(2)).toLocaleString()) + " LIBERO )")]), a("q-item-label", { staticClass: "text-grey-5", attrs: { lines: "2" } }, [t._v("( " + t._s(parseFloat(t.totalBurnSupply.toFixed(2)).toLocaleString()) + "% total supply )")])] : t._e()], 2)], 1)], 1), a("q-list", { staticClass: "rounded-borders bg-blue-grey-10 q-mb-sm" }, [a("q-item", [a("q-item-section", [a("q-item-label", [t._v(t._s(t.$t("Next burn amount")))])], 1), a("q-item-section", { staticClass: "text-right text-white", attrs: { side: "" } }, [t.tokenInfo.nextBurnAmount ? [a("q-item-label", { staticClass: "text-green text-h5" }, [t._v("$" + t._s(parseFloat(t.tokenInfo.nextBurnAmountFiat.toFixed(2)).toLocaleString()))]), a("q-item-label", { staticClass: "text-grey-5", attrs: { lines: "2" } }, [t._v("( " + t._s(parseFloat(t.tokenInfo.nextBurnAmount.toFixed(2)).toLocaleString()) + " LIBERO )")])] : t._e()], 2)], 1)], 1), a("q-list", { staticClass: "rounded-borders bg-blue-grey-10 q-mb-sm" }, [a("q-item", [a("q-item-section", [a("q-item-label", [t._v(t._s(t.$t("Next burn")))])], 1), a("q-item-section", { staticClass: "text-right text-white", attrs: { side: "" } }, [a("q-item-label", [a("countdown-burn")], 1)], 1)], 1)], 1), a("q-list", { staticClass: "rounded-borders bg-blue-grey-10 q-mb-sm" }, [a("q-item", [a("q-item-section", [a("q-item-label", [t._v(t._s(t.$t("Your share/Marketcap")))])], 1), a("q-item-section", { staticClass: "text-right text-white", attrs: { side: "" } }, [a("q-item-label", ["" === t.tokenInfo.balanceFiat ? a("q-skeleton", { attrs: { type: "text", width: "100px" } }) : a("span", { staticClass: "text-green" }, [t._v("$" + t._s((100 * t.tokenInfo.balanceFiat / t.tokenInfo.marketCap).toFixed(5)) + "%")])], 1)], 1)], 1)], 1)], 1)], 1)
                },
                i = [],
                r = (a("e9c4"), a("2f62")),
                o = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", t._b({}, "div", t.$attrs, !1), [t.timeTarget.days ? a("span", [t._v(t._s(t.timeTarget.days) + " " + t._s(t.$t("Days")) + " ")]) : t._e(), a("span", [t._v(t._s(t.timeTarget.hours) + ":")]), a("span", [t._v(t._s(t.timeTarget.minutes) + ":")]), a("span", [t._v(t._s(t.timeTarget.seconds))])])
                },
                n = [],
                l = {
                    data() { return { timeTarget: { days: 0, hours: 0, minutes: 0, seconds: 0 } } },
                    computed: {...Object(r["b"])({ getTokenInfo: "farm/getTokenInfo" }), tokenInfo() { return JSON.parse(JSON.stringify(this.getTokenInfo)) } },
                    methods: {
                        getTimer() {
                            let t = this,
                                e = t.timeDistance(t.tokenInfo.nextBurnDate);
                            t.timeTarget = e.distance, t.interval = setInterval((function() {
                                let e = t.timeDistance(t.tokenInfo.nextBurnDate);
                                t.timeTarget = e.distance
                            }), 1e3)
                        }
                    },
                    mounted() { this.getTimer() },
                    beforeDestroy() { this.interval && clearInterval(this.interval) }
                },
                c = l,
                d = a("2877"),
                u = Object(d["a"])(c, o, n, !1, null, null, null),
                g = u.exports,
                f = { components: { CountdownBurn: g }, computed: {...Object(r["b"])({ getTokenInfo: "farm/getTokenInfo" }), tokenInfo() { return JSON.parse(JSON.stringify(this.getTokenInfo)) }, totalBurnSupply() { return this.tokenInfo.totalBurned / this.tokenInfo.totalSupply * 100 } } },
                h = f,
                m = (a("25da"), a("f09f")),
                p = a("65c6"),
                b = a("6ac5"),
                v = a("9c40"),
                w = a("a370"),
                x = a("1c1c"),
                C = a("66e5"),
                _ = a("4074"),
                k = a("0170"),
                y = a("293e"),
                q = a("eebe"),
                I = a.n(q),
                L = Object(d["a"])(h, s, i, !1, null, "40df449e", null);
            e["a"] = L.exports;
            I()(L, "components", { QCard: m["a"], QToolbar: p["a"], QToolbarTitle: b["a"], QBtn: v["a"], QCardSection: w["a"], QList: x["a"], QItem: C["a"], QItemSection: _["a"], QItemLabel: k["a"], QSkeleton: y["a"] })
        },
        "41d7": function(t, e, a) {
            "use strict";
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", { staticClass: "box-twitter" }, [a("q-scroll-area", { style: "height: " + t.height + "; max-height: 75vh" }, [a("TwitterFeed", { attrs: { src: "https://twitter.com/" + t.twitterId + "?ref_src=twsrc%5Etfw", dark: "" } })], 1)], 1)
                },
                i = [],
                r = { props: { height: { type: String, default: "600px" } }, computed: { twitterId() { return "LiberoFinancial" } } },
                o = r,
                n = a("2877"),
                l = a("4983"),
                c = a("eebe"),
                d = a.n(c),
                u = Object(n["a"])(o, s, i, !1, null, null, null);
            e["a"] = u.exports;
            d()(u, "components", { QScrollArea: l["a"] })
        },
        "5a46": function(t, e, a) {
            "use strict";
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", t._b({}, "div", t.$attrs, !1), [a("countdown", { attrs: { targetSecond: t.bankInfo.busdAirdropTime }, scopedSlots: t._u([{ key: "append", fn: function() { return [a("div", { staticClass: "text-center text-h6 text-orange q-mt-md" }, [t._v("\n        " + t._s(parseFloat(parseFloat(t.bankInfo.busdAirdropAmount).toFixed(2)).toLocaleString()) + " BUSD round #" + t._s(t.bankInfo.busdAirdropCount) + " for "), a("a", { staticClass: "text-blue", attrs: { href: "https://docs.libero.financial/libero-bank", target: "_blank" } }, [t._v("LIBERO Bank")]), t._v(" stakers airdrop countdown\n      ")]), t.isLogon ? a("div", { staticClass: "text-center text-h6" }, [t._v("\n        You will receive " + t._s(parseFloat(t.rewardShare.toFixed(2)).toLocaleString()) + " BUSD from this airdrop\n      ")]) : t._e()] }, proxy: !0 }]) })], 1)
                },
                i = [],
                r = (a("e9c4"), function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", { staticClass: "text-center" }, [t.label ? a("div", { staticClass: "q-mt-md" }, [t._v(t._s(t.label))]) : t._e(), t.hideDay ? t._e() : a("q-knob", { staticClass: "q-mr-sm", attrs: { max: 30, min: 0, size: t.size, thickness: .22, color: "orange-8", readonly: "", "show-value": "", "track-color": "grey-4" }, model: { value: t.timeTarget.days, callback: function(e) { t.$set(t.timeTarget, "days", e) }, expression: "timeTarget.days" } }, [a("div", [a("div", [t._v(t._s(t.timeTarget.days))]), a("div", { staticClass: "text-caption" }, [t._v(t._s(t.$t("Days")))])])]), a("q-knob", { staticClass: "q-mr-sm", attrs: { max: 24, min: 0, size: t.size, thickness: .22, color: "orange-8", readonly: "", "show-value": "", "track-color": "grey-4" }, model: { value: t.timeTarget.hours, callback: function(e) { t.$set(t.timeTarget, "hours", e) }, expression: "timeTarget.hours" } }, [a("div", [a("div", [t._v(t._s(t.timeTarget.hours))]), a("div", { staticClass: "text-caption" }, [t._v(t._s(t.$t("hours")))])])]), a("q-knob", { staticClass: "q-mr-sm", attrs: { max: 60, min: 0, size: t.size, thickness: .22, color: "orange-8", readonly: "", "show-value": "", "track-color": "grey-4" }, model: { value: t.timeTarget.minutes, callback: function(e) { t.$set(t.timeTarget, "minutes", e) }, expression: "timeTarget.minutes" } }, [a("div", [a("div", [t._v(t._s(t.timeTarget.minutes))]), a("div", { staticClass: "text-caption" }, [t._v(t._s(t.$t("minutes")))])])]), !t.hideSecond && t.$q.screen.gt.xs ? a("q-knob", { staticClass: "q-mr-sm", attrs: { max: 60, min: 0, size: t.size, thickness: .22, color: "orange-8", readonly: "", "show-value": "", "track-color": "grey-4" }, model: { value: t.timeTarget.seconds, callback: function(e) { t.$set(t.timeTarget, "seconds", e) }, expression: "timeTarget.seconds" } }, [a("div", [a("div", [t._v(t._s(t.timeTarget.seconds))]), a("div", { staticClass: "text-caption" }, [t._v(t._s(t.$t("seconds")))])])]) : t._e(), t._t("append")], 2)
                }),
                o = [],
                n = {
                    props: { label: { type: String }, targetSecond: { type: Number, required: !0 }, size: { type: [String, Number], default: "100px" }, hideDay: { type: Boolean, default: !1 }, hideSecond: { type: Boolean, default: !1 } },
                    data() { return { timeTarget: { days: 0, hours: 0, minutes: 0, seconds: 0 } } },
                    methods: {
                        getTimer() {
                            let t = this,
                                e = t.timeDistance(t.targetSecond);
                            t.timeTarget = e.distance, t.interval = setInterval((function() {
                                let e = t.timeDistance(t.targetSecond);
                                t.timeTarget = e.distance, e.counting || clearInterval(t.interval)
                            }), 1e3)
                        }
                    },
                    mounted() { this.getTimer() },
                    beforeDestroy() { this.interval && clearInterval(this.interval) }
                },
                l = n,
                c = a("2877"),
                d = a("3845"),
                u = a("eebe"),
                g = a.n(u),
                f = Object(c["a"])(l, r, o, !1, null, null, null),
                h = f.exports;
            g()(f, "components", { QKnob: d["a"] });
            var m = a("2f62"),
                p = { components: { Countdown: h }, computed: {...Object(m["b"])({ isLogon: "auth/isLogon", getBankInfo: "farm/getBankInfo" }), bankInfo() { return JSON.parse(JSON.stringify(this.getBankInfo)) }, rewardShare() { return 1e5 * parseFloat(this.bankInfo.lockMinted) / parseFloat(this.bankInfo.totalSupply) } } },
                b = p,
                v = Object(c["a"])(b, s, i, !1, null, null, null);
            e["a"] = v.exports
        },
        "5b83": function(t, e, a) {},
        "5f90": function(t, e, a) {
            "use strict";
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("q-card", { staticClass: "bg-transparent" }, [a("q-card-section", { staticClass: "q-pa-none" }, [a("q-video", { staticClass: "rounded-borders q-mb-md", attrs: { src: t.currentVideo, ratio: 16 / 9 } }), a("div", { staticClass: "row q-col-gutter-md items-center" }, [t._l(t.getData, (function(e, s) { return [a("div", { key: s, staticClass: "col-3" }, [a("q-img", { staticClass: "fit rounded-borders cursor-pointer", attrs: { src: e.thumb, ratio: 16 / 9 }, on: { click: function(a) { return t.switchVideo(e.id) } } })], 1)] }))], 2)], 1)], 1)
                },
                i = [],
                r = (a("e9c4"), a("2f62")),
                o = { data() { return { currentId: "", videoList: [] } }, computed: { currentVideo() { return "https://www.youtube.com/embed/" + this.currentId }, ...Object(r["b"])({ getYoutubePlaylist: "farm/getYoutubePlaylist" }), getData() { let t = []; return JSON.parse(JSON.stringify(this.getYoutubePlaylist)).forEach((e => { t.push({ id: e["snippet"]["resourceId"]["videoId"], url: "https://www.youtube.com/embed/" + e["snippet"]["resourceId"]["videoId"], thumb: "https://img.youtube.com/vi/" + e["snippet"]["resourceId"]["videoId"] + "/maxresdefault.jpg" }) })), 0 !== t.length && (this.currentId = t[0].id), t } }, methods: { switchVideo(t) { this.currentId = t }, fetchData() { this.$store.dispatch("farm/fetchYoutubePlaylist") } }, mounted() { this.fetchData(), this.currentId = 0 === this.getData.length ? "" : this.getData[0].id, this.interval = setInterval(this.fetchData, 3e4) }, beforeDestroy() { this.interval && clearInterval(this.interval) } },
                n = o,
                l = a("2877"),
                c = a("f09f"),
                d = a("a370"),
                u = a("6ac0"),
                g = a("068f"),
                f = a("eebe"),
                h = a.n(f),
                m = Object(l["a"])(n, s, i, !1, null, null, null);
            e["a"] = m.exports;
            h()(m, "components", { QCard: c["a"], QCardSection: d["a"], QVideo: u["a"], QImg: g["a"] })
        },
        6064: function(t, e, a) {
            "use strict";
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("section", { staticClass: "margintop50" }, [a("div", { staticClass: "bg-linear-home" }, [a("div", { staticClass: "row justify-center" }, [a("div", { staticClass: "container-box" }, [a("div", { staticClass: "row justify-center" }, [a("div", { staticClass: "fontrussel", class: t.$q.screen.gt.sm ? "text-h4" : "text-h5" }, [t._v(t._s(t.$t("Find us on")))])]), a("div", { staticClass: "row q-col-gutter-xl justify-center items-center" }, [a("div", { staticClass: "col-auto" }, [a("a", { attrs: { href: "https://coinmarketcap.com/currencies/libero-financial/", target: "_blank" } }, [a("q-img", { attrs: { src: "https://storage.googleapis.com/libero-cdn/public/market/1coimakerketcap.png", width: "200px" } })], 1)]), a("div", { staticClass: "col-auto" }, [a("a", { attrs: { href: "https://defillama.com/protocol/libero-financial", target: "_blank" } }, [a("q-img", { attrs: { src: "https://storage.googleapis.com/libero-cdn/public/icon/defillama.svg", width: "200px" } })], 1)]), a("div", { staticClass: "col-auto" }, [a("a", { attrs: { href: "https://github.com/Rugfreecoins/Smart-Contract-Audits/blob/main/Libero%20Financial%20Token.pdf", target: "_blank" } }, [a("q-img", { attrs: { src: "https://storage.googleapis.com/libero-cdn/public/market/rugfree.png", width: "200px" } })], 1)]), a("div", { staticClass: "col-auto" }, [a("a", { attrs: { href: "https://thoreum.capital/ito/libero", target: "_blank" } }, [a("q-img", { attrs: { src: "https://storage.googleapis.com/libero-cdn/public/icon/logo-thor.webp", width: "200px" } })], 1)]), a("div", { staticClass: "col-auto" }, [a("a", { attrs: { href: "https://www.certik.com/projects/libero-financial", target: "_blank" } }, [a("q-img", { attrs: { src: "https://storage.googleapis.com/libero-cdn/public/icon/audited-by.webp", width: "200px" } })], 1)]), a("div", { staticClass: "col-auto" }, [a("a", { attrs: { href: "https://www.coingecko.com/en/coins/libero-financial", target: "_blank" } }, [a("q-img", { attrs: { src: "/icon/2coingecko.png", width: "200px" } })], 1)]), a("div", { staticClass: "col-auto" }, [a("a", { attrs: { target: "_blank", href: "https://www.investing.com/news/cryptocurrency-news/libero-announces-highestyield-saving-platform-with-159k-apy--7-busd-passive-income-2778349" } }, [a("q-img", { attrs: { src: "/icon/investing.webp", width: "200px" } })], 1)]), a("div", { staticClass: "col-auto" }, [a("a", { attrs: { target: "_blank", href: "https://coinquora.com/libero-announces-highest-yield-saving-platform-with-159k-apy-7-busd-passive-income/" } }, [a("q-img", { attrs: { src: "/icon/CQ-Logo.svg", width: "200px" } })], 1)]), a("div", { staticClass: "col-auto" }, [a("a", { attrs: { target: "_blank", href: "https://hotcoinmarket.com/libero-announces-highest-yield-saving-platform-with-159k-apy-and-7-busd-passive-income" } }, [a("q-img", { attrs: { src: "/icon/hot-coin-market.png", width: "200px" } })], 1)]), a("div", { staticClass: "col-auto" }, [a("a", { attrs: { target: "_blank", href: "https://www.bsc.news/post/libero-financial-ama-transcript" } }, [a("q-img", { attrs: { src: "/icon/bsc.svg", width: "200px" } })], 1)]), a("div", { staticClass: "col-auto" }, [a("a", { attrs: { target: "_blank", href: "https://www.youtube.com/watch?v=fSK8MTiQxqM" } }, [a("q-img", { attrs: { src: "/icon/youtube.png", width: "200px" } })], 1), a("br"), a("a", { attrs: { target: "_blank", href: "https://kalkinemedia.com/news/cryptocurrency/what-is-libero-financial-crypto-its-tokens-price-prediction" } }, [a("q-img", { attrs: { src: "/icon/kalkine_media_logo_svg.svg", width: "200px" } })], 1)]), a("div", { staticClass: "col-auto" }, [a("a", { attrs: { target: "_blank", href: "https://finance.yahoo.com/news/libero-financial-expands-158k-fixed-040000559.html?fr=sycsrp_catchall" } }, [a("q-img", { attrs: { src: "/icon/yahoo.png", width: "200px" } })], 1)]), a("div", { staticClass: "col-auto" }, [a("a", { attrs: { target: "_blank", href: "https://markets.businessinsider.com/news/stocks/work-till-you-die-or-financial-freedom-let-your-money-work-for-you-with-liberos-top-apy-158-893-59percent-plus-highest-busd-passive-income-226percent-apr-11183486" } }, [a("q-img", { attrs: { src: "/icon/insider.svg", width: "200px" } })], 1)]), a("div", { staticClass: "col-auto" }, [a("a", { attrs: { target: "_blank", href: "https://www.digitaljournal.com/pr/libero-financial-expands-its-158k-fixed-apy-auto-staking-yield-farming-product-to-fantom-network" } }, [a("q-img", { attrs: { src: "/icon/Digital-Journal-Logosm.png", width: "200px" } })], 1)]), a("div", { staticClass: "col-auto" }, [a("a", { attrs: { target: "_blank", href: "https://www.bloomberg.com/press-releases/2022-04-07/libero-financial-expands-its-158k-fixed-apy-auto-staking-yield-farming-product-to-fantom-network" } }, [a("q-img", { attrs: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/New_Bloomberg_Logo.svg/512px-New_Bloomberg_Logo.svg.png", width: "200px" } })], 1)]), a("div", { staticClass: "col-auto" }, [a("a", { attrs: { target: "_blank", href: "https://www.marketwatch.com/press-release/libero-financial-expands-its-158k-fixed-apy-auto-staking-yield-farming-product-to-fantom-network-2022-04-07" } }, [a("q-img", { attrs: { src: "/icon/marketwatch.svg", width: "200px" } })], 1)]), a("div", { staticClass: "col-auto" }, [a("a", { attrs: { target: "_blank", href: "https://www.benzinga.com/pressreleases/22/04/26515204/libero-financial-expands-its-158k-fixed-apy-auto-staking-yield-farming-product-to-fantom-network" } }, [a("q-img", { attrs: { src: "https://www.streetinsider.com/images/silogo-new.png", width: "200px" } })], 1)]), a("div", { staticClass: "col-auto" }, [a("a", { attrs: { target: "_blank", href: "https://www.nasdaq.com/press-release/libero-financial-expands-its-158k-fixed-apy-auto-staking-yield-farming-product-to" } }, [a("q-img", { attrs: { src: "/icon/nasdaq.svg", width: "200px" } })], 1)])])])])])])
                },
                i = [],
                r = (a("aaf3"), a("2877")),
                o = a("068f"),
                n = a("eebe"),
                l = a.n(n),
                c = {},
                d = Object(r["a"])(c, s, i, !1, null, "4d7e3bb6", null);
            e["a"] = d.exports;
            l()(d, "components", { QImg: o["a"] })
        },
        6969: function(t, e, a) {},
        7367: function(t, e, a) {
            "use strict";
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", { ref: "chartContainer", staticClass: "relative-position" }, [a("div", { ref: "chart" }), a("div", { ref: "chartTooltip", staticClass: "floating-tooltip" })])
                },
                i = [],
                r = a("8192"),
                o = a("f303");
            const { height: n, width: l } = o["c"];
            var c = {
                    props: { cData: { type: Object, default: () => [] }, cDataTax: { type: Array, default: () => [] }, cDataBuyBack: { type: Array, default: () => [] }, cDataProfit: { type: Array, default: () => [] }, height: { type: Number, default: 400 }, layout: { type: Object, default: () => ({}) }, areaOptions: { type: Object, default: () => ({}) }, tooltipTitle: { type: String, default: "" } },
                    watch: { cData: function(t) { this.chartSeries.setData(t), this.myChart.timeScale().fitContent() }, cDataTax: function(t) {}, cDataBuyBack: function(t) {}, cDataProfit: function(t) { this.chartSeriesProfit.setData(t) } },
                    data() { return { myChart: {}, chartLayout: { textColor: "#d1d4dc", backgroundColor: "#090d27", ...this.layout }, chartData: this.cData, chartSeries: {}, chartAreaOptions: { topColor: "rgba(38, 198, 218, 0.56)", bottomColor: "rgba(38, 198, 218, 0.04)", lineColor: "rgba(38, 198, 218, 1)", lineWidth: 2, crossHairMarkerVisible: !1, title: this.$t("Libero Insurance Treasury"), ...this.areaOptions }, chartDataTax: this.cDataTax, chartSeriesTax: {}, chartAreaOptionsTax: { topColor: "rgba(234,153,153, 0.56)", bottomColor: "rgba(234,153,153, 0.14)", lineColor: "rgba(234,153,153, 1)", lineWidth: 2, crossHairMarkerVisible: !1, title: this.$t("Libero Insurance Treasury") }, chartDataBuyBack: this.cDataBuyBack, chartSeriesBuyBack: {}, chartAreaOptionsBuyBack: { topColor: "rgba(234,153,12, 0.56)", bottomColor: "rgba(234,153,153, 0.14)", lineColor: "rgba(234,153,12, 1)", lineWidth: 2, crossHairMarkerVisible: !1, title: this.$t("Libero Insurance Treasury") }, chartDataProfit: this.cDataProfit, chartLineOptionsProfit: { lineWidth: 2, color: "rgba(23,255,12, 1)", crossHairMarkerVisible: !1, title: this.$t("Profit") }, chartSeriesProfit: {} } },
                    mounted() {
                        let t = this;
                        const e = Object(r["a"])(this.$refs.chart, { timeScale: { visible: !0, fixRightEdge: !0, fixLeftEdge: !0 }, leftPriceScale: { visible: !0 }, rightPriceScale: { visible: !1 }, layout: this.chartLayout, grid: { vertLines: { color: "rgba(42, 46, 57, 0)" }, horzLines: { color: "rgba(42, 46, 57, 0)" } }, watermark: { color: "rgba(255, 255, 255, 0.1)", visible: !0, text: "libero.finance", fontSize: 24, horzAlign: "left", vertAlign: "bottom" } });
                        this.myChart = e;
                        let a = l(this.$refs.chartContainer);
                        e.applyOptions({ priceScale: { autoScale: !0 }, leftPriceScale: { scaleMargins: { top: .25, bottom: .25 } } });
                        const s = e.addAreaSeries(this.chartAreaOptions);
                        this.chartSeries = s, s.setData(this.chartData);
                        const i = e.addLineSeries(this.chartAreaOptionsTax);
                        this.chartSeriesTax = i, this.chartDataTax.length > 0 && this.chartSeriesTax.setData(this.chartDataTax);
                        const o = e.addAreaSeries(this.chartAreaOptionsBuyBack);
                        this.chartSeriesBuyBack = o, this.chartDataBuyBack.length;
                        const n = e.addLineSeries(this.chartLineOptionsProfit);
                        this.chartSeriesProfit = n, this.chartDataProfit.length > 0 && this.chartSeriesProfit.setData(this.chartDataProfit), e.timeScale().fitContent(), e.resize(a, this.height);
                        let c = this.$refs.chartContainer,
                            d = this.$refs.chartTooltip,
                            u = 80,
                            g = 80,
                            f = 15,
                            h = t => t.year + "-" + t.month + "-" + t.day;
                        e.subscribeCrosshairMove((function(e) {
                            if (void 0 === e.point || !e.time || e.point.x < 0 || e.point.x > c.clientWidth || e.point.y < 0 || e.point.y > c.clientHeight) d.style.display = "none";
                            else {
                                const a = h(e.time);
                                d.style.display = "block";
                                let r = e.seriesPrices.get(s) || 0,
                                    l = e.seriesPrices.get(i) || 0,
                                    m = e.seriesPrices.get(o) || 0,
                                    p = e.seriesPrices.get(n) || 0;
                                d.innerHTML = '<div class="text-weight-bold">' + t.tooltipTitle + "</div>" + (r > 0 ? '<div><b><span style="color:rgba(38, 198, 218, 1)">' + Math.round(100 * r) / 100 + "</b></span></div>" : "") + (l > 0 ? '<div><b><span style="color:rgba(234,153,153, 1)">' + Math.round(100 * l) / 100 + "</span></b></div>" : "") + (m > 0 ? '<div><b><span style="color:rgba(234,153,12, 1)">' + Math.round(100 * m) / 100 + "</span></b></div>" : "") + (p > 0 ? '<div><b><span style="color:rgba(23,255,12, 1)">' + Math.round(100 * p) / 100 + "</span></b></div>" : "") + "<div><b>" + a + "</b></div>";
                                let b = s.priceToCoordinate(r),
                                    v = e.point.x - 50;
                                if (null === b) return;
                                v = Math.max(0, Math.min(c.clientWidth - u, v));
                                let w = b - g - f > 0 ? b - g - f : Math.max(0, Math.min(c.clientHeight - g - f, b + f));
                                d.style.left = v + "px", d.style.top = w + "px"
                            }
                        }))
                    },
                    methods: {}
                },
                d = c,
                u = (a("f018"), a("2877")),
                g = Object(u["a"])(d, s, i, !1, null, "a2001b98", null);
            e["a"] = g.exports
        },
        "8e34": function(t, e, a) {
            "use strict";
            a("6969")
        },
        a00e: function(t, e, a) {
            "use strict";
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", t._b({}, "div", t.$attrs, !1), [t.timeTarget.days ? a("span", [t._v(t._s(t.timeTarget.days) + " " + t._s(t.$t("Days")) + " ")]) : t._e(), a("span", [t._v(t._s(t.timeTarget.hours) + ":")]), a("span", [t._v(t._s(t.timeTarget.minutes) + ":")]), a("span", [t._v(t._s(t.timeTarget.seconds))])])
                },
                i = [],
                r = (a("e9c4"), a("2f62")),
                o = {
                    data() { return { timeTarget: { days: 0, hours: 0, minutes: 0, seconds: 0 } } },
                    computed: {...Object(r["b"])({ getTokenInfo: "farm/getTokenInfo" }), tokenInfo() { return JSON.parse(JSON.stringify(this.getTokenInfo)) } },
                    methods: {
                        getTimer() {
                            let t = this,
                                e = t.timeDistance(t.tokenInfo.nextRebase);
                            t.timeTarget = e.distance, t.interval = setInterval((function() {
                                let e = t.timeDistance(t.tokenInfo.nextRebase);
                                t.timeTarget = e.distance
                            }), 1e3)
                        }
                    },
                    mounted() { this.getTimer() },
                    beforeDestroy() { this.interval && clearInterval(this.interval) }
                },
                n = o,
                l = a("2877"),
                c = Object(l["a"])(n, s, i, !1, null, null, null);
            e["a"] = c.exports
        },
        a6ab: function(t, e, a) {
            "use strict";
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("section", {}, [a("div", {}, [a("div", { staticClass: "row justify-center q-py-md" }, [a("div", { staticClass: "container-box" }, [a("div", { staticClass: "row justify-between items-center" }, [a("div", { staticClass: "col-xs-12 col-md-auto text-center" }, [a("a", { attrs: { href: "#" } }, [a("q-img", { attrs: { src: "https://storage.googleapis.com/libero-cdn/public/v1/logo-home.webp", width: "150px" } })], 1)]), a("div", { staticClass: "col-auto" }, [a("div", { staticClass: "row q-col-gutter-lg justify-between items-center" }, [a("div", { staticClass: "col-auto" }, [a("q-btn", { staticClass: " menu_link q-px-sm", attrs: { href: t.$t("linkdocument"), dense: "", "no-caps": "", type: "a", unelevated: "" } }, [t._v(t._s(t.$t("Document")))])], 1), a("div", { staticClass: "col-auto", staticStyle: { position: "relative" } }, [a("q-btn", { staticClass: "menu_link q-px-sm", attrs: { href: "/promotions", dense: "", "no-caps": "", type: "a", unelevated: "" } }, [t._v(t._s(t.$t("Promotion")))]), a("q-badge", { staticClass: "qbabge", attrs: { align: "top", color: "orange-8" } }, [t._v("New")])], 1), a("div", { staticClass: "col-auto", staticStyle: { position: "relative" } }, [a("q-btn", { staticClass: "menu_link q-px-sm", attrs: { href: "/libero-bank", dense: "", "no-caps": "", type: "a", unelevated: "" } }, [t._v(t._s(t.$t("Libero Bank")))]), a("q-badge", { staticClass: "qbabge", attrs: { align: "top", color: "orange-8" } }, [t._v("New")])], 1), a("div", { staticClass: "col-auto", staticStyle: { position: "relative" } }, [a("q-btn", { staticClass: "menu_link q-px-sm", attrs: { href: "/smart-bond", dense: "", "no-caps": "", type: "a", unelevated: "" } }, [t._v(t._s(t.$t("Smart Bond")))]), a("q-badge", { staticClass: "qbabge", attrs: { align: "top", color: "purple" } }, [t._v("Beta")])], 1), a("div", { staticClass: "col-auto" }, [a("select-language")], 1), a("div", { staticClass: "col-auto" }, [a("a", { attrs: { href: "https://www.certik.com/projects/libero-financial", target: "_blank" } }, [a("q-img", { attrs: { width: "80px", src: "https://storage.googleapis.com/libero-cdn/public/icon/audited-by.webp" } })], 1)]), a("div", { staticClass: "col-xs-grow col-sm-auto" }, [a("q-btn", { staticClass: "button_effect button_effect2 fit", attrs: { "icon-right": "img:https://storage.googleapis.com/libero-cdn/public/icon/libero.png", dense: "", "no-caps": "", unelevated: "" }, on: { click: function(e) { return t.$root.$emit("showDialog", { type: "card-select-network", persistent: !0 }) } } }, [t._v(t._s(t.$t("open app")))])], 1)])])]), a("div", { staticClass: "fixed-social q-pa-md" }, [a("a", { attrs: { target: "_blank", href: "https://t.me/liberoofficialgroup" } }, [a("svg", { staticClass: "socialitem", attrs: { "aria-hidden": "true", "data-icon": "telegram", "data-prefix": "fab", focusable: "false", role: "img", viewBox: "0 0 496 512", xmlns: "http://www.w3.org/2000/svg" } }, [a("path", { attrs: { d: "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z", fill: "currentColor" } })])]), a("a", { attrs: { target: "_blank", href: "https://liberofinancial.medium.com/" } }, [a("svg", { staticClass: "socialitem", attrs: { "aria-hidden": "true", "data-icon": "medium-m", "data-prefix": "fab", focusable: "false", role: "img", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg" } }, [a("path", { attrs: { d: "M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z", fill: "currentColor" } })])]), a("a", { attrs: { target: "_blank", href: "https://www.facebook.com/liberofinancial/" } }, [a("svg", { staticClass: "socialitem", attrs: { "aria-hidden": "true", "data-icon": "facebook-f", "data-prefix": "fab", focusable: "false", role: "img", viewBox: "0 0 320 512", xmlns: "http://www.w3.org/2000/svg" } }, [a("path", { attrs: { d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z", fill: "currentColor" } })])]), a("a", { attrs: { target: "_blank", href: "https://twitter.com/LiberoFinancial" } }, [a("svg", { staticClass: "socialitem", attrs: { "aria-hidden": "true", "data-icon": "twitter", "data-prefix": "fab", focusable: "false", role: "img", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg" } }, [a("path", { attrs: { d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z", fill: "currentColor" } })])]), a("a", { attrs: { target: "_blank", href: "https://www.youtube.com/channel/UCkuCIjs-w5EpMlb9WGB4Lug" } }, [a("svg", { staticClass: "socialitem", attrs: { "aria-hidden": "true", "data-icon": "youtube", "data-prefix": "fab", focusable: "false", role: "img", viewBox: "0 0 576 512", xmlns: "http://www.w3.org/2000/svg" } }, [a("path", { attrs: { d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z", fill: "currentColor" } })])]), a("a", { attrs: { target: "_blank", href: t.$t("discordlink") } }, [a("svg", { staticClass: "socialitem", attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512" } }, [a("path", { attrs: { d: "M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z", fill: "currentColor" } })])])])])])])])
                },
                i = [],
                r = a("1924"),
                o = { components: { SelectLanguage: r["a"] } },
                n = o,
                l = (a("8e34"), a("2877")),
                c = a("068f"),
                d = a("9c40"),
                u = a("58a81"),
                g = a("eebe"),
                f = a.n(g),
                h = Object(l["a"])(n, s, i, !1, null, "2249a74c", null);
            e["a"] = h.exports;
            f()(h, "components", { QImg: c["a"], QBtn: d["a"], QBadge: u["a"] })
        },
        aaf3: function(t, e, a) {
            "use strict";
            a("1eea")
        },
        b617: function(t, e, a) {
            "use strict";
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("q-card", { staticClass: "bg-transparent" }, [a("q-card-section", { staticClass: "q-pa-none" }, [a("q-video", { staticClass: "rounded-borders q-mb-md", attrs: { src: t.currentVideo, ratio: 16 / 9 } }), a("div", { staticClass: "row q-col-gutter-md items-center" }, [t._l(t.displayList, (function(e, s) { return [a("div", { key: s, staticClass: "col-4" }, [a("q-img", { staticClass: "fit rounded-borders cursor-pointer", attrs: { src: e.thumb, ratio: 16 / 9 }, on: { click: function(a) { return t.switchVideo(e.id) } } })], 1)] }))], 2), a("div", { staticClass: "bg-white q-px-md q-py-xs rounded-borders q-mt-md" }, [a("a", { attrs: { href: "https://www.youtube.com/c/LiberoFinancial/", target: "_blank" } }, [a("span", { staticClass: "text-black text-h5 q-px-xs" }, [t._v("Official")]), a("q-img", { attrs: { src: "https://storage.googleapis.com/libero-cdn/public/icon/youtube-channel.png", width: "250px" } })], 1)])], 1)], 1)
                },
                i = [],
                r = {
                    data() { return { currentId: "", videoList: ["uj1N8cP4D8s", "kbguxaZicKQ", "4H9ecwR4G88", "if9WQeZt9CI"] } },
                    computed: {
                        currentVideo() { return "https://www.youtube.com/" + this.currentId + "?ref=0" },
                        displayList() {
                            let t = [],
                                e = this.videoList.filter((t => t !== this.currentId));
                            for (let a = 0; a < e.length; a++) t.push({ id: e[a], url: "https://www.youtube.com/" + e[a], thumb: "https://img.youtube.com/vi/" + e[a] + "/sddefault.jpg" });
                            return t
                        }
                    },
                    methods: { switchVideo(t) { this.currentId = t } },
                    mounted() { this.currentId = this.displayList[0].id }
                },
                o = r,
                n = a("2877"),
                l = a("f09f"),
                c = a("a370"),
                d = a("6ac0"),
                u = a("068f"),
                g = a("eebe"),
                f = a.n(g),
                h = Object(n["a"])(o, s, i, !1, null, null, null);
            e["a"] = h.exports;
            f()(h, "components", { QCard: l["a"], QCardSection: c["a"], QVideo: d["a"], QImg: u["a"] })
        },
        c9a0: function(t, e, a) {
            "use strict";
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("q-card", { staticClass: "bg-transparent", attrs: { flat: "" } }, [a("div", { staticClass: "row q-col-gutter-md q-mb-md items-stretch" }, [a("div", { staticClass: "col-xs-12 col-md-6" }, [a("q-card", { staticClass: "grow-box fit", attrs: { flat: "" } }, [a("q-card-section", [a("div", { staticClass: "text-grey-6 q-mb-sm" }, [t._v(t._s(t.$t("Your total referrals")))]), a("div", { staticClass: "q-mb-md" }, [0 === t.bankInfo.referralByLevel.length ? a("q-skeleton", { staticClass: "text-h4", attrs: { type: "text", width: "150px" } }) : a("span", { staticClass: "text-h5 text-green" }, [t._v(t._s(t.bankInfo.referralByLevel.reduce((function(t, e) { return t + e }), 0)) + " " + t._s(t.$t("users")))])], 1), a("div", { staticClass: "text-grey-6 q-mb-sm" }, [t._v(t._s(t.$t("Your LIBERO referral reward")))]), a("div", { staticClass: "q-mb-md" }, [0 === t.bankInfo.referralByLevel.length ? a("q-skeleton", { staticClass: "text-h4", attrs: { type: "text", width: "150px" } }) : a("span", { staticClass: "text-h5 text-green" }, [t._v(t._s(parseFloat(parseFloat(t.bankInfo.totalLiberoBonus).toFixed(2)).toLocaleString()) + " LIBERO")]), a("span", { staticClass: "q-ml-sm" }, [t._v("($" + t._s(parseFloat(t.bankInfo.totalLiberoBonusFiat.toFixed(2)).toLocaleString()) + ")")])], 1), a("div", { staticClass: "text-grey-6 q-mb-sm" }, [t._v(t._s(t.$t("Your BUSD referral reward")))]), a("div", { staticClass: "q-mb-md" }, [0 === t.bankInfo.referralByLevel.length ? a("q-skeleton", { staticClass: "text-h4", attrs: { type: "text", width: "150px" } }) : a("span", { staticClass: "text-h5 text-green" }, [t._v(t._s(parseFloat(parseFloat(t.bankInfo.totalBusdBonus).toFixed(2)).toLocaleString()) + " BUSD")])], 1), a("div", { staticClass: "text-grey-6 q-mb-sm" }, [t._v(t._s(t.$t("Pending $LIBERO reward")))]), a("div", { staticClass: "q-mb-md" }, ["" === t.bankInfo.liberoBonus ? a("q-skeleton", { staticClass: "text-h4", attrs: { type: "text", width: "150px" } }) : [a("span", { staticClass: "text-h5 text-green" }, [t._v(t._s(parseFloat(parseFloat(t.bankInfo.liberoBonus).toFixed(2)).toLocaleString()) + " LIBERO")]), a("span", { staticClass: "q-ml-sm" }, [t._v("($" + t._s(parseFloat(t.bankInfo.liberoBonusFiat.toFixed(2)).toLocaleString()) + ")")])]], 2), a("div", { staticClass: "text-grey-6 q-mb-sm" }, [t._v(t._s(t.$t("Pending $BUSD Reward")))]), a("div", { staticClass: "q-mb-md" }, ["" === t.bankInfo.busdBonus ? a("q-skeleton", { staticClass: "text-h4", attrs: { type: "text", width: "150px" } }) : a("span", { staticClass: "text-h5 text-green" }, [t._v(t._s(parseFloat(parseFloat(t.bankInfo.busdBonus).toFixed(2)).toLocaleString()) + " BUSD")])], 1)]), a("q-card-actions", { attrs: { align: "center" } }, [a("div", { staticClass: "row justify-center items-center q-mb-md" }, [t.isLogon ? a("div", { staticClass: "col-auto" }, [a("q-btn", { staticClass: "q-px-md", attrs: { unelevated: "", color: "orange", "no-caps": "", size: "lg", loading: t.isLoading }, on: { click: t.doClaimReferralBonus } }, [t._v(t._s(t.$t("Claim Referral Rewards")))])], 1) : t._e()])])], 1)], 1), a("div", { staticClass: "col-xs-12 col-md-6" }, [a("q-card", { staticClass: "grow-box fit", attrs: { flat: "" } }, [a("q-card-section", [a("div", { staticClass: "text-h5 q-mb-sm" }, [t._v(t._s(t.$t("Your referral link")))]), a("div", { staticClass: "q-mb-md" }, [a("q-input", { attrs: { value: t.referralLink, dense: "", outlined: "" }, on: { click: t.copyReferralLink }, scopedSlots: t._u([{ key: "after", fn: function() { return [a("q-btn", { attrs: { label: t.textCopy, color: "orange", "no-caps": "", "text-color": "white", unelevated: "" }, on: { click: t.copyReferralLink } })] }, proxy: !0 }]) })], 1), a("div", { staticClass: "q-mb-md" }, [a("div", [t._v(t._s(t.$t("bank_p14")))]), a("div", [t._v(t._s(t.$t("bank_p15")))]), a("div", [t._v(".....")])]), a("section", { staticClass: "q-mb-md" }, [a("div", { staticClass: "text-body1 q-mb-sm text-grey-6" }, [t._v(t._s(t.$t("Earning $LIBERO by Levels")))]), a("div", { staticClass: "row justify-center items-center q-col-gutter-md" }, [t._l(t.bankInfo.referralLiberoPercents, (function(e, s) { return [a("div", { key: s, staticClass: "col-auto" }, [a("div", [t._v("Lv" + t._s(s + 1) + ": "), a("span", { staticClass: "text-yellow" }, [t._v(t._s(e / 100) + "%")])]), a("div", { staticClass: "text-center text-h6" }, [t._v(t._s(t.bankInfo.referralByLevel[s]))])])] }))], 2)]), a("section", [a("div", { staticClass: "text-body1 q-mb-sm text-grey-6" }, [t._v(t._s(t.$t("Earning $BUSD by Levels")))]), a("div", { staticClass: "row justify-center items-center q-col-gutter-md" }, [t._l(t.bankInfo.referralBusdPercents, (function(e, s) { return [a("div", { key: s, staticClass: "col-auto" }, [a("div", [t._v("Lv" + t._s(s + 1) + ": "), a("span", { staticClass: "text-yellow" }, [t._v(t._s(e / 100) + "%")])]), a("div", { staticClass: "text-center text-h6" }, [t._v(t._s(t.bankInfo.referralByLevel[s]))])])] }))], 2)])])], 1)], 1)])])
                },
                i = [],
                r = (a("e9c4"), a("a79d"), a("2f62")),
                o = a("cdde"),
                n = { data() { return { isLoading: !1, textCopy: "Copy" } }, computed: {...Object(r["b"])({ isLogon: "auth/isLogon", getAccount: "auth/getAccount", getTokenInfo: "farm/getTokenInfo", getBankInfo: "farm/getBankInfo" }), bankInfo() { return JSON.parse(JSON.stringify(this.getBankInfo)) }, tokenInfo() { return JSON.parse(JSON.stringify(this.getTokenInfo)) }, referralLink() { return "https://libero.financial/?ref=" + this.getAccount } }, methods: { copyReferralLink() { Object(o["a"])(this.referralLink), this.textCopy = "Copied" }, doClaimReferralBonus() { this.isLoading = !0, this.$store.dispatch("farm/writeBankContract", { action: "claimReferralBonus", account: this.getAccount }).then((t => { this.$root.$emit("showMessage", t), this.$emit("close") })).catch((t => { this.$root.$emit("showMessage", { status: !1, message: t.message }) })).finally((() => { this.isLoading = !1 })) } } },
                l = n,
                c = a("2877"),
                d = a("f09f"),
                u = a("a370"),
                g = a("293e"),
                f = a("4b7e"),
                h = a("9c40"),
                m = a("27f9"),
                p = a("eebe"),
                b = a.n(p),
                v = Object(c["a"])(l, s, i, !1, null, null, null);
            e["a"] = v.exports;
            b()(v, "components", { QCard: d["a"], QCardSection: u["a"], QSkeleton: g["a"], QCardActions: f["a"], QBtn: h["a"], QInput: m["a"] })
        },
        d8b7: function(t, e, a) {
            "use strict";
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", [t.$q.screen.gt.sm ? [a("q-img", { staticClass: "rounded-borders", attrs: { src: "/landing/2steps-bank.webp" } })] : [a("div", [a("q-img", { attrs: { src: "/landing/F0.webp" } })], 1), a("div", [a("q-img", { attrs: { src: "/landing/F1.webp" } })], 1), a("div", [a("q-img", { attrs: { src: "/landing/F2.webp" } })], 1), a("div", [a("q-img", { attrs: { src: "/landing/F3.webp" } })], 1), a("div", [a("q-img", { attrs: { src: "/landing/F4.webp" } })], 1)]], 2)
                },
                i = [],
                r = a("2877"),
                o = a("068f"),
                n = a("eebe"),
                l = a.n(n),
                c = {},
                d = Object(r["a"])(c, s, i, !1, null, null, null);
            e["a"] = d.exports;
            l()(d, "components", { QImg: o["a"] })
        },
        e932: function(t, e, a) {},
        e97d: function(t, e, a) {
            "use strict";
            a("3940")
        },
        f018: function(t, e, a) {
            "use strict";
            a("5b83")
        },
        f0ed: function(t, e, a) {
            "use strict";
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("section", {}, [a("div", { staticClass: "bg-linear-footer" }, [a("div", { staticClass: "row justify-center" }, [a("div", { staticClass: "container-box" }, [a("div", { staticClass: "row colflexcenter" }, [a("div", [a("h2", { staticClass: "defautfont text_color_1 font25", staticStyle: { "line-height": "0px !important" } }, [t._v(t._s(t.$t("KEEP IN TOUCH")))])])]), a("div", { staticClass: "row colflexcenter" }, [a("div", [a("a", { attrs: { href: "https://twitter.com/LiberoFinancial" } }, [a("svg", { staticClass: "socialbutton", attrs: { "aria-hidden": "true", "data-icon": "twitter", "data-prefix": "fab", focusable: "false", role: "img", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg" } }, [a("path", { attrs: { d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z", fill: "currentColor" } })])])]), a("div", [a("a", { attrs: { href: "https://t.me/liberoofficialgroup" } }, [a("svg", { staticClass: "socialbutton", attrs: { "aria-hidden": "true", "data-icon": "telegram", "data-prefix": "fab", focusable: "false", role: "img", viewBox: "0 0 496 512", xmlns: "http://www.w3.org/2000/svg" } }, [a("path", { attrs: { d: "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z", fill: "currentColor" } })])])]), a("div", [a("a", { attrs: { href: "https://www.youtube.com/channel/UCkuCIjs-w5EpMlb9WGB4Lug" } }, [a("svg", { staticClass: "socialbutton", attrs: { "aria-hidden": "true", "data-icon": "youtube", "data-prefix": "fab", focusable: "false", role: "img", viewBox: "0 0 576 512", xmlns: "http://www.w3.org/2000/svg" } }, [a("path", { attrs: { d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z", fill: "currentColor" } })])])]), a("div", [a("a", { attrs: { href: "https://liberofinancial.medium.com/" } }, [a("svg", { staticClass: "socialbutton", attrs: { "aria-hidden": "true", "data-icon": "medium-m", "data-prefix": "fab", focusable: "false", role: "img", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg" } }, [a("path", { attrs: { d: "M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z", fill: "currentColor" } })])])]), a("div", [a("a", { attrs: { href: "#" } }, [a("svg", { staticClass: "socialbutton", attrs: { "aria-hidden": "true", "data-icon": "github", "data-prefix": "fab", focusable: "false", role: "img", viewBox: "0 0 496 512", xmlns: "http://www.w3.org/2000/svg" } }, [a("path", { attrs: { d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z", fill: "currentColor" } })])])])]), a("div", { staticClass: "row" }, [a("div", { staticClass: "col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6" }, [a("h4", { staticClass: "defautfont margin0 font25" }, [t._v(t._s(t.$t("Socials")))]), a("ul", { staticClass: "ullist margin0" }, [a("li", { staticClass: "defautfont font14" }, [a("a", { staticClass: "hrefbottom", attrs: { href: "https://twitter.com/LiberoFinancial" } }, [a("svg", { staticClass: "svg-inline--fa fa-twitter fa-w-16", attrs: { "aria-hidden": "true", "data-icon": "twitter", "data-prefix": "fab", focusable: "false", role: "img", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg" } }, [a("path", { attrs: { d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z", fill: "currentColor" } })]), t._v("\n                  Twitter")])]), a("li", { staticClass: "defautfont font14" }, [a("a", { staticClass: "hrefbottom", attrs: { href: t.$t("discordlink") } }, [a("svg", { attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512" } }, [a("path", { attrs: { d: "M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z", fill: "currentColor" } })]), t._v("\n                  Discord")])]), a("li", { staticClass: "defautfont font14" }, [a("a", { staticClass: "hrefbottom", attrs: { href: "https://t.me/liberoofficialgroup" } }, [a("svg", { staticClass: "svg-inline--fa fa-telegram fa-w-16", attrs: { "aria-hidden": "true", "data-icon": "telegram", "data-prefix": "fab", focusable: "false", role: "img", viewBox: "0 0 496 512", xmlns: "http://www.w3.org/2000/svg" } }, [a("path", { attrs: { d: "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z", fill: "currentColor" } })]), t._v("\n                  Telegram")])]), a("li", { staticClass: "defautfont font14" }, [a("a", { staticClass: "hrefbottom", attrs: { href: "https://www.youtube.com/channel/UCkuCIjs-w5EpMlb9WGB4Lug" } }, [a("svg", { staticClass: "svg-inline--fa fa-youtube fa-w-18", attrs: { "aria-hidden": "true", "data-icon": "youtube", "data-prefix": "fab", focusable: "false", role: "img", viewBox: "0 0 576 512", xmlns: "http://www.w3.org/2000/svg" } }, [a("path", { attrs: { d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z", fill: "currentColor" } })]), t._v("\n                  Youtube")])]), a("li", { staticClass: "defautfont font14" }, [a("a", { staticClass: "hrefbottom", attrs: { href: "https://liberofinancial.medium.com/" } }, [a("svg", { staticClass: "svg-inline--fa fa-medium-m fa-w-16", attrs: { "aria-hidden": "true", "data-icon": "medium-m", "data-prefix": "fab", focusable: "false", role: "img", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg" } }, [a("path", { attrs: { d: "M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z", fill: "currentColor" } })]), t._v("\n                  Medium")])]), a("li", { staticClass: "defautfont font14" }, [a("a", { staticClass: "hrefbottom", attrs: { href: "#" } }, [a("svg", { staticClass: "svg-inline--fa fa-github fa-w-16", attrs: { "aria-hidden": "true", "data-icon": "github", "data-prefix": "fab", focusable: "false", role: "img", viewBox: "0 0 496 512", xmlns: "http://www.w3.org/2000/svg" } }, [a("path", { attrs: { d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z", fill: "currentColor" } })]), t._v("\n                  Github")])])])]), a("div", { staticClass: "col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6" }, [a("h4", { staticClass: "defautfont margin0 font25" }, [t._v(t._s(t.$t("Products")))]), a("ul", { staticClass: "ullist margin0" }, [a("li", { staticClass: "defautfont font14" }, [a("a", { staticClass: "hrefbottom", attrs: { href: "https://libero.financial/app" } }, [t._v(t._s(t.$t("Automatic-Staking")))])]), a("li", { staticClass: "defautfont font14" }, [a("a", { staticClass: "hrefbottom", attrs: { href: "https://libero.financial/libero-bank" } }, [t._v(t._s(t.$t("FEFE Bank")))])]), a("li", { staticClass: "defautfont font14" }, [a("a", { staticClass: "hrefbottom", attrs: { href: "https://libero.financial/smart-bond" } }, [t._v(t._s(t.$t("Smart Bond")))])])])]), a("div", { staticClass: "col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6" }, [a("h4", { staticClass: "defautfont margin0 font25" }, [t._v(t._s(t.$t("Learn")))]), a("ul", { staticClass: "ullist margin0" }, [a("li", { staticClass: "defautfont font14" }, [a("a", { staticClass: "hrefbottom", attrs: { href: t.$t("linkdocument") } }, [t._v(t._s(t.$t("Documentation")))])]), a("li", { staticClass: "defautfont font14" }, [a("a", { staticClass: "hrefbottom", attrs: { href: "medium.com/" } }, [t._v(t._s(t.$t("Medium")))])])])]), a("div", { staticClass: "col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6" }, [a("q-btn", { staticClass: "button_effect button_effect1", attrs: { dense: "", "no-caps": "", target: "_blank", to: "/app", unelevated: "" } }, [t._v(t._s(t.$t("open app")))])], 1)])])])])])
                },
                i = [],
                r = {},
                o = r,
                n = (a("e97d"), a("2877")),
                l = a("9c40"),
                c = a("eebe"),
                d = a.n(c),
                u = Object(n["a"])(o, s, i, !1, null, "3e199950", null);
            e["a"] = u.exports;
            d()(u, "components", { QBtn: l["a"] })
        }
    }
]);
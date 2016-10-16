$.ajax({
    url: "http://data.bilibili.com/e/p",
    type: "HEAD",
    xhrFields: {withCredentials: true},
    headers: {Accept: "text/html," + document.referrer}
});
function dssend(a, b) {
    $.ajax({
        url: "http://data.bilibili.com/e/" + a + "/" + b,
        type: "HEAD",
        xhrFields: {withCredentials: true},
        headers: {Accept: "text/html," + document.referrer}
    })
}
function dsonce(a, b, c) {
    $(a).live("click", function () {
        dssend("h5-" + b, c);
        $(a).die("click")
    })
}
dsonce(".load-layer,.btn-play", "play", 0);
dsonce(".btn-comment", "pinbi", 0);
dsonce(".btn-share", "share", "click");
dsonce(".btn-widescreen", "screen", 0);
dsonce(".launch-app", "down", "s");
$(".share-list a").live("click", function () {
    dssend("h5-share", $(this).attr("provider"))
});
$(".b-app-dl").one("click", function () {
    dssend("h5-down", "d")
});
$(".list-item").live("click", function () {
    dssend("h5-tj", $(this).attr("href").match(/av\d+/).toString() + "-" + $(".list-item").index($(this)))
});
(function (a, b, c, d) {
    if (!a) {
        console.warn("rec.js needs jQuery.");
        return
    }
    if (!b.rec_rp) {
        b.rec_rp = function () {
            (b.rec_rp.q = b.rec_rp.q || []).push(arguments)
        }
    }
    var e = (new Date).getTime();
    var f = Math.round(e / 1e3);
    var g = d.href;
    var h = d.host;
    var i = d.pathname;
    var j = /(\.(bilibili|biligame|bilibiliyoo|im9)\.com|\.mimi\.gg)/;
    var k = /^https?:\/\/m\.|\/(mobile|h5|phone|m)\//;
    var l = function (a) {
        var b = a.match(j);
        return b ? b[1] : false
    }(h);
    var m = new Date(e + 3 * 365 * 24 * 36e5);
    var n = {};
    var o = {};
    var p = {
        startTime: e,
        stopClose: false,
        isAutoPV: true,
        hasFirstResponse: false,
        module: "main",
        isVisibleFunc: function (a) {
            return ["setField", "pageview", "click", "show", "event", "send", "autoPV"].indexOf(a) > -1
        },
        setBase: function (a, b) {
            q[a] = b
        },
        setModule: function (a) {
            p.module = a
        },
        setField: function (a, b, c, d) {
            if (!(a && b))return;
            var e = {}, f;
            if (typeof b == "string") {
                e[b] = c
            } else if (typeof b == "object") {
                e = b;
                d = c
            }
            if (!(a instanceof Array)) {
                a = [a]
            }
            for (var g = 0, h = a.length; g < h; g++) {
                f = a[g];
                for (var i in e) {
                    e[i] = e[i] || "";
                    f == "base" ? p.setModule(e[i]) : r(f, i, e[i], d)
                }
            }
        },
        getField: function (a, b) {
            if (!(a && b))return "";
            if (a == "base") {
                return b == "module" ? p.module : q[b]
            } else {
                a = a.replace(/^click$/, "home_page_click").replace(/^show$/, "web_module_show");
                return n[a] && n[a][b] ? n[a][b][0] : ""
            }
        },
        setCookie: function (a, b, d, e) {
            e = e || l;
            c.cookie = a + "=" + b + ";expires=" + d.toGMTString() + ";domain=" + e + ";path=/";
            return b
        },
        getCookie: function (a) {
            var b = "" + c.cookie;
            var d = new RegExp(a + "=([^;]*)");
            var e = b.match(d);
            if (e) {
                return decodeURIComponent(e[1])
            }
            return ""
        },
        getUrlParam: function (a, b) {
            var c = b || d.search;
            var e = new RegExp("[\\?|&]" + a + "=([^&#]*)(&|$)");
            var f = c.match(e);
            if (f != null)return f[1]; else return ""
        },
        getHashParam: function (a, b) {
            var c = b || d.hash;
            var e = new RegExp("[#|!|&]" + a + "=([^&?]*)(&|\\?|$)");
            var f = c.match(e);
            if (f != null)return f[1]; else return ""
        },
        timer: function E() {
            var a = (new Date).getTime() - e;
            if (a > 6048e5 || a < 0) {
                a = 0
            }
            return a.toString()
        },
        startQueue: null,
        pageview: A,
        click: B,
        show: C,
        event: D,
        send: u,
        autoPV: function (a) {
            p.isAutoPV = a
        },
        adShow: function (a, b) {
            if (!a)return;
            rec_rp("web_resource_pos", {event: "show", pos: a, ids: b})
        },
        adClick: function (a, b, c) {
            if (!a)return;
            rec_rp("web_resource_pos", {event: "click", pos: a, ids: b || "", index: c || ""})
        }
    };
    rec_rp("setField", "web_resource_pos", {clickurl: "", title: "", index: ""});
    b.dataRec = p;
    var q = {
        mid: p.getCookie("DedeUserID"),
        fts: l ? p.getCookie("fts") || p.setCookie("fts", f, m) : "",
        url: "",
        proid: 1,
        ptype: g.match(k) ? 2 : 1,
        other: ""
    };

    function r(a, b, c, d) {
        a = a.replace(/^click$/, "home_page_click").replace(/^show$/, "web_module_show");
        n[a] = n[a] || {};
        n[a][b] = [c, !!d]
    }

    function s(a, b) {
        var c = [];
        var d = b ? [",", ":"] : ["&", "="];
        for (var e in a) {
            if (a.hasOwnProperty(e)) {
                a[e] = a[e].toString().replace(/\s/g, "_").replace(/,/g, "&prime;").replace(/\|/g, "&brvbar;");
                c.push(e + d[1] + encodeURIComponent(a[e]))
            }
        }
        return c.join(d[0])
    }

    function t(a, b) {
        var c = "data.bilibili.com";
        var d = [c, "v", "web", a].join("/");
        return location.protocol + "//" + d + "?" + s(b) + "&_=" + (new Date).getTime()
    }

    function u(a, b) {
        p.setBase("url", encodeURIComponent(location.href));
        var c = w({}, q, x(a, b));
        y(t(a, c))
    }

    function v(a) {
        return a === undefined || a === null
    }

    function w() {
        var a;
        var b = arguments[0] && typeof arguments[0] == "object" ? arguments[0] : {};
        for (var c = 1, d = arguments.length; c < d; c++) {
            if (typeof arguments[c] != "object")continue;
            a = arguments[c];
            for (var e in a) {
                if (!v(b[e]) && b[e] === a[e])continue;
                b[e] = v(a[e]) ? "" : a[e]
            }
        }
        return b
    }

    function x(a, b) {
        var c = n[a] || {};
        var d = w({}, b);
        for (var e in c) {
            if (!b[e] || c[e][1]) {
                d[e] = c[e][0]
            }
        }
        return d
    }

    function y(a) {
        var b = new XMLHttpRequest;
        if ("withCredentials" in b) {
            b.open("get", a);
            if (!p.hasFirstResponse) {
                b.onreadystatechange = function () {
                    if (b.readyState === XMLHttpRequest.DONE && b.status === 200) {
                        p.hasFirstResponse = true;
                        p.startQueue()
                    }
                }
            }
            b.withCredentials = true;
            b.send(null)
        } else {
            z(a);
            if (!p.hasFirstResponse) {
                p.hasFirstResponse = true;
                p.startQueue()
            }
        }
    }

    function z(a) {
        var b = c.getElementsByTagName("head")[0];
        var d = c.createElement("script");
        b.appendChild(d);
        d.src = a;
        b.removeChild(d)
    }

    function A(a, b) {
        var d = {module: p.module || "main", title: c.title, ajaxtag: a || "", ajaxid: b || "", page_ref: c.referrer};
        u("web_page_view", d)
    }

    function B(a, b, c) {
        if (!a)return;
        var e = {
            pageid: encodeURIComponent(d.protocol + "//" + h + i),
            module: p.module || "main",
            linkid: a,
            title: b || "",
            href: encodeURIComponent(c || ""),
            span: p.timer(),
            value: "",
            result: ""
        };
        u("home_page_click", e)
    }

    function C(a, b) {
        if (!a || o[a])return;
        var c = {
            pageurl: encodeURIComponent(d.protocol + "//" + h + i),
            module: p.module || "main",
            showid: a,
            span: p.timer()
        };
        u("web_module_show", c);
        o[a] = !b
    }

    function D(a, b) {
        if (!a)return;
        var c = x(a, b);
        u("web_count_event", {eid: a, args: s(c, true)})
    }

    b.onbeforeunload = function () {
        if (!p.stopClose) {
            rec_rp("web_page_close", {title: c.title, begin: f, staytime: p.timer()})
        }
        p.stopClose = false
    }
})(window.jQuery || window.Zepto, window, window.document, window.location);
(function (a) {
    if (!a)return;
    var b = location.pathname;
    var c = location.href;
    var d = location.host.match(/(.+)\.bilibili\.com/);
    if (d != null && d[1] != "www") {
        switch (d[1]) {
            case"message":
                a.module = "notice";
                break;
            case"h":
                a.setBase("proid", 2);
                a.module = "hua";
                break;
            default:
                a.module = d[1]
        }
    }
    if (b.indexOf("/help.html") >= 0) {
        a.module = "help"
    } else if (b.indexOf("/topic/") >= 0) {
        a.module = "topic"
    } else if (b.indexOf("/ranking") >= 0) {
        a.module = "rank"
    } else if (b.indexOf("/dynamic") >= 0) {
        a.module = "dynamic"
    } else if (c.indexOf("/#video_submit") >= 0 || c.indexOf("/v/video/submit.html") >= 0) {
        a.module = "up"
    } else if (c.indexOf("/#favorite_manage") >= 0) {
        a.module = "favorite"
    }
})(window.dataRec);
(function (a) {
    if (!a)return;
    rec_rp("setField", ["h5_download_v2", "h5_share_v2", "h5_play_v2"], {
        source: a.h5Source || a.getUrlParam("from"),
        share_source: a.getUrlParam("share"),
        pagesize: window.screen.width + ":" + window.screen.height
    });
    function b(a) {
        rec_rp("h5_download_v2", {clickid: a})
    }

    var c;
    document.body.addEventListener("click", function (d) {
        d = d || window.event;
        var e = d.target;
        var f = e.parentNode;
        if (e.classList.contains("launch-app")) {
            c = 3;
            a.stopClose = true
        } else if (e.classList.contains("btn-download") || f.classList.contains("btn-download")) {
            c = 8
        } else if (e.classList.contains("bottom-btn")) {
            c = 2;
            a.stopClose = true
        } else if (e.classList.contains("up-follow")) {
            c = 6;
            a.stopClose = true
        } else if (e.classList.contains("sp-order-btn")) {
            c = 9
        } else if (e.classList.contains("order-btn") || f.classList.contains("order-btn")) {
            c = 10;
            a.stopClose = true
        } else if (e.classList.contains("player-inner-download")) {
            b(4)
        }
    }, true);
    $("body").on("click", ".b-app-dl", function () {
        b(1)
    }).on("click", ".player-inner-top > a", function () {
        b(5)
    }).on("click", ".download-link > a", function () {
        b(7)
    }).on("click", ".float-notice-download", function () {
        b(c);
        a.stopClose = true
    })
})(window.dataRec);
(function (a) {
    if (!a)return;
    var b = {optype: "1", word: "", tiptype: "", tiplist: "", clickvalue: "", clicktype: "0", seid: ""};
    var c = {
        length: 0, count: 0, checkTimer: null, startCheck: function () {
            this.tipsObj = $(".bilibili-suggest").last();
            this.count = 0;
            clearTimeout(this.checkTimer);
            this.checkChange()
        }, checkChange: function () {
            var a = this;
            var b;
            clearTimeout(a.checkTimer);
            if (a.count >= 20) {
                return false
            }
            if (a.tipsObj[0].style.display == "none" || a.tipsObj.html().length === a.length) {
                a.count++;
                a.checkTimer = setTimeout(function () {
                    a.checkChange()
                }, 500);
                return false
            }
            a.length = a.tipsObj.html().length;
            if ($("[name='keyword']").last().val()) {
                b = 2
            } else {
                b = 1
            }
            d(b)
        }
    };

    function d(a) {
        var c;
        b.word = $("[name='keyword']").last().val() || "";
        b.tiptype = a || 1;
        c = $.extend({}, b);
        rec_rp("home_search_tip", c)
    }

    function e(a, c) {
        var d = {optype: 2, clickvalue: a || "", clicktype: c || ""};
        var e = $.extend({}, b, d);
        rec_rp("home_search_tip", e)
    }

    $("body").on("click", ".suggest-item", function (a) {
        var c = this.childNodes[0].childNodes[0].textContent || "";
        if (b.tiptype == 1) {
            e(c, 6)
        } else {
            e(c, 5)
        }
    });
    $("[name='keyword']").on("click", function (a) {
        c.startCheck()
    }).on("keyup", function (a) {
        c.startCheck()
    })
})(window.dataRec);
(function (a) {
    if (!a || a.module != "promote" && a.getField("base", "ptype") != 2)return;
    rec_rp("setField", "h5_share_v2", {
        clickpage: function () {
            var a = location.href;
            var b = [/\/video\//, /\/tag\//, /\/bangumi\//, /\/\d+\/mobile\/video$/, /\/\d+\/mobile\/fav/, /\/live\.bilibili\.com\/h5\/\d+$/];
            for (var c = 0, d = b.length; c < d; c++) {
                if (a.match(b[c]))return c + 1
            }
            return 7
        }()
    });
    function b(a) {
        rec_rp("h5_share_v2", {clickid: a})
    }

    if ($(".share-box").length) {
        $(".weibo").on("click", function () {
            b(1)
        });
        $(".qzone").on("click", function () {
            b(2)
        });
        $(".wx").on("click", function () {
            b(3)
        });
        $(".pyq").on("click", function () {
            b(4)
        });
        $(".qq").on("click", function () {
            b(5)
        });
        $(".tieba").on("click", function () {
            b(6)
        });
        $(".other").on("click", function () {
            b(7)
        })
    } else {
        document.body.addEventListener("click", function (a) {
            var c = $(a.target);
            if (c.hasClass("weibo") || c.parent().hasClass("weibo")) {
                b(1)
            } else if (c.hasClass("qzone") || c.parent().hasClass("qzone")) {
                b(2)
            } else if (c.hasClass("wx") || c.parent().hasClass("wx")) {
                b(3)
            } else if (c.hasClass("pyq") || c.parent().hasClass("pyq")) {
                b(4)
            } else if (c.hasClass("qq") || c.parent().hasClass("qq")) {
                b(5)
            } else if (c.hasClass("tieba") || c.parent().hasClass("tieba")) {
                b(6)
            } else if (c.hasClass("other") || c.parent().hasClass("other")) {
                b(7)
            }
        }, true)
    }
})(window.dataRec);
(function (a) {
    if (!a)return;
    if (location.href.match(/ranking\.html/)) {
        $(".rank-links, .roll-bar.ranking").on("click", "li", function () {
            rec_rp("pageview", null, $(this).attr("type") || $(this).attr("tid"))
        })
    }
})(window.dataRec);
(function (a, b, c) {
    var d = location.href;
    if (!d.match(/\/video\//)) {
        return false
    }
    var e = "";
    var f = "";
    var g = "";
    var h = c.title || "";
    var i = $("#change_to_computer").attr("aid") || "";
    rec_rp("setField", "h5_play_v2", {avid: i});
    var j = {
        eventtype: "",
        title: h || "",
        seasonid: "",
        epid: "",
        avid: i,
        cid: "",
        pname: "1",
        duration: "0",
        currenttime: "0",
        readystate: ""
    };

    function k(a) {
        var b;
        b = new RegExp("\\/av(\\d+)\\.html");
        var c = a.match(b);
        return c !== null ? c[1] : ""
    }

    function l() {
        n = false;
        var a = $(".recommend-comment .channel-in").children().not(".list");
        var b = {
            title: h,
            avid: i,
            count: a.length || "0",
            bangumicount: a.filter(".season-info").length || "0",
            videocount: a.not(".season-info").length || "0"
        };
        rec_rp("home_recomment_show", b)
    }

    function m(a, b) {
        var c = {title: h, avid: i, clickid: a, clicktitle: b, itemtype: "1"};
        rec_rp("home_recomment_click", c)
    }

    var n = true;
    var o = $(".recommend-comment .channel-in");
    $(b).scroll(function () {
        var a = o.find(".cover").eq(0);
        if (n && a.attr("loaded") == "loaded") {
            l()
        }
    });
    o.on("click", "a", function () {
        if (!$(this).hasClass("load-more")) {
            m(k($(this).attr("href")), $(this).attr("title"))
        }
    });
    function p() {
        var a = $("video").children("source");
        var b = a.attr("src");
        var c = b.match(/\/(\d+)[^\/]*\.mp4/);
        if (c && !g)g = c[1];
        var d = {cate: e, subcate: f, avid: i, cid: g || ""};
        rec_rp("home_hide_bullet", d)
    }

    var q = false;
    var r = false;
    var s = null;

    function t(a, b) {
        rec_rp("h5_play_v2", {play_time: Math.round(a).toString(), is_end: b})
    }

    $("body").on("click", ".btn-comment", function () {
        if (!r) {
            r = true;
            p()
        }
    }).on("click", ".load-layer", function () {
        w.call($("video")[0], 2)
    }).on("click", ".btn-play", function () {
        w.call($("video")[0], 2)
    }).on("click", ".pause-icon", function () {
        w.call($("video")[0], 2)
    }).on("click", ".btn-pause", function () {
        w.call($("video")[0], 3)
    }).on("click", ".play-icon", function () {
        w.call($("video")[0], 3)
    });
    function u() {
        s = setInterval(function () {
            var a = $("video").not("[load]");
            if (a.length > 0) {
                clearInterval(s);
                a.attr("load", "loaded");
                r = false;
                n = true;
                a.on("loadstart", function () {
                    var a = this;
                    w.call(this, 1);
                    $(window).on("beforeunload", function () {
                        t(a.currentTime, 2)
                    })
                }).on("seeking", function () {
                    if (!q) {
                        q = true;
                        w.call(this, 4);
                        setTimeout(function () {
                            q = false
                        }, 1e3)
                    }
                }).on("abort", function () {
                    w.call(this, 5)
                }).on("ended", function () {
                    w.call(this, 6);
                    t(this.duration, 1)
                })
            }
        }, 500)
    }

    u();
    $("#part_list").on("touchend", "li", function () {
        if (!$(this).hasClass("on") && !$(this).hasClass("part-lst-more")) {
            clearInterval(s);
            u()
        }
    });
    $(".bangumi-list-wrp").on("touchend", "li", function () {
        if (!$(this).hasClass("on") && !$(this).hasClass("part-lst-more")) {
            clearInterval(s);
            u()
        }
    });
    function v(a) {
        var b = a.split(":");
        return b[0] * 60 + parseInt(b[1])
    }

    function w(a) {
        var b = $("video").children("source");
        var c = b.attr("src");
        var d = c.match(/\/(\d+)[^\/]*\.mp4/);
        if (d && !g)g = d[1];
        var e = Math.round(this.duration).toString() || v($(".time-total-text").text());
        var f = Math.round(this.currentTime).toString();
        if (!e.match(/^\d+$/)) {
            e = "0"
        }
        if (!f.match(/^\d+$/)) {
            f = "0"
        }
        var h = location.hash.match(/page=(\d+)/);
        if (h)h = h[1];
        var i = {
            eventtype: a,
            cid: g || "",
            pname: h || "1",
            duration: e || "0",
            currenttime: f || "0",
            readystate: this.readyState + 1
        };
        var k = $.extend({}, j, i);
        rec_rp("home_h5_player", k)
    }

    function x(a) {
        var b = {title: h || "", avid: i || "", errtype: a || ""};
        rec_rp("home_recomment_error", b)
    }

    $(c).ajaxComplete(function (a, b, c) {
        var d;
        var e;
        if (c.url.indexOf("http://comment.bilibili.com/playtag") >= 0) {
            d = c.url.match(/playtag,(\d+)/);
            if (d)g = d[1];
            if (b.status == 0) {
                x(1)
            } else if (b.status == 200 || b.status == 304) {
                try {
                    e = $.parseJSON(b.responseText)
                } catch (a) {
                    x(3)
                }
                if (!(e instanceof Array)) {
                    x(3)
                }
                if (e === null || e.length === 0) {
                    x(2)
                }
            } else {
                x(4)
            }
        }
    })
})(window.dataRec, window, document);
(function (a, b) {
    if (!a) {
        return
    }
    b.recFlashAdShow = function (b) {
        a.adShow(128, b || "")
    };
    b.recFlashAdClick = function (b) {
        a.adClick(128, b || "")
    };
    function c() {
        var c = ["biliapp", "QYJSBridge"];
        for (var d = 0, e = c.length; d < e; d++) {
            if (b[c[d]]) {
                rec_rp("h5_browser_others", {type: d + 1});
                if (d == 1) {
                    a.h5Source = "iqiyi_app";
                    rec_rp("setField", ["h5_download_v2", "h5_share_v2", "h5_play_v2"], {source: "iqiyi_app"})
                }
                return true
            }
        }
        return false
    }

    $("body").on("click", "[rec-linkid]", function () {
        rec_rp("click", $(this).attr("rec-linkid"), $(this).attr("title"), $(this).attr("href"))
    });
    $(document).on("recShow", function (a, b) {
        rec_rp("show", b["showid"], b["repeat"])
    });
    if (a.getField("base", "ptype") == 2) {
        var d = 0;
        var e = setInterval(function () {
            if (c() || d++ > 10) {
                clearInterval(e)
            }
        }, 1e3)
    }
    $(function () {
        var c = [].concat(b.rec_rp.q || []);
        b.rec_rp.q = [];
        var d = function () {
            var b = Array.prototype.slice.call(arguments);
            var c = b.shift().replace(/^_/, "");
            if (a[c] && a.isVisibleFunc(c)) {
                a[c].apply(null, b)
            } else {
                a["send"].apply(null, arguments)
            }
        };
        a.startQueue = function () {
            var a = b.rec_rp.q || [];
            b.rec_rp = d;
            for (var c = 0, e = a.length; c < e; c++) {
                rec_rp.apply(null, a[c])
            }
        };
        for (var e = 0, f = c.length; e < f; e++) {
            if (c[e][0] == "_setField" || c[e][0] == "_autoPV") {
                d.apply(null, c[e])
            } else {
                b.rec_rp.q.push(c[e])
            }
        }
        if (a.isAutoPV) {
            d("pageview")
        } else {
            a.hasFirstResponse = true;
            a.startQueue()
        }
    })
})(window.dataRec, window);
window.dataRec = null;
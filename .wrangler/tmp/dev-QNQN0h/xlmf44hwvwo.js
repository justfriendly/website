// .wrangler/tmp/bundle-s7efmt/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// .wrangler/tmp/pages-PPHBjm/bundledWorker-0.7713368273031622.mjs
import("node:buffer").then(({ Buffer: Buffer2 }) => {
  globalThis.Buffer = Buffer2;
}).catch(() => null);
var __ENV_ALS_PROMISE__ = import("node:async_hooks").then(({ AsyncLocalStorage }) => {
  globalThis.AsyncLocalStorage = AsyncLocalStorage;
  const envAsyncLocalStorage = new AsyncLocalStorage();
  globalThis.process = {
    env: new Proxy(
      {},
      {
        ownKeys: () => Reflect.ownKeys(envAsyncLocalStorage.getStore()),
        getOwnPropertyDescriptor: (_2, ...args) => Reflect.getOwnPropertyDescriptor(envAsyncLocalStorage.getStore(), ...args),
        get: (_2, property) => Reflect.get(envAsyncLocalStorage.getStore(), property),
        set: (_2, property, value) => Reflect.set(envAsyncLocalStorage.getStore(), property, value)
      }
    )
  };
  return envAsyncLocalStorage;
}).catch(() => null);
var ee = Object.create;
var O = Object.defineProperty;
var te = Object.getOwnPropertyDescriptor;
var se = Object.getOwnPropertyNames;
var re = Object.getPrototypeOf;
var ae = Object.prototype.hasOwnProperty;
var j = (t, e) => () => (t && (e = t(t = 0)), e);
var I = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
var ie = (t, e, r, s) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let a of se(e))
      !ae.call(t, a) && a !== r && O(t, a, { get: () => e[a], enumerable: !(s = te(e, a)) || s.enumerable });
  return t;
};
var F = (t, e, r) => (r = t != null ? ee(re(t)) : {}, ie(e || !t || !t.__esModule ? O(r, "default", { value: t, enumerable: true }) : r, t));
var p;
var u = j(() => {
  p = { version: 3, routes: { none: [{ src: "^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$", headers: { Location: "/$1" }, status: 308, continue: true }, { src: "/_next/__private/trace", dest: "/404", status: 404, continue: true }, { src: "/404/?", status: 404, continue: true, missing: [{ type: "header", key: "x-prerender-revalidate" }] }, { src: "/500", status: 500, continue: true }, { src: "^/", has: [{ type: "header", key: "next-router-prefetch" }], dest: "/index.prefetch.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" }, continue: true, override: true }, { src: "^/((?!.+\\.rsc).+?)(?:/)?$", has: [{ type: "header", key: "next-router-prefetch" }], dest: "/$1.prefetch.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" }, continue: true, override: true }, { src: "^/", has: [{ type: "header", key: "rsc" }], dest: "/index.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" }, continue: true, override: true }, { src: "^/((?!.+\\.rsc).+?)(?:/)?$", has: [{ type: "header", key: "rsc" }], dest: "/$1.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" }, continue: true, override: true }], filesystem: [{ src: "/_next/data/(.*)", dest: "/_next/data/$1", check: true }, { src: "/index.prefetch.rsc", dest: "/index.rsc", has: [{ type: "header", key: "next-router-prefetch" }], continue: true, override: true }, { src: "^/(.+?).prefetch.rsc(?:/)?$", dest: "/$1.rsc", has: [{ type: "header", key: "next-router-prefetch" }], continue: true, override: true }], miss: [{ src: "/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media)/.+", status: 404, check: true, dest: "$0" }], rewrite: [{ src: "/_next/data/(.*)", dest: "/404", status: 404 }], resource: [{ src: "/.*", status: 404 }], hit: [{ src: "/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media|IzifLNR7v\\-J6nXr1t\\-50c)/.+", headers: { "cache-control": "public,max-age=31536000,immutable" }, continue: true, important: true }, { src: "/index", headers: { "x-matched-path": "/" }, continue: true, important: true }, { src: "/((?!index$).*)", headers: { "x-matched-path": "/$1" }, continue: true, important: true }], error: [{ src: "/.*", dest: "/404", status: 404 }, { src: "/.*", dest: "/500", status: 500 }] }, images: { domains: [], sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840, 16, 32, 48, 64, 96, 128, 256, 384], remotePatterns: [], minimumCacheTTL: 60, formats: ["image/webp"], dangerouslyAllowSVG: false, contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;", contentDispositionType: "inline" }, overrides: { "404.html": { path: "404", contentType: "text/html; charset=utf-8" }, "500.html": { path: "500", contentType: "text/html; charset=utf-8" }, "_app.rsc.json": { path: "_app.rsc", contentType: "application/json" }, "_error.rsc.json": { path: "_error.rsc", contentType: "application/json" }, "_document.rsc.json": { path: "_document.rsc", contentType: "application/json" }, "404.rsc.json": { path: "404.rsc", contentType: "application/json" } }, framework: { version: "13.5.3" }, crons: [], flags: [] };
});
var f;
var l = j(() => {
  f = { "/.DS_Store": { type: "static" }, "/404.html": { type: "override", path: "/404.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/404.rsc.json": { type: "override", path: "/404.rsc.json", headers: { "content-type": "application/json" } }, "/500.html": { type: "override", path: "/500.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/_app.rsc.json": { type: "override", path: "/_app.rsc.json", headers: { "content-type": "application/json" } }, "/_document.rsc.json": { type: "override", path: "/_document.rsc.json", headers: { "content-type": "application/json" } }, "/_error.rsc.json": { type: "override", path: "/_error.rsc.json", headers: { "content-type": "application/json" } }, "/_next/static/IzifLNR7v-J6nXr1t-50c/_buildManifest.js": { type: "static" }, "/_next/static/IzifLNR7v-J6nXr1t-50c/_ssgManifest.js": { type: "static" }, "/_next/static/chunks/582-240a6adfbbc28aa9.js": { type: "static" }, "/_next/static/chunks/864-a3c371b4e6cc88e5.js": { type: "static" }, "/_next/static/chunks/app/_not-found-6023210c0f45d7da.js": { type: "static" }, "/_next/static/chunks/app/layout-1ad89233518507d7.js": { type: "static" }, "/_next/static/chunks/app/page-b0f442109c2eb624.js": { type: "static" }, "/_next/static/chunks/fd9d1056-c62e2594ee727fbf.js": { type: "static" }, "/_next/static/chunks/framework-8883d1e9be70c3da.js": { type: "static" }, "/_next/static/chunks/main-app-3929dca7790a5a43.js": { type: "static" }, "/_next/static/chunks/main-ba7cf08018574e2d.js": { type: "static" }, "/_next/static/chunks/pages/_app-27277a117f49dcf1.js": { type: "static" }, "/_next/static/chunks/pages/_error-91a5938854a6f402.js": { type: "static" }, "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js": { type: "static" }, "/_next/static/chunks/webpack-c85e532356fb6122.js": { type: "static" }, "/_next/static/css/f586cd16315496c7.css": { type: "static" }, "/_next/static/media/0cf580864ae59341-s.woff2": { type: "static" }, "/_next/static/media/3be63adebbe80e17-s.woff2": { type: "static" }, "/_next/static/media/7e2a926bef88262a-s.woff2": { type: "static" }, "/_next/static/media/86ba892d94d0e659-s.woff2": { type: "static" }, "/_next/static/media/8bb90efd1b2442e0-s.woff2": { type: "static" }, "/_next/static/media/b3e13a4ac57b538e-s.woff2": { type: "static" }, "/_next/static/media/cb6f448281d0c282-s.woff2": { type: "static" }, "/_next/static/media/d4f7cefda76b2fff-s.woff2": { type: "static" }, "/_next/static/media/d51be7479414f4fc-s.woff2": { type: "static" }, "/_next/static/media/e94cfb95acf534f2-s.p.woff2": { type: "static" }, "/_next/static/media/f884d4ea94220255-s.p.woff2": { type: "static" }, "/_next/static/media/fb3d4f9492d39101-s.woff2": { type: "static" }, "/android-chrome-192x192.png": { type: "static" }, "/android-chrome-512x512.png": { type: "static" }, "/apple-touch-icon.png": { type: "static" }, "/favicon-16x16.png": { type: "static" }, "/favicon-32x32.png": { type: "static" }, "/img/favicon.png": { type: "static" }, "/img/logo.png": { type: "static" }, "/site.webmanifest": { type: "static" }, "/api/list": { type: "function", entrypoint: "__next-on-pages-dist__/functions/api/list.func.js" }, "/404": { type: "override", path: "/404.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/500": { type: "override", path: "/500.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/_app.rsc": { type: "override", path: "/_app.rsc.json", headers: { "content-type": "application/json" } }, "/_error.rsc": { type: "override", path: "/_error.rsc.json", headers: { "content-type": "application/json" } }, "/_document.rsc": { type: "override", path: "/_document.rsc.json", headers: { "content-type": "application/json" } }, "/404.rsc": { type: "override", path: "/404.rsc.json", headers: { "content-type": "application/json" } }, "/favicon.ico": { type: "override", path: "/favicon.ico", headers: { "cache-control": "public, max-age=0, must-revalidate", "content-type": "image/x-icon", "x-next-cache-tags": "_N_T_/layout,_N_T_/favicon.ico/layout,_N_T_/favicon.ico/route,_N_T_/favicon.ico", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/index.html": { type: "override", path: "/index.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/index": { type: "override", path: "/index.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/": { type: "override", path: "/index.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/index.rsc": { type: "override", path: "/index.rsc", headers: { "content-type": "text/x-component", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } } };
});
var $ = I((Ve, q) => {
  "use strict";
  u();
  l();
  function w(t, e) {
    t = String(t || "").trim();
    let r = t, s, a = "";
    if (/^[^a-zA-Z\\\s]/.test(t)) {
      s = t[0];
      let o = t.lastIndexOf(s);
      a += t.substring(o + 1), t = t.substring(1, o);
    }
    let n = 0;
    return t = oe(t, (o) => {
      if (/^\(\?[P<']/.test(o)) {
        let c = /^\(\?P?[<']([^>']+)[>']/.exec(o);
        if (!c)
          throw new Error(`Failed to extract named captures from ${JSON.stringify(o)}`);
        let d = o.substring(c[0].length, o.length - 1);
        return e && (e[n] = c[1]), n++, `(${d})`;
      }
      return o.substring(0, 3) === "(?:" || n++, o;
    }), t = t.replace(/\[:([^:]+):\]/g, (o, c) => w.characterClasses[c] || o), new w.PCRE(t, a, r, a, s);
  }
  function oe(t, e) {
    let r = 0, s = 0, a = false;
    for (let i = 0; i < t.length; i++) {
      let n = t[i];
      if (a) {
        a = false;
        continue;
      }
      switch (n) {
        case "(":
          s === 0 && (r = i), s++;
          break;
        case ")":
          if (s > 0 && (s--, s === 0)) {
            let o = i + 1, c = r === 0 ? "" : t.substring(0, r), d = t.substring(o), h = String(e(t.substring(r, o)));
            t = c + h + d, i = r;
          }
          break;
        case "\\":
          a = true;
          break;
        default:
          break;
      }
    }
    return t;
  }
  (function(t) {
    class e extends RegExp {
      constructor(s, a, i, n, o) {
        super(s, a), this.pcrePattern = i, this.pcreFlags = n, this.delimiter = o;
      }
    }
    t.PCRE = e, t.characterClasses = { alnum: "[A-Za-z0-9]", word: "[A-Za-z0-9_]", alpha: "[A-Za-z]", blank: "[ \\t]", cntrl: "[\\x00-\\x1F\\x7F]", digit: "\\d", graph: "[\\x21-\\x7E]", lower: "[a-z]", print: "[\\x20-\\x7E]", punct: "[\\]\\[!\"#$%&'()*+,./:;<=>?@\\\\^_`{|}~-]", space: "\\s", upper: "[A-Z]", xdigit: "[A-Fa-f0-9]" };
  })(w || (w = {}));
  w.prototype = w.PCRE.prototype;
  q.exports = w;
});
var Z = I((H) => {
  "use strict";
  u();
  l();
  H.parse = ge;
  H.serialize = ye;
  var me = Object.prototype.toString, k = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  function ge(t, e) {
    if (typeof t != "string")
      throw new TypeError("argument str must be a string");
    for (var r = {}, s = e || {}, a = s.decode || we, i = 0; i < t.length; ) {
      var n = t.indexOf("=", i);
      if (n === -1)
        break;
      var o = t.indexOf(";", i);
      if (o === -1)
        o = t.length;
      else if (o < n) {
        i = t.lastIndexOf(";", n - 1) + 1;
        continue;
      }
      var c = t.slice(i, n).trim();
      if (r[c] === void 0) {
        var d = t.slice(n + 1, o).trim();
        d.charCodeAt(0) === 34 && (d = d.slice(1, -1)), r[c] = ve(d, a);
      }
      i = o + 1;
    }
    return r;
  }
  function ye(t, e, r) {
    var s = r || {}, a = s.encode || Re;
    if (typeof a != "function")
      throw new TypeError("option encode is invalid");
    if (!k.test(t))
      throw new TypeError("argument name is invalid");
    var i = a(e);
    if (i && !k.test(i))
      throw new TypeError("argument val is invalid");
    var n = t + "=" + i;
    if (s.maxAge != null) {
      var o = s.maxAge - 0;
      if (isNaN(o) || !isFinite(o))
        throw new TypeError("option maxAge is invalid");
      n += "; Max-Age=" + Math.floor(o);
    }
    if (s.domain) {
      if (!k.test(s.domain))
        throw new TypeError("option domain is invalid");
      n += "; Domain=" + s.domain;
    }
    if (s.path) {
      if (!k.test(s.path))
        throw new TypeError("option path is invalid");
      n += "; Path=" + s.path;
    }
    if (s.expires) {
      var c = s.expires;
      if (!xe(c) || isNaN(c.valueOf()))
        throw new TypeError("option expires is invalid");
      n += "; Expires=" + c.toUTCString();
    }
    if (s.httpOnly && (n += "; HttpOnly"), s.secure && (n += "; Secure"), s.priority) {
      var d = typeof s.priority == "string" ? s.priority.toLowerCase() : s.priority;
      switch (d) {
        case "low":
          n += "; Priority=Low";
          break;
        case "medium":
          n += "; Priority=Medium";
          break;
        case "high":
          n += "; Priority=High";
          break;
        default:
          throw new TypeError("option priority is invalid");
      }
    }
    if (s.sameSite) {
      var h = typeof s.sameSite == "string" ? s.sameSite.toLowerCase() : s.sameSite;
      switch (h) {
        case true:
          n += "; SameSite=Strict";
          break;
        case "lax":
          n += "; SameSite=Lax";
          break;
        case "strict":
          n += "; SameSite=Strict";
          break;
        case "none":
          n += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return n;
  }
  function we(t) {
    return t.indexOf("%") !== -1 ? decodeURIComponent(t) : t;
  }
  function Re(t) {
    return encodeURIComponent(t);
  }
  function xe(t) {
    return me.call(t) === "[object Date]" || t instanceof Date;
  }
  function ve(t, e) {
    try {
      return e(t);
    } catch {
      return t;
    }
  }
});
u();
l();
u();
l();
u();
l();
var R = "INTERNAL_SUSPENSE_CACHE_HOSTNAME.local";
var N = /* @__PURE__ */ new Set();
var b = class {
  constructor(e = {}) {
    this.ctx = e;
  }
  tagsManifest;
  tagsManifestKey = "tags-manifest";
  async retrieve(e) {
    throw new Error(`Method not implemented - ${e}`);
  }
  async update(e, r) {
    throw new Error(`Method not implemented - ${e}, ${r}`);
  }
  async set(e, r) {
    let s = { lastModified: Date.now(), value: r };
    switch (await this.update(e, JSON.stringify(s)), s.value?.kind) {
      case "FETCH": {
        let a = s.value.data.tags ?? [];
        await this.setTags(a, { cacheKey: e }), A(a).forEach((i) => N.delete(i));
      }
    }
  }
  async get(e) {
    let r = await this.retrieve(e);
    if (!r)
      return null;
    let s;
    try {
      s = JSON.parse(r);
    } catch {
      return null;
    }
    switch (s.value?.kind) {
      case "FETCH":
        return await this.loadTagsManifest(), A(s.value.data.tags ?? []).some((n) => {
          if (N.has(n))
            return true;
          let o = this.tagsManifest?.items?.[n];
          return o?.revalidatedAt && o?.revalidatedAt >= (s.lastModified ?? Date.now());
        }) ? null : s;
      default:
        return s;
    }
  }
  async revalidateTag(e) {
    await this.setTags([e], { revalidatedAt: Date.now() }), N.add(e);
  }
  async loadTagsManifest() {
    try {
      let e = await this.retrieve(this.tagsManifestKey);
      e && (this.tagsManifest = JSON.parse(e));
    } catch {
    }
    this.tagsManifest ??= { version: 1, items: {} };
  }
  async saveTagsManifest() {
    if (this.tagsManifest) {
      let e = JSON.stringify(this.tagsManifest);
      await this.update(this.tagsManifestKey, e);
    }
  }
  async setTags(e, { cacheKey: r, revalidatedAt: s }) {
    await this.loadTagsManifest();
    let a = this.tagsManifest;
    for (let i of e) {
      let n = a.items[i] ?? { keys: [] };
      r && !n.keys.includes(r) && n.keys.push(r), s && (n.revalidatedAt = s), a.items[i] = n;
    }
    await this.saveTagsManifest();
  }
};
function A(t) {
  let e = ["/"];
  for (let r of t || [])
    if (r.startsWith("/")) {
      let s = r.split("/");
      for (let a = 1; a < s.length + 1; a++) {
        let i = s.slice(0, a).join("/");
        i && (e.push(i), e.includes(i) || e.push(i));
      }
    } else
      e.includes(r) || e.push(r);
  return e;
}
u();
l();
u();
l();
u();
l();
u();
l();
var D = F($());
function P(t, e, r) {
  if (e == null)
    return { match: null, captureGroupKeys: [] };
  let s = r ? "" : "i", a = [];
  return { match: (0, D.default)(`%${t}%${s}`, a).exec(e), captureGroupKeys: a };
}
function x(t, e, r, { namedOnly: s } = {}) {
  return t.replace(/\$([a-zA-Z0-9_]+)/g, (a, i) => {
    let n = r.indexOf(i);
    return s && n === -1 ? a : (n === -1 ? e[parseInt(i, 10)] : e[n + 1]) || "";
  });
}
function T(t, { url: e, cookies: r, headers: s, routeDest: a }) {
  switch (t.type) {
    case "host":
      return { valid: e.hostname === t.value };
    case "header":
      return t.value !== void 0 ? M(t.value, s.get(t.key), a) : { valid: s.has(t.key) };
    case "cookie": {
      let i = r[t.key];
      return i && t.value !== void 0 ? M(t.value, i, a) : { valid: i !== void 0 };
    }
    case "query":
      return t.value !== void 0 ? M(t.value, e.searchParams.get(t.key), a) : { valid: e.searchParams.has(t.key) };
  }
}
function M(t, e, r) {
  let { match: s, captureGroupKeys: a } = P(t, e);
  return r && s && a.length ? { valid: !!s, newRouteDest: x(r, s, a, { namedOnly: true }) } : { valid: !!s };
}
u();
l();
function z(t) {
  let e = new Headers(t.headers);
  return t.cf && (e.append("x-vercel-ip-city", t.cf.city), e.append("x-vercel-ip-country", t.cf.country), e.append("x-vercel-ip-country-region", t.cf.region), e.append("x-vercel-ip-latitude", t.cf.latitude), e.append("x-vercel-ip-longitude", t.cf.longitude)), new Request(t, { headers: e });
}
u();
l();
function g(t, e, r) {
  let s = e instanceof Headers ? e.entries() : Object.entries(e);
  for (let [a, i] of s) {
    let n = a.toLowerCase(), o = r?.match ? x(i, r.match, r.captureGroupKeys) : i;
    n === "set-cookie" ? t.append(n, o) : t.set(n, o);
  }
}
function v(t) {
  return /^https?:\/\//.test(t);
}
function y(t, e) {
  for (let [r, s] of e.entries()) {
    let a = /^nxtP(.+)$/.exec(r);
    a?.[1] ? (t.set(r, s), t.set(a[1], s)) : (!t.has(r) || !!s && !t.getAll(r).includes(s)) && t.append(r, s);
  }
}
function L(t, e) {
  let r = new URL(e, t.url);
  return y(r.searchParams, new URL(t.url).searchParams), r.pathname = r.pathname.replace(/^\/index.html$/, "/").replace(/\.html$/, ""), new Request(r, t);
}
function _(t) {
  return new Response(t.body, t);
}
function V(t) {
  return t.split(",").map((e) => {
    let [r, s] = e.split(";"), a = parseFloat((s ?? "q=1").replace(/q *= */gi, ""));
    return [r.trim(), isNaN(a) ? 1 : a];
  }).sort((e, r) => r[1] - e[1]).map(([e]) => e === "*" || e === "" ? [] : e).flat();
}
u();
l();
function U(t) {
  switch (t) {
    case "none":
      return "filesystem";
    case "filesystem":
      return "rewrite";
    case "rewrite":
      return "resource";
    case "resource":
      return "miss";
    default:
      return "miss";
  }
}
async function S(t, { request: e, assetsFetcher: r, ctx: s }, { path: a, searchParams: i }) {
  let n, o = new URL(e.url);
  y(o.searchParams, i);
  let c = new Request(o, e);
  try {
    switch (t?.type) {
      case "function":
      case "middleware": {
        let d = await import(t.entrypoint);
        try {
          n = await d.default(c, s);
        } catch (h) {
          let m = h;
          throw m.name === "TypeError" && m.message.endsWith("default is not a function") ? new Error(`An error occurred while evaluating the target edge function (${t.entrypoint})`) : h;
        }
        break;
      }
      case "override": {
        n = _(await r.fetch(L(c, t.path ?? a))), t.headers && g(n.headers, t.headers);
        break;
      }
      case "static": {
        n = await r.fetch(L(c, a));
        break;
      }
      default:
        n = new Response("Not Found", { status: 404 });
    }
  } catch (d) {
    return console.error(d), new Response("Internal Server Error", { status: 500 });
  }
  return _(n);
}
function B(t, e) {
  let r = "^//?(?:", s = ")/(.*)";
  return !t.startsWith(r) || !t.endsWith(s) ? false : t.slice(r.length, -s.length).split("|").every((i) => i in e);
}
u();
l();
function ce(t, { protocol: e, hostname: r, port: s, pathname: a }) {
  return !(e && t.protocol.replace(/:$/, "") !== e || !new RegExp(r).test(t.hostname) || s && !new RegExp(s).test(t.port) || a && !new RegExp(a).test(t.pathname));
}
function ue(t, e) {
  if (t.method !== "GET")
    return;
  let { origin: r, searchParams: s } = new URL(t.url), a = s.get("url"), i = Number.parseInt(s.get("w") ?? "", 10), n = Number.parseInt(s.get("q") ?? "75", 10);
  if (!a || Number.isNaN(i) || Number.isNaN(n) || !e?.sizes?.includes(i) || n < 0 || n > 100)
    return;
  let o = new URL(a, r);
  if (o.pathname.endsWith(".svg") && !e?.dangerouslyAllowSVG)
    return;
  let c = a.startsWith("/") || a.startsWith("%2F");
  if (!c && !e?.domains?.includes(o.hostname) && !e?.remotePatterns?.find((m) => ce(o, m)))
    return;
  let d = t.headers.get("Accept") ?? "", h = e?.formats?.find((m) => d.includes(m))?.replace("image/", "");
  return { isRelative: c, imageUrl: o, options: { width: i, quality: n, format: h } };
}
function le(t, e, r) {
  let s = new Headers();
  if (r?.contentSecurityPolicy && s.set("Content-Security-Policy", r.contentSecurityPolicy), r?.contentDispositionType) {
    let i = e.pathname.split("/").pop(), n = i ? `${r.contentDispositionType}; filename="${i}"` : r.contentDispositionType;
    s.set("Content-Disposition", n);
  }
  t.headers.has("Cache-Control") || s.set("Cache-Control", `public, max-age=${r?.minimumCacheTTL ?? 60}`);
  let a = _(t);
  return g(a.headers, s), a;
}
async function K(t, { buildOutput: e, assetsFetcher: r, imagesConfig: s }) {
  let a = ue(t, s);
  if (!a)
    return new Response("Invalid image resizing request", { status: 400 });
  let { isRelative: i, imageUrl: n } = a, o = new Request(n, { headers: t.headers }), c = i && n.pathname in e ? await r.fetch(o) : await fetch(o);
  return le(c, n, s);
}
u();
l();
u();
l();
u();
l();
var C = class extends b {
  cacheName = "suspense-cache";
  constructor(e = {}) {
    super(e);
  }
  async retrieve(e) {
    let s = await (await caches.open(this.cacheName)).match(this.buildCacheKey(e));
    return s ? s.text() : null;
  }
  async update(e, r) {
    let s = await caches.open(this.cacheName), a = "31536000", i = new Response(r, { headers: new Headers({ "cache-control": `max-age=${a}` }) });
    await s.put(this.buildCacheKey(e), i);
  }
  buildCacheKey(e) {
    return `https://${R}/entry/${e}`;
  }
};
async function W(t) {
  let e = `https://${R}/v1/suspense-cache/`;
  if (!t.url.startsWith(e))
    return null;
  try {
    let r = new URL(t.url), s = await de();
    if (r.pathname === "/v1/suspense-cache/revalidate") {
      let i = r.searchParams.get("tags")?.split(",") ?? [];
      for (let n of i)
        await s.revalidateTag(n);
      return new Response(null, { status: 200 });
    }
    let a = r.pathname.replace("/v1/suspense-cache/", "");
    if (!a.length)
      return new Response("Invalid cache key", { status: 400 });
    switch (t.method) {
      case "GET": {
        let i = await s.get(a);
        return i ? new Response(JSON.stringify(i.value), { status: 200, headers: { "Content-Type": "application/json", "x-vercel-cache-state": "fresh", age: `${(Date.now() - (i.lastModified ?? Date.now())) / 1e3}` } }) : new Response(null, { status: 404 });
      }
      case "POST": {
        let i = await t.json();
        return await s.set(a, i), new Response(null, { status: 200 });
      }
      default:
        return new Response(null, { status: 405 });
    }
  } catch (r) {
    return console.error(r), new Response("Error handling cache request", { status: 500 });
  }
}
async function de() {
  return new C();
}
function J() {
  globalThis.fetch[G] || (he(), globalThis.fetch[G] = true);
}
function he() {
  let t = globalThis.fetch;
  globalThis.fetch = async (...e) => {
    let r = new Request(...e), s = await pe(r);
    return s || (s = await W(r), s) ? s : (fe(r), t(r));
  };
}
async function pe(t) {
  if (t.url.startsWith("blob:"))
    try {
      let r = (await import(`./__next-on-pages-dist__/assets/${new URL(t.url).pathname}.bin`)).default, s = { async arrayBuffer() {
        return r;
      }, get body() {
        return new ReadableStream({ start(a) {
          let i = Buffer.from(r);
          a.enqueue(i), a.close();
        } });
      }, async text() {
        return Buffer.from(r).toString();
      }, async json() {
        let a = Buffer.from(r);
        return JSON.stringify(a.toString());
      }, async blob() {
        return new Blob(r);
      } };
      return s.clone = () => ({ ...s }), s;
    } catch {
    }
  return null;
}
function fe(t) {
  t.headers.has("user-agent") || t.headers.set("user-agent", "Next.js Middleware");
}
var G = Symbol.for("next-on-pages fetch patch");
u();
l();
var X = F(Z());
var E = class {
  constructor(e, r, s, a) {
    this.routes = e;
    this.output = r;
    this.reqCtx = s;
    this.url = new URL(s.request.url), this.cookies = (0, X.parse)(s.request.headers.get("cookie") || ""), this.path = this.url.pathname || "/", this.headers = { normal: new Headers(), important: new Headers() }, this.searchParams = new URLSearchParams(), y(this.searchParams, this.url.searchParams), this.checkPhaseCounter = 0, this.middlewareInvoked = [], this.wildcardMatch = a?.find((i) => i.domain === this.url.hostname);
  }
  url;
  cookies;
  wildcardMatch;
  path;
  status;
  headers;
  searchParams;
  body;
  checkPhaseCounter;
  middlewareInvoked;
  locales;
  checkRouteMatch(e, r) {
    let s = P(e.src, this.path, e.caseSensitive);
    if (!s.match || e.methods && !e.methods.map((i) => i.toUpperCase()).includes(this.reqCtx.request.method.toUpperCase()))
      return;
    let a = { url: this.url, cookies: this.cookies, headers: this.reqCtx.request.headers, routeDest: e.dest };
    if (!e.has?.find((i) => {
      let n = T(i, a);
      return n.newRouteDest && (a.routeDest = n.newRouteDest), !n.valid;
    }) && !e.missing?.find((i) => T(i, a).valid) && !(r && e.status !== this.status))
      return { routeMatch: s, routeDest: a.routeDest };
  }
  processMiddlewareResp(e) {
    let r = "x-middleware-override-headers", s = e.headers.get(r);
    if (s) {
      let c = new Set(s.split(",").map((d) => d.trim()));
      for (let d of c.keys()) {
        let h = `x-middleware-request-${d}`, m = e.headers.get(h);
        this.reqCtx.request.headers.get(d) !== m && (m ? this.reqCtx.request.headers.set(d, m) : this.reqCtx.request.headers.delete(d)), e.headers.delete(h);
      }
      e.headers.delete(r);
    }
    let a = "x-middleware-rewrite", i = e.headers.get(a);
    if (i) {
      let c = new URL(i, this.url);
      this.path = c.pathname, y(this.searchParams, c.searchParams), e.headers.delete(a);
    }
    let n = "x-middleware-next";
    e.headers.get(n) ? e.headers.delete(n) : !i && !e.headers.has("location") && (this.body = e.body, this.status = e.status), g(this.headers.normal, e.headers), this.headers.middlewareLocation = e.headers.get("location");
  }
  async runRouteMiddleware(e) {
    if (!e)
      return true;
    let r = e && this.output[e];
    if (!r || r.type !== "middleware")
      return this.status = 500, false;
    let s = await S(r, this.reqCtx, { path: this.path, searchParams: this.searchParams, headers: this.headers, status: this.status });
    return this.middlewareInvoked.push(e), s.status === 500 ? (this.status = s.status, false) : (this.processMiddlewareResp(s), true);
  }
  applyRouteOverrides(e) {
    !e.override || (this.status = void 0, this.headers.normal = new Headers(), this.headers.important = new Headers());
  }
  applyRouteHeaders(e, r, s) {
    !e.headers || (g(this.headers.normal, e.headers, { match: r, captureGroupKeys: s }), e.important && g(this.headers.important, e.headers, { match: r, captureGroupKeys: s }));
  }
  applyRouteStatus(e) {
    !e.status || (this.status = e.status);
  }
  applyRouteDest(e, r, s) {
    if (!e.dest)
      return this.path;
    let a = this.path, i = e.dest;
    this.wildcardMatch && /\$wildcard/.test(i) && (i = i.replace(/\$wildcard/g, this.wildcardMatch.value)), this.path = x(i, r, s), /\/index\.rsc$/i.test(this.path) && !/^\/(?:index)?$/i.test(a) && (this.path = a);
    let n = /\.rsc$/i.test(this.path), o = this.path in this.output;
    n && !o && (this.path = this.path.replace(/\.rsc/i, ""));
    let c = new URL(this.path, this.url);
    return y(this.searchParams, c.searchParams), v(this.path) || (this.path = c.pathname), a;
  }
  applyLocaleRedirects(e) {
    if (!e.locale?.redirect || (this.locales || (this.locales = {}), Object.assign(this.locales, e.locale.redirect), !/^\^(.)*$/.test(e.src) && e.src !== this.path) || this.headers.normal.has("location"))
      return;
    let { locale: { redirect: s, cookie: a } } = e, i = a && this.cookies[a], n = V(i ?? ""), o = V(this.reqCtx.request.headers.get("accept-language") ?? ""), h = [...n, ...o].map((m) => s[m]).filter(Boolean)[0];
    if (h) {
      !this.path.startsWith(h) && (this.headers.normal.set("location", h), this.status = 307);
      return;
    }
  }
  getLocaleFriendlyRoute(e, r) {
    return !this.locales || r !== "miss" ? e : /^\//.test(e.src) && e.src.slice(1) in this.locales ? { ...e, src: `^${e.src}$` } : B(e.src, this.locales) ? { ...e, src: e.src.replace(/\/\(\.\*\)$/, "(?:/(.*))?$") } : e;
  }
  async checkRoute(e, r) {
    let s = this.getLocaleFriendlyRoute(r, e), { routeMatch: a, routeDest: i } = this.checkRouteMatch(s, e === "error") ?? {}, n = { ...s, dest: i };
    if (!a?.match || n.middlewarePath && this.middlewareInvoked.includes(n.middlewarePath))
      return "skip";
    let { match: o, captureGroupKeys: c } = a;
    if (this.applyRouteOverrides(n), this.applyLocaleRedirects(n), !await this.runRouteMiddleware(n.middlewarePath))
      return "error";
    if (this.body !== void 0 || this.headers.middlewareLocation)
      return "done";
    this.applyRouteHeaders(n, o, c), this.applyRouteStatus(n);
    let h = this.applyRouteDest(n, o, c);
    if (n.check && !v(this.path))
      if (h === this.path) {
        if (e !== "miss")
          return this.checkPhase(U(e));
        this.status = 404;
      } else if (e === "miss") {
        if (!(this.path in this.output))
          return this.checkPhase("filesystem");
        this.status === 404 && (this.status = void 0);
      } else
        return this.checkPhase("none");
    return n.continue ? "next" : "done";
  }
  async checkPhase(e) {
    if (this.checkPhaseCounter++ >= 50)
      return console.error(`Routing encountered an infinite loop while checking ${this.url.pathname}`), this.status = 500, "error";
    this.middlewareInvoked = [];
    let r = true;
    for (let i of this.routes[e]) {
      let n = await this.checkRoute(e, i);
      if (n === "error")
        return "error";
      if (n === "done") {
        r = false;
        break;
      }
    }
    if (e === "hit" || v(this.path) || this.headers.normal.has("location") || !!this.body)
      return "done";
    let s = this.path in this.output;
    if (e === "rewrite" && !s && this.path.endsWith("/")) {
      let i = this.path.replace(/\/$/, "");
      s = i in this.output, s && (this.path = i);
    }
    if (e === "miss" && !s) {
      let i = !this.status || this.status < 400;
      this.status = i ? 404 : this.status;
    }
    let a = "miss";
    return s || e === "miss" || e === "error" ? a = "hit" : r && (a = U(e)), this.checkPhase(a);
  }
  async run(e = "none") {
    this.checkPhaseCounter = 0;
    let r = await this.checkPhase(e);
    return this.headers.normal.has("location") && (!this.status || this.status < 300 || this.status >= 400) && (this.status = 307), r;
  }
};
async function Q(t, e, r) {
  let s = new E(e.routes, r, t, e.wildcard), a = await Y(s);
  return _e(t, a, r);
}
async function Y(t, e = "none", r = false) {
  return await t.run(e) === "error" || !r && t.status && t.status >= 400 ? Y(t, "error", true) : { path: t.path, status: t.status, headers: t.headers, searchParams: t.searchParams, body: t.body };
}
async function _e(t, { path: e = "/404", status: r, headers: s, searchParams: a, body: i }, n) {
  let o = s.normal.get("location");
  if (o) {
    if (o !== s.middlewareLocation) {
      let h = [...a.keys()].length ? `?${a.toString()}` : "";
      s.normal.set("location", `${o ?? "/"}${h}`);
    }
    return new Response(null, { status: r, headers: s.normal });
  }
  let c;
  if (i !== void 0)
    c = new Response(i, { status: r });
  else if (v(e)) {
    let h = new URL(e);
    y(h.searchParams, a), c = await fetch(h, t.request);
  } else
    c = await S(n[e], t, { path: e, status: r, headers: s, searchParams: a });
  let d = s.normal;
  return g(d, c.headers), g(d, s.important), c = new Response(c.body, { ...c, status: r || c.status, headers: d }), c;
}
J();
var Dt = { async fetch(t, e, r) {
  let s = await __ENV_ALS_PROMISE__;
  return s ? s.run({ ...e, NODE_ENV: "production", SUSPENSE_CACHE_URL: R }, async () => {
    if (new URL(t.url).pathname.startsWith("/_next/image"))
      return K(t, { buildOutput: f, assetsFetcher: e.ASSETS, imagesConfig: p.images });
    let i = z(t);
    return Q({ request: i, ctx: r, assetsFetcher: e.ASSETS }, p, f);
  }) : new Response("Error: Could not access built-in Node.js modules. Please make sure that your Cloudflare Pages project has the 'nodejs_compat' compatibility flag set.", { status: 503 });
} };

// node_modules/wrangler/templates/pages-dev-util.ts
function isRoutingRuleMatch(pathname, routingRule) {
  if (!pathname) {
    throw new Error("Pathname is undefined.");
  }
  if (!routingRule) {
    throw new Error("Routing rule is undefined.");
  }
  const ruleRegExp = transformRoutingRuleToRegExp(routingRule);
  return pathname.match(ruleRegExp) !== null;
}
function transformRoutingRuleToRegExp(rule) {
  let transformedRule;
  if (rule === "/" || rule === "/*") {
    transformedRule = rule;
  } else if (rule.endsWith("/*")) {
    transformedRule = `${rule.substring(0, rule.length - 2)}(/*)?`;
  } else if (rule.endsWith("/")) {
    transformedRule = `${rule.substring(0, rule.length - 1)}(/)?`;
  } else if (rule.endsWith("*")) {
    transformedRule = rule;
  } else {
    transformedRule = `${rule}(/)?`;
  }
  transformedRule = `^${transformedRule.replaceAll(/\./g, "\\.").replaceAll(/\*/g, ".*")}$`;
  return new RegExp(transformedRule);
}

// .wrangler/tmp/pages-PPHBjm/xlmf44hwvwo.js
var define_ROUTES_default = { version: 1, description: "Built with @cloudflare/next-on-pages@1.11.3.", include: ["/*"], exclude: ["/_next/static/*"] };
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (Dt.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return Dt.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
};
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-s7efmt/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  ...void 0 ?? [],
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = pages_dev_pipeline_default;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}

// .wrangler/tmp/bundle-s7efmt/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  };
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
//# sourceMappingURL=xlmf44hwvwo.js.map

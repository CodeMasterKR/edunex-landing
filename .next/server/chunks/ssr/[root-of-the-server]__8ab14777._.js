module.exports = [
"[project]/lib/i18n/routing.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "routing",
    ()=>routing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$11$2e$1_next$40$15$2e$5$2e$_d7cea296dd0794662e007c767f840aa9$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.11.1_next@15.5._d7cea296dd0794662e007c767f840aa9/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [app-rsc] (ecmascript) <export default as defineRouting>");
;
const routing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$11$2e$1_next$40$15$2e$5$2e$_d7cea296dd0794662e007c767f840aa9$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__["defineRouting"])({
    locales: [
        'uz',
        'ru',
        'en'
    ],
    defaultLocale: 'uz',
    localePrefix: 'as-needed'
});
}),
"[project]/i18n.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$11$2e$1_next$40$15$2e$5$2e$_d7cea296dd0794662e007c767f840aa9$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getRequestConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getRequestConfig$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.11.1_next@15.5._d7cea296dd0794662e007c767f840aa9/node_modules/next-intl/dist/esm/development/server/react-server/getRequestConfig.js [app-rsc] (ecmascript) <export default as getRequestConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n/routing.ts [app-rsc] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$11$2e$1_next$40$15$2e$5$2e$_d7cea296dd0794662e007c767f840aa9$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getRequestConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getRequestConfig$3e$__["getRequestConfig"])(async ({ requestLocale })=>{
    // next-intl v4 da requestLocale ishlatiladi
    let locale = await requestLocale;
    if (!locale || !__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].locales.includes(locale)) {
        locale = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].defaultLocale;
    }
    return {
        locale,
        messages: (await __turbopack_context__.f({
            "./messages/en.json": {
                id: ()=>"[project]/messages/en.json (json, async loader)",
                module: ()=>__turbopack_context__.A("[project]/messages/en.json (json, async loader)")
            },
            "./messages/ru.json": {
                id: ()=>"[project]/messages/ru.json (json, async loader)",
                module: ()=>__turbopack_context__.A("[project]/messages/ru.json (json, async loader)")
            },
            "./messages/uz.json": {
                id: ()=>"[project]/messages/uz.json (json, async loader)",
                module: ()=>__turbopack_context__.A("[project]/messages/uz.json (json, async loader)")
            }
        }).import(`./messages/${locale}.json`)).default
    };
});
}),
"[next]/internal/font/google/plus_jakarta_sans_8a77d5e1.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "plus_jakarta_sans_8a77d5e1-module__ElORxG__className",
  "variable": "plus_jakarta_sans_8a77d5e1-module__ElORxG__variable",
});
}),
"[next]/internal/font/google/plus_jakarta_sans_8a77d5e1.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$plus_jakarta_sans_8a77d5e1$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/plus_jakarta_sans_8a77d5e1.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$plus_jakarta_sans_8a77d5e1$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Sans Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$plus_jakarta_sans_8a77d5e1$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$plus_jakarta_sans_8a77d5e1$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[next]/internal/font/google/inter_7121de63.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "inter_7121de63-module__AjNlIq__className",
  "variable": "inter_7121de63-module__AjNlIq__variable",
});
}),
"[next]/internal/font/google/inter_7121de63.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_7121de63$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_7121de63.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_7121de63$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Inter', 'Inter Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_7121de63$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_7121de63$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/app/[locale]/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocaleLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.18_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$11$2e$1_next$40$15$2e$5$2e$_d7cea296dd0794662e007c767f840aa9$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$server$2f$NextIntlClientProviderServer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__NextIntlClientProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.11.1_next@15.5._d7cea296dd0794662e007c767f840aa9/node_modules/next-intl/dist/esm/development/react-server/NextIntlClientProviderServer.js [app-rsc] (ecmascript) <export default as NextIntlClientProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$11$2e$1_next$40$15$2e$5$2e$_d7cea296dd0794662e007c767f840aa9$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getMessages$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.11.1_next@15.5._d7cea296dd0794662e007c767f840aa9/node_modules/next-intl/dist/esm/development/server/react-server/getMessages.js [app-rsc] (ecmascript) <export default as getMessages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.18_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.18_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n/routing.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$plus_jakarta_sans_8a77d5e1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/plus_jakarta_sans_8a77d5e1.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_7121de63$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_7121de63.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const metadata = {
    metadataBase: new URL('https://edunex.uz'),
    title: {
        default: "EduNex — O'quv Markazlar uchun Raqamli Boshqaruv",
        template: '%s | EduNex'
    },
    description: "Talabalar, to'lovlar, davomat va o'qituvchilarni bir platformada boshqaring. 14 kun bepul sinab ko'ring.",
    keywords: [
        "o'quv markaz",
        'lms',
        'erp',
        'uzbekistan',
        'edunex',
        'talabalar',
        "to'lov tizimi"
    ],
    icons: {
        icon: '/edunex_tab.png',
        apple: '/edunex_tab.png'
    },
    openGraph: {
        title: "EduNex — O'quv Markazlar uchun Raqamli Boshqaruv",
        description: "O'quv markazingizni zamonaviy texnologiyalar bilan boshqaring.",
        type: 'website',
        url: 'https://edunex.uz',
        siteName: 'EduNex',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'EduNex Platform'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: "EduNex — O'quv Markazlar uchun Raqamli Boshqaruv",
        description: "O'quv markazingizni zamonaviy texnologiyalar bilan boshqaring.",
        images: [
            '/og-image.png'
        ]
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large'
        }
    }
};
async function LocaleLayout({ children, params }) {
    const { locale } = await params;
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].locales.includes(locale)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const messages = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$11$2e$1_next$40$15$2e$5$2e$_d7cea296dd0794662e007c767f840aa9$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getMessages$3e$__["getMessages"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: locale,
        suppressHydrationWarning: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$plus_jakarta_sans_8a77d5e1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable} ${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_7121de63$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable} antialiased`,
            suppressHydrationWarning: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$18_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$11$2e$1_next$40$15$2e$5$2e$_d7cea296dd0794662e007c767f840aa9$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$server$2f$NextIntlClientProviderServer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__NextIntlClientProvider$3e$__["NextIntlClientProvider"], {
                messages: messages,
                children: children
            }, void 0, false, {
                fileName: "[project]/app/[locale]/layout.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/[locale]/layout.tsx",
            lineNumber: 82,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/[locale]/layout.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8ab14777._.js.map
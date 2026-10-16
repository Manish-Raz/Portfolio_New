module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/components/portfolio-motion.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PortfolioMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function PortfolioMotion() {
    const [enabled, setEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const saved = window.localStorage.getItem('manish-motion');
        const initial = saved === null ? !reducedMotion : saved === 'on';
        setEnabled(initial);
        const root = document.documentElement;
        const setMotion = (value)=>{
            root.dataset.motion = value ? 'on' : 'off';
            window.localStorage.setItem('manish-motion', value ? 'on' : 'off');
        };
        setMotion(initial);
        let frame = 0;
        const updateProgress = ()=>{
            frame = 0;
            const page = document.documentElement;
            const max = page.scrollHeight - window.innerHeight;
            root.style.setProperty('--scroll-progress', `${max > 0 ? window.scrollY / max : 0}`);
        };
        const onScroll = ()=>{
            if (!frame) frame = window.requestAnimationFrame(updateProgress);
        };
        updateProgress();
        window.addEventListener('scroll', onScroll, {
            passive: true
        });
        window.addEventListener('resize', onScroll);
        const observer = new IntersectionObserver((entries)=>entries.forEach((entry)=>{
                if (entry.isIntersecting) entry.target.classList.add('is-visible');
            }), {
            threshold: 0.12,
            rootMargin: '0px 0px -5% 0px'
        });
        document.querySelectorAll('[data-reveal]').forEach((element)=>observer.observe(element));
        const portrait = document.querySelector('.hero__portrait');
        const onPointerMove = (event)=>{
            if (!portrait || !root.dataset.motion || root.dataset.motion === 'off') return;
            const bounds = portrait.getBoundingClientRect();
            const x = (event.clientX - bounds.left) / bounds.width - .5;
            const y = (event.clientY - bounds.top) / bounds.height - .5;
            portrait.style.setProperty('--tilt-x', `${x * 7}deg`);
            portrait.style.setProperty('--tilt-y', `${y * -7}deg`);
        };
        const resetPortrait = ()=>{
            portrait?.style.setProperty('--tilt-x', '0deg');
            portrait?.style.setProperty('--tilt-y', '0deg');
        };
        portrait?.addEventListener('pointermove', onPointerMove);
        portrait?.addEventListener('pointerleave', resetPortrait);
        return ()=>{
            window.cancelAnimationFrame(frame);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            observer.disconnect();
            portrait?.removeEventListener('pointermove', onPointerMove);
            portrait?.removeEventListener('pointerleave', resetPortrait);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!enabled || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const contact = document.querySelector('[data-contact]');
        if (!contact) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
        const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo('.contact-reveal', {
                autoAlpha: 0,
                y: 54
            }, {
                autoAlpha: 1,
                y: 0,
                duration: 0.9,
                stagger: 0.12,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: contact,
                    start: 'top 72%',
                    once: true
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo('.contact-orbit', {
                rotate: -22,
                scale: 0.72,
                autoAlpha: 0
            }, {
                rotate: 0,
                scale: 1,
                autoAlpha: 1,
                duration: 1.5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: contact,
                    start: 'top 72%',
                    once: true
                }
            });
        }, contact);
        return ()=>context.revert();
    }, [
        enabled
    ]);
    const toggle = ()=>{
        const next = !enabled;
        setEnabled(next);
        document.documentElement.dataset.motion = next ? 'on' : 'off';
        window.localStorage.setItem('manish-motion', next ? 'on' : 'off');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "scroll-progress",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                    fileName: "[project]/app/components/portfolio-motion.tsx",
                    lineNumber: 100,
                    columnNumber: 59
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/portfolio-motion.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "motion-toggle",
                type: "button",
                "aria-pressed": enabled,
                onClick: toggle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: enabled ? '◌' : '▷'
                    }, void 0, false, {
                        fileName: "[project]/app/components/portfolio-motion.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    " MOTION ",
                    enabled ? 'ON' : 'OFF'
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/portfolio-motion.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__05327558._.js.map
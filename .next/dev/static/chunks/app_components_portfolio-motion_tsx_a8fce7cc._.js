(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/portfolio-motion.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PortfolioMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function PortfolioMotion() {
    _s();
    const [enabled, setEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioMotion.useEffect": ()=>{
            const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const saved = window.localStorage.getItem('manish-motion');
            const initial = saved === null ? !reducedMotion : saved === 'on';
            setEnabled(initial);
            const root = document.documentElement;
            const setMotion = {
                "PortfolioMotion.useEffect.setMotion": (value)=>{
                    root.dataset.motion = value ? 'on' : 'off';
                    window.localStorage.setItem('manish-motion', value ? 'on' : 'off');
                }
            }["PortfolioMotion.useEffect.setMotion"];
            setMotion(initial);
            let frame = 0;
            const updateProgress = {
                "PortfolioMotion.useEffect.updateProgress": ()=>{
                    frame = 0;
                    const page = document.documentElement;
                    const max = page.scrollHeight - window.innerHeight;
                    root.style.setProperty('--scroll-progress', `${max > 0 ? window.scrollY / max : 0}`);
                }
            }["PortfolioMotion.useEffect.updateProgress"];
            const onScroll = {
                "PortfolioMotion.useEffect.onScroll": ()=>{
                    if (!frame) frame = window.requestAnimationFrame(updateProgress);
                }
            }["PortfolioMotion.useEffect.onScroll"];
            updateProgress();
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            window.addEventListener('resize', onScroll);
            const observer = new IntersectionObserver({
                "PortfolioMotion.useEffect": (entries)=>entries.forEach({
                        "PortfolioMotion.useEffect": (entry)=>{
                            if (entry.isIntersecting) entry.target.classList.add('is-visible');
                        }
                    }["PortfolioMotion.useEffect"])
            }["PortfolioMotion.useEffect"], {
                threshold: 0.12,
                rootMargin: '0px 0px -5% 0px'
            });
            document.querySelectorAll('[data-reveal]').forEach({
                "PortfolioMotion.useEffect": (element)=>observer.observe(element)
            }["PortfolioMotion.useEffect"]);
            const portrait = document.querySelector('.hero__portrait');
            const onPointerMove = {
                "PortfolioMotion.useEffect.onPointerMove": (event)=>{
                    if (!portrait || !root.dataset.motion || root.dataset.motion === 'off') return;
                    const bounds = portrait.getBoundingClientRect();
                    const x = (event.clientX - bounds.left) / bounds.width - .5;
                    const y = (event.clientY - bounds.top) / bounds.height - .5;
                    portrait.style.setProperty('--tilt-x', `${x * 7}deg`);
                    portrait.style.setProperty('--tilt-y', `${y * -7}deg`);
                }
            }["PortfolioMotion.useEffect.onPointerMove"];
            const resetPortrait = {
                "PortfolioMotion.useEffect.resetPortrait": ()=>{
                    portrait?.style.setProperty('--tilt-x', '0deg');
                    portrait?.style.setProperty('--tilt-y', '0deg');
                }
            }["PortfolioMotion.useEffect.resetPortrait"];
            portrait?.addEventListener('pointermove', onPointerMove);
            portrait?.addEventListener('pointerleave', resetPortrait);
            return ({
                "PortfolioMotion.useEffect": ()=>{
                    window.cancelAnimationFrame(frame);
                    window.removeEventListener('scroll', onScroll);
                    window.removeEventListener('resize', onScroll);
                    observer.disconnect();
                    portrait?.removeEventListener('pointermove', onPointerMove);
                    portrait?.removeEventListener('pointerleave', resetPortrait);
                }
            })["PortfolioMotion.useEffect"];
        }
    }["PortfolioMotion.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioMotion.useEffect": ()=>{
            if (!enabled || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
            const contact = document.querySelector('[data-contact]');
            if (!contact) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "PortfolioMotion.useEffect.context": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo('.contact-reveal', {
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
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo('.contact-orbit', {
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
                }
            }["PortfolioMotion.useEffect.context"], contact);
            return ({
                "PortfolioMotion.useEffect": ()=>context.revert()
            })["PortfolioMotion.useEffect"];
        }
    }["PortfolioMotion.useEffect"], [
        enabled
    ]);
    const toggle = ()=>{
        const next = !enabled;
        setEnabled(next);
        document.documentElement.dataset.motion = next ? 'on' : 'off';
        window.localStorage.setItem('manish-motion', next ? 'on' : 'off');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "scroll-progress",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                    fileName: "[project]/app/components/portfolio-motion.tsx",
                    lineNumber: 100,
                    columnNumber: 59
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/portfolio-motion.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "motion-toggle",
                type: "button",
                "aria-pressed": enabled,
                onClick: toggle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(PortfolioMotion, "1IqnBEzHexXsICY3tAEauFHfOik=");
_c = PortfolioMotion;
var _c;
__turbopack_context__.k.register(_c, "PortfolioMotion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_portfolio-motion_tsx_a8fce7cc._.js.map
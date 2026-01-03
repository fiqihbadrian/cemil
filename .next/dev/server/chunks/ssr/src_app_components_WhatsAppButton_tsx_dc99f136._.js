module.exports = [
"[project]/src/app/components/WhatsAppButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhatsAppButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function WhatsAppButton({ productName }) {
    const handleWhatsApp = ()=>{
        const kemasan = document.getElementById('kemasan').value;
        const jumlah = document.getElementById('jumlah').value;
        const message = `Halo, saya mau pesan *${productName}*%0A• Kemasan: ${kemasan}%0A• Jumlah: ${jumlah}`;
        const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleWhatsApp,
        className: "flex-1 text-center py-3 bg-black text-white rounded-lg hover:bg-gray-600 cursor-pointer",
        children: "Beli via WhatsApp"
    }, void 0, false, {
        fileName: "[project]/src/app/components/WhatsAppButton.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_app_components_WhatsAppButton_tsx_dc99f136._.js.map
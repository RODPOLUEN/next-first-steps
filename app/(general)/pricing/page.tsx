import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Precios",
    description: "Página de presio",
    keywords: [
        "Pricing",
        "Piercing",
        "Luis",
        "Información",
        "Precios",
        "presio",
        "5peso",
    ],
};

export default function PricingPage() {
    return (
        <>
            <span className="text-5xl">Pricing Page</span>
        </>
    );
}

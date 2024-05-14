import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Acerca de",
    description: "Página de acerca de",
    keywords: ["About page", "Luis", "Información", "Acerca de"],
};

export default function AboutPage() {
    return <span className="text-5xl">About Page</span>;
}

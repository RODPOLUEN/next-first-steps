import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacto",
    description: "Página de contacto",
    keywords: ["Contact", "Luis", "Información", "Contacto"],
};

export default function ContactPage() {
    return (
        <>
            <span className="text-5xl">Contact Page</span>
        </>
    );
}

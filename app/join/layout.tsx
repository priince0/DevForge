import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Join DevForge | DevForge",
    description: "Request access to DevForge for Newton School students and start your open source journey.",
    alternates: {
        canonical: "/join",
    },
};

export default function JoinLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return children;
}
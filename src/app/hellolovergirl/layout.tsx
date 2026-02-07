import { Metadata } from "next";
import "./lovergirl.module.css";

export const metadata: Metadata = {
    title: "💌 For You",
    description: "Open this.",
    themeColor: "#f8c8dc",
    openGraph: {
        title: "Open Me!",
        description: "Open this.",
    },
};

export default function HelloLoverGirlLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            className="min-h-screen"
            style={{
                paddingTop: "env(safe-area-inset-top)",
                paddingBottom: "env(safe-area-inset-bottom)",
            }}
        >
            {children}
        </div>
    );
}

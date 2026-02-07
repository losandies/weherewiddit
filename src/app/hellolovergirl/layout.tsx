import "./lovergirl.module.css";

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

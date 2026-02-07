"use client";
import { useState } from "react";

export default function EnvelopeReveal() {
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-[100dvh] flex items-center justify-center bg-[#f8c8dc]">
            <button
                onClick={() => setOpen(true)}
                className="relative w-[280px] h-[200px]"
            >
                {/* Envelope body */}
                <div className="absolute inset-0 bg-red-400 rounded-2xl shadow-xl" />

                {/* Flap */}
                <div
                    className={`absolute top-0 left-0 w-full h-[110px]
          bg-red-500 rounded-t-2xl
          origin-top
          ${open ? "flap-open" : ""}`}
                    style={{
                        clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                    }}
                />
            </button>
        </div>
    );
}

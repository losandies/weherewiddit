"use client";

import * as React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import EnvelopeReveal from "./Envelope";

export function ValentineLetterModal() {
    return (
        <Dialog>
            {/* Trigger can be your envelope/letter UI */}
            <DialogTrigger asChild>
                <button
                    type="button"
                    className="active:scale-95 transition-transform"
                    aria-label="Open letter"
                >
                    {/* Replace this with your envelope or letter element
                    <div className="w-64 h-40 rounded-2xl bg-white shadow-lg flex items-center justify-center">
                        Tap to open 💌
                    </div> */}
                    <EnvelopeReveal />
                </button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>To Taylor 💘</DialogTitle>
                    {/* <DialogDescription>
                        From the last lover boy in the world
                    </DialogDescription> */}
                </DialogHeader>

                <div className="mt-2 space-y-3 text-base leading-relaxed">
                    <p>
                        I want to do something special for you because I have a
                        pretty good feeling that you deserve it.
                    </p>
                    <p>Will you be my Valentine?</p>
                    <p className="text-sm opacity-70">
                        — Last Lover Boy In The World
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    );
}

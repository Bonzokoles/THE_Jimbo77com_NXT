"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Rocket, Hammer, Star, Binary, Sparkles } from "lucide-react";

export default function ExperienceStickyScroll() {
    const journeyContent = [
        {
            label: "AI Workers Platform • Aktualnie",
            title: "JIMBO Inc",
            description: "Budowa ekosystemu AI Workers na mybonzo.com — 30+ Cloudflare Workers, systemy Multi-Agent (MOA), RAG z ChromaDB, serverless architecture na Edge Computing. Orkiestracja agentów AI z intelligent routing.",
            content: (
                <div className="h-full w-full flex items-center justify-center p-8 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-transparent relative group overflow-hidden">
                    {/* Animated Background Element */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="relative mb-6">
                            <Rocket className="w-20 h-20 text-primary animate-pulse" />
                            <Binary className="w-8 h-8 text-blue-500 absolute -top-2 -right-2 animate-bounce opacity-50" />
                        </div>

                        <div className="flex flex-wrap gap-2 justify-center mb-4">
                            {["CEO", "AI Architect", "30+ Workers"].map(s => (
                                <span key={s} className="px-3 py-1 rounded-full text-[10px] bg-primary/10 text-primary border border-primary/20 font-mono font-bold backdrop-blur-md">
                                    {s}
                                </span>
                            ))}
                        </div>
                        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Edge Computing Platform</p>
                    </div>

                    {/* Holographic Scan Effect */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-scan z-20" />
                </div>
            ),
        },
        {
            label: "Pasja & Rzemiosło",
            title: "Projektowanie & 3D",
            description: "PRO100 — projektowanie mebli z automatyzacjami AI. SketchUp — modele 3D konstrukcji drewnianych. Blender & TwinMotion — photorealistic renders. Połączenie tradycyjnego rzemiosła z nowoczesnymi narzędziami.",
            content: (
                <div className="h-full w-full flex items-center justify-center p-8 bg-gradient-to-br from-orange-600/20 via-rose-600/10 to-transparent relative group overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute inset-0 bg-[radial-gradient(#80808012_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="relative mb-6">
                            <Hammer className="w-20 h-20 text-orange-500 hover:rotate-6 transition-transform duration-500" />
                            <Sparkles className="w-6 h-6 text-yellow-500 absolute -bottom-2 -left-2 animate-pulse" />
                        </div>

                        <div className="flex flex-wrap gap-2 justify-center mb-4">
                            {["PRO100", "3D Design", "Drewno"].map(s => (
                                <span key={s} className="px-3 py-1 rounded-full text-[10px] bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 font-mono font-bold backdrop-blur-md">
                                    {s}
                                </span>
                            ))}
                        </div>
                        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Tradycja & Technologia</p>
                    </div>
                </div>
            ),
        }
    ];

    return (
        <div className="w-full">
            <StickyScroll content={journeyContent} />
        </div>
    );
}

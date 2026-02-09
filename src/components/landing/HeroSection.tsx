"use client";

import Link from 'next/link';
import { useAuth } from '@/context/auth-context';
import { ArrowRight, Video } from 'lucide-react';
import { PawPrint } from '@/components/ui/PetIcons';

export default function HeroSection() {
    const { user } = useAuth();

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[url('/landing_page_background_1770003023741.png')] bg-cover bg-center opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white" />

                {/* Floating Paw Prints */}
                <PawPrint className="absolute top-20 right-[10%] w-12 h-12 text-primary/20 animate-bounce delay-1000 opacity-60 rotate-12" />
                <PawPrint className="absolute bottom-40 left-[5%] w-16 h-16 text-primary/20 animate-pulse delay-700 opacity-60 -rotate-12" />
                <PawPrint className="absolute top-40 left-[15%] w-8 h-8 text-primary/10 animate-bounce delay-500 opacity-40 rotate-45" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">



                <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-neutral-900 sm:text-7xl mb-6 relative">
                    Intelligent monitoring for your <span className="text-primary relative inline-block">
                        beloved pets
                        <PawPrint className="absolute -top-6 -right-6 w-8 h-8 text-amber-400 rotate-12 animate-pulse" />
                    </span>.
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-neutral-600 mb-10 leading-relaxed">
                    Advanced AI-driven insights, real-time behavioral analysis, and autonomous interventions to keep your pets happy, healthy, and safe while you're away.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    {user ? (
                        <Link
                            href="/dashboard"
                            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary/90 hover:scale-105"
                        >
                            View Dashboard <ArrowRight className="h-4 w-4" />
                        </Link>
                    ) : (
                        <Link
                            href="/register"
                            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary/90 hover:scale-105"
                        >
                            Start Free Trial <ArrowRight className="h-4 w-4" />
                        </Link>
                    )}
                    <button className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-neutral-700 shadow-sm border border-neutral-200 transition hover:bg-neutral-50 hover:text-neutral-900 group">
                        <Video className="h-4 w-4 text-neutral-500 group-hover:text-primary transition-colors" /> Watch Demo
                    </button>
                </div>
            </div>
        </section>
    );
}

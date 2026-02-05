"use client";

import Link from 'next/link';

import { PawPrint } from '@/components/ui/PetIcons';

export default function LandingFooter() {
    return (
        <footer className="bg-white border-t border-neutral-200 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                    <div className="flex items-center gap-2">
                        <img src="/logo.png" alt="PetPulse Logo" className="h-6 w-auto" />
                        <span className="font-bold text-neutral-900">PetPulse</span>
                    </div>
                    <div className="flex gap-8 text-sm text-neutral-500">
                        <Link href="/roadmap" className="hover:text-primary transition">Roadmap</Link>
                    </div>
                </div>
                <div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-400">
                    <p>&copy; {new Date().getFullYear()} PetPulse AI. All rights reserved.</p>
                    <p className="flex items-center gap-2">
                        Made with ❤️ for pets everywhere.
                        <PawPrint className="h-4 w-4 text-neutral-300" />
                    </p>
                </div>
            </div>
        </footer>
    );
}

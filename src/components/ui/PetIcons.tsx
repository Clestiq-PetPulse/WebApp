import React from 'react';

export const HappyDog = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="90" className="fill-primary/20" />
        <path d="M60 70C60 70 50 40 30 50C10 60 20 100 20 100" className="fill-amber-700" />
        <path d="M140 70C140 70 150 40 170 50C190 60 180 100 180 100" className="fill-amber-700" />
        <circle cx="100" cy="100" r="60" className="fill-amber-500" />
        <circle cx="80" cy="90" r="8" className="fill-neutral-900" />
        <circle cx="120" cy="90" r="8" className="fill-neutral-900" />
        <path d="M100 110L90 120H110L100 110Z" className="fill-neutral-800" />
        <path d="M100 125C100 125 90 140 80 135" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-neutral-900" />
        <path d="M100 125C100 125 110 140 120 135" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-neutral-900" />
        <path d="M100 135V150" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-pink-400" />
    </svg>
);

export const PawPrint = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="40" r="12" />
        <circle cx="50" cy="25" r="12" />
        <circle cx="80" cy="40" r="12" />
        <circle cx="15" cy="70" r="10" />
        <circle cx="85" cy="70" r="10" />
        <path d="M50 85C65 85 75 75 75 60C75 50 65 45 50 45C35 45 25 50 25 60C25 75 35 85 50 85Z" />
    </svg>
);

export const SafeShield = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5L90 20V50C90 75 50 95 50 95C50 95 10 75 10 50V20L50 5Z" className="fill-primary" />
        <path d="M50 15L80 26V50C80 70 50 85 50 85C50 85 20 70 20 50V26L50 15Z" className="fill-primary/80" />
        <circle cx="50" cy="50" r="20" className="fill-white/20" />
        <path d="M50 45C55 45 58 42 58 42" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <path d="M50 45C45 45 42 42 42 42" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <path d="M50 55C50 55 45 65 50 65C55 65 50 55 50 55Z" className="fill-white" />
    </svg>
);

export const Bone = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 50" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 10C10 10 5 15 5 25C5 35 10 40 15 40C20 40 25 35 25 30H75C75 35 80 40 85 40C90 40 95 35 95 25C95 15 90 10 85 10C80 10 75 15 75 20H25C25 15 20 10 15 10Z" />
    </svg>
);

export const CatFace = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 70L30 20L80 50C80 50 120 50 120 50L170 20L150 70C150 70 180 100 180 140C180 180 140 190 100 190C60 190 20 180 20 140C20 100 50 70 50 70Z" className="fill-orange-200" />
        <path d="M60 120C60 120 70 135 80 130" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-neutral-800" />
        <path d="M140 120C140 120 130 135 120 130" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-neutral-800" />
        <circle cx="100" cy="145" r="5" className="fill-pink-400" />
        <path d="M100 145V155" stroke="currentColor" strokeWidth="4" className="text-neutral-800" />
        <path d="M100 155C100 155 90 165 80 160" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-neutral-800" />
        <path d="M100 155C100 155 110 165 120 160" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-neutral-800" />
        <path d="M40 130H10" stroke="currentColor" strokeWidth="2" className="text-neutral-400" />
        <path d="M40 140H15" stroke="currentColor" strokeWidth="2" className="text-neutral-400" />
        <path d="M160 130H190" stroke="currentColor" strokeWidth="2" className="text-neutral-400" />
        <path d="M160 140H185" stroke="currentColor" strokeWidth="2" className="text-neutral-400" />
    </svg>
);

export const PetHouse = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10L10 40V90H90V40L50 10Z" className="fill-primary/10 text-primary/30" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
        <path d="M35 90V55C35 48 40 45 50 45C60 45 65 48 65 55V90" className="fill-primary/30" />
        <path d="M35 90V55C35 48 40 45 50 45C60 45 65 48 65 55V90" stroke="currentColor" strokeWidth="4" className="text-primary/60" />
    </svg>
);

export const FoodBowl = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 35L20 55H80L85 35H15Z" className="fill-red-400" />
        <path d="M10 25C10 25 15 35 15 35H85C85 35 90 25 90 25" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-red-500" />
        <circle cx="35" cy="20" r="8" className="fill-amber-700" />
        <circle cx="50" cy="15" r="8" className="fill-amber-600" />
        <circle cx="65" cy="20" r="8" className="fill-amber-700" />
        <circle cx="42" cy="25" r="7" className="fill-amber-800" />
        <circle cx="58" cy="25" r="7" className="fill-amber-800" />
    </svg>
);

export const HeartPulse = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 30L60 10L70 40L80 20L95 80" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500 opacity-50" />
        <path d="M50 90C50 90 10 70 10 40C10 20 30 15 45 30C45 30 50 35 50 35C50 35 55 30 55 30C70 15 90 20 90 40C90 70 50 90 50 90Z" stroke="currentColor" strokeWidth="4" className="text-pink-500" />
    </svg>
);

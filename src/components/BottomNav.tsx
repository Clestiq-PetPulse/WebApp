"use client";

import { useAuth } from '@/context/auth-context';
import {
    LayoutDashboard,
    LogOut,
    PawPrint,
    ShieldAlert,
    User,
    Video
} from "lucide-react";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function BottomNav() {
    const { logout } = useAuth();
    const pathname = usePathname();
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const profileRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    // Close profile menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
                setIsProfileOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleProfileClick = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    const handleLogout = async () => {
        await logout();
        router.push('/login');
    };

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-200 bg-white pb-safe md:hidden">
            <div className="flex justify-around items-center h-16 relative">
                <NavItem href="/dashboard" icon={<LayoutDashboard size={24} />} label="Home" active={pathname === '/dashboard'} />
                <NavItem href="/pets" icon={<PawPrint size={24} />} label="Pets" active={pathname === '/pets'} />
                <NavItem href="/video" icon={<Video size={24} />} label="Videos" active={pathname === '/video'} />
                <NavItem href="/alerts" icon={<ShieldAlert size={24} />} label="Alerts" active={pathname === '/alerts'} />

                {/* Profile Item with Popup Menu */}
                <div className="relative" ref={profileRef}>
                    {isProfileOpen && (
                        <div className="absolute bottom-full right-0 mb-4 w-48 rounded-lg border border-neutral-200 bg-white p-2 shadow-lg animate-in slide-in-from-bottom-2 fade-in duration-200">
                            <Link
                                href="/profile"
                                className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
                                onClick={() => setIsProfileOpen(false)}
                            >
                                <User size={16} />
                                My Profile
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                            >
                                <LogOut size={16} />
                                Logout
                            </button>
                        </div>
                    )}
                    <button
                        onClick={handleProfileClick}
                        className={`flex flex-col items-center justify-center gap-1 p-2 min-w-[64px] ${isProfileOpen || pathname === '/profile' ? "text-primary" : "text-neutral-500"}`}
                    >
                        <User size={24} />
                        <span className="text-[10px] font-medium">Profile</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

function NavItem({ href, icon, label, active = false }: { href: string, icon: React.ReactNode, label: string, active?: boolean }) {
    return (
        <Link
            href={href}
            className={`flex flex-col items-center justify-center gap-1 p-2 min-w-[64px] transition-colors ${active ? "text-primary" : "text-neutral-500 hover:text-neutral-900"
                }`}
        >
            {icon}
            <span className="text-[10px] font-medium">{label}</span>
        </Link>
    );
}

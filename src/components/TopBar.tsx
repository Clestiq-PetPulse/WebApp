

export default function TopBar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center border-b border-neutral-200 bg-white px-4 md:hidden">
            <div className="flex items-center gap-2">
                <img src="/logo.png" alt="PetPulse Logo" className="h-8 w-auto" />
                <span className="text-xl font-bold tracking-tight text-neutral-900">
                    PetPulse
                </span>
            </div>
        </header>
    );
}

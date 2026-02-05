"use client";

import WorkflowSimulation from './WorkflowSimulation';
import { PetHouse, CatFace, HeartPulse, FoodBowl } from '@/components/ui/PetIcons';

export default function WorkflowSection() {
    return (
        <section id="workflow" className="py-24 bg-neutral-50 border-t border-neutral-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Workflow</h2>
                    <p className="text-3xl font-bold text-neutral-900 sm:text-4xl">Simple, seamless, and secure.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side: Steps Text */}
                    <div className="space-y-8">
                        <div className="relative pl-8 border-l-2 border-primary/20 group">
                            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary ring-4 ring-primary/10" />
                            <h3 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                                1. Connect Camera
                                <PetHouse className="w-8 h-8 text-primary/30 group-hover:text-primary transition-colors" />
                            </h3>
                            <p className="mt-2 text-neutral-600">Use your existing webcam, IP camera, or smartphone as a monitoring device.</p>
                        </div>
                        <div className="relative pl-8 border-l-2 border-primary/20 group">
                            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-violet-600 ring-4 ring-violet-50" />
                            <h3 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                                2. AI Analysis
                                <CatFace className="w-8 h-8 text-violet-200 group-hover:text-violet-400 transition-colors" />
                            </h3>
                            <p className="mt-2 text-neutral-600">Our advanced tailored Gemini models analyze video feeds in real-time to detect specific behaviors.</p>
                        </div>
                        <div className="relative pl-8 border-l-2 border-indigo-100 group">
                            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-orange-500 ring-4 ring-orange-50" />
                            <h3 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                                3. Instant Alerts
                                <HeartPulse className="w-8 h-8 text-orange-200 group-hover:text-orange-400 transition-colors" />
                            </h3>
                            <p className="mt-2 text-neutral-600">Receive immediate notifications for events that matter, like distress or unusual activity.</p>
                        </div>
                        <div className="relative pl-8 border-l-2 border-transparent group">
                            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-500 ring-4 ring-blue-50" />
                            <h3 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                                4. Daily Digest
                                <FoodBowl className="w-8 h-8 text-blue-200 group-hover:text-blue-400 transition-colors" />
                            </h3>
                            <p className="mt-2 text-neutral-600">Get a curated summary video of your pet's day delivered every evening.</p>
                        </div>
                    </div>

                    {/* Right Side: Simulation */}
                    <div className="w-full">
                        <WorkflowSimulation />
                    </div>
                </div>
            </div>
        </section>
    );
}

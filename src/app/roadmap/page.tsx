"use client";

import Link from 'next/link';
import { ArrowLeft, CheckCircle, Circle, Clock, Star, ThumbsUp, Bell } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function RoadmapPage() {
    return (
        <div className="min-h-screen bg-neutral-50 font-sans">
            {/* Hero Section */}
            <div className="bg-white border-b border-neutral-200 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/" className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-primary transition mb-6">
                        <ArrowLeft className="h-4 w-4 mr-1" /> Back to Home
                    </Link>
                    <h1 className="text-4xl font-extrabold text-neutral-900 tracking-tight mb-4">Product Roadmap</h1>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        We're building the future of pet care. Here's what we've shipped and what's coming next.
                    </p>
                </div>
            </div>

            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6">
                <div className="relative border-l-2 border-neutral-200 ml-4 sm:ml-6 space-y-12">

                    {/* In Progress Section */}
                    <div className="relative pl-8 sm:pl-12">
                        <SectionMarker icon={<Clock className="h-5 w-5 text-white" />} color="bg-blue-500" />
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">In Progress</h2>
                        <div className="space-y-6">
                            <RoadmapItem
                                title="Advanced Behavior Tagging"
                                desc="Granular classification of pet activities (e.g., eating, sleeping, playing) using multi-modal AI models."
                                status="in-progress"
                                eta="Q1 2026"
                            />
                            <RoadmapItem
                                title="Mobile App (iOS & Android)"
                                desc="Native mobile applications for on-the-go monitoring and push notifications."
                                status="in-progress"
                                eta="Q2 2026"
                            />
                            <RoadmapItem
                                title="Two-Way Audio"
                                desc="Talk to your pet directly through the browser interface."
                                status="in-progress"
                                eta="Q2 2026"
                            />
                        </div>
                    </div>

                    {/* Next Up Section */}
                    <div className="relative pl-8 sm:pl-12">
                        <SectionMarker icon={<Star className="h-5 w-5 text-white" />} color="bg-orange-500" />
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">Next Up (Q2-Q3 2026)</h2>
                        <div className="space-y-6">
                            <RoadmapItem
                                title="Vet Connect"
                                desc="Directly share video clips and health reports with your veterinarian."
                                status="planned"
                                interactive
                            />
                            <RoadmapItem
                                title="Multi-Pet Recognition"
                                desc="Facial recognition to distinguish between multiple pets in the same household."
                                status="planned"
                                interactive
                            />
                            <RoadmapItem
                                title="Smart Feeder Integration"
                                desc="Control compatible smart feeders based on activity levels."
                                status="planned"
                                interactive
                            />
                        </div>
                    </div>

                    {/* Completed Section */}
                    <div className="relative pl-8 sm:pl-12">
                        <SectionMarker icon={<CheckCircle className="h-5 w-5 text-white" />} color="bg-green-500" />
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6">Recently Completed</h2>
                        <div className="space-y-6">
                            <RoadmapItem
                                title="Video Playback Library"
                                desc="Browsable archive of all recorded events."
                                status="completed"
                                released="Jan 2026"
                            />
                            <RoadmapItem
                                title="Real-time Alerts"
                                desc="Instant notifications for critical events."
                                status="completed"
                                released="Jan 2026"
                            />
                            <RoadmapItem
                                title="Daily Digests"
                                desc="Automated AI-generated summary videos."
                                status="completed"
                                released="Dec 2025"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-20 text-center bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm">
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">Have a feature request?</h3>
                    <p className="text-neutral-500 mb-6">We build what you need. Let us know how we can improve.</p>
                    <a href="mailto:feedback@petpulse.ai" className="inline-flex items-center justify-center rounded-full bg-primary text-white px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition shadow-md hover:shadow-lg">
                        Submit Feedback
                    </a>
                </div>
            </div>
        </div>
    );
}

function SectionMarker({ icon, color }: { icon: any, color: string }) {
    return (
        <div className={cn("absolute -left-[21px] sm:-left-[23px] h-10 w-10 rounded-full flex items-center justify-center shadow-md border-4 border-white", color)}>
            {icon}
        </div>
    )
}

function RoadmapItem({ title, desc, status, eta, released, interactive }: { title: string, desc: string, status: 'completed' | 'in-progress' | 'planned', eta?: string, released?: string, interactive?: boolean }) {
    const [votes, setVotes] = useState(Math.floor(Math.random() * 50) + 10);
    const [voted, setVoted] = useState(false);

    const handleVote = () => {
        if (voted) {
            setVotes(v => v - 1);
            setVoted(false);
        } else {
            setVotes(v => v + 1);
            setVoted(true);
        }
    }

    return (
        <div className="group bg-white rounded-xl border border-neutral-200 p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 relative overflow-hidden">
            {/* Status Indicator Bar */}
            <div className={cn("absolute left-0 top-0 bottom-0 w-1",
                status === 'completed' ? "bg-green-500" :
                    status === 'in-progress' ? "bg-blue-500" : "bg-orange-400"
            )} />

            <div className="flex justify-between items-start mb-2">
                <div>
                    <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold text-lg text-neutral-900">{title}</h3>
                        <StatusBadge status={status} />
                    </div>
                    {eta && <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">ETA: {eta}</span>}
                    {released && <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">Released: {released}</span>}
                </div>

                {interactive && (
                    <button
                        onClick={handleVote}
                        className={cn("flex flex-col items-center gap-1 p-2 rounded-lg transition-colors border",
                            voted ? "bg-primary/5 border-primary/20 text-primary" : "bg-neutral-50 border-neutral-100 text-neutral-400 hover:bg-neutral-100"
                        )}
                    >
                        <ThumbsUp className={cn("h-5 w-5", voted && "fill-current")} />
                        <span className="text-xs font-bold">{votes}</span>
                    </button>
                )}
            </div>

            <p className="text-neutral-600 leading-relaxed">{desc}</p>
        </div>
    );
}

function StatusBadge({ status }: { status: string }) {
    if (status === 'completed') {
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Shipped</span>
    }
    if (status === 'in-progress') {
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 animate-pulse">Building</span>
    }
    return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">Planned</span>
}

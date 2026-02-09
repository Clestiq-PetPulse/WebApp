"use client";

import { useEffect, useState } from "react";
import { Camera, BrainCircuit, Database, Bell, Check, Wifi, Shield, Terminal, AlertTriangle, FileVideo, ShieldAlert, Server, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

type LogEntry = {
    id: string;
    msg: string;
    timestamp: string;
    type: 'info' | 'warning' | 'error' | 'success';
}

type VideoEvent = {
    id: string;
    status: 'analyzing' | 'safe' | 'anomalous';
    timestamp: number;
}

export default function WorkflowSimulation() {
    const [step, setStep] = useState(0);
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [anomalyCount, setAnomalyCount] = useState(0);
    const [events, setEvents] = useState<VideoEvent[]>([]);
    const [workflowTriggered, setWorkflowTriggered] = useState(false);

    // Main Pipeline Simulation
    useEffect(() => {
        const sequence = async () => {
            while (true) {
                // Step 0: Ingest
                setStep(0);
                await wait(2000);

                // Step 1: Analyze
                setStep(1);
                await wait(1500);

                // Step 2: Process
                setStep(2);
                await wait(1000);

                // Step 3: Alert
                setStep(3);
                await wait(2500);

                // Reset visual step but keep running logic
                setStep(-1);
                await wait(500);
            }
        };
        sequence();
    }, []);

    // Anomaly Detection Logic
    useEffect(() => {
        const interval = setInterval(() => {
            // Randomly generate video events
            const isAnomaly = Math.random() > 0.5; // 50% chance
            const newEvent: VideoEvent = {
                id: Math.random().toString(36).substring(7),
                status: 'analyzing',
                timestamp: Date.now()
            };

            setEvents(prev => [newEvent, ...prev].slice(0, 5));
            addLog(`Ingesting video stream chunk [${newEvent.id}]...`, 'info');

            setTimeout(() => {
                const status = isAnomaly ? 'anomalous' : 'safe';
                setEvents(prev => prev.map(e => e.id === newEvent.id ? { ...e, status } : e));

                if (status === 'safe') {
                    addLog(`Analysis complete [${newEvent.id}]: Behavior Normal`, 'success');
                } else {
                    // Anomaly Logic
                    setAnomalyCount(c => {
                        const newCount = c + 1;
                        if (newCount === 1) {
                            addLog(`Analysis complete [${newEvent.id}]: ANOMALY DETECTED`, 'warning');
                        } else if (newCount === 2) {
                            addLog(`[Automated Response] Playing Calming Music... 🎵`, 'info');
                        } else if (newCount === 3) {
                            addLog(`[Escalation] Playing Owner Voice Recording... 🎤`, 'warning');
                        } else if (newCount === 4) {
                            addLog(`[Escalation] Threat Dispenser Activated ⚡`, 'error');
                            addLog(`Notifying User (High Priority Push)... 🔔`, 'info');
                            setWorkflowTriggered(true);
                        } else if (newCount === 5) {
                            addLog(`SEVERITY INCREASED TO HIGH 🚨`, 'error');
                            addLog(`Quick Action Generated: "Contact Vet"`, 'success');

                            // Reset after a delay
                            setTimeout(() => {
                                setWorkflowTriggered(false);
                                setAnomalyCount(0);
                                addLog("Incident Resolved. System Reset.", 'info');
                            }, 4000);
                        }
                        return newCount;
                    });
                }
            }, 1000); // Analysis takes 1s

        }, 3500); // New event every 3.5s

        return () => clearInterval(interval);
    }, []);


    const addLog = (msg: string, type: 'info' | 'warning' | 'error' | 'success' = 'info') => {
        setLogs(prev => [...prev.slice(-6), {
            id: Math.random().toString(36),
            msg,
            timestamp: new Date().toLocaleTimeString().split(' ')[0],
            type
        }]);
    };

    const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    return (
        <div className="w-full bg-neutral-900/95 backdrop-blur-sm rounded-3xl border border-white/5 shadow-2xl flex flex-col relative text-white font-mono h-[600px] overflow-hidden">
            {/* Header / Status Bar */}
            <div className="bg-neutral-950/50 px-6 py-3 border-b border-white/5 flex items-center justify-between z-20 relative shrink-0">
                <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">System Online</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-white/50">
                    <div className="flex items-center gap-1">
                        <Wifi className="h-3 w-3" />
                        <span>12ms</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Shield className="h-3 w-3" />
                        <span>Protected</span>
                    </div>
                </div>
            </div>

            <div className="p-6 flex flex-col gap-6 relative z-10 h-full overflow-hidden">

                {/* Visual Pipeline - Horizontal at Top */}
                <div className="w-full">
                    <h3 className="text-white/60 text-xs font-bold uppercase tracking-widest mb-6">Core Pipeline</h3>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -z-10 hidden md:block" />

                        <PipelineStep
                            active={step === 0}
                            icon={Camera}
                            label="Video Ingestion"
                            detail="1080p Stream"
                        />

                        {/* Mobile Connector */}
                        <div className="h-4 border-l-2 border-dashed border-white/10 md:hidden" />

                        <PipelineStep
                            active={step === 1}
                            icon={BrainCircuit}
                            label="AI Analysis"
                            detail="Gemini Models"
                            color="text-violet-400"
                        />

                        {/* Mobile Connector */}
                        <div className="h-4 border-l-2 border-dashed border-white/10 md:hidden" />

                        <PipelineStep
                            active={step === 2}
                            icon={Database}
                            label="Persistence"
                            detail="PostgreSQL"
                            color="text-blue-400"
                        />

                        {/* Mobile Connector */}
                        <div className="h-4 border-l-2 border-dashed border-white/10 md:hidden" />

                        <PipelineStep
                            active={step === 3}
                            icon={Bell}
                            label="User Alert"
                            detail="Push Notification"
                            color="text-emerald-400"
                        />
                    </div>
                </div>

                {/* Bottom Section: System Alert Analysis & Logs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full flex-1 min-h-0">
                    {/* Anomaly Monitor */}
                    <div className="bg-black/20 rounded-xl border border-white/10 p-4 h-full flex flex-col gap-4 overflow-hidden">
                        <div className="flex items-center justify-between shrink-0">
                            <h3 className="text-white/60 text-xs font-bold uppercase tracking-widest">System Alert Analysis</h3>
                            <div className={cn("px-2 py-1 rounded text-xs font-bold flex items-center gap-1",
                                anomalyCount >= 4 ? "bg-red-500/20 text-red-200 border border-red-500/30 animate-pulse" : "bg-white/5 text-white/40"
                            )}>
                                <AlertTriangle className="h-3 w-3" />
                                <span>Threat: {anomalyCount >= 4 ? "CRITICAL" : anomalyCount > 0 ? "ELEVATED" : "NORMAL"}</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 shrink-0">
                            <div className="bg-black/20 rounded-lg p-3 border border-white/5 flex flex-col items-center justify-center">
                                <span className="text-2xl font-bold text-white mb-1">{anomalyCount}</span>
                                <span className="text-[10px] text-white/40 uppercase">Anomalies</span>
                            </div>
                            <div className="bg-black/20 rounded-lg p-3 border border-white/5 flex flex-col items-center justify-center">
                                <span className="text-2xl font-bold text-white mb-1">5</span>
                                <span className="text-[10px] text-white/40 uppercase">Threshold</span>
                            </div>
                        </div>

                        {/* Recent Videos List - Scrollable if needed */}
                        <div className="space-y-2 flex-1 overflow-y-auto scrollbar-none min-h-0">
                            {events.slice(0, 4).map((evt) => (
                                <div key={evt.id} className="flex items-center gap-3 p-2 rounded-lg bg-black/20 border border-white/5 text-xs">
                                    <FileVideo className="h-4 w-4 text-white/40 shrink-0" />
                                    <span className="font-mono text-white/60 truncate">vid_{evt.id}.mp4</span>
                                    <div className="ml-auto shrink-0">
                                        {evt.status === 'analyzing' && <span className="text-blue-300 animate-pulse">Analyzing...</span>}
                                        {evt.status === 'safe' && <span className="text-emerald-300 flex items-center gap-1"><Check className="h-3 w-3" /> Safe</span>}
                                        {evt.status === 'anomalous' && <span className="text-red-300 flex items-center gap-1"><AlertTriangle className="h-3 w-3" /> Anomaly</span>}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Workflow Trigger Alert */}
                        {workflowTriggered && (
                            <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-2 flex items-center gap-3 animate-bounce shrink-0">
                                <ShieldAlert className="h-4 w-4 text-red-100" />
                                <div>
                                    <p className="text-red-100 font-bold text-xs">Escalation Triggered!</p>
                                    <p className="text-red-200/70 text-[10px]">Reporting to authorities...</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Live Logs */}
                    <div className="bg-black/40 rounded-xl border border-white/10 p-4 font-mono text-[10px] leading-relaxed overflow-hidden flex flex-col h-full">
                        <div className="flex items-center gap-2 text-white/40 mb-2 pb-2 border-b border-white/10 shrink-0">
                            <Terminal className="h-3 w-3" />
                            <span>/var/log/petpulse/analysis.log</span>
                        </div>
                        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent flex flex-col justify-end gap-1">
                            {logs.map((log) => (
                                <div key={log.id} className="animate-in fade-in slide-in-from-left-2 duration-300 flex items-start gap-2">
                                    <span className="text-white/30 shrink-0">[{log.timestamp}]</span>
                                    <span className={cn(
                                        log.type === 'info' && "text-white/70",
                                        log.type === 'success' && "text-emerald-300",
                                        log.type === 'warning' && "text-amber-300",
                                        log.type === 'error' && "text-red-300 font-bold"
                                    )}>
                                        {log.type === 'success' && "✓ "}
                                        {log.type === 'warning' && "⚠ "}
                                        {log.type === 'error' && "✖ "}
                                        {log.msg}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen opacity-20 z-0" />
            </div>
        </div>
    );
}

function PipelineStep({ active, icon: Icon, label, detail, color = "text-white" }: { active: boolean, icon: any, label: string, detail: string, color?: string }) {
    return (
        <div className={cn("flex flex-row md:flex-col items-center gap-2 p-2 rounded-xl transition-all duration-500 z-10 bg-neutral-900 md:bg-transparent", active ? "md:bg-white/5 md:border md:border-white/10" : "opacity-40")}>
            <div className={cn("h-8 w-8 rounded-full flex items-center justify-center bg-black/40 border border-white/10 shrink-0", active && `${color} border-current shadow-[0_0_10px_-2px_currentColor]`)}>
                <Icon className={cn("h-4 w-4 transition-colors", active ? "text-current" : "text-white/50")} />
            </div>
            <div className="md:text-center">
                <h4 className={cn("font-bold text-[10px] md:text-xs whitespace-nowrap", active ? "text-white" : "text-white/60")}>{label}</h4>
                <p className="text-[9px] text-white/40 hidden md:block">{detail}</p>
            </div>
        </div>
    )
}

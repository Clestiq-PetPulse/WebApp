import { petApi, emergencyContactApi } from './api';

export interface SimulationProgress {
    step: number;
    totalSteps: number;
    message: string;
    completed: boolean;
    error?: string;
}

export const runEscalationSimulation = async (
    user: any,
    onProgress: (progress: SimulationProgress) => void
) => {
    try {
        onProgress({ step: 0, totalSteps: 5, message: 'Initializing simulation...', completed: false });

        // 1. Get or Create Pet
        onProgress({ step: 0, totalSteps: 5, message: 'Identifying test pet...', completed: false });
        const pets = await petApi.list();
        let petId = pets.length > 0 ? pets[0].id : null;

        if (!petId) {
            onProgress({ step: 0, totalSteps: 5, message: 'Creating simulation pet...', completed: false });
            const newPet = await petApi.create({
                name: "EscalationPet",
                age: 2,
                species: "Dog",
                breed: "Lab",
                bio: "Simulation Pet"
            });
            petId = newPet.id;
        }

        // 2. Ensure Emergency Contact
        onProgress({ step: 0, totalSteps: 5, message: 'Verifying emergency contacts...', completed: false });
        const contacts = await emergencyContactApi.list();
        if (contacts.length === 0) {
            await emergencyContactApi.create({
                name: "Simulation Neighbor",
                phone: "+15550000000",
                contact_type: "Neighbor",
                email: "neighbor@simulation.com"
            });
        }

        // 3. Load Video Asset
        onProgress({ step: 0, totalSteps: 5, message: 'Loading video asset...', completed: false });
        const videoResponse = await fetch('/pacing.mp4');
        const videoBlob = await videoResponse.blob();
        const videoFile = new File([videoBlob], 'pacing.mp4', { type: 'video/mp4' });

        // 4. Trigger Alerts (Loop 5 times)
        for (let i = 1; i <= 5; i++) {
            onProgress({ step: i, totalSteps: 5, message: `Triggering Alert Level ${i}/5 (Uploading Video)...`, completed: false });

            const formData = new FormData();
            formData.append('video', videoFile);
            await fetch(`/api/pets/${petId}/upload_video`, {
                method: 'POST',
                body: formData
            });

            if (i < 5) {
                onProgress({ step: i, totalSteps: 5, message: `Processing Alert ${i}... Waiting 15s...`, completed: false });
                await new Promise(resolve => setTimeout(resolve, 15000)); // Wait 15s between uploads
            }
        }

        onProgress({ step: 5, totalSteps: 5, message: 'Simulation Complete! Refreshing alerts...', completed: true });

    } catch (error: any) {
        console.error("Simulation failed:", error);
        onProgress({
            step: 0,
            totalSteps: 5,
            message: 'Simulation failed: ' + (error.message || 'Unknown error'),
            completed: true,
            error: error.message
        });
    }
};

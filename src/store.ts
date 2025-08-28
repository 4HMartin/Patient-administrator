import {create} from 'zustand'
import type { DraftPatient, Patient } from './types'

/** The state and its actions must be defined within the state type */
type PatientState = {
    patients: Patient[]
    addPatient: (data: DraftPatient) => void
}

export const usePatientStore = create<PatientState>(() => ({
    patients: [],
    addPatient(data) {
        console.log(data)
    },
}))
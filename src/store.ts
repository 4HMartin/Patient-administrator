import {create} from 'zustand'
import type { DraftPatient, Patient } from './types'
import { v4 as uuidv4 } from 'uuid'

/** The state and its actions must be defined within the state type */
type PatientState = {
    patients: Patient[]
    activeId: Patient['id']
    addPatient: (data: DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
    getPatientById: (id: Patient['id']) => void
}

/**
 * @description Converts type DraftPatient to Patient by adding an ID
 */
const createPatient = (patient: DraftPatient): Patient => {
    return { ...patient, id: uuidv4() }
}

/**
 * @description The callback of the create function can receive two functions as parameters: the 'set' function to add values to the state and the 'get' function to obtain values from the state.
 * In order to visualise state data, the use of the usePatientStore must be instantiated.
 */
export const usePatientStore = create<PatientState>((set) => ({
    patients: [],
    activeId: '',

    addPatient(data) {

        const newPatient = createPatient(data)

        /** Parameter state is a reserved keyword that refers to the state */
        set((state) => ({
            patients: [...state.patients, newPatient]
        }))
    },

    deletePatient(id) {
        set((state) => ({
            patients: state.patients.filter( patient => patient.id !== id)
        }))
    },

    getPatientById(id) {
        set(() => ({
            activeId: id
        }))
    },
}))
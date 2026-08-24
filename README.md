# 🐈 Veterinary Patient Follow-up - React
**EN - English**

**🌐 Live demo:** [veterinary-patient.4hmartin.com](https://veterinary-patient.4hmartin.com)

## Description

Practical project in React, where the user enters their pet's details to add it to the list of patients, using a form managed by `react-hook-form` and global state management via `zustand`.

The application allows a veterinary clinic to keep a follow-up list of patients (pets), each linked to an owner (caretaker), a registration date, a contact email, and a description of symptoms. Records can be created, edited, and deleted, and the list persists across browser sessions via `localStorage`.

## Features

- **Register a patient** — add a new pet to the list via a validated form (name, owner, email, registration date, symptoms).
- **Client-side validation** — all fields are required, and the email field is validated against a regex pattern, with inline error messages.
- **Edit a patient** — load an existing record back into the form to update its details.
- **Delete a patient** — remove a record from the list with a single click.
- **Persistent state** — the patient list is persisted to `localStorage` (via Zustand's `persist` middleware) so data survives page reloads.
- **Toast notifications** — success (register/update) and error (delete) actions trigger contextual toast messages.
- **Empty state handling** — a friendly message is shown when no patients have been registered yet.
- **Responsive layout** — two-column layout (form / list) on medium+ screens, single column on mobile.

## Technologies used

- [React 19](https://react.dev/) — UI library, function components with hooks.
- [TypeScript](https://www.typescriptlang.org/) — static typing across components, store, and types.
- [Vite 7](https://vite.dev/) — build tool and dev server (with the SWC-based React plugin).
- [Tailwind CSS 4](https://tailwindcss.com/) — utility-first styling, integrated via `@tailwindcss/vite`.
- [ESLint 9](https://eslint.org/) — linting, with `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`.

## Libraries used

| Library | Purpose |
|---|---|
| [`react-hook-form`](https://react-hook-form.com/) | Form state, validation, and submission handling in `PatientForm`. |
| [`zustand`](https://zustand-demo.pmnd.rs/) | Global state management for the patient list and the active (editing) patient ID. |
| `zustand/middleware` (`persist`) | Persists the Zustand store to `localStorage` under the key `patient-storage`. |
| [`react-toastify`](https://fkhadra.github.io/react-toastify/) | Toast notifications for create, update, and delete actions. |
| [`uuid`](https://github.com/uuidjs/uuid) | Generates unique `id` values (`uuidv4`) for new patient records. |

## React hooks used

- **`useEffect`** — in `PatientForm`, watches `activeId` to pre-fill the form fields when a patient is selected for editing.
- **`useForm`** (from `react-hook-form`) — manages form registration (`register`), validation errors (`formState.errors`), submission (`handleSubmit`), field updates (`setValue`), and reset (`reset`).
- **`usePatientStore`** (custom hook, from `zustand`) — exposes the global store's state (`patients`, `activeId`) and actions (`addPatient`, `updatePatient`, `deletePatient`, `getPatientById`) to any component that needs them.

## Project structure

```
src/
├── components/
│   ├── PatientForm.tsx          # Form to add/edit a patient (react-hook-form)
│   ├── PatientList.tsx          # Renders the list of registered patients
│   ├── PatientDetails.tsx       # Single patient card with Edit/Delete actions
│   ├── PatientDetailsItem.tsx   # Label/value row used inside PatientDetails
│   └── Error.tsx                # Inline field-validation error message
├── types/
│   └── index.ts                 # Patient / DraftPatient type definitions
├── store.ts                     # Zustand store (state + actions) with persist middleware
├── App.tsx                      # Root layout (form + list + toast container)
└── main.tsx                     # Application entry point
```

## Data model

```ts
type Patient = {
  id: string
  name: string
  caretaker: string
  email: string
  date: Date
  symptoms: string
}

type DraftPatient = Omit<Patient, 'id'>
```

---
# 🐈 Veterinary Patient Follow-up - React

**ES - Español**
 
**🌐 Demo en vivo:** [veterinary-patient.4hmartin.com](https://veterinary-patient.4hmartin.com)
 
## Descripción
 
Proyecto práctico en React, donde el usuario ingresa los datos de su mascota para agregarla a la lista de pacientes, utilizando un formulario gestionado con `react-hook-form` y manejo de estado global mediante `zustand`.
 
La aplicación permite a una clínica veterinaria llevar un seguimiento de pacientes (mascotas), cada uno vinculado a un propietario (responsable), una fecha de registro, un correo electrónico de contacto y una descripción de los síntomas. Los registros se pueden crear, editar y eliminar, y la lista persiste entre sesiones del navegador.
 
## Características
 
- **Registrar un paciente** — agrega una nueva mascota a la lista mediante un formulario validado (nombre, propietario, correo electrónico, fecha de registro, síntomas).
- **Validación en el cliente** — todos los campos son obligatorios, y el campo de correo electrónico se valida con una expresión regular, mostrando mensajes de error en línea.
- **Editar un paciente** — carga un registro existente de nuevo en el formulario para actualizar sus datos.
- **Eliminar un paciente** — elimina un registro de la lista con un solo clic.
- **Estado persistente** — la lista de pacientes se guarda en `localStorage` (mediante el middleware `persist` de Zustand) para que los datos se conserven al recargar la página.
- **Notificaciones toast** — las acciones de éxito (registrar/actualizar) y error (eliminar) muestran mensajes toast contextuales.
- **Manejo de estado vacío** — se muestra un mensaje amigable cuando aún no se ha registrado ningún paciente.
- **Diseño responsivo** — diseño de dos columnas (formulario / lista) en pantallas medianas o superiores, y de una sola columna en móviles.
## Tecnologías utilizadas
 
- [React 19](https://react.dev/) — biblioteca de UI, componentes de función con hooks.
- [TypeScript](https://www.typescriptlang.org/) — tipado estático en componentes, store y tipos.
- [Vite 7](https://vite.dev/) — herramienta de build y servidor de desarrollo (con el plugin de React basado en SWC).
- [Tailwind CSS 4](https://tailwindcss.com/) — estilos utility-first, integrado mediante `@tailwindcss/vite`.
- [ESLint 9](https://eslint.org/) — linting, con `typescript-eslint`, `eslint-plugin-react-hooks` y `eslint-plugin-react-refresh`.
## Librerías utilizadas
 
| Librería | Propósito |
|---|---|
| [`react-hook-form`](https://react-hook-form.com/) | Gestión del estado del formulario, validación y envío en `PatientForm`. |
| [`zustand`](https://zustand-demo.pmnd.rs/) | Manejo de estado global para la lista de pacientes y el ID del paciente activo (en edición). |
| `zustand/middleware` (`persist`) | Persiste el store de Zustand en `localStorage` bajo la clave `patient-storage`. |
| [`react-toastify`](https://fkhadra.github.io/react-toastify/) | Notificaciones toast para las acciones de crear, actualizar y eliminar. |
| [`uuid`](https://github.com/uuidjs/uuid) | Genera valores únicos de `id` (`uuidv4`) para los nuevos registros de pacientes. |
 
## Hooks de React utilizados
 
- **`useEffect`** — en `PatientForm`, observa `activeId` para precargar los campos del formulario cuando se selecciona un paciente para editar.
- **`useForm`** (de `react-hook-form`) — gestiona el registro de campos (`register`), los errores de validación (`formState.errors`), el envío (`handleSubmit`), la actualización de campos (`setValue`) y el reinicio (`reset`).
- **`usePatientStore`** (hook personalizado, de `zustand`) — expone el estado del store global (`patients`, `activeId`) y sus acciones (`addPatient`, `updatePatient`, `deletePatient`, `getPatientById`) a cualquier componente que las necesite.
## Estructura del proyecto
 
```
src/
├── components/
│   ├── PatientForm.tsx          # Formulario para agregar/editar un paciente (react-hook-form)
│   ├── PatientList.tsx          # Renderiza la lista de pacientes registrados
│   ├── PatientDetails.tsx       # Tarjeta de un paciente con acciones Editar/Eliminar
│   ├── PatientDetailsItem.tsx   # Fila de etiqueta/valor usada dentro de PatientDetails
│   └── Error.tsx                # Mensaje de error de validación en línea
├── types/
│   └── index.ts                 # Definiciones de tipos Patient / DraftPatient
├── store.ts                     # Store de Zustand (estado + acciones) con middleware persist
├── App.tsx                      # Diseño raíz (formulario + lista + contenedor de toasts)
└── main.tsx                     # Punto de entrada de la aplicación
```
 
## Modelo de datos
 
```ts
type Patient = {
  id: string
  name: string
  caretaker: string
  email: string
  date: Date
  symptoms: string
}
 
type DraftPatient = Omit<Patient, 'id'>
```
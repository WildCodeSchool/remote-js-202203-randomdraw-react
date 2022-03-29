import { Student } from "./model/student";

export const DRAW_STUDENT = 'DRAW_STUDENT';
export const SAVE_STUDENT = 'SAVE_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';
export const SET_EDITED_STUDENT = 'SET_EDITED_STUDENT';
export const RESET_STUDENT = 'RESET_STUDENT';

export function studentReduce(state, action) {

    const { students, speeches } = state;

    switch (action.type) {
        case DRAW_STUDENT:
            const randomStudent = students[Math.floor(Math.random() * students.length)];
            const now = new Date();

            return {
                ...state,
                drawnStudent: randomStudent,
                students: students.map((studentElement) => {
                    if (studentElement.id === randomStudent.id) {
                        // Create a *new* object with changes
                        return { ...studentElement, speeches: [...studentElement.speeches, now] };
                    } else {
                        // No changes
                        return studentElement;
                    }
                }),
                speeches: [
                    ...speeches,
                    {
                        firstName: randomStudent.firstName,
                        lastName: randomStudent.lastName,
                        date: now
                    }
                ]
            }
        case SAVE_STUDENT:
            let newStudents;
            const studentToSave = action.studentToSave;
            if (studentToSave.id) {
                newStudents = students.map(student => {
                    if (student.id === studentToSave.id) {
                        return { ...student, firstName: studentToSave.firstName, lastName: studentToSave.lastName }
                    } else {
                        return student;
                    }
                })
            } else {
                const maxId = students.reduce((maxId, currStud) => maxId < currStud.id ? maxId = currStud.id : maxId, 0) + 1;
                newStudents = [...students, new Student(maxId, studentToSave.firstName, studentToSave.lastName)];
            }

            return {
                ...state,
                students: newStudents,
                editedStudent: { firstName: "", lastName: "" }
            }
        case DELETE_STUDENT:
            return {
                ...state,
                students: students.filter(student => student.id !== action.studentId)
            }
        case SET_EDITED_STUDENT:
            return {
                ...state,
                editedStudent: students.find(student => student.id === action.studentId)
            }
        case RESET_STUDENT:
            return {
                ...state,
                editedStudent: { firstName: "", lastName: "" }
            }
        default:
            throw new Error(`Action non gérée : ${action.type}`)
    }
}
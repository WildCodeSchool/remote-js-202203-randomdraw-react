import { useContext, useEffect, useState } from "react";
import { StudentContext, StudentDispatchContext } from "../App";
import { RESET_STUDENT, SAVE_STUDENT } from "../studentReducer";

function CrewForm() {

    const { editedStudent } = useContext(StudentContext);
    const dispatch = useContext(StudentDispatchContext);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    function handleSumbit(event) {
        event.preventDefault();
        dispatch({
            type: SAVE_STUDENT,
            studentToSave: { id: editedStudent.id, firstName: firstName, lastName: lastName }
        });
        //onSaveStudent({id: editedStudent.id, firstName: firstName, lastName: lastName});
    }

    useEffect(() => {
        setFirstName(editedStudent.firstName);
        setLastName(editedStudent.lastName);
    }, [editedStudent]);

    return (
        <form onSubmit={handleSumbit} onReset={() => dispatch({ type: RESET_STUDENT })}>
            <div className="form-field">
                <label htmlFor="first-name">First name</label>
                <input type="text" name="first-name" id="first-name" required value={firstName} onChange={event => setFirstName(event.target.value)} />
            </div>

            <div className="form-field">
                <label htmlFor="last-name">Last name</label>
                <input type="text" name="last-name" id="last-name" required value={lastName} onChange={event => setLastName(event.target.value)} />
            </div>
            <button type="reset">Reset form 🔄</button>
            <button type="submit">Save 💾</button>
        </form>
    );
}

export default CrewForm;
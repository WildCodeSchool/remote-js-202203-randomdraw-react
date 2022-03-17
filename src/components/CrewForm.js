import { useState } from "react";

function CrewForm({ onNewStudent }) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    function handleSumbit(event) {
        event.preventDefault();
        onNewStudent(firstName, lastName);
    }

    return (
        <form onSubmit={handleSumbit}>
            <div className="form-field">
                <label htmlFor="first-name">First name</label>
                <input type="text" name="first-name" id="first-name" required value={firstName} onChange={event => setFirstName(event.target.value)} />
            </div>

            <div className="form-field">
                <label htmlFor="last-name">Last name</label>
                <input type="text" name="last-name" id="last-name" required value={lastName} onChange={event => setLastName(event.target.value)}/>
            </div>
            <button type="submit">Save 💾</button>
        </form>
    );
}

export default CrewForm;
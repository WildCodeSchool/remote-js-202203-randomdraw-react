import CrewForm from "./CrewForm";
import CrewList from "./CrewList";

function Crew({ students, onSaveStudent, onDeleteStudent, onEditStudent, editedStudent, onReset }) {
    return (
        <section>
            <h2>The crew 👨‍🎓</h2>
            <CrewForm onSaveStudent={onSaveStudent} editedStudent={editedStudent} onReset={onReset}/>
            <CrewList students={students} onDeleteStudent={onDeleteStudent} onEditStudent={onEditStudent} />
        </section>
        // formulaire d'édition de membre
        // tableau de membres
    );
}

export default Crew;
import CrewForm from "./CrewForm";
import CrewList from "./CrewList";

function Crew({ students, onNewStudent, onDeleteStudent }) {
    return (
        <section>
            <h2>The crew 👨‍🎓</h2>
            <CrewForm onNewStudent={onNewStudent} />
            <CrewList students={students} onDeleteStudent={onDeleteStudent} />
        </section>
        // formulaire d'édition de membre
        // tableau de membres
    );
}

export default Crew;
import CrewListRow from "./CrewListRow";

function CrewList({ students, onDeleteStudent, onEditStudent }) {
    const studentRows = students.map(studentElement => <CrewListRow key={studentElement.id} student={studentElement} onEditStudent={onEditStudent} onDeleteStudent={onDeleteStudent} />)

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First name</th>
                    <th>Last Name</th>
                    <th>Speeches count</th>
                    <th>Edit</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody id="tbody-students">
                {studentRows}
            </tbody>
        </table>
    );
}

export default CrewList;
function CrewListRow({ student, onDeleteStudent, onEditStudent }) {

    return (
        <tr>
            <td>{student.id}</td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.speeches.length}</td>
            <td><button value="edit" className="btn-edit" onClick={() => onEditStudent(student.id)}>🖊</button></td>
            <td><button value="delete" className="btn-delete" onClick={() => onDeleteStudent(student.id)}>❌</button></td>
        </tr>
    )
}

export default CrewListRow;
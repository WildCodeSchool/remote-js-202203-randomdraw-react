function CrewListRow({ student, onDeleteStudent }) {
    
    function handleDeleteStudent(id) {
        onDeleteStudent(id);
    }
    
    return (
        <tr>
            <td>{student.id}</td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.speeches.length}</td>
            <td><button value="edit" className="btn-edit">🖊</button></td>
            <td><button value="delete" className="btn-delete" onClick={() => handleDeleteStudent(student.id)}>❌</button></td>
        </tr>
    )
}

export default CrewListRow;
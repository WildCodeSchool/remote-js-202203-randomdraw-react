import { useContext } from "react";
import { StudentContext, StudentDispatchContext } from "../App";
import { DELETE_STUDENT, SET_EDITED_STUDENT } from "../studentReducer";
import CrewListRow from "./CrewListRow";

function CrewList() {

    const { students } = useContext(StudentContext);
    const dispatch = useContext(StudentDispatchContext);

    function handleEditStudent(studentId) {
        dispatch({
            type: SET_EDITED_STUDENT,
            studentId: studentId
          });
    }

    function handleDeleteStudent(studentId) {
        dispatch({
            type: DELETE_STUDENT,
            studentId: studentId
          });
    }

    const studentRows = students.map(studentElement => <CrewListRow key={studentElement.id} student={studentElement} onEditStudent={handleEditStudent} onDeleteStudent={handleDeleteStudent} />)

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
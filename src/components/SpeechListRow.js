
function SpeechListRow({ speech }) {

    return (
        <tr>
            <td>{speech.firstName}</td>
            <td>{speech.lastName}</td>
            <td>{speech.date.toLocaleDateString()}</td>
            <td>{speech.date.toLocaleTimeString()}</td>
        </tr>
    );
}

export default SpeechListRow;
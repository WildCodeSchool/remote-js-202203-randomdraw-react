import SpeechListRow from './SpeechListRow';

function SpeechList({speeches}) {

    const speechRows = speeches.map(speech => <SpeechListRow speech={speech}/>)

    return (
        <section>
            <h2>List of speeches 📣</h2>
            <table>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last Name</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody id="tbody-speeches">
                    {speechRows}
                </tbody>
            </table>
        </section>
    )
}

export default SpeechList;
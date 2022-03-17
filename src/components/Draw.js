
function Draw({ drawnStudent, onDraw }) {

    const name = (drawnStudent) ? drawnStudent.firstName + " " + drawnStudent.lastName : ""

    return (
        <section>
            <h2>Draw a student! 🔮</h2>
            <button onClick={onDraw}>Draw!</button>
            <p>{name}</p>
        </section>
    );
}

export default Draw;
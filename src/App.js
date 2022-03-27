import './App.css';
import Header from './components/Header';
import Draw from './components/Draw';
import Crew from './components/Crew';
import { Student } from './model/student.js'
import { useState } from 'react';
import SpeechList from './components/SpeechList';

function App() {

  const [students, setStudents] = useState([
    new Student(1, 'Jérôme', "du Camp d'Orgas"),
    new Student(2, 'Quentin', "Malavielle"),
    new Student(3, 'Loïc', "Chenuet"),
    new Student(4, 'Jordan', "Anicet"),
    new Student(5, 'Mehdi', "Hueber"),
    new Student(6, 'Nicolas', "Flichy"),
    new Student(7, 'Loïc', "Barbado"),
    new Student(8, 'Clément', "Piquenet"),
    new Student(9, 'Daniel', "Thibaut"),
    new Student(10, 'Kévin', "Piriou"),
    new Student(11, 'Patrick', "Rabourdin"),
    new Student(12, 'Marc', "Grondin")
  ]);

  const [drawnStudent, setDrawnStudent] = useState(null);

  const [speeches, setSpeeches] = useState([]);

  const [editedStudent, setEditedStudent] = useState({firstName: "", lastName: ""});

  function handleDraw() {
    const randomStudent = students[Math.floor(Math.random() * students.length)];
    setDrawnStudent(randomStudent);

    const now = new Date();
    setStudents(
      students.map((studentElement) => {
        if (studentElement.id === randomStudent.id) {
          // Create a *new* object with changes
          return { ...studentElement, speeches: [...studentElement.speeches, now] };
        } else {
          // No changes
          return studentElement;
        }
      })
    );

    setSpeeches(
      [
        ...speeches,
        {
          firstName: randomStudent.firstName,
          lastName: randomStudent.lastName,
          date: now
        }
      ]
    );
  }

  function handleSaveStudent(editedStudent) {
    if (editedStudent.id) {
      console.log(editedStudent);
      setStudents(students.map(student => {
        if (student.id === editedStudent.id) {
          return {...student, firstName: editedStudent.firstName, lastName: editedStudent.lastName}
        } else {
          return student;
        }
      }))
    } else {
      const maxId = students.reduce((maxId, currStud) => maxId < currStud.id ? maxId = currStud.id : maxId, 0) + 1;
      setStudents([...students, new Student(maxId, editedStudent.firstName, editedStudent.lastName)]);
    }
    handleReset();
  }

  function handleDeleteStudent(studentId) {
    setStudents(students.filter(student => student.id !== studentId));
  }

  function handleEditStudent(studentId) {
    setEditedStudent(students.find(student => student.id === studentId));
  }

  function handleReset() {
    setEditedStudent({firstName: "", lastName: ""});
  }

  return (
    <div className="App">
      <Header />
      <Draw drawnStudent={drawnStudent} onDraw={handleDraw} />
      <Crew students={students} onSaveStudent={handleSaveStudent} onDeleteStudent={handleDeleteStudent} onEditStudent={handleEditStudent} editedStudent={editedStudent} onReset={handleReset}/>
      <SpeechList speeches={speeches} />
      {/* Mettre le composant Footer */}
    </div>
  );
}

export default App;

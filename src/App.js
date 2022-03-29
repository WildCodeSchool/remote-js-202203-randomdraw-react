import './App.css';
import Header from './components/Header';
import Draw from './components/Draw';
import Crew from './components/Crew';
import { Student } from './model/student.js'
import { createContext, useReducer } from 'react';
import SpeechList from './components/SpeechList';
import { DRAW_STUDENT, studentReduce } from './studentReducer';

export const StudentContext = createContext();
export const StudentDispatchContext = createContext();

function App() {

  const initialState = {
    students: [
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
    ],
    drawnStudent: null,
    speeches: [],
    editedStudent: {firstName: "", lastName: ""}
  }

  const [state, dispatch] = useReducer(studentReduce, initialState);

  function handleDraw() {
    dispatch({
      type: DRAW_STUDENT
    });
  }

  return (
    <div className="App">
      <Header />
      <Draw drawnStudent={state.drawnStudent} onDraw={handleDraw} />
      <StudentContext.Provider value={state}>
        <StudentDispatchContext.Provider value={dispatch}>
          <Crew />
        </StudentDispatchContext.Provider>
      </StudentContext.Provider>
      
      <SpeechList speeches={state.speeches} />
      {/* Mettre le composant Footer */}
    </div>
  );
}

export default App;

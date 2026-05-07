import React, { useState } from 'react';
import students from './data';
import Reportcard from './components/Reportcard';
import Header from './components/Header';
import AddStudentForm from './components/AddStudentForm';

const App = () => {
  const [studentData, setStudentData] = useState(students);

  // Requirement: Add new students using a form [cite: 13, 41]
  const addStudent = (newStudent) => {
    setStudentData([...studentData, newStudent]);
  };

  // Requirement: Update student scores dynamically [cite: 13, 38]
  const updateScore = (index, newScore) => {
    const updatedData = [...studentData];
    updatedData[index].marks = Number(newScore);
    setStudentData(updatedData);
  };

  return (
    <div className="app-container">
      <Header />
      <AddStudentForm onAdd={addStudent} />
      {/* Requirement: Pass data to child components using props [cite: 31] */}
      <Reportcard studentData={studentData} onUpdate={updateScore} />
    </div>
  );
};

export default App;
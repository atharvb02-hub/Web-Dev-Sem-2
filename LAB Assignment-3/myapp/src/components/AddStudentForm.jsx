import React, { useState } from 'react';

const AddStudentForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [marks, setMarks] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    if (name && marks) {
      onAdd({ name, marks: Number(marks) });
      setName(''); // Requirement: Clear form after submission 
      setMarks('');
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        placeholder="Marks" 
        type="number"
        value={marks} 
        onChange={(e) => setMarks(e.target.value)} 
      />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudentForm;
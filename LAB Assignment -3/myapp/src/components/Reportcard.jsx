import React from 'react';

const Reportcard = ({ studentData, onUpdate }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {studentData.map((item, index) => {
          // Requirement: Pass >= 40 (Green), Fail < 40 (Red) [cite: 47, 49, 53, 54]
          const isPass = item.marks >= 40;
          
          return (
            <tr key={index}>
              <td>{item.name}</td>
              <td>
                <input 
                  type="number" 
                  value={item.marks} 
                  onChange={(e) => onUpdate(index, e.target.value)} 
                />
              </td>
              <td style={{ color: isPass ? 'green' : 'red', fontWeight: 'bold' }}>
                {isPass ? 'Pass' : 'Fail'}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Reportcard;
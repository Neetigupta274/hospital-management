import React, { useState } from 'react';
import './Details.css';

export default function Details({ details }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDetails = details.filter(item =>
    Object.values(item).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="details-container">
      <h1 className="table-title">Patient Details</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="details-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>City</th>
            <th>Symptoms</th>
            <th>Disease</th>
          </tr>
        </thead>
        <tbody>
          {filteredDetails.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.city}</td>
              <td>{item.symptoms}</td>
              <td>{item.disease}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
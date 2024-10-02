import React, { useState } from 'react';
import './Admin.css';

export default function Admin({ details, setDetails }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    city: '',
    symptoms: '',
    disease: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setDetails(prevDetails => [...prevDetails, formData]);

    setFormData({
      name: '',
      age: '',
      gender: '',
      city: '',
      symptoms: '',
      disease: ''
    });
  }

  return (
    <div className="admin-form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select a Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="symptoms">Symptoms:</label>
          <select
            id="symptoms"
            name="symptoms"
            value={formData.symptoms}
            onChange={handleChange}
            required
          >
            <option value="">Select Symptoms</option>
            <option value="fever">Fever</option>
            <option value="cough">Cough</option>
            <option value="headache">Headache</option>
            <option value="fatigue">Fatigue</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="disease">Disease:</label>
          <select
            id="disease"
            name="disease"
            value={formData.disease}
            onChange={handleChange}
            required
          >
            <option value="">Select Disease</option>
            <option value="flu">Flu</option>
            <option value="cold">Cold</option>
            <option value="covid19">COVID-19</option>
            <option value="allergy">Allergy</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

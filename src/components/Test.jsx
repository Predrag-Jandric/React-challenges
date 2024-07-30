import React, { useState } from 'react';

function Test() {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    age: '',
    favoriteColor: ''
  });
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, message, age, favoriteColor } = formData;

    const ageNum = Number(age)


    if (!name || !message || !ageNum || !favoriteColor) {
      setError('All fields are required.');
      return;
    }

    if ((ageNum === !Number && ageNum > 1)) {
      setError('Age must be a number above 1.');
      return;
    }

    setError('');
    setSubmittedData(formData);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input
              type="number"
              name="age"
              min={1}
              value={formData.age}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Favorite Color:
            <select
              name="favoriteColor"
              value={formData.favoriteColor}
              onChange={handleChange}
            >
              <option value="">Select a color</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="yellow">Yellow</option>
            </select>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {submittedData && (
        <div>
          <h3>Submitted Information:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Message: {submittedData.message}</p>
          <p>Age: {submittedData.age}</p>
          <p>Favorite Color: {submittedData.favoriteColor}</p>
        </div>
      )}
    </div>
  );
}

export default Test;

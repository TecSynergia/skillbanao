import React, { useState } from 'react';
import './Form.scss';
import logo from '../../images/logo.png';

const Professional = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [gender, setGender] = useState('');
  const [image, setImage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
      <img id="logo" src={logo} alt="" />
        <h2>Start As Professional</h2>
        <div className="form-field">
          <label className="label">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label className="label">Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="CA">CA</option>
            <option value="Lawyer">Lawyer</option>
          </select>
        </div>
        <div className="form-field">
          <label className="label">Gender</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="male"
                checked={gender === 'male'}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="female"
                checked={gender === 'female'}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                value="other"
                checked={gender === 'other'}
                onChange={(e) => setGender(e.target.value)}
              />
              Other
            </label>
          </div>
        </div>
        <div className="form-field">
          <label className="label">Upload Profile Pic</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
          {image && <img className="uploaded-image" src={image} alt="Uploaded" />}
        </div>
        <div className="form-field">
          <label className="label">Phone Number</label>
          <input
            type="text"
            value={phoneNumber}
            pattern="[0-9]{10}"
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="button-group">
          <button type="submit" className="send-button">Send</button>
          <button type="button" className="go-back-button" onClick={handleReload}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default Professional;

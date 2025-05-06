/*import React, { useState } from 'react';
import '../../styles/Profile.css';

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    city: '',
    district: '',
    state: '',
    country: ''
  });

  const defaultUserIcon = "https://cdn-icons-png.flaticon.com/512/149/149071.png"; // Default icon

  const fieldLabels = {
    firstName: 'First Name',
    lastName: 'Last Name',
    address: 'Address',
    phone: 'Phone Number',
    city: 'City',
    district: 'District',
    state: 'State',
    country: 'Country'
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Profile Updated!");
  };

  return (
    <div className="profile-container">
      <div className="profile-box">
        <div className="image-section">
          <img
            src={profileImage || defaultUserIcon}
            alt="Profile"
            className="profile-img"
          />
          <label htmlFor="profileUpload" className="change-profile-btn">
            {profileImage ? "Change Profile" : "Upload Profile"}
          </label>
          <input
            type="file"
            id="profileUpload"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
        </div>

        <form className="form-section" onSubmit={handleSubmit}>
          {Object.entries(formData).map(([key, value]) => (
            <div className="input-group" key={key}>
              <label htmlFor={key} className="field-label">{fieldLabels[key]}</label>
              <input
                id={key}
                type="text"
                name={key}
                placeholder={fieldLabels[key]}
                value={value}
                onChange={handleInputChange}
                required
              />
            </div>
          ))}
          <button type="submit" className="update-btn">Update Profile</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;*/

import React, { useState, useEffect } from 'react';
import '../../styles/Profile.css';


const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    city: '',
    district: '',
    state: '',
    country: ''
  });

 
  const defaultUserIcon = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  const fieldLabels = {
    firstName: 'First Name',
    lastName: 'Last Name',
    address: 'Address',
    phone: 'Phone Number',
    city: 'City',
    district: 'District',
    state: 'State',
    country: 'Country'
  };

  // Load from localStorage when component mounts
  useEffect(() => {
    const savedData = localStorage.getItem('profileData');
    const savedImage = localStorage.getItem('profileImage');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  /*const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setProfileImage(imageUrl);
    }
  };*/
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        setProfileImage(base64Image); // This will be a base64 string
      };
      reader.readAsDataURL(file);
    }
  };
  

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile Updated!");
  };

  /*const handleSave = () => {
    localStorage.setItem('profileData', JSON.stringify(formData));
    if (profileImage) {
      localStorage.setItem('profileImage', profileImage);
    }
    alert("Profile Saved!");
  };*/
  const handleSave = () => {
    localStorage.setItem('profileData', JSON.stringify(formData));
    if (profileImage) {
      localStorage.setItem('profileImage', profileImage); // Save base64 image
    }
    alert("Profile Saved!");
  };
  

  return (
    <div className="profile-container">
      <div className="profile-box">
        <div className="image-section">
          <img
            src={profileImage || defaultUserIcon}
            alt="Profile"
            className="profile-img"
          />
          <label htmlFor="profileUpload" className="change-profile-btn">
            {profileImage ? "Change Profile" : "Upload Profile"}
          </label>
          <input
            type="file"
            id="profileUpload"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
        </div>

        <form className="form-section" onSubmit={handleSubmit}>
          {Object.entries(formData).map(([key, value]) => (
            <div className="input-group" key={key}>
              <label htmlFor={key} className="field-label">{fieldLabels[key]}</label>
              <input
                id={key}
                type="text"
                name={key}
                placeholder={fieldLabels[key]}
                value={value}
                onChange={handleInputChange}
                required
              />
            </div>
          ))}

          <div className="button-row">
            <button type="submit" className="update-btn">Update Profile</button>
            <button type="button" className="save-btn" onClick={handleSave}>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;

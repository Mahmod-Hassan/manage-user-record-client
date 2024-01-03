import React, { useState } from "react";

const AddUserPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Implement logic to save user data to local database or API
    console.log("User data to save:", formData);
    // Redirect to the dashboard or perform other actions as needed
  };

  const handleCancel = () => {
    // Implement logic to cancel the user addition
    // Redirect to the dashboard or perform other actions as needed
  };

  return (
    <div>
      <h1>Add User</h1>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default AddUserPage;

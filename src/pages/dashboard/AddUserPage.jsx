import React, { useState } from "react";
import toast from "react-hot-toast";
import { savedUser } from "../../utils/savedUser";

const AddUserPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    heardAbout: [],
    city: "",
    state: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const emptyForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = await savedUser(formData);
    if (data?.email) {
      toast.success("user added successfully");
      emptyForm();
    }
  };
  return (
    <div className="w-[300px] shadow-md mx-auto mt-5 p-5">
      <h1 className="text-xl text-center font-bold">Add User</h1>
      <form onSubmit={handleFormSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            className="w-full border rounded-md p-2"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            className="w-full border rounded-md p-2"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone:
          </label>
          <input
            className="w-full border rounded-md p-2"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddUserPage;

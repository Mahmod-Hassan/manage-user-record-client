import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    heardAbout: [],
    city: "Mumbai",
    state: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      heardAbout: checked
        ? [...prevData.heardAbout, name]
        : prevData.heardAbout.filter((item) => item !== name),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission logic here
    fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="md:flex justify-center items-center md:h-screen">
      <div className="bg-white p-6 shadow-md">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <form onSubmit={handleSubmit} className="md:grid grid-cols-2 gap-5">
          {/* name input */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              pattern="[A-Za-z ]+"
              required
            />
          </div>

          {/* email input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          {/* password input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          {/* phone number input */}
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-600"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              pattern="[0-9]+"
              required
            />
          </div>

          {/* gender input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Gender
            </label>
            <div className="mt-1 space-x-4">
              <input
                type="radio"
                id="male"
                name="gender"
                value="Male"
                onChange={handleInputChange}
                className="mr-2"
                required
              />
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                onChange={handleInputChange}
                className="mr-2"
              />
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                id="others"
                name="gender"
                value="Others"
                onChange={handleInputChange}
                className="mr-2"
              />
              <label htmlFor="others">Others</label>
            </div>
          </div>

          {/* select job-portal */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              How did you hear about this?
            </label>
            <div className="mt-1 space-x-4">
              <input
                type="checkbox"
                id="linkedin"
                name="LinkedIn"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label htmlFor="linkedin">LinkedIn</label>
              <input
                type="checkbox"
                id="friends"
                name="Friends"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label htmlFor="friends">Friends</label>
              <input
                type="checkbox"
                id="jobPortal"
                name="Job Portal"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label htmlFor="jobPortal">Job Portal</label>
              <input
                type="checkbox"
                id="othersHeard"
                name="Others"
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label htmlFor="othersHeard">Others</label>
            </div>
          </div>

          {/* select user city */}
          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-600"
            >
              City
            </label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
            >
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
              <option value="Ahmedabad">Ahmedabad</option>
            </select>
          </div>

          {/* search state input */}
          <div className="mb-4">
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-600"
            >
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Search for your state"
              list="states"
            />
            <datalist id="states">
              <option value="Gujarat" />
              <option value="Maharashtra" />
              <option value="Karnataka" />
            </datalist>
          </div>

          {/* submit button */}
          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Save
            </button>
          </div>
        </form>
        <p className="text-center">
          Already have an accout?{" "}
          <Link className="text-blue-500" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;

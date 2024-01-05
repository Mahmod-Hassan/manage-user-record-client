import React, { useState } from "react";

const Modal = ({ user, setOpenModal, fetchUsers }) => {
  const [editedData, setEditedData] = useState(user);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenModal(false);
    fetch(`http://localhost:4000/user/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(editedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount > 0) {
          fetchUsers();
        }
      });
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md z-40"
        onClick={() => setOpenModal(false)}
      ></div>
      <div className="flex justify-center items-center fixed z-50 inset-0">
        <form
          className="rounded-lg shadow-lg bg-white max-w-md md:w-1/2 mx-auto p-5"
          onSubmit={handleSubmit}
        >
          {/* name input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name:
            </label>
            <input
              className="w-full border rounded-md p-2"
              type="text"
              name="name"
              value={editedData?.name}
              onChange={handleInputChange}
            />
          </div>
          {/* email input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              className="w-full border rounded-md p-2"
              type="text"
              name="email"
              value={editedData?.email}
              onChange={handleInputChange}
            />
          </div>
          {/* phone number input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone:
            </label>
            <input
              className="w-full border rounded-md p-2"
              type="text"
              name="phone"
              value={editedData?.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-end gap-5">
            <button
              className="bg-red-500 text-white p-2"
              onClick={() => setModalOpen(false)}
            >
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 text-white p-2">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Modal;

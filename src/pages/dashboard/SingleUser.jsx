import React, { useState } from "react";
import toast from "react-hot-toast";
import Modal from "../../components/Modal";

const SingleUser = ({ user, fetchUsers }) => {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = (id) => {
    const yes = window.confirm("are you sure want ot delete");
    if (yes) {
      setLoading(true);
      fetch(`http://localhost:4000/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged === true) {
            toast.success("deleted the user successfully");
            setLoading(false);
            fetchUsers();
          }
        });
    }
  };

  // handling loading state
  if (loading) {
    return "Loading...";
  }

  return (
    <>
      <tr>
        <td className="border px-4 py-1">{user?.name}</td>
        <td className="border px-4 py-1">{user?.email}</td>
        <td className="border px-4 py-1">{user?.phone}</td>
        <td
          onClick={() => setOpenModal(true)}
          className="border px-4 py-1 text-blue-500 hover:cursor-pointer hover:bg-blue-100"
        >
          Edit
        </td>
        <td
          onClick={() => handleDelete(user?._id)}
          className="border px-4 py-1 text-red-500 hover:cursor-pointer hover:bg-red-100"
        >
          Delete
        </td>
      </tr>
      {openModal && <Modal setOpenModal={setOpenModal} user={user} />}
    </>
  );
};

export default SingleUser;

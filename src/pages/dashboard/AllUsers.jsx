import React, { useEffect, useState } from "react";
import SingleUser from "./SingleUser";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   setLoading(true);
  //   fetch("http://localhost:4000/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setLoading(false);
  //       setUsers(data);
  //     });
  // }, []);

  const fetchUsers = () => {
    setLoading(true);
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  if (loading) {
    return "Loading..";
  }

  const filterByNameAndEmail = (user) => {
    return (
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    // Implement search logic
  };
  const sortUser = (a, b) => {
    switch (filter) {
      case "az":
        return a.name.localeCompare(b.name);
      case "za":
        return b.name.localeCompare(a.name);
      // Add more cases for other sorting criteria
      default:
        return 0;
    }
  };
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">All users record</h1>
      <div className="">
        <label className="w-20 inline-block">Filter :</label>
        <select
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          className="outline-none border border-gray-700 p-1 rounded"
        >
          <option value="0">All</option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
          {/* Add more filter options */}
        </select>
      </div>
      <div className="">
        <label className="w-20 inline-block">Search :</label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="outline-none border p-1 rounded border-gray-700"
        />
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Edit</th>
            <th className="border p-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td>No Data Found</td>
            </tr>
          ) : (
            users
              .sort(sortUser)
              .filter(filterByNameAndEmail)
              .map((user) => (
                <SingleUser
                  fetchUsers={fetchUsers}
                  key={user?.email}
                  user={user}
                />
              ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;

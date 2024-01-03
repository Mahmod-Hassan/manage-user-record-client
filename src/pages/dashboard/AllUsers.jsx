import React, { useEffect, useState } from "react";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  console.log(filter);
  useEffect(() => {
    const data = [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "123-456-7890",
      },
      {
        id: 2,
        name: "Mahmod Hasan",
        email: "mahmod@gmail.com",
        phone: "01314890047",
      },
      // Add more users as needed
    ];
    setUsers(data);
  }, []);
  const sortByLetter = (a, b) => {
    if (filter === "az") {
      return a.name - b.name;
    } else if (filter === "za") {
      return a.name + b.name;
    }
    return 0;
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    // Implement search logic
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
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td>No Data Found</td>
            </tr>
          ) : (
            users
              .filter(
                (user) =>
                  user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  user.phone.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .sort(sortByLetter)
              .map((user) => (
                <tr key={user.id}>
                  <td className="border px-4 py-1">{user.name}</td>
                  <td className="border px-4 py-1">{user.email}</td>
                  <td className="border px-4 py-1">{user.phone}</td>
                  {/* Add more details or buttons for View/Edit/Delete */}
                </tr>
              ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;

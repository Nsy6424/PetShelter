// components/UsersTable.tsx
import React from "react";

const UsersTable = () => {
  const users = [
    {
      username: "tranvanteo",
      name: "Trần Văn Teo",
      email: "tranvanteo@gmail.com",
      role: "Manager",
    },
    {
      username: "nguyenvana",
      name: "Nguyễn Văn A",
      email: "nguyenvana@gmail.com",
      role: "Administrator",
    },
  ];

  return (
    <div className="flex-1 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Users</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Add New
        </button>
      </div>
      <input
        type="text"
        placeholder="Search Users"
        className="border rounded px-2 py-1 mb-4 w-full"
      />
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Username</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Role</th>
            <th className="border border-gray-300 p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.username}>
              <td className="border border-gray-300 p-2">{user.username}</td>
              <td className="border border-gray-300 p-2">{user.name}</td>
              <td className="border border-gray-300 p-2">{user.email}</td>
              <td className="border border-gray-300 p-2">{user.role}</td>
              <td className="border border-gray-300 p-2">
                <button className="text-blue-500">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;

import React from "react";
import API from "../../API";
import { useEffect, useState } from "react";

export default function UsersComponent() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    API.get("/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>User List</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>S.n</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Role</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => (
              <tr key={index}>
                <td>{index++}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.role}</td>
                <td><img src="{user.image}" width="200" alt="" /></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

import React, { useEffect, useState } from "react";

function UserList({ searchQuery }) {
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      const response = await fetch("https://reqres.in/api/users?page=1");
      const data = await response.json();
      setUsers(data.data);
      setLoading(false);
    }
    fetchUser();
  }, []);

  const filteredUsers = user.filter((user) =>
    `${user.first_name} ${user.last_name}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );
  if (loading) return <p className="p-4">Loading</p>;

  return (
    <div className="p-4">
      <ul className="space-y-4">
        {filteredUsers.map((user) => (
          <li key={user.id} className="p-5 flex item-center border rounded shadow space-x-4">
            <img
              src={user.avatar}
              alt={user.first_name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semi">{`${user.first_name} ${user.last_name}`}</p>
              <p className="text-gray-500">{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;

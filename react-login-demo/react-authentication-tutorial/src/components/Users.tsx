import { useState, useEffect } from "react";
import axios from "../api/axios";

interface User {
  username?: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    let isMounted = true;
    // used to cancel our requests
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axios.get("/users", {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setUsers(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <article>
      <h2>Users List</h2>
      {users?.length ? (
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user?.username}</li>
          ))}
        </ul>
      ) : (
        <p>No users to dispaly</p>
      )}
    </article>
  );
};

export default Users;

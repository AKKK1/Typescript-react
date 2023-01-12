import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  name: string;
}

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1000,
  headers: { "X-Custom0Header": "foobar" },
});

const Rest = () => {
  const [users, setUsers] = useState<any[] | null>([]);

  //then metodit migebuli info.
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setUsers(data);
  //     });
  // }, []);

  //axios metodit migebuli info
  useEffect(() => {
    const requestUser = async () => {
      const response = await axiosInstance.get("/users");

      const dataAs = await response.data;

      console.log(dataAs);
      setUsers(dataAs);
    };

    requestUser();
  }, []);

  return (
    <div>
      {users
        ? users.map((user) => (
            <div>
              <h1>{user.name}</h1>
            </div>
          ))
        : null}
    </div>
  );
};

export default Rest;

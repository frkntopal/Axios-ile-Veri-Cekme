import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"; //CSS dosyası
import UsersList from "./userList";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // isLoading state'i

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setIsLoading(false); // Veriler yüklendi, isLoading false oldu
      })
      .catch((error) => console.log(error));
  }, []);

  return <UsersList isLoading={isLoading} users={users} />;
}

export default App;

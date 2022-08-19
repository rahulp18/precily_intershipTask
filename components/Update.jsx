import React, { useState } from "react";
import Form from "./Form";
import axios from "axios";
const Update = ({ updateId, updateUserData, type, closeModal }) => {
  const [user, SetUser] = useState(updateUserData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    if (type === "UPDATE") {
      const res = await axios.put(`/api/user/${updateId}`, user);
      console.log(res);
      closeModal();
      return;
    }
    const res = await axios.post("/api/user", user);
    setUserData(res.data);
    SetUser(initialState);
  };
  // console.log(user);
  const handleChange = (e) => {
    SetUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="p-4">
      <Form
        type={type}
        user={user}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Update;

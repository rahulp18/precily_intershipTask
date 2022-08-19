import axios from "axios";
import React, { useState } from "react";
import Form from "./Form";
const initialState = {
  name: "",
  role: "",
  profile: "",
};
const Left = ({ setUserData }) => {
  const [user, SetUser] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    const res = await axios.post("/api/user", user);
    setUserData(res.data);
    SetUser(initialState);
  };

  const handleChange = (e) => {
    SetUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="  h-full px-5 py-4">
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        user={user}
      />
    </div>
  );
};

export default Left;

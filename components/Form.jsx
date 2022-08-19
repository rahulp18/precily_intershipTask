import React from "react";

const Form = ({ handleChange, handleSubmit, user, type }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h3 className="font-bold border-b-4 border-blue-800 text-center inline-block">
        {type === "UPDATE" ? "UPDATE EMPLOYEE" : "ADD EMPLOYEE"}
      </h3>
      <div className="flex flex-col gap-2 justify-center my-3  w-full ">
        <label className="text-sm font-mono">Employee Name</label>
        <input
          name="name"
          onChange={handleChange}
          placeholder="Enter name"
          value={user.name}
          required
          className="border-none outline-none bg-white text-black px-2 py-3"
        />
      </div>

      <div className="flex flex-col gap-2 justify-center my-3 w-full ">
        <label className="text-sm font-mono">Role Name</label>
        <input
          name="role"
          value={user.role}
          required
          onChange={handleChange}
          placeholder="Enter role name"
          className="border-none outline-none bg-white text-black px-2 py-3"
        />
      </div>
      <div className="flex flex-col gap-2 justify-center my-3 w-full ">
        <label className="text-sm font-mono">Choose Profile</label>
        <input
          name="profile"
          value={user.profile}
          onChange={handleChange}
          required
          placeholder="Copy image address"
          type="text"
          className="border-none outline-none   text-black px-2 py-3"
        />
      </div>
      <button className="w-full bg-blue-900 font-semibold rounded-md hover:bg-blue-800 text-center uppercase transition-all ease-linear text-white px-2 py-3 duration-75">
        {type === "UPDATE" ? "UPDATE" : "ADD"}
      </button>
    </form>
  );
};

export default Form;

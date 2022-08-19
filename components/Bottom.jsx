import React from "react";

import { FaUserEdit, FaTrashAlt } from "react-icons/fa";

const Bottom = ({ users, setId, setDeleteId, openModal, setUpdateId }) => {
  const actions = (user) => {
    openModal(true);
    setUpdateId(user._id);
  };

  return (
    <div className=" h-full py-4 px-6 flex flex-col gap-4 overflow-y-scroll">
      {users.length > 0 ? (
        users.map((user) => (
          <div
            className="flex justify-between items-center bg-white px-5 py-2 rounded-md "
            key={user._id}
          >
            <div className="flex items-center gap-4 justify-start">
              <img
                src={
                  user.profile
                    ? user.profile
                    : "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
                }
                alt="employee"
                className="h-12 w-12 rounded-full object-fill"
              />
              <div className="cursor-pointer" onClick={() => setId(user._id)}>
                <h3 className="uppercase font-bold text-lg">{user.name}</h3>
                <p className="font-normal text-sm">{user.role}</p>
              </div>
            </div>
            <div className="flex gap-3 items-center justify-center">
              <FaTrashAlt
                className="w-6 h-6 scale-100 transition-transform hover:scale-125 cursor-pointer"
                onClick={() => setDeleteId(user._id)}
              />
              <FaUserEdit
                className="w-7 h-7 scale-100 transition-transform hover:scale-125 cursor-pointer"
                onClick={() => actions(user)}
              />
            </div>
          </div>
        ))
      ) : (
        <h1>No Employee Register</h1>
      )}
    </div>
  );
};

export default Bottom;

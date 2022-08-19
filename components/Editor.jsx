import React, { useState, useEffect } from "react";
import Split from "react-split";
import Bottom from "./Bottom";
import Left from "./Left";
import Right from "./Right";
import axios from "axios";
import ReactModal from "react-modal";

import Update from "./Update";
import Loading from "./Loading";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Editor = () => {
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState({});
  const [id, setId] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [updateId, setUpdateId] = useState();
  const [updateUserData, setUpdateUserData] = useState({});
  const fetchData = async () => {
    setLoading(true);
    const res = await axios.get("/api/user");

    setUsers(res.data);
    setLoading(false);
  };
  const fetchUser = async () => {
    const res = await axios.get(`/api/user/${id}`);

    setData(res.data);
  };
  const fetchUpdateUser = async () => {
    const res = await axios.get(`/api/user/${updateId}`);
    setUpdateUserData(res.data);
  };
  const deleteUser = async () => {
    const res = await axios.delete(`/api/user/${deleteId}`);

    fetchData();
  };
  useEffect(() => {
    fetchData();
    id && fetchUser();
    updateId && fetchUpdateUser();
    deleteId && deleteUser();
  }, [userData, id, deleteId, updateId]);

  // For Modal
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setUpdateUserData({});
    setIsOpen(false);
    fetchData();
  }
  ReactModal.setAppElement("#modalRoot");
  // console.log(Object.keys(updateUserData).length === 0, updateUserData);
  return (
    <div id="modalRoot">
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Edit Employee"
      >
        {Object.keys(updateUserData).length === 0 ? (
          <Loading />
        ) : (
          <Update
            updateUserData={updateUserData}
            closeModal={closeModal}
            type="UPDATE"
            updateId={updateId}
          />
        )}
      </ReactModal>
      <Split
        direction="vertical"
        style={{ height: `calc(100vh-5rem)` }}
        sizes={[50, 50]}
        className="flex flex-col h-screen"
      >
        <Split className="flex" sizes={[30, 70]}>
          <div className="bg-gray-100">
            <Left setUserData={setUserData} />
          </div>
          <div className="bg-gray-100">
            <Right data={data} loading={loading} />
          </div>
        </Split>
        <div className="bg-gray-200">
          <Bottom
            users={users}
            setId={setId}
            setDeleteId={setDeleteId}
            openModal={openModal}
            setUpdateId={setUpdateId}
          />
        </div>
      </Split>
    </div>
  );
};

export default Editor;

import React from "react";
import Loading from "./Loading";

const Right = ({ data, loading }) => {
  return (
    <div className="  h-full py-4 px-6">
      {data && !loading ? (
        <div className="flex  items-center w-full h-full">
          <div className="flex-1   mx-20 w-full h-full">
            <img
              src={data.profile}
              alt="employee"
              className="rounded-sm w-full h-full object-contain"
            />
          </div>
          <div className="  flex-1  ">
            <h3 className="font-semibold text-lg">
              NAME: <span className="font-normal">{data.name}</span>
            </h3>
            <h3 className="font-semibold text-lg">
              ROLE: <span className="font-normal">{data.role}</span>
            </h3>
          </div>
        </div>
      ) : (
        <h1>{loading ? <Loading /> : "No user Selected"}</h1>
      )}
    </div>
  );
};

export default Right;

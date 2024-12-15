import React from "react";
import DashboardLayout from "../../../layouts/DashboardLayout";

const Create = () => {
  return (
    <DashboardLayout>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-quaternary">Create Service</h1>
        <button className="bg-quaternary text-white p-2 rounded-md">
          Add Service
        </button>
      </div>
    </DashboardLayout>
  );
};

export default Create;

import React from "react";

const NurseList = ({ nurses }) => {
  return (
    <div className="bg-white shadow p-4 rounded">
      <h2 className="text-xl font-bold mb-4">Nurse List</h2>
      {nurses.map((nurse) => (
        <div key={nurse.id} className="mb-2">
          <div className="font-bold">{nurse.name}</div>
          <div className="text-sm text-gray-700">
            ID: {nurse.id} | {nurse.workingArea} | {nurse.nurseType}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NurseList;

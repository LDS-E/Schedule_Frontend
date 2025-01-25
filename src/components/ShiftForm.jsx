import React, { useState } from "react";

const ShiftForm = ({ nurses, onAddShift }) => {
  const [formData, setFormData] = useState({
    date: "",
    nurse: "",
    shiftType: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.date && formData.nurse && formData.shiftType) {
      onAddShift(formData.date, formData);
      setFormData({ date: "", nurse: "", shiftType: "" });
    }
  };

  return (
    <form className="bg-white shadow p-4 rounded mb-4" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Add Shift</h2>
      <div className="mb-2">
        <label className="block text-sm font-medium">Date:</label>
        <input
          type="date"
          className="w-full border rounded p-2"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium">Nurse:</label>
        <select
          className="w-full border rounded p-2"
          value={formData.nurse}
          onChange={(e) => setFormData({ ...formData, nurse: e.target.value })}
        >
          <option value="">Select Nurse</option>
          {nurses.map((nurse) => (
            <option key={nurse.id} value={nurse.name}>
              {nurse.name} ({nurse.nurseType})
            </option>
          ))}
        </select>
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium">Shift Type:</label>
        <select
          className="w-full border rounded p-2"
          value={formData.shiftType}
          onChange={(e) =>
            setFormData({ ...formData, shiftType: e.target.value })
          }
        >
          <option value="">Select Shift</option>
          <option value="Day (7AM-7PM)">Day (7AM-7PM)</option>
          <option value="Night (7PM-7AM)">Night (7PM-7AM)</option>
          <option value="Half Day (7AM-1PM)">Half Day (7AM-1PM)</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-medium py-2 rounded mt-2"
      >
        Add Shift
      </button>
    </form>
  );
};

export default ShiftForm;

import React, { useState, useEffect } from "react";

const ShiftScheduler = () => {
  const [shifts, setShifts] = useState({});
  const [currentMonth, setCurrentMonth] = useState("");
  const [formData, setFormData] = useState({
    date: "",
    nurse: "",
    shiftType: "",
  });

  const nurses = [
    { id: 1, name: "Adrianna", nurseType: "Chief" },
    { id: 2, name: "Bob", nurseType: "Regular" },
    { id: 3, name: "Anna", nurseType: "Jumper" },
  ];

  useEffect(() => {
    const date = new Date();
    const month = date.toLocaleString("default", { month: "long" });
    setCurrentMonth(month);
  }, []);

  const addShift = (date, shiftData) => {
    const shiftDay = new Date(date).getDate();
    setShifts((prevShifts) => ({
      ...prevShifts,
      [shiftDay]: [...(prevShifts[shiftDay] || []), shiftData],
    }));
    setFormData({ date: "", nurse: "", shiftType: "" });
  };

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const startDayOfMonth = 2;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Shift Scheduler - {currentMonth}
      </h1>

      <form
        className="bg-white shadow p-4 rounded mb-4"
        onSubmit={(e) => {
          e.preventDefault();
          addShift(formData.date, formData);
        }}
      >
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
            onChange={(e) =>
              setFormData({ ...formData, nurse: e.target.value })
            }
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

      <div className="p-4">
        <h2 className="text-2xl font-bold text-center mb-4">
          This month Shift Calendar
        </h2>
        <div className="grid grid-cols-7 gap-2 border border-gray-300 p-4">
          {weekDays.map((day) => (
            <div
              key={day}
              className="font-semibold text-center bg-gray-100 p-2"
            >
              {day}
            </div>
          ))}
          {Array.from({ length: startDayOfMonth - 1 }).map((_, idx) => (
            <div key={`empty-${idx}`} className="border p-2 bg-gray-50"></div>
          ))}
          {daysInMonth.map((day) => (
            <div
              key={day}
              className={`border border-gray-200 p-2 shadow ${
                shifts[day] ? "bg-blue-50" : "bg-white"
              }`}
            >
              <div className="font-bold text-center mb-2">{day}</div>
              {shifts[day]?.length > 0 ? (
                shifts[day].map((shift, idx) => (
                  <div key={idx} className="text-sm text-gray-700">
                    {shift.nurse} - {shift.shiftType}
                  </div>
                ))
              ) : (
                <div className="text-sm text-gray-500 italic text-center">
                  No shifts
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShiftScheduler;

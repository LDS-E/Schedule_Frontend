import React, { useState } from "react";

const ShiftScheduler = () => {
  const [formData, setFormData] = useState({
    date: "",
    nurse: "",
    shiftType: "",
  });
  const [shifts, setShifts] = useState({});

  const nurses = [
    { id: 1, name: "Anna", nurseType: "Regular" },
    { id: 2, name: "Bob", nurseType: "Jumper" },
    { id: 3, name: "Adrianna", nurseType: "Chief" },
  ];

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const currentMonth = "February";
  const daysInMonth = Array.from({ length: 28 }, (_, i) => i + 1);
  const startDayOfMonth = 4;

  const addShift = (e) => {
    e.preventDefault();
    if (!formData.date || !formData.nurse || !formData.shiftType) return;
    const day = new Date(formData.date).getDate();
    setShifts((prev) => ({
      ...prev,
      [day]: [
        ...(prev[day] || []),
        { nurse: formData.nurse, shiftType: formData.shiftType },
      ],
    }));
    setFormData({ date: "", nurse: "", shiftType: "" });
  };

  return (
    <div className="max-w-6xl mx-auto p-4 flex gap-6 bg-[url('./src/backgrounds/3.png')] min-h-screen flex-col">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 border border-blue-700 opacity-20 rotate-[30deg] top-20 left-20"></div>
        <div className="absolute w-96 h-96 border border-blue-700 opacity-20 rotate-[45deg] top-40 left-60"></div>
        <div className="absolute w-96 h-96 border border-blue-700 opacity-20 rotate-[60deg] top-10 right-40"></div>
        <div className="absolute w-96 h-96 border border-blue-700 opacity-20 rotate-[85deg] top-30 right-80"></div>
      </div>
      <header className="text-4xl font-bold text-center mb-10 relative z-20 bg-white p-4 shadow-lg rounded-lg"></header>
      <div className="flex w-full gap-6">
        {/* Left */}
        <div className="w-1/3">
          <form
            className="bg-white shadow-2xl p-4 rounded mb-4"
            onSubmit={addShift}
          >
            <h2 className="text-xl font-bold mb-4">Add Shift</h2>
            <div className="mb-2">
              <label className="block text-sm font-medium">Date:</label>
              <input
                type="date"
                className="w-full border rounded p-2"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
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
        </div>
        {/* Right */}
        <div className="w-2/3">
          <div className="bg-white p-4 rounded shadow-2xl">
            <h2 className="text-2xl font-bold text-center mb-4">
              {currentMonth} Schedule
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
                <div
                  key={`empty-${idx}`}
                  className="border p-2 bg-gray-50"
                ></div>
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
      </div>
    </div>
  );
};

export default ShiftScheduler;

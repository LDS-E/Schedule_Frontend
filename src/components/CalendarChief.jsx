import React from "react";

const CalendarChief = ({ shifts }) => {
  // Days of the week
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1); // Example for a month with 31 days

  // Start day of the month (adjust to your logic, e.g., fetch from props or calculate dynamically)
  const startDayOfMonth = 2; // Example: 1 = Mon, 2 = Tue, etc.

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Shift Calendar</h2>
      {/* Grid for calendar */}
      <div className="grid grid-cols-7 gap-2 border border-gray-300 p-4">
        {/* Weekday Headers */}
        {weekDays.map((day) => (
          <div key={day} className="font-semibold text-center bg-gray-100 p-2">
            {day}
          </div>
        ))}

        {/* Empty Cells for Alignment */}
        {Array.from({ length: startDayOfMonth - 1 }).map((_, idx) => (
          <div key={`empty-${idx}`} className="border p-2 bg-gray-50"></div>
        ))}

        {/* Days with Shifts */}
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
  );
};

export default CalendarChief;

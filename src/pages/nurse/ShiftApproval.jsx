import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ShiftApproval = ({ currentUser }) => {
  const navigate = useNavigate();
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    if (currentUser && (userType === "RN" || userType === "LPN")) {
      const storedShifts = JSON.parse(localStorage.getItem("shifts")) || [];
      const userShifts = storedShifts.filter(
        (shift) => shift.nurseId === currentUser.id
      );
      setShifts(userShifts);
    } else {
      navigate("/login"); // Redirect to login if the user is not authorized
    }
  }, [currentUser, navigate]);

  const currentDate = new Date();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();
  const daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate();

  // Adjust for Monday as the first day of the week
  const firstDayOfMonth =
    (new Date(year, currentDate.getMonth(), 1).getDay() + 6) % 7;

  const renderCalendarDays = () => {
    const days = [];

    // Add empty days for padding (to align the first day of the month correctly)
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 bg-gray-50"></div>);
    }

    // Add actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, currentDate.getMonth(), day);
      const userShifts = shifts.filter(
        (shift) => new Date(shift.date).toDateString() === date.toDateString()
      );

      days.push(
        <div
          key={day}
          className="relative h-24 border bg-white px-4 py-2 text-sm"
        >
          <span className="absolute top-2 left-2 font-semibold">{day}</span>
          {userShifts.map((shift, index) => (
            <div
              key={index}
              className="mt-2 bg-blue-500 text-white rounded px-2 py-1 text-xs"
            >
              {shift.shiftType}
            </div>
          ))}
        </div>
      );
    }

    // Add empty days to fill the last row
    const totalCells = firstDayOfMonth + daysInMonth;
    const emptyCells = 42 - totalCells;
    for (let i = 0; i < emptyCells; i++) {
      days.push(<div key={`empty-end-${i}`} className="h-24 bg-gray-50"></div>);
    }

    return days;
  };

  return (
    //<div className="relative min-h-screen bg-gray-100 flex flex-col">
    <div className="max-w-6xl mx-auto p-4 flex gap-6 bg-[url('./src/backgrounds/3.png')] min-h-screen flex-col">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 border border-blue-700 opacity-20 rotate-[30deg] top-20 left-20"></div>
        <div className="absolute w-96 h-96 border border-blue-700 opacity-20 rotate-[45deg] top-40 left-60"></div>
        <div className="absolute w-96 h-96 border border-blue-700 opacity-20 rotate-[60deg] top-10 right-40"></div>
        <div className="absolute w-96 h-96 border border-blue-700 opacity-20 rotate-[85deg] top-30 right-80"></div>
      </div>
      {/* Header */}
      <div className="text-center py-6">
        <h1 className="text-3xl font-semibold text-gray-800">
          {month} {year} - Scheduled Shifts
        </h1>
      </div>

      {/* Calendar Section */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {/* Weekday headers */}
          <div className="grid grid-cols-7 bg-gray-50 text-sm font-medium text-gray-500">
            {"Mon Tue Wed Thu Fri Sat Sun".split(" ").map((day) => (
              <div
                key={day}
                className="py-2 px-4 text-center border-b border-gray-200"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Days of the month */}
          <div className="grid grid-cols-7 text-sm">{renderCalendarDays()}</div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          className="btn text-black bg-gray-300 hover:text-purple-500 hover:bg-gray-200 px-4 py-2 rounded-md"
          onClick={() => navigate("/edit-shifts")}
        >
          Edit
        </button>
        <button className="btn text-black bg-gray-300 hover:text-purple-500 hover:bg-gray-200 px-4 py-2 rounded-md">
          Approve
        </button>
      </div>
    </div>
  );
};

export default ShiftApproval;

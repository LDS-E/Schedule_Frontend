import React, { useState, useEffect } from "react";
import { startOfMonth, endOfMonth, eachDayOfInterval, format } from "date-fns";
import shiftsData from "../data/shifts.json";
import usersData from "../data/users.json";

const shiftColors = {
  Day: "bg-blue-300",
  Night: "bg-purple-300",
  "Half Day": "bg-green-300",
};

const TeamShiftsPage = () => {
  const [shifts, setShifts] = useState([]);
  const [users, setUsers] = useState([]);
  const today = new Date();
  const monthStart = startOfMonth(today);
  const monthEnd = endOfMonth(today);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  useEffect(() => {
    setShifts(shiftsData);
    setUsers(usersData);
  }, []);

  const getNurseDetails = (nurseName) => {
    return users.find((user) => user.name === nurseName) || {};
  };

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-6 text-center text-primary">
        Shifts Schedule - {format(today, "MMMM yyyy")} - Cardiology
      </h1>
      <div className="grid grid-cols-7 gap-2 border-2 border-gray-300 p-4 rounded-lg shadow-lg bg-base-100">
        {daysInMonth.map((day) => (
          <div
            key={day}
            className="border border-gray-500 p-4 rounded-lg min-h-[100px] shadow-md bg-base-200"
          >
            <p className="text-sm font-bold text-center">
              {format(day, "dd.MM")}
            </p>
            {shifts
              .filter((shift) => shift.date === format(day, "yyyy-MM-dd"))
              .map((shift, index) => {
                const nurseDetails = getNurseDetails(shift.nurse);
                return (
                  <p
                    key={index}
                    className={`text-xs p-1 rounded mt-1 text-center ${
                      shiftColors[shift.shiftType] || "bg-gray-300"
                    }`}
                  >
                    {shift.nurse} ({nurseDetails.nurseType}) - {shift.shiftType}
                  </p>
                );
              })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamShiftsPage;

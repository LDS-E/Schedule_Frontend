import React, { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  getDay,
  addMonths,
  subMonths,
} from "date-fns";
import shiftsData from "../../data/shifts.json";
import usersData from "../../data/users.json";

const shiftColors = {
  night: "bg-blue-500 text-white", // Blue for night shifts
  day: "bg-pink-300 text-white", // Pink for day shifts
  halfday: "bg-green-300 text-white", // Green for half-day shifts
};

const TeamShiftsPage = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Handle the next and previous months
  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const handlePreviousMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  // Helper function to get the weekday of the first day of the month
  const getFirstDayOfMonth = (month) => {
    const day = getDay(startOfMonth(month));
    return day === 0 ? 6 : day - 1; // Shift Sunday (0) to the end of the week
  };

  // Normalize the shiftType to lowercase
  const normalizeShiftType = (shiftType) =>
    shiftType.toLowerCase().replace(" ", "");

  // Function to generate the days grid with proper alignment
  const generateDaysGrid = (month) => {
    const firstDayOfMonth = getFirstDayOfMonth(month);
    const totalDaysInMonth = eachDayOfInterval({
      start: startOfMonth(month),
      end: endOfMonth(month),
    });

    const emptyDays = new Array(firstDayOfMonth).fill(null); // Create empty slots for days before the first day of the month
    return [...emptyDays, ...totalDaysInMonth]; // Combine empty days with actual days in the month
  };

  return (
    <div className="max-w-6xl mx-auto p-4 flex gap-6 bg-[url('./src/backgrounds/2.png')] min-h-screen flex-col bg-cover bg-center">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 border border-blue-700 opacity-20 rotate-[30deg] top-20 left-20"></div>
        <div className="absolute w-96 h-96 border border-blue-700 opacity-20 rotate-[45deg] top-40 left-60"></div>
        <div className="absolute w-96 h-96 border border-blue-700 opacity-20 rotate-[60deg] top-10 right-40"></div>
        <div className="absolute w-96 h-96 border border-blue-700 opacity-20 rotate-[85deg] top-30 right-80"></div>
      </div>
      <div className="text-center mb-6"></div>

      {/* Calendar */}
      <div className="border-4 border-gray-700 shadow-2xl bg-white/35 p-4 rounded-lg">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-black shadow-lg">
            Shifts Schedule
          </h1>
          <p className="text-lg text-black">
            {format(currentMonth, "MMMM yyyy")}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mb-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            onClick={handlePreviousMonth}
          >
            Previous Month
          </button>
          <button
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            onClick={handleNextMonth}
          >
            Next Month
          </button>
        </div>

        {/* Days of the week */}
        <div className="grid grid-cols-7 gap-4 text-center font-bold text-lg">
          {weekDays.map((day) => (
            <div key={day} className="p-2 bg-gray-200 rounded-lg">
              {day}
            </div>
          ))}
        </div>

        {/* Days in the month */}
        <div className="grid grid-cols-7 gap-4 mt-2">
          {generateDaysGrid(currentMonth).map((day, index) => {
            if (!day) return <div key={index} className="p-3"></div>; // Empty slot
            return (
              <div key={day} className="p-3 border rounded-lg bg-white/50">
                <p className="font-bold">{format(day, "dd MMM")}</p>
                {shiftsData
                  .filter((shift) => shift.date === format(day, "yyyy-MM-dd"))
                  .map((shift) => {
                    const nurse = usersData.find(
                      (user) => user.id === shift.nurseId
                    );
                    const normalizedShiftType = normalizeShiftType(
                      shift.shiftType
                    ); // Normalize shiftType
                    return (
                      <div
                        key={shift.date + shift.nurseId + shift.shiftType}
                        className={`p-2 my-1 rounded-md ${
                          shiftColors[normalizedShiftType] || "bg-gray-300"
                        }`}
                      >
                        <p>{shift.shiftType} shift</p>
                        <p className="font-semibold">
                          {nurse?.name || "Unknown"}
                        </p>
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>

        {/* Thumbnails for Previous and Next Month */}
        <div className="flex justify-between mt-6">
          {/* Previous Month Thumbnail */}
          <div className="w-1/4 bg-white border border-gray-300 rounded-lg p-2">
            <p className="text-center font-bold">
              {format(subMonths(currentMonth, 1), "MMMM yyyy")}
            </p>
            <div className="grid grid-cols-7 gap-2">
              {generateDaysGrid(subMonths(currentMonth, 1)).map(
                (day, index) => {
                  if (!day) return <div key={index} className="w-8 h-8"></div>; // Empty slot
                  return (
                    <div
                      key={day}
                      className="w-8 h-8 flex justify-center items-center bg-gray-100 rounded-lg"
                    >
                      {format(day, "dd")}
                    </div>
                  );
                }
              )}
            </div>
          </div>

          {/* Next Month Thumbnail */}
          <div className="w-1/4 bg-white border border-gray-300 rounded-lg p-2">
            <p className="text-center font-bold">
              {format(addMonths(currentMonth, 1), "MMMM yyyy")}
            </p>
            <div className="grid grid-cols-7 gap-2">
              {generateDaysGrid(addMonths(currentMonth, 1)).map(
                (day, index) => {
                  if (!day) return <div key={index} className="w-8 h-8"></div>; // Empty slot
                  return (
                    <div
                      key={day}
                      className="w-8 h-8 flex justify-center items-center bg-gray-100 rounded-lg"
                    >
                      {format(day, "dd")}
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamShiftsPage;

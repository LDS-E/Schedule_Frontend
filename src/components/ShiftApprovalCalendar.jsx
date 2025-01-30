import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const initialShifts = [
  {
    id: 1,
    title: "Morning Shift",
    start: "2025-02-01",
    status: "proposed",
    userId: 1,
  },
  {
    id: 2,
    title: "Night Shift",
    start: "2025-02-02",
    status: "proposed",
    userId: 2,
  },
  {
    id: 3,
    title: "Afternoon Shift",
    start: "2025-02-03",
    status: "approved",
    userId: 1,
  },
];

const ShiftApprovalCalendar = ({ userId }) => {
  const [shifts, setShifts] = useState(initialShifts);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event);
    setNewTitle(clickInfo.event.title);
    setModalVisible(true);
  };

  const handleSave = () => {
    selectedEvent.setProp("title", newTitle);
    setModalVisible(false);
    alert("Shift updated!");

    setShifts((prevShifts) =>
      prevShifts.map((shift) =>
        shift.id === selectedEvent.id
          ? { ...shift, status: "pending_edit" }
          : shift
      )
    );
  };

  const handleApproveAll = () => {
    setShifts((prevShifts) =>
      prevShifts.map((shift) =>
        shift.status === "pending_edit"
          ? { ...shift, status: "approved" }
          : shift
      )
    );
    alert("All pending edits have been approved!");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Shift Approval</h2>

      {userId === 1 && (
        <div className="mb-4 text-center">
          <button
            onClick={handleApproveAll}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Approve All Pending Edits
          </button>
        </div>
      )}

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        events={shifts.filter((shift) => shift.userId === userId)}
        eventClick={handleEventClick}
      />

      {modalVisible && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"
          onClick={() => setModalVisible(false)}
        >
          <div
            className="bg-white p-6 rounded-lg w-1/3"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold mb-4">Edit Shift</h3>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="border p-2 mb-4 w-full"
            />
            <div className="flex justify-between">
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
              <button
                onClick={() => setModalVisible(false)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShiftApprovalCalendar;

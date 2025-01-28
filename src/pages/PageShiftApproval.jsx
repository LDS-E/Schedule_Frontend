import ShiftApprovalCalendar from "../components/ShiftApprovalCalendar";

const PageShiftApproval = ({ shifts }) => {
  const handleApprove = (day) => {
    alert(`Shift on day ${day} approved!`);
  };

  const handleEdit = (day, justification) => {
    alert(
      `Request to edit shift on day ${day} sent! Justification: ${justification}`
    );
  };

  return (
    <ShiftApprovalCalendar
      shifts={shifts}
      onApprove={handleApprove}
      onEdit={handleEdit}
    />
  );
};

export default PageShiftApproval;

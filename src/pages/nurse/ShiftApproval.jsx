// ShiftApproval.js ⬅️ (New) For nurses to approve or refuse shift plan from chief

// import ShiftNurseApproval from "../../components/ShiftNurseApproval";

const ShiftApproval = ({ shifts }) => {
  const handleApprove = (day) => {
    alert(`Shift on day ${day} approved!`);
  };

  const handleEdit = (day, justification) => {
    alert(
      `Request to edit shift on day ${day} sent! Justification: ${justification}`
    );
  };

  return (
    <ShiftNurseApproval
      shifts={shifts}
      onApprove={handleApprove}
      onEdit={handleEdit}
    />
  );
};

export default ShiftApproval;

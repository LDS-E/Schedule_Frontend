import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";

const AccountSettings = () => {
  const { user, updateUser, clearUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState(
    user
      ? {
          firstName: user.firstName || "",
          lastName: user.lastName || "",
          gender: user.gender || "",
          email: user.email || "",
          phoneNumber: user.phoneNumber || "",
          country: user.country || "",
          city: user.city || "",
          street: user.street || "",
          zipCode: user.zipCode || "",
          contractDetails: user.contractDetails || "",
          dateOfBirth: user.dateOfBirth ? new Date(user.dateOfBirth) : null,
          medicalId: user.medicalId || "",
        }
      : {}
  );

  const [profileImage, setProfileImage] = useState(user?.avatar || null);
  const [isEditing, setIsEditing] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [deleteEmailConfirmation, setDeleteEmailConfirmation] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [updateError, setUpdateError] = useState(null);
  const [deleteError, setDeleteError] = useState(null);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        gender: user.gender || "",
        email: user.email || "",
        phoneNumber: user.phoneNumber || "",
        country: user.country || "",
        city: user.city || "",
        street: user.street || "",
        zipCode: user.zipCode || "",
        contractDetails: user.contractDetails || "",
        dateOfBirth: user.dateOfBirth ? new Date(user.dateOfBirth) : null,
        medicalId: user.medicalId || "",
      });
      setProfileImage(user.avatar || null);
    } else {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({ ...prevData, dateOfBirth: date }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdate = async () => {
    setUpdating(true);
    setUpdateError(null);
    try {
      const updatedUser = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        gender: formData.gender,
        phoneNumber: formData.phoneNumber,
        country: formData.country,
        city: formData.city,
        street: formData.street,
        zipCode: formData.zipCode,
        contractDetails: formData.contractDetails,
        dateOfBirth: formData.dateOfBirth,
        medicalId: formData.medicalId,
        avatar: profileImage,
      };

      const response = await fetch(
        `http://localhost:5000/api/users/${user._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(updatedUser),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Falha ao atualizar usuário");
      }

      const updatedUserData = await response.json();

      updateUser(updatedUserData.user);

      setFormData({
        firstName: updatedUserData.user.firstName,
        lastName: updatedUserData.user.lastName,
        email: updatedUserData.user.email,
        gender: updatedUserData.user.gender,
        phoneNumber: updatedUserData.user.phoneNumber,
        country: updatedUserData.user.country,
        city: updatedUserData.user.city,
        street: updatedUserData.user.street,
        zipCode: updatedUserData.user.zipCode,
        contractDetails: updatedUserData.user.contractDetails,
        dateOfBirth: updatedUserData.user.dateOfBirth
          ? new Date(updatedUserData.user.dateOfBirth)
          : null,
        medicalId: updatedUserData.user.medicalId,
      });
      setProfileImage(updatedUserData.user.avatar || null);

      setIsEditing(false);
      alert("Perfil atualizado com sucesso!");
    } catch (error) {
      console.error("Erro na atualização:", error);
      setUpdateError(error.message);
    } finally {
      setUpdating(false);
    }
  };

  useEffect(() => {
    console.log("deleteConfirmation:", deleteConfirmation);
  }, [deleteConfirmation]);

  const handleDeleteClick = () => {
    console.log("Botão de deletar clicado!");
    setDeleteConfirmation(true);
  };

  const handleDeleteConfirm = async () => {
    setDeleting(true);
    setDeleteError(null);
    if (deleteEmailConfirmation !== user.email) {
      setDeleteError("O email de confirmação está incorreto.");
      setDeleting(false);
      return;
    }
    console.log("Iniciando requisição para deletar usuário...");
    try {
      const response = await fetch(
        `http://localhost:5000/api/users/${user._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("Resposta recebida:", response);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Falha ao deletar usuário");
      }
      console.log("Usuário deletado com sucesso!");
      clearUser();
      navigate("/login");
    } catch (error) {
      console.error("Erro ao deletar:", error);
      setDeleteError(error.message);
    } finally {
      setDeleting(false);
      setDeleteConfirmation(false);
      setDeleteEmailConfirmation("");
    }
  };

  console.log("Renderizando - deleteConfirmation:", deleteConfirmation);

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200 p-4">
      <div className="card w-full max-w-4xl bg-base-100 shadow-xl p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-1 w-full">
            <div className="flex flex-wrap gap-4">
              {Object.keys(formData).map((key) => (
                <div key={key} className="flex-1 min-w-[45%]">
                  <label className="label">
                    <span className="label-text">
                      {key === "firstName"
                        ? "First Name"
                        : key === "lastName"
                        ? "Last Name"
                        : key.charAt(0).toUpperCase() + key.slice(1)}
                    </span>
                  </label>
                  {key === "dateOfBirth" ? (
                    <input
                      type="date"
                      id={key}
                      name={key}
                      value={
                        formData[key]
                          ? formData[key].toISOString().split("T")[0]
                          : ""
                      }
                      onChange={(e) =>
                        handleDateChange(new Date(e.target.value))
                      }
                      className="input input-bordered w-full"
                      disabled={!isEditing}
                    />
                  ) : (
                    <input
                      type="text"
                      id={key}
                      name={key}
                      value={formData[key] || ""}
                      onChange={handleInputChange}
                      className="input input-bordered w-full"
                      disabled={!isEditing}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex justify-end gap-4">
          {!isEditing ? (
            <button
              onClick={handleEditClick}
              className="btn btn-outline btn-primary"
            >
              Edit
            </button>
          ) : (
            <button
              onClick={handleUpdate}
              className="btn btn-primary"
              disabled={updating}
            >
              {updating ? "Updating..." : "Update"}
            </button>
          )}

          <button onClick={handleDeleteClick} className="btn btn-error">
            Delete Account
          </button>
        </div>
        {/* Modal de confirmação de exclusão */}
        {deleteConfirmation &&
          createPortal(
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="modal-box z-50">
                <h3 className="font-bold text-lg">Delete Account</h3>
                <p className="py-4">
                  Are you sure you want to delete your account? This action
                  cannot be undone.
                </p>
                <input
                  type="email"
                  placeholder="Type your email to confirm"
                  className="input input-bordered w-full mt-4"
                  value={deleteEmailConfirmation}
                  onChange={(e) => setDeleteEmailConfirmation(e.target.value)}
                />
                {deleteError && (
                  <p className="text-red-500 mt-2">{deleteError}</p>
                )}
                <div className="modal-action mt-6">
                  <button
                    onClick={handleDeleteConfirm}
                    className="btn btn-error"
                    disabled={deleting}
                  >
                    {deleting ? "Deleting..." : "Confirm Delete"}
                  </button>
                  <button
                    onClick={() => setDeleteConfirmation(false)}
                    className="btn"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>,
            document.body
          )}
      </div>
    </div>
  );
};

export default AccountSettings;

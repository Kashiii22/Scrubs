import React, { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [flash, setFlash] = useState(null); // ✅ flash message

  const onChangerHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { name, email, password } = formData;

  const submitHandler = async (e) => {
    e.preventDefault();
    const result = await register(name, email, password);
    if (result.success) {
      setFlash("User registered successfully!");
      setTimeout(() => {
        setFlash(null);
        navigate("/login");
      }, 2000); // Show flash message for 2 sec
    } else {
      setFlash(result.message || "Registration failed. Try again.");
      setTimeout(() => setFlash(null), 3000);
    }
  };

  return (
    <div
      className="container my-5 p-5"
      style={{
        maxWidth: "500px",
        backgroundColor: "#fff",
        border: "1px solid #000",
        borderRadius: "12px",
        color: "#000",
      }}
    >
      <h2 className="text-center mb-4" style={{ fontWeight: "600" }}>
        User Register
      </h2>

      {flash && (
        <div
          className="alert alert-info text-center"
          style={{
            border: "1px solid #000",
            borderRadius: "8px",
            backgroundColor: "#f5f5f5",
            color: "#000",
            fontWeight: "500",
          }}
        >
          {flash}
        </div>
      )}

      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={onChangerHandler}
            type="text"
            className="form-control"
            style={{ borderColor: "#000", color: "#000" }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={onChangerHandler}
            type="email"
            className="form-control"
            style={{ borderColor: "#000", color: "#000" }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            name="password"
            value={formData.password}
            onChange={onChangerHandler}
            type="password"
            className="form-control"
            style={{ borderColor: "#000", color: "#000" }}
          />
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className="btn"
            style={{
              backgroundColor: "#000",
              color: "#fff",
              fontWeight: "500",
              letterSpacing: "1px",
            }}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;

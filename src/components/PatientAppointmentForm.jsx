import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    aadhaar: "",
    phone: "",
    date: "",
    symptoms: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form Data:", formData);
    toast.success("Appointment Submitted Successfully!");
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-lg">
        <h3 className="text-center">Patient Appointment Form</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Aadhaar No:</label>
            <input
              type="text"
              className="form-control"
              name="aadhaar"
              placeholder="Enter Your Aadhaar Number"
              value={formData.aadhaar}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone No:</label>
            <input
              type="tel"
              className="form-control"
              name="phone"
              placeholder="Enter Your Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Appointment Date:</label>
            <input
              type="date"
              className="form-control"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Symptoms:</label>
            <textarea
              className="form-control"
              name="symptoms"
              placeholder="Enter your symptoms"
              rows="3"
              value={formData.symptoms}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Submit Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;

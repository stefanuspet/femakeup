import React, { useState } from "react";
import { register } from "../api/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      register(formData)
        .then((res) => {
          console.log(res);
          if (res.message === "Registration successful!") {
            alert("Registration success!");
            navigate("/login");
          } else {
            alert(res.message);
          }
        })
        .catch((err) => {
          console.error("Error during registration:", err);
          alert("Registration failed!");
        });
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed!");
    }
  };
  return (
    <div className=" px-5 mx-auto w-full h-screen bg-[#C48085] flex items-center justify-center">
      <div className="bg-white w-96 p-8 rounded-md shadow-lg">
        <h1 className="text-center font-bold text-2xl text-[#C48085] mb-6">
          Register
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C48085] focus:border-[#C48085]"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C48085] focus:border-[#C48085]"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C48085] focus:border-[#C48085]"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Address Field */}
          <div className="mb-6">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Address
            </label>
            <textarea
              name="address"
              id="address"
              rows="3"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C48085] focus:border-[#C48085]"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#C48085] text-white py-2 rounded-md hover:bg-[#a9666b] transition-colors"
          >
            Register
          </button>
        </form>
        <div className="flex justify-center pt-4">
          <p className="pr-1">Already have an account?</p>
          <a href="/login" className="text-[#C48085]">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;

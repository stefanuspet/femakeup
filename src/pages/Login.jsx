import React, { useEffect, useState } from "react";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const newData = { ...data, [e.target.name]: e.target.value };
    setData(newData);
    console.log(newData);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state before login attempt
    try {
      const res = await login(data);
      console.log(res);
      localStorage.setItem("token", res.token); // Save token to local storage
      localStorage.setItem("role", res.user.role); // Save role to local storage
      navigate("/dashboard"); // Redirect to dashboard
    } catch (err) {
      setError("Invalid email or password");
      console.error(err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (token && role == "admin") {
      navigate("/dashboard");
    } else if (token && role) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="px-5 mx-auto w-full h-screen bg-[#C48085] flex items-center justify-center">
      <div className="bg-white w-96 p-8 rounded-md shadow-lg">
        <h1 className="text-center font-bold text-2xl text-[#C48085] mb-6">
          Login
        </h1>
        {error && (
          <div className="mb-4 text-red-500 text-sm text-center">{error}</div>
        )}
        <form onSubmit={handleLogin}>
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
              value={data.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C48085] focus:border-[#C48085]"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
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
              value={data.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C48085] focus:border-[#C48085]"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#C48085] text-white py-2 rounded-md hover:bg-[#a9666b] transition-colors"
          >
            Login
          </button>
        </form>
        <div className="flex justify-center pt-4">
          <p className="pr-1">dont have an account ?</p>
          <a href="/register" className="text-[#C48085]">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;

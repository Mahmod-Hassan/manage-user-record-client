import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const LoginPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { setUser } = useContext(AuthContext);
  const [useInfo, setUseInfo] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUseInfo({
      ...useInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://manage-user-record.vercel.app/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(useInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.email) {
          setUser(data);
          localStorage.setItem("user", JSON.stringify(data));
          navigate("/dashboard");
          toast.success("Welcome!! AGAIN");
        } else {
          setError(data?.message);
        }
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="flex justify-center h-screen items-center p-5 md:p-0">
      <div className="shadow-md w-full sm:w-1/2 lg:w-1/3 bg-white p-6">
        {error && (
          <p className="bg-red-100 p-1 text-center text-lg text-red-500">
            {error}
          </p>
        )}
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          {/* email input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={useInfo.email}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          {/* password input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={useInfo.password}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          {/* login button */}
          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Login
            </button>
          </div>
        </form>

        {/* link for navigate login to signup */}
        <p className="text-center mt-4">
          No account??{" "}
          <Link className="text-blue-500" to="/">
            create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

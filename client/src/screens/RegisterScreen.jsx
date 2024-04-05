import React, { useState } from "react";
import { useRegisterMutation } from "../app/slices/userApiSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "../app/slices/userSlice";
import { Link, useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";

export default function RegisterScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [register, { isLoading }] = useRegisterMutation();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        console.log(res);
        dispatch(setCredentials({ ...res }));
        navigate("/");
        toast.success("Register Successful");
      } catch (error) {
        console.log(error);
        toast.error(error?.data?.message || error?.message);
      }
    }
  };

  return (
    <div className="bg-gray-100 shadow-lg shadow-gray-500 rounded-xl container mx-auto max-w-md mt-12 mb-4">
      <h2 className="py-3 mb-2 text-center text-xl text-gray-500 font-semibold uppercase">
        Register
      </h2>
      <form className="flex flex-col mx-2" onSubmit={handleRegister}>
        <input
          className="mt-2 mb-5 px-2 py-3 rounded-md shadow-xl bg-gray-100 outline-none hover:shadow-slate-400"
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="mt-2 mb-5 px-2 py-3 rounded-md shadow-xl bg-gray-100 outline-none hover:shadow-slate-400"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="mt-2 mb-5 px-2 py-3 rounded-md shadow-xl bg-gray-100 outline-none hover:shadow-slate-400"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="mt-2 mb-5 px-2 py-3 rounded-md shadow-xl bg-gray-100 outline-none hover:shadow-slate-400"
          placeholder="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className="mb-1 py-1 flex justify-around max-w-sm">
          <button
            type="submit"
            className="px-6 py-1 outline-none border-none bg-red-500 text-white uppercase font-semibold rounded-sm hover:shadow-xl hover:shadow-red-300"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Register"}
          </button>
          <button className="px-6 py-1 outline-none border-none bg-blue-400 text-white uppercase font-semibold rounded-sm hover:shadow-xl hover:shadow-blue-300">
            Sign up With Google
          </button>
        </div>
        <h6 className="mt-1 mb-4 font-thin font-sans hover:cursor-pointer">
          Already have an account ?{" "}
          <Link to="/login">
            <span className="text-blue-500">Sign in</span>
          </Link>
        </h6>
        {isLoading && (
          <div className="flex justify-center items-center">
            <CircularProgress />
          </div>
        )}
      </form>
    </div>
  );
}

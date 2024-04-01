import React, { useState } from "react";
import { useLoginMutation } from "../app/slices/userApiSlice";
import { useDispatch } from "react-redux";
import { setCredentials }  from "../app/slices/userSlice";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";

export default function LoginScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      console.log(res);
      dispatch(setCredentials({ ...res }));
      navigate("/");
      toast.success("Login Successful");
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message || error?.message);
    }
  };

  return (
    <div className="bg-gray-100 shadow-lg shadow-gray-500 rounded-xl container mx-auto max-w-md mt-12 mb-4">
      <h2 className="py-3 mb-2 text-center text-xl text-gray-500 font-semibold uppercase">
        Login
      </h2>
      <form className="flex flex-col mx-2" onSubmit={handleLogin}>
        <input
          className="mt-2 mb-5 px-2 py-3 rounded-md shadow-xl bg-gray-100 outline-none hover:shadow-slate-400"
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
        <h6 className="my-3 font-thin font-sans hover:cursor-pointer">
          Forget Password ? <span className="text-blue-500">Click Here</span>
        </h6>
        <div className="mb-1 py-1 flex justify-around max-w-sm">
          <button
            type="submit"
            className="px-6 py-1 outline-none border-none bg-red-500 text-white uppercase font-semibold rounded-sm hover:shadow-xl hover:shadow-red-300"
            disabled={isLoading}
          >
            Login
          </button>
          <button className="px-6 py-1 outline-none border-none bg-blue-400 text-white uppercase font-semibold rounded-sm hover:shadow-xl hover:shadow-blue-300">
            Sign in With Google
          </button>
        </div>
        <h6 className="mt-1 mb-4 font-thin font-sans hover:cursor-pointer">
          Don't have an account ?{" "}
          <span className="text-blue-500">Register Here</span>
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

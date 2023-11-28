"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      // localStorage.setItem("token", data.token);
      // router.push("/"); // Redirect to home page
    } else {
      // alert("Invalid username or password");
    }
  };

  return (
    <div className=" mt-4 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h1 className="text-3xl font-bold">Login</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="-space-y-4 mb-4 flex flex-col gap-10">
            <div className="flex items-center">
              <input
                type="text"
                autoComplete="username"
                placeholder="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="flex items-center">
              <input
                type="password"
                placeholder="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-md">
            Login
          </button>

          <p className="mt-2 text-xs text-gray-400">
            Forgot your password?{" "}
            <a href="#" className="text-indigo-600 hover:text-indigo-700">
              Reset Password
            </a>
          </p>
        </form>

        <p className="text-xs text-gray-400">
          Don't have an account?{" "}
          <a href="#" className="text-indigo-600 hover:text-indigo-700">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

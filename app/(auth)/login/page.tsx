"use client";
import React, { FormEvent, useState } from "react";
interface LoginCredentials {
  username: string;
  password: string;
}
const Login = () => {
  const [credentials, setCredentials] = useState<LoginCredentials>({username: '', password: ''});
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(`http://localhost:3000/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: credentials.username.trim(),
        password: credentials.password.trim(),
      }),
    })
      .then((resp) => resp.json())
      .then((resp) => console.log(resp));
  };
  const handleOnChange = (e: FormEvent) => {
    setCredentials({
      ...credentials,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    });
  };
  return (
    <div className="flex flex-col items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl self-center">
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="username"
              name="username"
              onChange={handleOnChange}
              placeholder="username"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              onChange={handleOnChange}
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Not a member?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

"use client";
import React, { FormEvent, useState } from "react";

interface Credentials {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const Register = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (credentials.password !== credentials.confirmPassword) {
      return;
    }
    fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: credentials.username.trim(),
        password: credentials.password.trim(),
        email: credentials.email.trim(),
      }),
    })
      .then((resp) => resp.json())
      .then((resp) => console.log(resp.message));
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
              name="username"
              placeholder="username"
              className="input input-bordered"
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={handleOnChange}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Create Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              onChange={handleOnChange}
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="confirmPassword"
              onChange={handleOnChange}
              className="input input-bordered"
              required
            />

            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Already signed up?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

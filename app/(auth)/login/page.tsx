import React from "react";
import Image from "next/image";

const Login = () => {
  return (
    <div className="flex flex-col items-center w-screen h-screen bg-[#2e2e2e] ">
      <Image src="/icon.png" alt="cezs logo" width="164" height="164" />
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl self-center">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
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
              className="input input-bordered"
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

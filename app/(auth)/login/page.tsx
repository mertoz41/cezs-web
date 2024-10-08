import React from "react";
import LoginForm from "@/app/components/loginForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Login = () => {
  const logUserIn = async (formData: FormData) => {
    "use server";
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      await fetch(`http://localhost:3000/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((resp) => resp.json())
        .then((resp) => {
          // console.log("WE HERE", resp.token);
          cookies().set("jwt", resp.token, { httpOnly: true });
          // const cookie = cookies().get('jwt')

          // console.log(cookie.value)
        });
    } catch (error) {
    } finally {
      redirect("/timeline");
    }
  };
  return (
    <div className="flex flex-col items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl self-center">
        <form className="card-body" action={logUserIn}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="username"
              name="username"
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
        {/* <LoginForm /> */}
      </div>
    </div>
  );
};

export default Login;

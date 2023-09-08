import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <div class="btn_box">
        <button class="login">Sign up</button>
      </div>

      <section class="login_box bg-slate-900 w-6/12 m-auto p-5 rounded-sm">
        <h1 className="text-4xl text-white font-bold text-center p-4 py-10">
          Register here
        </h1>
        <form className="w-6/12 m-auto">
          <label className="text-slate-400 text-2xl block" for="name">
            Write full name
          </label>
          <input
            className="bg-black rounded-sm py-2 px-4 d my-2 block w-full"
            id="email"
            type="text"
            placeholder="Write your fill name....."
          />
          <br />
          <label className="text-slate-400 text-2xl block" for="email">
            Write your email address
          </label>
          <input
            className="bg-black rounded-sm py-2 px-4 d my-2 block w-full"
            id="email"
            type="email"
            placeholder="Write your email address....."
          />
          <br />
          <label className="text-slate-400 text-2xl block" for="email">
            Choose your country
          </label>
          <select
            className="bg-black text-white rounded-sm py-2 px-4 d my-2 block w-full"
            name=""
            id=""
          >
            <option
              className="bg-black rounded-sm py-2 px-4 d my-2 block w-full"
              value="Select"
              selected
            >
              Select
            </option>
            <option
              className="bg-black rounded-sm py-2 px-4 d my-2 block w-full"
              value="Bangladesh"
              selected
            >
              Bangladesh
            </option>
            <option
              className="bg-black rounded-sm py-2 px-4 d my-2 block w-full"
              value="India"
              selected
            >
              India
            </option>
            <option
              className="bg-black rounded-sm py-2 px-4 d my-2 block w-full"
              value="Pakistan"
              selected
            >
              Pakistan
            </option>
          </select>

          <label className="text-slate-400 text-2xl block" for="password">
            Write password
          </label>
          <input
            className="bg-black rounded-sm py-2 px-4 d my-2 block w-full"
            type="password"
            placeholder="Write your password....."
          />

          <label className="text-slate-400 text-2xl block pt-4" for="password">
            Rewrite password
          </label>
          <input
            className="bg-black rounded-sm py-2 px-4 d my-2 block w-full"
            type="password"
            placeholder="Rewrite your password....."
          />
          <h3>
            <input class="radi" type="checkbox" name="" /> Remember me
          </h3>
          <button>
            <Link to={"/"}>Register</Link>
          </button>
        </form>
        <div class="other">
          <h1>OR</h1>
          <div class="icon">
            <img src="../image/icons/google-brands(1).svg" alt="" />
            <img src="../image/icons/linkedin-in-brands.svg" alt="" />
            <img src="../image/icons/twitter-brands.svg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div class="btn_box">
        <button class="login">Log in</button>
      </div>
      <section class="login_box bg-slate-900 w-6/12 m-auto p-5 rounded-sm">
        <h1 className="text-4xl text-white font-bold text-center p-4 py-10">
          Log in here
        </h1>
        <form className="w-6/12 m-auto">
          <label className="text-slate-400 text-2xl block pt-4" for="email">
            Write usernkame/email
          </label>
          <input
            className="bg-black rounded-sm py-2 px-4 d my-2 block w-full"
            id="email"
            type="text"
            placeholder="Write your username/email....."
          />

          <label className="text-slate-400 text-2xl block pt-4" for="password">
            Write password
          </label>
          <input
            className="bg-black rounded-sm py-2 px-4 d my-2 block w-full"
            id="password"
            type="password"
            placeholder="Write your password....."
          />
          <h3>
            <input class="radi" type="checkbox" name="" /> Remember me
          </h3>
          <button>
            <Link to={"/"}>Login</Link>
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

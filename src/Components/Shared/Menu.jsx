import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <section class="nav">
        <div class="img">
          <img src="image/Trustency logo 1 .png" alt="no image here" />
          <span>Trustency</span>
        </div>
        <div class="menu">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/service"}>Services</Link>
            </li>
            <li>
              <Link to={"/client"}>Our clients</Link>
            </li>
            <li>
              <Link to={"/aboutus"}>About us</Link>
            </li>
            <li>
              <Link to={"/faq"}>FAQ</Link>
            </li>
          </ul>
        </div>
        <div class="register_box">
          <button>
            <Link to={"/login"}>Login</Link>
          </button>
          <button>
            <Link to={"/register"}>Sign up</Link>
          </button>
        </div>
        <select class="lan">
          <option value="ENG">ENG</option>
          <option value="BAN">BAN</option>
          <option value="HINDI">HINDI</option>
        </select>
      </section>
    </>
  );
}

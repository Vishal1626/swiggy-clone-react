import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";

const Header = () => {
  const [LoginBtn, setLoginBtn] = useState("Login");

  const { loggedInUser } = useContext(userContext);
  return (
    <div className="flex justify-between border border-solid bg-slate-200 shadow-lg pr-2 ">
      <div className="">
        <img
          className="w-40 rounded-full  pl-2 hover:w-[165px]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWOT1lyA4-X9C-xasa6e8Qs2OJJpQlqNJBMvvk-dF0rxQQST5gPP3f7qeCdosQHzFRz3w&usqp=CAU"
        />
      </div>
      <div className=" flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-2 font-bold">
            <Link className="home" to="/">
              Home
            </Link>
          </li>
          <li className="px-2 font-bold">
            <Link className="about" to="/about">
              About us
            </Link>
          </li>
          <li className="px-2 font-bold">
            <Link className="contact" to="contact">
              Contact us
            </Link>
          </li>
          <li className="px-2 font-bold">
            <Link className="contact" to="instamart">
              Instamart
            </Link>
          </li>
          <li className="px-2 font-bold">
            <Link className="contact" to="">
              Cart
            </Link>
          </li>
          <button
            className="px-2 font-bold"
            onClick={() =>
              setLoginBtn(LoginBtn == "Login" ? "Logout" : "Login")
            }
          >
            {LoginBtn}
          </button>
          <li className="px-2 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

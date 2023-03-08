import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../contexts/AuthContext";
import login from "../../../assets/cover/login.png";
import loginBtn from "../../../assets/cover/loginbtn.png";

const Login = () => {
  const { loginUserEmail } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const notify = () =>
    toast.error("User Not Found!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUserEmail(email, password)
      .then((result) => {
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        notify();
      });
  };
  return (
    <div className="flex justify-center items-center gap-4 py-12 border-dashed border-2 border-mainColor mx-2">
      <div className="flex flex-col items-center justify-center gap-4 lg:w-96 p-2">
        <h2 className="text-center text-2xl font-bold pt-4">LOGIN</h2>
        <figure className="px-5">
          <img src={login} alt="login img" className="rounded-xl w-24" />
        </figure>
        <form
          className="flex flex-col w-full items-center justify-center p-4"
          onSubmit={handleLogin}
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input border-none focus:outline-none w-full font-bold"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input border-none focus:outline-none w-full my-4 font-bold"
          />
          <button>
            <img className="w-12" src={loginBtn} alt="login button" />
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Login;

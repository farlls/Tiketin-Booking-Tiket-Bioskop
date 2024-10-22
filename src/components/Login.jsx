import "./styles/Login.css";
import React, { useRef, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Lottie from "lottie-web";
import { Link } from "react-router-dom";

function Login() {
  const container = useRef(null);
  let animationInstance = null;
  const [isSignUp, setIsSignUp] = useState(false); // state untuk mengatur tampilan

  useEffect(() => {
    // Fetch the animation data and initialize Lottie
    fetch("/assets/video/anim_pop.json")
      .then((response) => response.json())
      .then((animationData) => {
        if (animationInstance) {
          animationInstance.destroy(); // Pastikan animasi sebelumnya di-destroy
        }

        animationInstance = Lottie.loadAnimation({
          container: container.current, // Referensi div
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
            progressiveLoad: true,
          },
        });
      });

    return () => {
      if (animationInstance) {
        animationInstance.destroy(); // Bersihkan animasi ketika komponen di-unmount
      }
    };
  }, []);

  return (
    <section className="d-flex py-5 px-5 justify-content-center align-items-center">
      <div className="d-lg-flex flex-row glass-effect">
        <div
          className="d-flex mx-5 justify-content-center "
          ref={container}
          style={{
            height: 400,
            width: 400,
            overflow: "hidden",
          }}
        />
        <div className="d-flex w-100 flex-column glass-effect justify-content-center text-start">
          <h6 className="fs-6 fw-normal mt-2">Welcome To Tiketin.</h6>
          <h1 className="fs-3 fw-bold mt-1 mb-3">
            {isSignUp ? "Sign Up Page" : "Sign In Page"}
          </h1>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label fs-6">
                {isSignUp ? "Email address" : "Email address"}
              </label>
              <input
                type="email"
                className="form-control form-control-glass"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            {isSignUp && (
              <div className="mb-3">
                <label
                  htmlFor="exampleInputFullName"
                  className="form-label fs-6"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-glass"
                  id="exampleInputFullName"
                />
              </div>
            )}

            <div className="mb-4">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label fs-6"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control form-control-glass"
                id="exampleInputPassword1"
              />
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <button
                  type="button"
                  className="btn btn-glass-primary btn-glass me-2"
                >
                  {isSignUp ? "Sign Up" : "Sign In"}
                </button>
                <button
                  type="button"
                  className="btn btn-glass btn-glass-secondary"
                  onClick={() => setIsSignUp(!isSignUp)} // toggle antara sign in dan sign up
                >
                  {isSignUp ? "Sign In" : "Sign Up"}
                </button>
              </div>
              <Link className="nav-link" to="/">Back To Homepage</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;

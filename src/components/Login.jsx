import "./styles/Login.css";
import React, { useRef, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Lottie from "lottie-web";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/authService";
import { useAuth } from "../context/AuthContext";

function Login() {
  const container = useRef(null);
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();
  let animationInstance = null;

  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phoneNumber: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    fetch("/assets/video/anim_pop.json")
      .then((response) => response.json())
      .then((animationData) => {
        if (animationInstance) {
          animationInstance.destroy();
        }

        animationInstance = Lottie.loadAnimation({
          container: container.current,
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
        animationInstance.destroy();
      }
    };
  }, []);

  const validateForm = () => {
    const errors = {};

    if (isSignUp) {
      // Name validation
      if (!formData.name) {
        errors.name = "Name is required";
      }

      // Phone number validation
      if (!formData.phoneNumber) {
        errors.phoneNumber = "Phone number is required";
      } else if (!/^\d{10,12}$/.test(formData.phoneNumber)) {
        errors.phoneNumber = "Phone number must be 10-12 digits";
      }

      // Password validation
      if (formData.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
      }
    }

    // Email validation
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = "Please provide a valid email";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear specific field error when typing
    if (validationErrors[e.target.name]) {
      setValidationErrors({
        ...validationErrors,
        [e.target.name]: "",
      });
    }
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate form before submission
    if (isSignUp && !validateForm()) {
      return;
    }

    setLoading(true);

    try {
      if (isSignUp) {
        const response = await authService.register(
          formData.name,
          formData.email,
          formData.password,
          formData.phoneNumber
        );
        console.log("Registration successful:", response);

        // After successful registration, switch to login
        setIsSignUp(false);
        setFormData({
          email: "",
          password: "",
          name: "",
          phoneNumber: "",
        });
        setError("Registration successful! Please login.");
      } else {
        const response = await authService.login(
          formData.email,
          formData.password
        );
        console.log("Login response received:", response);

        if (response) {
          await authLogin(response);
          navigate("/");
        } else {
          throw new Error("Invalid response from server");
        }
      }
    } catch (err) {
      console.error("Auth error:", err);
      if (err.message) {
        setError(err.message);
      } else if (typeof err === "string") {
        setError(err);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="d-flex py-5 px-5 justify-content-center align-items-center">
      <div className="d-lg-flex flex-row glass-effect">
        <div
          className="d-flex mx-5 justify-content-center"
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
          {error && (
            <div
              className={`alert ${
                error.includes("successful") ? "alert-success" : "alert-danger"
              }`}
              role="alert"
            >
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fs-6">
                Email address
              </label>
              <input
                type="email"
                className={`form-control form-control-glass ${
                  validationErrors.email ? "is-invalid" : ""
                }`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {validationErrors.email && (
                <div className="invalid-feedback">{validationErrors.email}</div>
              )}
            </div>

            {isSignUp && (
              <>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fs-6">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className={`form-control form-control-glass ${
                      validationErrors.name ? "is-invalid" : ""
                    }`}
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {validationErrors.name && (
                    <div className="invalid-feedback">
                      {validationErrors.name}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label fs-6">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className={`form-control form-control-glass ${
                      validationErrors.phoneNumber ? "is-invalid" : ""
                    }`}
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="e.g., 08123456789"
                    required
                  />
                  {validationErrors.phoneNumber && (
                    <div className="invalid-feedback">
                      {validationErrors.phoneNumber}
                    </div>
                  )}
                </div>
              </>
            )}

            <div className="mb-4">
              <label htmlFor="password" className="form-label fs-6">
                Password
              </label>
              <input
                type="password"
                className={`form-control form-control-glass ${
                  validationErrors.password ? "is-invalid" : ""
                }`}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {validationErrors.password && (
                <div className="invalid-feedback">
                  {validationErrors.password}
                </div>
              )}
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <div>
                <button
                  type="submit"
                  className="btn btn-glass-primary btn-glass me-2"
                  disabled={loading}
                >
                  {loading ? "Loading..." : isSignUp ? "Sign Up" : "Sign In"}
                </button>
                <button
                  type="button"
                  className="btn btn-glass btn-glass-secondary"
                  onClick={() => {
                    setIsSignUp(!isSignUp);
                    setError("");
                    setValidationErrors({});
                    setFormData({
                      email: "",
                      password: "",
                      name: "",
                      phoneNumber: "",
                    });
                  }}
                  disabled={loading}
                >
                  {isSignUp ? "Sign In" : "Sign Up"}
                </button>
              </div>
              <Link className="nav-link" to="/">
                Back To Homepage
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;

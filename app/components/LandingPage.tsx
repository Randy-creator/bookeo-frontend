"use client";

import { useState } from "react";
import LoginForm from "./LoginForm";
import Navbar from "./Navbar";
import RegisterForm from "./RegisterForm";
import Loader from "../utils/Loader";
import { AnimatedFormWrapper } from "../utils/AnimatedFormWrapper";

export default function LandingPage() {
  const flex = "flex justify-center items-center ";
  const box_size =
    "min-h-screen md:min-h-[85vh] w-screen md:w-full max-w-screen md:max-w-[75vw]";

  const [authMode, setAuthMode] = useState("login");
  const [loading, setLoading] = useState(false);

  const handleAuthChange = (mode) => {
    setLoading(true);

    setTimeout(() => {
      setAuthMode(mode);
      setLoading(false);
    }, 1000); 
  };

  return (
    <div
      className={`
          ${flex}
          ${box_size}
          bg-[url('/img/books.jpg')]
          bg-cover bg-center bg-no-repeat
          overflow-hidden
          rounded-lg
          `}
    >
      <div
        className={`
            ${flex}
            ${box_size}
            flex-col
            absolute inset bg-black/35
            `}
      >
        <Navbar setAuthMode={handleAuthChange}></Navbar>

        <div
          className={`${flex}
          flex-row
          h-[75vh]
          w-full
          `}
        >
          <div
            className={`${flex}
          flex-row
          h-[75vh]
          w-full`}
          >
            <div className={`${flex} w-full h-full`}>
              {loading ? (
                <Loader />
              ) : (
                <AnimatedFormWrapper>
                  <div className="form-inner">
                    {authMode === "login" ? <LoginForm /> : <RegisterForm />}
                  </div>
                </AnimatedFormWrapper>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

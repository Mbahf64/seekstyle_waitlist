"use client";

import React, { useState, useEffect } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messageType, setMessageType] = useState(""); // State for message type

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (!validateEmail(email)) {
      setMessage("Invalid email address.");
      setMessageType("error");
      setIsLoading(false); // Ensure loading state is reset
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setEmail("");
        setMessage("You have been added to the waitlist!");
        setMessageType("success"); // Set message type to success
        localStorage.removeItem("email");
        setTimeout(() => {
          setMessage(""); // Clear the message after 2 seconds
          setMessageType("");
        }, 2000);
      } else {
        const data = await response.json();
        setMessage(data.message || "Something went wrong.");
        setMessageType("error"); // Set message type to error
      }
    } catch (error) {
      setMessage("Error: Unable to submit your request.");
      setMessageType("error"); // Set message type to error
    } finally {
      setIsLoading(false); // Ensure loading state is reset
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <form onSubmit={handleSubmit} className="relative w-80">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            localStorage.setItem("email", e.target.value);
          }}
          required
       className="custom-font-family-01 text-[14px] bg-transparent  h-[46px] rounded-md pl-[16px] pr-[140px] outline-none border-[1px] border-[#D6DADE] focus:border-[#D6DADE] focus:ring-0 active:bg-transparent"
          placeholder="Enter your email"
        />
<button
  type="submit"
  disabled={isLoading}
  className="absolute right-2 top-1/2 transform -translate-y-1/2 custom-font-family-01
  bg-[#1B243F] text-white rounded-md w-[115px] h-[36px] flex justify-center 
  items-center gap-2 -mr-[3px] group"
>
  {isLoading ? (
    <p className="text-[12px] font-medium custom-font-family-01">
      Loading...
    </p>
  ) : (
    <>
      <p className="text-[12px] font-medium custom-font-family-01 pl-2">
        Join Waitlist
      </p>
      <img
        className="h-5 w-5 relative overflow-hidden shrink-0 transition-transform duration-300 ease-in-out transform group-hover:translate-x-0.5"
        alt=""
        src="/arrow_forward.svg"
      />
    </>
  )}
</button>

      </form>
      {message && (
        <p
          className={`text-center ${
            messageType === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}

      
    </div>
  );
};

export default Form;

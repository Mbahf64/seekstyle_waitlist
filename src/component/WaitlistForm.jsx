"use client";

import React, { useState } from "react";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messageType, setMessageType] = useState(""); // State for message type

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
        setTimeout(() => {
          setMessage(""); // Clear the message after 5 seconds
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
    <div className="flex flex-col items-center gap-[16px]">
      <form onSubmit={handleSubmit} className="relative w-[336px]">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="custom-font-family-01 text-[14px] bg-transparent w-full h-[46px] rounded-md pl-[16px] pr-[140px] mr-[px]
           outline-none border-[2px] border-[#D6DADE] focus:border-[#D6DADE] focus:ring-0 active:bg-transparent"
        />

        <button
          type="submit"
          disabled={isLoading}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 custom-font-family-01
   bg-[#1B243F] text-white rounded-md w-[115px] h-[36px] flex justify-center 
   items-center gap-2 -mr-[3px] group"
        >
          {isLoading ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            <>
              <p className="text-[13px] font-medium custom-font-family-01 pl-2">
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

      <p className="custom-font-family text-[12px]">
        Get a FREE 6 Months of all our Pro Features
      </p>
    </div>
  );
};

export default WaitlistForm;

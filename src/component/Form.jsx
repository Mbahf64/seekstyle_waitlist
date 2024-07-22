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
    <div className="flex flex-col items-center gap-[16px]">
      <form onSubmit={handleSubmit} className="relative w-[336px]">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="custom-font-family-01 custom-input custom-input:focus custom-input:active"
          placeholder="yourname@email.com"
        />

        <button
          type="submit"
          disabled={isLoading}
          className="custom-button custom-button:focus custom-font-family-01"
        >
          {isLoading ? (
            <span className="text-white">Submitting...</span>
          ) : (
            <>
              <p className="text-[12px] font-medium custom-font-family-01 pl-2">
                Join Waitlist
              </p>
              <img
                className="image"
                alt=""
                src="/arrow_forward.svg"
              />
            </>
          )}
        </button>
      </form>
      {message && (
        <p
          className={`text-center ${messageType === "success" ? "text-green-500" : "text-red-500"
            }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default Form;

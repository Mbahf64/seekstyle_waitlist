"use client";

import React, { useState } from "react";
import Form from "../component/Form"

const WaitlistForm = () => {
  return (
    <div className="flex flex-col items-center gap-[16px]">
      <Form />

      <p className="custom-font-family text-[12px]">
        Get a FREE 6 Months of all our Pro Features
      </p>
    </div >

  );
};

export default WaitlistForm;

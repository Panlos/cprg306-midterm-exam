"use client";
import React, { useEffect, useState } from "react";

const APICallExam = () => {

  const [secretCode, setSecretCode] = useState(null);

  const getCode = async () => {
    const passcode = `ehen2rfow`; 
    const webPage =  `https://webdev2-class-demo.vercel.app/api/sampleReqs/${passcode}`;
  
    const respone = await fetch(webPage);

    const data = await respone.json();
    setSecretCode(data.secretCode)
  }

  return (
    <div>
      <div className="flex items-center justify-center">
        {<button onClick={getCode} className="bg-red-100 p-2 rounded-md border border-red-500">
          Submit
        </button>}
      </div>
      <div>Code {secretCode}</div>
    </div>
  );
};

export default APICallExam;

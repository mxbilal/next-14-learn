"use client";

import React from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
const Home = React.memo(() => {
  const handleClick = async () => {
    try {
      const docRef = await addDoc(collection(db, "student"), {
        name: "bilal",
        age: "25",
        location: "pakistan",
      });
      console.log("added", docRef);
      return true;
    } catch (e) {
      console.log("err", e);
      return false;
    }
  };

  const getData = async () => {
    const data = await getDocs(collection(db, "student"));
    console.log(data.docs);
  };
  return (
    <div className="p-8">
      <button
        onClick={handleClick}
        className="border-2 py-1 px-5 bg-slate-400 text-slate-50 "
      >
        click
      </button>
      <button onClick={getData}>Get Doc</button>
    </div>
  );
});

export default Home;

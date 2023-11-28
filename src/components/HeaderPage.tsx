import React from "react";
import Link from "next/link";
const HeaderPage = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center text-slate-800">
      <h1 className="text-3xl font-bold">Next 14 Learn</h1>
      <div className="flex gap-4">
        <Link href="/login">
          <button className="btn btn-outline-primary">Login</button>
        </Link>
      </div>
    </header>
  );
};

export default HeaderPage;

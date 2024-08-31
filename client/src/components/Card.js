import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="container mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-white">
        <Link
          className="p-4 border rounded shadow-lg flex bg-slate-500 justify-between"
          to="/email/emaillinks"
        >
          <h5>Mail Links</h5>
          <h5>19969</h5>
        </Link>
        <Link
          className="p-4 border rounded shadow-lg flex bg-slate-500 justify-between"
          to="/email/uploadmail"
        >
          <h5>Upload Emails</h5>
          <h5>146</h5>
        </Link>
        <Link
          className="p-4 border rounded shadow-lg flex bg-slate-500 justify-between"
          to="/email/maillinks"
        >
          <h5>Mails</h5>
          <h5>456</h5>
        </Link>
        <Link
          className="p-4 border rounded shadow-lg flex bg-slate-500 justify-between"
          to="/email/notmail"
        >
          <h5>Not Mail Links</h5>
          <h5>56</h5>
        </Link>
        <Link
          className="p-4 border rounded shadow-lg flex bg-slate-500 justify-between"
          to="/email/pagelink"
        >
          <h5>10 Page Find</h5>
          <h5>896</h5>
        </Link>
        <Link
          className="p-4 border rounded shadow-lg flex bg-slate-500 justify-between"
          to="/email/user"
        >
          <h5>Name</h5>
          <h5>Sent</h5>
        </Link>
        <Link
          className="p-4 border rounded shadow-lg flex bg-slate-500 justify-between"
          to="/email/user"
        >
          <h5>Email Files</h5>
        </Link>
      </div>
    </div>
  );
};

export default Card;

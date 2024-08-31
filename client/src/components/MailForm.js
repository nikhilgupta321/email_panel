import React from "react";
import { Link } from "react-router-dom";

const MailForm = () => {
  return (
    <div>
      <div className="flex gap-4 p-4">
        <Link
          to="/email"
          className="p-2 mb-4 text-center rounded w-16 bg-gray-200 text-gray-500"
        >
          <i className="fa fa-arrow-left" aria-hidden="true" />
        </Link>
        <button
          // onClick={handleSubmit}
          className="p-2 mb-4 rounded w-24 bg-sky-600 text-gray-100"
        >
          Submit
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 p-8">
        <div>
          <div>Name</div>
          <input
            className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600`}
            type="text"
          />
        </div>
        <div>
          <div>Email</div>
          <input
            className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600`}
            type="text"
          />
        </div>
        <div>
          <div>Password</div>
          <input
            className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600`}
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default MailForm;

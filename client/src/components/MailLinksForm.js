import React from "react";
import { Link } from "react-router-dom";

const MailLinksForm = () => {
  return (
    <div>
      <div className="flex gap-4 p-4">
        <Link
          to="/email"
          className="w-16 p-2 mb-4 text-center text-white bg-gray-400 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <button
          // onClick={handleSubmit}
          className="w-24 p-2 mb-4 text-gray-100 rounded bg-sky-600"
        >
          Submit
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 p-4">
        <div>
          <div>Category</div>
          <select
            className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
          >
            <option value="Multi">Multi</option>
            <option value="Medical">Medical</option>
          </select>
        </div>
        <div>
          <div>Type</div>
          <select
            className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
          >
            <option value="Normal">Normal</option>
            <option value="High">High</option>
            <option value="Typing">Typing</option>
          </select>
        </div>
        <div>
          <div>Link</div>
          <input
            className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600`}
            type="text"
          ></input>
        </div>
        <div>
          <div>Subject</div>
          <input
            className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600`}
            type="text"
          ></input>
        </div>
        <div>
          <div>Country*</div>
          <input
            className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600`}
            type="text"
          ></input>
        </div>
        <div>
          <div>Last Update</div>
          <input
            className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600`}
            type="text"
          ></input>
        </div>
        <div>
          <div>Extract On</div>
          <input
            className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600`}
            type="date"
          ></input>
        </div>
        <div>
          <div>Comment</div>
          <input
            className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600`}
            type="text"
          ></input>
        </div>
        <div>
          <div>IDM Working</div>
          <select
            className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default MailLinksForm;

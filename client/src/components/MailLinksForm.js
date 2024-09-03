import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { postData } from "../helper/postData";

const MailLinksForm = () => {
  const [data, setData] = useState({
    category: "",
    type: "",
    link: "",
    subject: "",
    country: "",
    last_update: "",
    extract_on: null,
    comment: "",
    idm_working: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !data.category.length > 0 ||
      !data.country.length > 0 ||
      !data.link.length > 0 ||
      !data.subject.length > 0 ||
      !data.type.length > 0 ||
      !data.idm_working.length > 0
    ) {
      alert("fill all the data fields");
      return;
    }

    const response = await postData("http://localhost:8080/api/createNotMail", data);
    console.log(response)
    if (!response) alert("error while creating links");

    navigate("/email/notmail");
  };

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
          onClick={handleSubmit}
          className="w-24 p-2 mb-4 text-gray-100 rounded bg-sky-600"
        >
          Submit
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 p-4">
        <div>
          <div>Category</div>
          <select
            name="category"
            value={data.category}
            onChange={handleChange}
            className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
          >
            <option value="">--Category--</option>
            <option value="Multi">Multi</option>
            <option value="Medical">Medical</option>
          </select>
        </div>
        <div>
          <div>Type</div>
          <select
            name="type"
            value={data.type}
            onChange={handleChange}
            className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
          >
            <option value="">--Type--</option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
            <option value="Typing">Typing</option>
          </select>
        </div>
        <div>
          <div>Link</div>
          <input
            name="link"
            value={data.link}
            onChange={handleChange}
            className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600`}
            type="text"
          ></input>
        </div>
        <div>
          <div>Subject</div>
          <input
            name="subject"
            value={data.subject}
            onChange={handleChange}
            className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600`}
            type="text"
          ></input>
        </div>
        <div>
          <div>Country*</div>
          <input
            name="country"
            value={data.country}
            onChange={handleChange}
            className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600`}
            type="text"
          ></input>
        </div>
        <div>
          <div>Last Update</div>
          <input
            name="last_update"
            value={data.last_update}
            onChange={handleChange}
            className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600`}
            type="text"
          ></input>
        </div>
        <div>
          <div>Extract On</div>
          <input
            name="extract_on"
            onChange={handleChange}
            className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600`}
            type="date"
          ></input>
        </div>
        <div>
          <div>Comment</div>
          <input
            value={data.comment}
            name="comment"
            onChange={handleChange}
            className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600`}
            type="text"
          ></input>
        </div>
        <div>
          <div>IDM Working</div>
          <select
            value={data.idm_working}
            name="idm_working"
            onChange={handleChange}
            className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
          >
            <option value="">--IDM Working--</option>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default MailLinksForm;

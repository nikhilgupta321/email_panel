import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../helper/fetchData";

const Maillinks = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetchData("http://localhost:8080/api/maillinks");
      setLists(res.obj2);
    })();
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block  min-w-full py-2 sm:px-6 lg:px-8">
          <div className="bar-nav flex flex-col-1">
            <div className="mx-2">
              <Link
                to="/email/mailform"
                type="submit"
                className="uppercase px-6 py-2 text-white bg-slate-500 rounded"
              >
                Add New
              </Link>
            </div>
            <div className="mx-2">
              {" "}
              <button
                type="submit"
                className="uppercase px-6 py-2 text-white bg-blue-500 rounded"
              >
                All Mails
              </button>
            </div>
            <div className="mx-2">
              <button
                type="submit"
                className="uppercase px-6 py-2 text-white bg-slate-500 rounded"
              >
                Working
              </button>
            </div>
            <div className="mx-2">
              <button
                type="submit"
                className="uppercase px-6 py-2 text-white bg-slate-500 rounded"
              >
                Communication
              </button>
            </div>
            <div className="mx-2">
              <button
                type="submit"
                className="uppercase px-6 py-2 text-white bg-slate-500 rounded"
              >
                Block
              </button>
            </div>

            <div className="mx-2">
              {" "}
              <button
                type="submit"
                className="uppercase px-6 py-2 text-white bg-slate-500 rounded"
              >
                Unblock
              </button>{" "}
            </div>
            <div className="mx-2">
              <button className="uppercase px-6 py-2 text-white bg-slate-500 rounded">
                Group-1
              </button>
            </div>
            <div className="mx-2">
              <button className="uppercase px-6 py-2 text-white bg-slate-500 rounded">
                Group-2
              </button>
            </div>
            <div className="mx-2">
              <button className="uppercase px-6 py-2 text-white bg-slate-500 rounded">
                Group-3
              </button>
            </div>
            <div className="mx-2">
              <button className="uppercase px-6 py-2 text-white bg-slate-500 rounded">
                Group-4
              </button>
            </div>
            <div className="mx-2">
              <button className="uppercase px-6 py-2 text-white bg-slate-500 rounded">
                Group-5
              </button>
            </div>
            <div className="mx-2">
              <button className="uppercase px-6 py-2 text-white bg-slate-500 rounded">
                Group-6
              </button>
            </div>
          </div>
          <table className="mt-2 min-w-full border text-left text-sm font-light dark:border-neutral-500">
            <thead className="border-b font-medium dark:border-neutral-500">
              <tr>
                <th
                  scope="col"
                  className="border-r px-6 py-4 dark:border-neutral-500"
                >
                  S.No
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4  dark:border-neutral-500"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4  dark:border-neutral-500"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4 dark:border-neutral-500"
                >
                  Password
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4 dark:border-neutral-500"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4 dark:border-neutral-500"
                >
                  Add Group
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4 dark:border-neutral-500"
                >
                  Mails Quantity
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4 dark:border-neutral-500"
                >
                  Communication Date
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4 dark:border-neutral-500"
                >
                  Communication Date2
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4 dark:border-neutral-500"
                >
                  Communication Date3
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4 dark:border-neutral-500"
                >
                  Communication Date4
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4 dark:border-neutral-500"
                >
                  Created By
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4 dark:border-neutral-500"
                >
                  Created On
                </th>
              </tr>
            </thead>
            <tbody>
              {lists.length > 0 &&
                lists.map((list) => (
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      {list.no}
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      {list.name}
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      {list.email}
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      {list.password}
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <select
                        className={`w-auto border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
                      >
                        <option value="Working">Working</option>
                        <option value="Communication">Communication</option>
                        <option value="Block">Block</option>
                        <option value="Unblock">Unblock</option>
                      </select>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <select
                        className={`w-auto border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
                      >
                        <option value="Add Group">Add Group</option>
                        <option value="Group 1">Group 1</option>
                        <option value="Group 2">Group 2</option>
                        <option value="Group 3">Group3</option>
                        <option value="Group 4">Group4</option>
                        <option value="Group 5">Group5</option>
                        <option value="Group 6">Group6</option>
                      </select>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      {list.createdBy}
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      {list.createOn}
                    </td>
                  </tr>
                ))}
              {/* <tr class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                  2
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                 Research Journal
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                research.manuscript@gmail.com
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                hellorohini77
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <select
                className={`w-auto border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
              >
                <option value="Working">Working</option>
                <option value="Communication">Communication</option>
                <option value="Block">Block</option>
                <option value="Unblock">Unblock</option>
              </select>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <select
                className={`w-auto border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
              >
                <option value="Add Group">Add Group</option>
                <option value="Group 1">Group 1</option>
                <option value="Group 2">Group 2</option>
                <option value="Group 3">Group3</option>
                <option value="Group 4">Group4</option>
                <option value="Group 5">Group5</option>
                <option value="Group 6">Group6</option>
              </select>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                 Sourabh
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                05/02/23
                </td>
              </tr>
              <tr class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                  3
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                 Research Journal
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                research.manuscript@gmail.com
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                hellorohini77
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <select
                className={`w-auto border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
              >
                <option value="Working">Working</option>
                <option value="Communication">Communication</option>
                <option value="Block">Block</option>
                <option value="Unblock">Unblock</option>
              </select>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <select
                className={`w-auto border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
              >
                <option value="Add Group">Add Group</option>
                <option value="Group 1">Group 1</option>
                <option value="Group 2">Group 2</option>
                <option value="Group 3">Group3</option>
                <option value="Group 4">Group4</option>
                <option value="Group 5">Group5</option>
                <option value="Group 6">Group6</option>
              </select>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                 Sourabh
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                05/02/23
                </td>
              </tr>
              <tr class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                  4
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                 Research Journal
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                research.manuscript@gmail.com
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                hellorohini77
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <select
                className={`w-auto border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
              >
                <option value="Working">Working</option>
                <option value="Communication">Communication</option>
                <option value="Block">Block</option>
                <option value="Unblock">Unblock</option>
              </select>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <select
                className={`w-auto border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
              >
                <option value="Add Group">Add Group</option>
                <option value="Group 1">Group 1</option>
                <option value="Group 2">Group 2</option>
                <option value="Group 3">Group3</option>
                <option value="Group 4">Group4</option>
                <option value="Group 5">Group5</option>
                <option value="Group 6">Group6</option>
              </select>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                 Sourabh
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                05/02/23
                </td>
              </tr>
              <tr class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                  5
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                 Research Journal
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                research.manuscript@gmail.com
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                hellorohini77
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <select
                className={`w-auto border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
              >
                <option value="Working">Working</option>
                <option value="Communication">Communication</option>
                <option value="Block">Block</option>
                <option value="Unblock">Unblock</option>
              </select>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <select
                className={`w-auto border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
              >
                <option value="Add Group">Add Group</option>
                <option value="Group 1">Group 1</option>
                <option value="Group 2">Group 2</option>
                <option value="Group 3">Group3</option>
                <option value="Group 4">Group4</option>
                <option value="Group 5">Group5</option>
                <option value="Group 6">Group6</option>
              </select>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                 Sourabh
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                05/02/23
                </td>
              </tr>
              <tr class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                  6
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                 Research Journal
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                research.manuscript@gmail.com
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                hellorohini77
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <select
                className={`w-auto border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
              >
                <option value="Working">Working</option>
                <option value="Communication">Communication</option>
                <option value="Block">Block</option>
                <option value="Unblock">Unblock</option>
              </select>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <select
                className={`w-auto border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
              >
                <option value="Add Group">Add Group</option>
                <option value="Group 1">Group 1</option>
                <option value="Group 2">Group 2</option>
                <option value="Group 3">Group3</option>
                <option value="Group 4">Group4</option>
                <option value="Group 5">Group5</option>
                <option value="Group 6">Group6</option>
              </select>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                 Sourabh
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                05/02/23
                </td>
              </tr>
              <tr class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                  7
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                 Research Journal
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                research.manuscript@gmail.com
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                hellorohini77
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <select
                className={`w-auto border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
              >
                <option value="Working">Working</option>
                <option value="Communication">Communication</option>
                <option value="Block">Block</option>
                <option value="Unblock">Unblock</option>
              </select>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <select
                className={`w-auto border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
              >
                <option value="Add Group">Add Group</option>
                <option value="Group 1">Group 1</option>
                <option value="Group 2">Group 2</option>
                <option value="Group 3">Group3</option>
                <option value="Group 4">Group4</option>
                <option value="Group 5">Group5</option>
                <option value="Group 6">Group6</option>
              </select>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                 Sourabh
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                05/02/23
                </td>
              </tr>
              <tr class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                  8
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                 Research Journal
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                research.manuscript@gmail.com
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                hellorohini77
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <select
                className={`w-auto border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
              >
                <option value="Working">Working</option>
                <option value="Communication">Communication</option>
                <option value="Block">Block</option>
                <option value="Unblock">Unblock</option>
              </select>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <select
                className={`w-auto border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
              >
                <option value="Add Group">Add Group</option>
                <option value="Group 1">Group 1</option>
                <option value="Group 2">Group 2</option>
                <option value="Group 3">Group3</option>
                <option value="Group 4">Group4</option>
                <option value="Group 5">Group5</option>
                <option value="Group 6">Group6</option>
              </select>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                 Sourabh
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                05/02/23
                </td>
              </tr>
              <tr class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                  9
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                 Research Journal
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                research.manuscript@gmail.com
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                hellorohini77
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <select
                className={`w-auto border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
              >
                <option value="Working">Working</option>
                <option value="Communication">Communication</option>
                <option value="Block">Block</option>
                <option value="Unblock">Unblock</option>
              </select>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <select
                className={`w-auto border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
              >
                <option value="Add Group">Add Group</option>
                <option value="Group 1">Group 1</option>
                <option value="Group 2">Group 2</option>
                <option value="Group 3">Group3</option>
                <option value="Group 4">Group4</option>
                <option value="Group 5">Group5</option>
                <option value="Group 6">Group6</option>
              </select>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                 Sourabh
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                05/02/23
                </td>
              </tr>
              <tr class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                  10
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                 Research Journal
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                research.manuscript@gmail.com
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                hellorohini77
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <select
                className={`w-auto border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
              >
                <option value="Working">Working</option>
                <option value="Communication">Communication</option>
                <option value="Block">Block</option>
                <option value="Unblock">Unblock</option>
              </select>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <select
                className={`w-auto border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
              >
                <option value="Add Group">Add Group</option>
                <option value="Group 1">Group 1</option>
                <option value="Group 2">Group 2</option>
                <option value="Group 3">Group3</option>
                <option value="Group 4">Group4</option>
                <option value="Group 5">Group5</option>
                <option value="Group 6">Group6</option>
              </select>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                 Sourabh
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                05/02/23
                </td>
              </tr>
              <tr class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                  11
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                 Research Journal
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                research.manuscript@gmail.com
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                hellorohini77
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <select
                className={`w-auto border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
              >
                <option value="Working">Working</option>
                <option value="Communication">Communication</option>
                <option value="Block">Block</option>
                <option value="Unblock">Unblock</option>
              </select>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <select
                className={`w-auto border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
              >
                <option value="Add Group">Add Group</option>
                <option value="Group 1">Group 1</option>
                <option value="Group 2">Group 2</option>
                <option value="Group 3">Group3</option>
                <option value="Group 4">Group4</option>
                <option value="Group 5">Group5</option>
                <option value="Group 6">Group6</option>
              </select>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                 Sourabh
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                05/02/23
                </td>
              </tr>
              <tr class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                  12
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                 Research Journal
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                research.manuscript@gmail.com
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                hellorohini77
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <select
                className={`w-auto border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
              >
                <option value="Working">Working</option>
                <option value="Communication">Communication</option>
                <option value="Block">Block</option>
                <option value="Unblock">Unblock</option>
              </select>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <select
                className={`w-auto border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
              >
                <option value="Add Group">Add Group</option>
                <option value="Group 1">Group 1</option>
                <option value="Group 2">Group 2</option>
                <option value="Group 3">Group3</option>
                <option value="Group 4">Group4</option>
                <option value="Group 5">Group5</option>
                <option value="Group 6">Group6</option>
              </select>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  ></input>
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                 Sourabh
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                05/02/23
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Maillinks;

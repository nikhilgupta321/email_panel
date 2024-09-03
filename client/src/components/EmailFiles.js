import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const EmailFiles = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation=useNavigate();

  const getList = async () => {
    try {
      setLoading(true);
      const response = await axios
        .get(`http://localhost:8080/api/emailFiles`)
        .then((data) => {
          console.log(data.data.response);
          setList(data.data.response);
        });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getList();
  }, []);
  return (
    <div>
        <div>
            <button
            onClick={()=>{navigation('/email/emailfiles/add')}}
            className="px-[1.2vw] text-white py-[0.6vw] bg-blue-500 rounded-md mt-[0.5vw] ml-[1vw]">
                ADD NEW
            </button>
        </div>
      <table className="mt-2 min-w-full border text-left text-sm font-light ">
        <thead className="border font-medium text-lg">
          <tr>
            <th scope="col" className="border-r px-6 py-4 ">
              S.No
            </th>
            <th scope="col" className="border-r px-6 py-4 ">
              Country
            </th>
            <th scope="col" className="border-r px-6 py-4">
              State
            </th>
            <th scope="col" className="border-r px-6 py-4">
              File
            </th>
            <th scope="col" className="border-r px-6 py-4">
              Created By
            </th>
            <th scope="col" className="border-r px-6 py-4">
              Created On
            </th>
          </tr>
        </thead>
        <tbody>
          <div>
            {loading && <div className="text-center text-2xl ">Loading</div>}
          </div>
          {list.length > 0 &&
            !loading &&
            list.map((list) => (
              <tr class="border-b dark:border-neutral-500 text-md">
                <td class="whitespace-nowrap border-r px-6 py-4 font-medium ">
                  {list.id}
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 ">
                  {" "}
                  {list.country}
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 ">
                  {" "}
                  {list.state}
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 ">
                  {" "}
                  {list.file}
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 ">
                  {" "}
                  {list.created_at}
                </td>
                <td class="whitespace-nowrap  border-r px-6 py-4 ">
                  {" "}
                  {list.created_by}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmailFiles;

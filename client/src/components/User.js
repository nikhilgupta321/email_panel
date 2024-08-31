import React, {useState,useEffect}  from "react";
import { fetchData } from "../helper/fetchData";

const User = () => {
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
            <div className="flex mx-2">
              <button
                type="submit"
                className="uppercase px-6 py-2 text-white bg-slate-500 rounded"
              >
                Sent
              </button>
              <div className="mx-2">
                <button
                  type="submit"
                  className="uppercase px-6 py-2 text-white bg-slate-500 rounded"
                >
                  Not Sent
                </button>
              </div>
              <div className="mx-2">
                {" "}
                <select
                  className={`w-auto border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
                >
                  <option value="" selected>
                    Select subject
                  </option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Agronomy">Agronomy</option>
                  <option value="Anatomy">Anatomy</option>
                  <option value="andrology">Andrology</option>
                  <option value="Anesthesiology">Anesthesiology</option>
                  <option value="Ayurved">Ayurved</option>
                  <option value="Biochemistry">Biochemistry</option>
                  <option value="Biology">Biology</option>
                  <option value="Botany">Botany</option>
                  <option value="Business Management">
                    Business Management
                  </option>
                  <option value="Cancer">Cancer</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Chemical">Chemical</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Commerce">Commerce</option>
                  <option value="community medicine">Community medicine</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Dental">Dental</option>
                  <option value="Dermatology">Dermatology</option>
                  <option value="Diabetes">Diabetes</option>
                  <option value="Economics">Economics</option>
                  <option value="Education">Education</option>
                  <option value="Endocrinology">Endocrinology</option>
                  <option value="Engineering">Engineering</option>
                  <option value="English">English</option>
                  <option value="Entomology">Entomology</option>
                  <option value="Ecology">Ecology</option>
                  <option value="Environment">Environment</option>
                  <option value="Fauna">Fauna</option>
                  <option value="Finance">Finance</option>
                  <option value="Fish">Fish</option>
                  <option value="Flora">Flora</option>
                  <option value="Food">Food</option>
                  <option value="Forestry">Forestry</option>
                  <option value="Gastroenterology">Gastroenterology</option>
                  <option value="Geography">Geography</option>
                  <option value="Geology">Geology</option>
                  <option value="Gynaecology">Gynaecology</option>
                  <option value="Hematology">Hematology</option>
                  <option value="Hepatology">Hepatology</option>
                  <option value="Hindi">Hindi</option>
                  <option value="History">History</option>
                  <option value="hiv aids">Hiv aids</option>
                  <option value="home science">Home science</option>
                  <option value="Horticulture">Horticulture</option>
                  <option value="Immunology">Immunology</option>
                  <option value="Law">Law</option>
                  <option value="Management">Management</option>
                  <option value="mass communication">Mass communication</option>
                  <option value="Math">Math</option>
                  <option value="Medical">Medical</option>
                  <option value="medicine">Medicine</option>
                  <option value="Mosquito">Mosquito</option>
                  <option value="multidisciplinary ">Multidisciplinary </option>
                  <option value="Music">Music</option>
                  <option value="naas">Naas</option>
                  <option value="Nephrology">Nephrology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Nursing">Nursing</option>
                  <option value="Ophthalmology">Ophthalmology</option>
                  <option value="Orthopaedics">Orthopaedics</option>
                  <option value="Otology">Otology</option>
                  <option value="Parasitology">Parasitology</option>
                  <option value="Pathology">Pathology</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Pediatrics Nursing">Pediatrics Nursing</option>
                  <option value="Pharmacognosy">Pharmacognosy</option>
                  <option value="Pharmacy">Pharmacy</option>
                  <option value="Physical Education">Physical Education</option>
                  <option value="Physics">Physics</option>
                  <option value="Physiology">Physiology</option>
                  <option value="Physiotherapy">Physiotherapy</option>
                  <option value="Phyto">Phyto</option>
                  <option value="Plant">Plant</option>
                  <option value="Political">Political</option>
                  <option value="Preventive Medicine">
                    Preventive Medicine
                  </option>
                  <option value="Psychology">Psychology</option>
                  <option value="Pulmonary">Pulmonary</option>
                  <option value="pulmonology">Pulmonology</option>
                  <option value="radiology">Radiology</option>
                  <option value="rheumatology">Rheumatology</option>
                  <option value="Science">Science</option>
                  <option value="Scientific">Scientific</option>
                  <option value="Social Science">Social Science</option>
                  <option value="Soil">Soil</option>
                  <option value="Sports">Sports</option>
                  <option value="Surgery">Surgery</option>
                  <option value="tourism and hotal management">
                    Tourism and hotal management
                  </option>
                  <option value="toxicology">Toxicology</option>
                  <option value="Urology">Urology</option>
                  <option value="Venereology">Venereology</option>
                  <option value="Veterinary">Veterinary</option>
                  <option value="yoga">Yoga</option>
                  <option value="Zoology">Zoology</option>
                </select>{" "}
              </div>
              <div className="mx-2">
                <input
                  className="shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                  placeholder="From"
                ></input>
              </div>
              <div className="mx-2">
                <input
                  className="shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                  placeholder="To"
                ></input>
              </div>
              <div className="mx-2">
                <button
                  type="submit"
                  className="uppercase px-6 py-2 text-white bg-blue-500 rounded"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <table className="mt-4 min-w-full border text-left text-sm font-light dark:border-neutral-500">
            <thead className="border-b font-medium dark:border-neutral-500">
              <tr>
                <th
                  scope="col"
                  className="border-r p-2  dark:border-neutral-500"
                >
                  S.No
                </th>
                <th
                  scope="col"
                  className="border-r p-2  dark:border-neutral-500"
                >
                  Subject
                </th>
                <th
                  scope="col"
                  className="border-r p-2  dark:border-neutral-500"
                >
                  Country
                </th>
                <th
                  scope="col"
                  className="border-r p-2  dark:border-neutral-500"
                >
                  Mail Type
                </th>
                <th
                  scope="col"
                  className="border-r p-2  dark:border-neutral-500"
                >
                  Mail Count
                </th>
                <th
                  scope="col"
                  className="border-r p-2  dark:border-neutral-500"
                >
                  Journal
                </th>
                <th
                  scope="col"
                  className="border-r p-2  dark:border-neutral-500"
                >
                  Sent With
                </th>
                <th
                  scope="col"
                  className="border-r p-2  dark:border-neutral-500"
                >
                  Sent On
                </th>
                <th
                  scope="col"
                  className="border-r p-2 dark:border-neutral-500"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="border-r p-2  dark:border-neutral-500"
                >
                  Export
                </th>
                <th
                  scope="col"
                  className="border-r p-2  dark:border-neutral-500"
                >
                  Add By
                </th>
                <th
                  scope="col"
                  className="border-r  p-2 dark:border-neutral-500 bg-blue-500"
                >
                  Add On
                </th>
              </tr>
            </thead>
            <tbody>
              {lists.length > 0 &&
                lists.map((list) => (
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap border-r p-2 font-medium dark:border-neutral-500">
                      1
                    </td>
                    <td className="whitespace-nowrap border-r p-2 font-medium dark:border-neutral-500">
                      Social Science
                    </td>
                    <td className="whitespace-nowrap border-r p-2 font-medium dark:border-neutral-500">
                      India
                    </td>
                    <td className="whitespace-nowrap border-r p-2 font-medium dark:border-neutral-500">
                      Panel
                    </td>
                    <td className="whitespace-nowrap border-r p-2 font-medium dark:border-neutral-500">
                      1996
                    </td>
                    <td className="whitespace-nowrap border-r p-2 font-medium dark:border-neutral-500">
                      <button
                        type="submit"
                        className="text-white bg-blue-400  rounded"
                      >
                        show
                      </button>
                    </td>
                    <td className="whitespace-nowrap border-r p-2 font-medium dark:border-neutral-500">
                      <button
                        type="submit"
                        className="text-white bg-blue-400  rounded"
                      >
                        show
                      </button>
                    </td>
                    <td className="whitespace-nowrap border- p-2r font-medium dark:border-neutral-500">
                      25-Sep-23, 03:30 PM
                    </td>
                    <td className="whitespace-nowrap border-r p-2 font-medium dark:border-neutral-500">
                      <select className="w-auto border- focus:outline-emerald-600">
                        <option value="">Not Sent</option>
                        <option value=""> Sent</option>
                      </select>
                    </td>
                    <td className="whitespace-nowrap border-r p-2 font-medium dark:border-neutral-500">
                      N/A
                    </td>
                    <td className="whitespace-nowrap border-r p-2 font-medium dark:border-neutral-500">
                      Nitin
                    </td>
                    <td className="whitespace-nowrap border-r p-2 font-medium dark:border-neutral-500">
                      25-Sept-2023
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default User;

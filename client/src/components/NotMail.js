import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../helper/fetchData";

const NotMail = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetchData("http://localhost:8080/api/test");
      console.log("email =  ", res);
      setLists(res.object);
    })();
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block  min-w-full py-2 sm:px-6 lg:px-8">
          <div className="bar-nav flex flex-col-1">
            <div className="mx-2">
              <Link
                to="/email/maillinksform"
                type="submit"
                className="uppercase px-6 py-2 text-white bg-slate-500 rounded"
              >
                Add New
              </Link>
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
                <option value="Business Management">Business Management</option>
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
                <option value="Preventive Medicine">Preventive Medicine</option>
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
            <div className="mx-1">
              {" "}
              <select
                className={`w-auto border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
              >
                <option value="Select Category">Select Category</option>
                <option value="Multi">Multi</option>
                <option value="Medical">Medical</option>
              </select>{" "}
            </div>
            <div className="mx-1">
              {" "}
              <select
                className={`w-auto border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
              >
                <option value="Select Type">Select Type</option>
                <option value="Normal">Normal</option>
                <option value="High">High</option>
                <option value="Typing">Typing</option>
              </select>{" "}
            </div>
            <div className="mx-1">
              {" "}
              <select
                className={`w-auto border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
              >
                <option value="">Select Country</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">
                  Bosnia and Herzegovina
                </option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">
                  British Indian Ocean Territory
                </option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">
                  Central African Republic
                </option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos (Keeling) Islands">
                  Cocos (Keeling) Islands
                </option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Congo, the Democratic Republic of the">
                  Congo, the Democratic Republic of the
                </option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote D'Ivoire">Cote D'Ivoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands (Malvinas)">
                  Falkland Islands (Malvinas)
                </option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">
                  French Southern Territories
                </option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-Bissau">Guinea-Bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard Island and Mcdonald Islands">
                  Heard Island and Mcdonald Islands
                </option>
                <option value="Holy See (Vatican City State)">
                  Holy See (Vatican City State)
                </option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran, Islamic Republic of">
                  Iran, Islamic Republic of
                </option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea, Democratic People's Republic of">
                  Korea, Democratic People's Republic of
                </option>
                <option value="Korea, Republic of">Korea, Republic of</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">
                  Lao People's Democratic Republic
                </option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">
                  Libyan Arab Jamahiriya
                </option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
                <option value="Macedonia, the Former Yugoslav Republic of">
                  Macedonia, the Former Yugoslav Republic of
                </option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia, Federated States of">
                  Micronesia, Federated States of
                </option>
                <option value="Moldova, Republic of">
                  Moldova, Republic of
                </option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">
                  Netherlands Antilles
                </option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Northern Mariana Islands">
                  Northern Mariana Islands
                </option>
                <option value="Norway">Norway</option>
                <option value="Oceania">Oceania</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestinian Territory, Occupied">
                  Palestinian Territory, Occupied
                </option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russia">Russia</option>
                <option value="Russian Federation">Russian Federation</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Helena">Saint Helena</option>
                <option value="Saint Kitts and Nevis">
                  Saint Kitts and Nevis
                </option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Pierre and Miquelon">
                  Saint Pierre and Miquelon
                </option>
                <option value="Saint Vincent and the Grenadines">
                  Saint Vincent and the Grenadines
                </option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">
                  Sao Tome and Principe
                </option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia and Montenegro">
                  Serbia and Montenegro
                </option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia and the South Sandwich Islands">
                  South Georgia and the South Sandwich Islands
                </option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard and Jan Mayen">
                  Svalbard and Jan Mayen
                </option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syrian Arab Republic">
                  Syrian Arab Republic
                </option>
                <option value="Taiwan, Province of China">
                  Taiwan, Province of China
                </option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania, United Republic of">
                  Tanzania, United Republic of
                </option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-Leste">Timor-Leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos Islands">
                  Turks and Caicos Islands
                </option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">
                  United Arab Emirates
                </option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Islands">
                  United States Minor Outlying Islands
                </option>
                <option value="United States of America">
                  United States of America
                </option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Viet Nam">Viet Nam</option>
                <option value="Virgin Islands, British">
                  Virgin Islands, British
                </option>
                <option value="Virgin Islands, U.s.">
                  Virgin Islands, U.s.
                </option>
                <option value="Wallis and Futuna">Wallis and Futuna</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>{" "}
              </select>{" "}
            </div>

            <div className="mx-1">
              {" "}
              <button
                type="submit"
                className="uppercase px-6 py-2 text-white bg-blue-500 rounded"
              >
                Search
              </button>{" "}
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
                  Category
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4  dark:border-neutral-500"
                >
                  Type
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4 dark:border-neutral-500"
                >
                  Subject
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4 dark:border-neutral-500"
                >
                  Country
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4 dark:border-neutral-500"
                >
                  Link
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4 dark:border-neutral-500"
                >
                  Last Update
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4 dark:border-neutral-500"
                >
                  Update On
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4 dark:border-neutral-500"
                >
                  Done
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4 dark:border-neutral-500"
                >
                  Comment
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4 dark:border-neutral-500"
                >
                  IDM Working
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4 dark:border-neutral-500"
                >
                  Created By
                </th>
                <th
                  scope="col"
                  className="border-r px-6 py-4 bg-blue-500 text-white dark:border-neutral-500"
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
                      {list.Category}
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      {list.Type}
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      {list.Subject}
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Russia
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      https://www.vniigenjournal.ru/jour/issue/archive
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      unknown
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </td>

                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <select
                        className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
                      >
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Nitin
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      20-JUL-23
                    </td>
                  </tr>
                ))}
              {/* <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      2
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Multi
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Normal
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Management
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Russia
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      https://www.acjournal.ru/jour/issue/archive
                    </td>
                  
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                     unknown
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </td>
                 
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <select
                        className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
                      >
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Nitin
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      20-JUL-23
                    </td>
                  </tr>
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      3
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Multi
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Normal
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Management
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Russia
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      https://www.acjournal.ru/jour/issue/archive
                    </td>
                  
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      unknown
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </td>
                
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <select
                        className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
                      >
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Nitin
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      20-JUL-23
                    </td>
                  </tr>
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      4
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Multi
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Normal
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Management
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Russia
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      https://www.acjournal.ru/jour/issue/archive
                    </td>
                  
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                     unknown
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </td>
                
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <select
                        className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
                      >
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Nitin
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      20-JUL-23
                    </td>
                  </tr>
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      6
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Multi
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Normal
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Management
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Russia
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      https://www.acjournal.ru/jour/issue/archive
                    </td>
                 
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                     unknown
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </td>
                
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <select
                        className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
                      >
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Nitin
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      20-JUL-23
                    </td>
                  </tr>
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      2
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Multi
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Normal
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Management
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Russia
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      https://www.acjournal.ru/jour/issue/archive
                    </td>
                  
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      unknown
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </td>
               
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <select
                        className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
                      >
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Nitin
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      20-JUL-23
                    </td>
                  </tr>
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      7
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Multi
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Normal
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Management
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Russia
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      https://www.acjournal.ru/jour/issue/archive
                    </td>
                 
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      unknown
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </td>
              
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <select
                        className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
                      >
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Nitin
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      20-JUL-23
                    </td>
                  </tr>
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      8
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Multi
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Normal
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Management
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Russia
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      https://www.acjournal.ru/jour/issue/archive
                    </td>
                  
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                     unknown
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </td>
               
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <select
                        className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
                      >
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Nitin
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      20-JUL-23
                    </td>
                  </tr>
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      9
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Multi
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Normal
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Management
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Russia
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      https://www.acjournal.ru/jour/issue/archive
                    </td>
               
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                     unknown
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </td>
              
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <select
                        className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
                      >
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Nitin
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      20-JUL-23
                    </td>
                  </tr>
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      10
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Multi
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Normal
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Management
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Russia
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      https://www.acjournal.ru/jour/issue/archive
                    </td>
                 
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      unknown
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </td>
              
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <select
                        className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
                      >
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Nitin
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      20-JUL-23
                    </td>
                  </tr>
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      11
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Multi
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Normal
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Management
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Russia
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      https://www.acjournal.ru/jour/issue/archive
                    </td>
                  
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                     unknown
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </td>
                
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <select
                        className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
                      >
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Nitin
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      20-JUL-23
                    </td>
                  </tr>
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      12
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Multi
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Normal
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Management
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Russia
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      https://www.acjournal.ru/jour/issue/archive
                    </td>
                  
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      unknown
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </td>
              
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <select
                        className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
                      >
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Nitin
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      20-JUL-23
                    </td>
                  </tr>
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      13
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Multi
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Normal
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Management
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Russia
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      https://www.acjournal.ru/jour/issue/archive
                    </td>
                 
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                     unknown
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </td>
              
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <select
                        className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
                      >
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Nitin
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      20-JUL-23
                    </td>
                  </tr>
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      14
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Multi
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Normal
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Management
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Russia
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      https://www.acjournal.ru/jour/issue/archive
                    </td>
                  
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      unknown
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </td>
            
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <select
                        className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
                      >
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Nitin
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      20-JUL-23
                    </td>
                  </tr>
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                      15
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Multi
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Normal
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Management
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Russia
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      https://www.acjournal.ru/jour/issue/archive
                    </td>
                 
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                    unknown
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </td>
            
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                      ></input>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      <select
                        className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 `}
                      >
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      Nitin
                    </td>
                    <td class="whitespace-nowrap  border-r px-6 py-4 dark:border-neutral-500">
                      20-JUL-23
                    </td>
                  </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NotMail;

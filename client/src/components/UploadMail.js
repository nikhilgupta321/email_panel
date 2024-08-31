import React from 'react'
import { Link } from 'react-router-dom'

const MyForm = () => {
  return (
    <div>
          <div className="flex gap-4 p-4">
        <Link to="/email" className="p-2 mb-4 text-center rounded w-16 bg-gray-200 text-gray-500"><i className="fa fa-arrow-left" aria-hidden="true" /></Link>
        <button 
        // onClick={handleSubmit}
         className="p-2 mb-4 rounded w-24 bg-sky-600 text-gray-100">Submit</button>
      </div>
      <div className="grid grid-cols-1 gap-4 p-4">
        <div><div> Subject</div>
          <select className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 `}>
            <option value="" selected>Select subject</option>
            <option value="Agriculture" >Agriculture</option><option value="Agronomy" >Agronomy</option><option value="Anatomy" >Anatomy</option><option value="andrology" >Andrology</option><option value="Anesthesiology" >Anesthesiology</option><option value="Ayurved" >Ayurved</option><option value="Biochemistry" >Biochemistry</option><option value="Biology" >Biology</option><option value="Botany" >Botany</option><option value="Business Management" >Business Management</option><option value="Cancer" >Cancer</option><option value="Cardiology" >Cardiology</option><option value="Chemical" >Chemical</option><option value="Chemistry" >Chemistry</option><option value="Commerce" >Commerce</option><option value="community medicine" >Community medicine</option><option value="Computer Science" >Computer Science</option><option value="Dental" >Dental</option><option value="Dermatology" >Dermatology</option><option value="Diabetes" >Diabetes</option><option value="Economics" >Economics</option><option value="Education" >Education</option><option value="Endocrinology" >Endocrinology</option><option value="Engineering" >Engineering</option><option value="English" >English</option><option value="Entomology" >Entomology</option><option value="Ecology" >Ecology</option><option value="Environment" >Environment</option><option value="Fauna" >Fauna</option><option value="Finance" >Finance</option><option value="Fish" >Fish</option><option value="Flora" >Flora</option><option value="Food" >Food</option><option value="Forestry" >Forestry</option><option value="Gastroenterology" >Gastroenterology</option><option value="Geography" >Geography</option><option value="Geology" >Geology</option><option value="Gynaecology" >Gynaecology</option><option value="Hematology" >Hematology</option><option value="Hepatology" >Hepatology</option><option value="Hindi" >Hindi</option><option value="History" >History</option><option value="hiv aids" >Hiv aids</option><option value="home science" >Home science</option><option value="Horticulture" >Horticulture</option><option value="Immunology" >Immunology</option><option value="Law" >Law</option><option value="Management" >Management</option><option value="mass communication" >Mass communication</option><option value="Math" >Math</option><option value="Medical" >Medical</option><option value="medicine" >Medicine</option><option value="Mosquito" >Mosquito</option><option value="multidisciplinary " >Multidisciplinary </option><option value="Music" >Music</option><option value="naas" >Naas</option><option value="Nephrology" >Nephrology</option><option value="Neurology" >Neurology</option><option value="Nursing" >Nursing</option><option value="Ophthalmology" >Ophthalmology</option><option value="Orthopaedics" >Orthopaedics</option><option value="Otology" >Otology</option><option value="Parasitology" >Parasitology</option><option value="Pathology" >Pathology</option><option value="Pediatrics" >Pediatrics</option><option value="Pediatrics Nursing" >Pediatrics Nursing</option><option value="Pharmacognosy" >Pharmacognosy</option><option value="Pharmacy" >Pharmacy</option><option value="Physical Education" >Physical Education</option><option value="Physics" >Physics</option><option value="Physiology" >Physiology</option><option value="Physiotherapy" >Physiotherapy</option><option value="Phyto" >Phyto</option><option value="Plant" >Plant</option><option value="Political" >Political</option><option value="Preventive Medicine" >Preventive Medicine</option><option value="Psychology" >Psychology</option><option value="Pulmonary" >Pulmonary</option><option value="pulmonology" >Pulmonology</option><option value="radiology" >Radiology</option><option value="rheumatology" >Rheumatology</option><option value="Science" >Science</option><option value="Scientific" >Scientific</option><option value="Social Science" >Social Science</option><option value="Soil" >Soil</option><option value="Sports" >Sports</option><option value="Surgery" >Surgery</option><option value="tourism and hotal management" >Tourism and hotal management</option><option value="toxicology" >Toxicology</option><option value="Urology" >Urology</option><option value="Venereology" >Venereology</option><option value="Veterinary" >Veterinary</option><option value="yoga" >Yoga</option><option value="Zoology" >Zoology</option>
          </select>
        </div>
        <div><div>Mail Type</div>
          <select className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600 `}>
            <option value="Select Mailtype">Select Mailtype</option>
            <option value="Bulk">Bulk</option>
            <option value="Editor">Editor</option>
            <option value="Panel">Panel</option>
          </select>
        </div>
        <div><div>COUNTRY</div>
          <select className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600`}>
            <option value="India">India</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Egypt">Egypt</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Azerbaijan">Azerbaijan</option>
          </select>
        </div>
        <div><div>EMAIL COUNT</div><input className={`w-full border-2 border-gray-300 p-2 focus:outline-emerald-600`} type="text"></input></div>
        <div>
          <div>EMAIL FILE</div>
          <input type="file" accept="file/*" className={`w-full bg-white border-2 border-gray-300 p-2 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-emerald-600 file:text-gray-100`} />
        </div>
      </div>
    </div>
  )
}

export default MyForm